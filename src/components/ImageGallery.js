import React from 'react'
import styled from 'styled-components';


export const ImageGallery = () => {
  const ImageList= [
    {id:1,src: "./images/img1.jpg"},
    {id:2,src: "./images/img2.jpg"},
    {id:3,src: "./images/img3.jpg"},
    {id:4,src: "./images/img4.jpg"},
    {id:5,src: "./images/img5.jpg"},
    ];
   
  return (
    <div>
       <h1>Image</h1>
        <div style={{maxWidth: '70rem',
  margin: '4rem auto',
  display:'grid',
  gridTemplateColumns:' auto auto auto',
                gridRowGap: '20px',
                padding: '30px'}} >
        {ImageList.map((index)=><img style={{width: '300px', height: '300px',marginBottom:'20px'}}  src={index.src} alt={index.id}/>)}
        </div>
        </div>
   
    

  )
}
