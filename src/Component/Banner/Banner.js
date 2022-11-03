import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import pic1 from '../../img/sl1.jpg'
import pic2 from '../../img/sl2.jpg'
import pic3 from '../../img/sl3.jpg'
import pic4 from '../../img/sl4.jpg'
const Banner = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img style={{ height: "520px" }}
            className="d-block w-100 "

            src={pic1}
            alt="First slide"
          />
          <Carousel.Caption className=''>
            <h5 style={{ fontWeight:"bold" ,color:"red" }}  >DONATE BLOOD SAVE LIFE.</h5>
            <h1 style={{ fontWeight:"bold"  ,color:"red"  }}  class="display-4 font-bold ">DONATE BLOOD<br /> AND INSPIRES OTHERS</h1>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img style={{ height: "520px" }}
            className="d-block w-100"

            src={pic3}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h5 style={{ fontWeight:"bold"  ,color:"red"  }} >DONATE BLOOD SAVE LIFE.</h5>
            <h1 style={{ fontWeight:"bold"  ,color:"red"  }}  class="display-4 font-weight-bold">DONATE BLOOD<br /> AND INSPIRES OTHERS</h1>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img style={{ height: "520px" }}
            className="d-block w-100"

            src={pic4}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5 style={{ fontWeight:"bold"  ,color:"red"  }} >DONATE BLOOD SAVE LIFE.</h5>
            <h1 style={{ fontWeight:"bold"  ,color:"red" }}  class="display-4 font-weight-bold">DONATE BLOOD<br /> AND INSPIRES OTHERS</h1>
          </Carousel.Caption>
        </Carousel.Item>

      </Carousel>

    </div>
  );
};

export default Banner;