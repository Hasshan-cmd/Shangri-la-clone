function Room() {
  return (
    <section id="room">
      <div class="container">
        <h1 class="sub-title">Recommended Room Types</h1>
        <p class="room-ptag">
          Offering striking views of the Indian Ocean, Beira Lake and the city
          beyond, our 500 guest rooms and suites, and 41 serviced apartments are
          tastefully furnished to complement the urban-oceanside location and
          are among the largest in Colombo.
        </p>
      </div>
      <div>
        <div class="swiper room-slider">
          <div class="swiper-wrapper">
            <div class="swiper-slide room-slide">
              <div class="room-slide-img">
                <img src="/room3.jpg" alt="Room" />
              </div>
            </div>

            <div class="swiper-slide room-slide">
              <div class="room-slide-img">
                <img src="/room2.jpg" alt="Room" />
              </div>
              <div class="room-slide-content">
                <h4>Privat Cozy Room in Mudau</h4>
                <p>
                  Offering striking views of the Indian Ocean, Beira Lake and
                  the city beyond, our 500 guest rooms and suites, and 41
                  serviced apartments are tastefully furnished to complement the
                  urban-oceanside location and are among the largest in Colombo.
                </p>
              </div>
            </div>

            <div class="swiper-slide room-slide">
              <div class="room-slide-img">
                <img src="/room1.jpg" alt="Room" />
              </div>
              <div class="room-slide-content"></div>
            </div>

            <div class="swiper-slide room-slide">
              <div class="room-slide-img">
                <img src="/room4.jpg" alt="Room" />
              </div>
              <div class="room-slide-content"></div>
            </div>
          </div>

          <div class="room-slider-control">
            <div class="swiper-button-prev slider-arrow">
              <ion-icon name="arrow-back-outline"></ion-icon>
            </div>
            <div class="swiper-button-next slider-arrow">
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </div>
            <div class="swiper-pagination"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Room;
