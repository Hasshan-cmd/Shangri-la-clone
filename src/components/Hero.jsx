import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

function Hero() {
  return (
    <div className="hero-container">
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={2}
        className="carousel-con"
      >
        <Slider className="slider">
          <Slide index={0} className="slide">
            <img src="/homeImg2.jpg" alt="" class="home-img" />
            <div class="home-details">
              <div class="home-text">
                <h2 class="homeTitle">
                  Enjoy Our Exclusive <br /> Coffee and Cocktails
                </h2>
                <h4 class="homeSubtitle">Enjoy the finest coffee drinks.</h4>
              </div>
            </div>
          </Slide>
          <Slide index={1} className="slide">
            <img src="/homeImg3.jpg" alt="" class="home-img" />
            <div class="home-details">
              <div class="home-text">
                <h2 class="homeTitle">Shangri-La Cares</h2>
                <h4 class="homeSubtitle">Your well-being in our care.</h4>
              </div>
            </div>
          </Slide>
        </Slider>
        <ButtonBack className="control-btn">Back</ButtonBack>
        <ButtonNext className="control-btn">Next</ButtonNext>
      </CarouselProvider>
    </div>
  );
}
export default Hero;
