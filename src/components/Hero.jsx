import React from "react";

function Hero() {
  return (
    <main>
      <section className="left">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p className="tagline">
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="button-container">
          <button>shop now</button>
          <button>category</button>
        </div>
        <p className="available">also available on</p>
        <div className="image-container">
          <img src="/images/flipkart.png" alt="flipkart image" />
          <img src="/images/amazon.png" alt="amazon image" />
        </div>
      </section>
      <section className="right">
        <img src="/images/shoe_image.png" alt="" />
      </section>
    </main>
  );
}

export default Hero;
