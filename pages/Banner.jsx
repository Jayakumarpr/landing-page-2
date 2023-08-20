// import React from "react";
// import { Col, Container, Row } from "react-bootstrap";
// import Carousel from "react-bootstrap/Carousel";

// const Banner = () => {
//   return (
//     <div fluid className="imgm" >
//       <Row className="justify-content-center align-items-center imgd">
//         <Col >
//           <Carousel  >
//             <Carousel.Item interval={2000}>
//               <img
//                 className="d-block w-100"
//                 src={require("../images/ban1.jpg")}
//                 alt="First slide"
//               />
//               <Carousel.Caption>
//                 <h3>Margherita</h3>
//                 <p className="d-none d-sm-block">
//                   Nulla vitae elit libero, a pharetra augue mollis interdum.
//                 </p>
//               </Carousel.Caption>
//             </Carousel.Item>
//             <Carousel.Item interval={2000}>
//               <img
//                 className="d-block w-100"
//                 src={require("../images/ban2.jpg")}
//                 alt="Second slide"
//               />

//               <Carousel.Caption>
//                 <h3>Cheese Pizza</h3>
//                 <p className="d-none d-sm-block">
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                 </p>
//               </Carousel.Caption>
//             </Carousel.Item>
//             <Carousel.Item interval={2000}>
//               <img
//                 className="d-block w-100"
//                 src={require("../images/ban3.jpg")}
//                 alt="Third slide"
//               />

//               <Carousel.Caption>
//                 <h3>Pepporoni</h3>
//                 <p className="d-none d-sm-block">
//                   Praesent commodo cursus magna, vel scelerisque nisl
//                   consectetur.
//                 </p>
//               </Carousel.Caption>
//             </Carousel.Item>
//           </Carousel>
//         </Col>
//       </Row>
//       <div className="text-center">
//         <h2 className="display-5 mt-3">Pizzas for Every Occasion!</h2>
//         <p className="lead text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
//       </div>
//     </div>
//   );
// };

// export default Banner;

import Carousel from 'react-bootstrap/Carousel';


function CarouselFadeExample() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img src={require("../images/ban1.jpg")}   />
        <Carousel.Caption>
          <h3 className='mts'>First slide label</h3>
          <p className='mts'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={require("../images/ban2.jpg")} />
        <Carousel.Caption>
          <h3 className='mts'>Second slide label</h3>
          <p className='mts'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={require("../images/ban3.jpg")} />
        <Carousel.Caption>
          <h3 className='mts'>Third slide label</h3>
          <p className='mts'>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;