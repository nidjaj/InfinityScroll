import React, { useState, useEffect } from 'react';
import { Heading } from './components/Heading';
import { UnsplashImage } from './components/UnsplashImage';
import { Loader } from './components/Loader';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

// Style
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: sans-serif;
  }
`;

const WrapperImages = styled.section`
  max-width: 70rem;
  margin: 4rem auto;
  display: grid;
  grid-gap: 1em;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: 300px;
`;

function App() {
  
  const [images, setImage] = useState([]);

  useEffect(() => {
    fetchImages();
  }, [])

  const fetchImages = (count = 10) => {
    imagesList.map((img)=>(
      setImage((prev)=>[...prev, img])
    ))
  }
  console.log(images);
  const imagesList= [
    {id:1,src: "./images/img1.jpg"},
    {id:2,src: "./images/img2.jpg"},
    {id:3,src: "./images/img3.jpg"},
    {id:4,src: "./images/img4.jpg"},
    {id:5,src: "./images/img5.jpg"},
    {id:6,src: "./images/img1.jpg"},
    {id:7,src: "./images/img2.jpg"},
    {id:8,src: "./images/img3.jpg"},
    {id:9,src: "./images/img4.jpg"},
    {id:10,src: "./images/img5.jpg"}
    ];

  return (
    <div>
      <Heading />
      <GlobalStyle />
      <InfiniteScroll
        dataLength={images.length}
        next={fetchImages}
        hasMore={true}
        loader={<Loader />}
      >
      <WrapperImages>
          {images.map((image,key) => (
            <UnsplashImage url={image.src} key={key} />
          ))}
        </WrapperImages>
     </InfiniteScroll>
    </div>
  );
}

export default App;
