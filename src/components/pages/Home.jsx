import React from "react";
import Carousel from "react-bootstrap/Carousel";
// import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    // <!-- HERO Starts here -->
    // <!-- ---- Hero ---- -->
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://wallpapercave.com/dwp1x/xUnqj9R.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h2 class="text-white">Best Collection</h2>
          <h1 class="text-white py-2 fw-bold">NEW ARRIVALS</h1>
          <a href="login.html" class="btn">
            SHOP NOW
          </a>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://wallpapercave.com/dwp1x/fiaiEvV.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h2 class="text-white">Best Price & Offer</h2>
          <h1 class="text-white py-2 fw-bold">NEW SEASON</h1>
          <a href="login.html" class="btn">
            BUY NOW
          </a>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://wallpapercave.com/dwp1x/p3HjAFU.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h2 class="text-white">Best Time To Buy</h2>
          <h1 class="text-white py-2 fw-bold">SUMMER SALE</h1>
          <a href="login.html" class="btn">
            GET IT NOW
          </a>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
