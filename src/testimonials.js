import React from "react";
import { Carousel } from 'react-bootstrap';
import "./testimonials.css";
import tc from "./images/TechCrunch.png";
import bi from "./images/bizinsider.png";
import mash from "./images/mashable.png";
import tnw from "./images/tnw.png";
export default function Slide(){
  return(
    <>
    <Carousel interval={2000} style={{backgroundColor:"#ef8172"}}>
  <Carousel.Item interval={1000} className="container-fluid"
  >
  <h2 class="testimonial-text">I took their premium plan, and it was so far the best decision of my life. This is due to their excellent service, competitive pricing and customer support.It's throughly refreshing to get such a personal touch.</h2>
          <img class="testimonial-image" src="http://html.thememascot.net/2020/business/zelwn/zelwn-html/images/testimonials/1.jpg" alt="dog-profile"/>
          <em style={{color:"#fff"}}>Christine Eve, New York</em>
  </Carousel.Item>
  <Carousel.Item interval={1000} className="container-fluid"
  >
  <h2 class="testimonial-text">Aiming to provide high quality legal consultancy, support and results for your legal issues.</h2>
          <img class="testimonial-image" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="dog-profile"/>
          <em style={{color:"#fff"}}>David, Sydney</em>
  </Carousel.Item>
  <Carousel.Item interval={1000} className="container-fluid"
  >
  <h2 class="testimonial-text">Using their expertise and experience, Trust law firm documents and builds heir client cases to obtain the best results.</h2>
          <img class="testimonial-image" src="https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg" alt="dog-profile"/>
          <em style={{color:"#fff"}}>Pebbles, London</em>
  </Carousel.Item>
</Carousel>

<section class="colored-section" id="press">
    <img class="press-logo" src={tc} alt="tc-logo"/>
    <img class="press-logo" src={tnw} alt="tnw-logo"/>
    <img class="press-logo" src={bi} alt="biz-insider-logo"/>
    <img class="press-logo" src={mash} alt="mashable-logo"/>

  </section>
    </>
  )
}