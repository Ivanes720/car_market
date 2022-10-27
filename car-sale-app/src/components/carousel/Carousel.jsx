import React from 'react';
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';



const Slideshow = ({...props}) => {
  const images = [
    'images/slide_2.jpg',
    'images/slide_3.jpg',
    'images/slide_4.jpg',
    'images/slide_5.jpg',
    'images/slide_6.jpg',
    'images/slide_7.jpg'
  ];
  let obj = props.photo.map((el) => Object.values(el));
  let obj1 = obj.map((obj) => obj[0]);
  let obj2=obj1.map( (el) => Object.values(el))
  let result=obj2[0].map((obj)=>obj.formats[0] )

    return (
      <div className="slide-container">
        <Zoom scale={0.4}>
          {
            result.map((each, index) => <img key={index} style={{width: "100%"}} src={each} />)
          }
        </Zoom>
      </div>
    )
}
export default Slideshow;