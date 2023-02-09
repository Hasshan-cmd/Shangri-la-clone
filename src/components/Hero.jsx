function Hero() {
  return (
    <div class="home" id="home">
      <div class="home-content">
        <div class="swiper mySwiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img src="/homeImg1.jpg" alt="" class="home-img" />

              <div class="home-details">
                <div class="home-text">
                  <h2 class="homeTitle">Shangri-La Colombo</h2>
                  <h4 class="homeSubtitle">We really like what we do.</h4>
                </div>
                <div class="book">
                  <div class="inner-book">
                    <input type="text" placeholder="arrival" />
                    <input type="text" placeholder="departure" />
                    <input type="text" placeholder="choose room" />
                    <a class="btn-book">Book Now</a>
                  </div>
                </div>
              </div>
            </div>

            <div class="swiper-slide">
              <img src="/homeImg2.jpg" alt="" class="home-img" />

              <div class="home-details">
                <div class="home-text">
                  <h2 class="homeTitle">
                    Enjoy Our Exclusive <br /> Coffee and Cocktails
                  </h2>
                  <h4 class="homeSubtitle">Enjoy the finest coffee drinks.</h4>
                </div>
              </div>
            </div>

            <div class="swiper-slide">
              <img src="/homeImg3.jpg" alt="" class="home-img" />

              <div class="home-details">
                <div class="home-text">
                  <h2 class="homeTitle">Shangri-La Cares</h2>
                  <h4 class="homeSubtitle">Your well-being in our care.</h4>
                </div>
              </div>
            </div>
          </div>

          <div class="swiper-button-next swiper-navBtn"></div>
          <div class="swiper-button-prev swiper-navBtn"></div>
          <div class="swiper-pagination"></div>
        </div>
      </div>
    </div>
  );
}
export default Hero;
