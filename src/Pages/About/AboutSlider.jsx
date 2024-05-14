import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const AboutSlider = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className={`card border lg:card-side bg-base-100 shadow-xl `}>
            <figure>
              <div className="md:w-[500px] h-72 relative overflow-hidden">
                <img
                  src="https://us.images.westend61.de/0001588849pw/aerial-view-of-dhaka-city-centre-with-residential-district-at-sunset-dhaka-bangladesh-AAEF11013.jpg"
                  alt="Album"
                  className="w-full h-full transition-transform"
                />
              </div>
            </figure>
            <div className="p-3 md:w-1/2">
              <h2 className="md:text-2xl text-xl font-semibold">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim,
                voluptatum.
              </h2>
              <p className="md:text-lg text-sm pt-2">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt, nemo tenetur dolor voluptatem nulla vitae consequuntur
                deserunt, dolore enim obcaecati ex? Obcaecati quasi in molestiae
                possimus recusandae voluptatum tempore beatae.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`card border lg:card-side bg-base-100 shadow-xl `}>
            <figure>
              <div className="md:w-[500px] h-72 relative overflow-hidden">
                <img
                  src="https://as2.ftcdn.net/v2/jpg/03/14/80/03/1000_F_314800369_EbZflpJIAiDOA6ssWHd1KMEtOQHI15x6.jpg"
                  alt="Album"
                  className="w-full h-full transition-transform"
                />
              </div>
            </figure>
            <div className="p-3 md:w-1/2">
              <h2 className="md:text-2xl text-xl font-semibold">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim,
                voluptatum.
              </h2>
              <p className="md:text-lg text-sm pt-2">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt, nemo tenetur dolor voluptatem nulla vitae consequuntur
                deserunt, dolore enim obcaecati ex? Obcaecati quasi in molestiae
                possimus recusandae voluptatum tempore beatae.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`card border lg:card-side bg-base-100 shadow-xl `}>
            <figure>
              <div className="md:w-[500px] h-72 relative overflow-hidden">
                <img
                  src="https://ecdn.dhakatribune.net/contents/cache/images/640x359x1/uploads/dten/2021/05/ed-1619830167432.gif"
                  alt="Album"
                  className="w-full h-full transition-transform"
                />
              </div>
            </figure>
            <div className="p-3 md:w-1/2">
              <h2 className="md:text-2xl text-xl font-semibold">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim,
                voluptatum.
              </h2>
              <p className="md:text-lg text-sm pt-2">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt, nemo tenetur dolor voluptatem nulla vitae consequuntur
                deserunt, dolore enim obcaecati ex? Obcaecati quasi in molestiae
                possimus recusandae voluptatum tempore beatae.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`card border lg:card-side bg-base-100 shadow-xl `}>
            <figure>
              <div className="md:w-[500px] h-72 relative overflow-hidden">
                <img
                  src="https://us.images.westend61.de/0001890900pw/aerial-view-of-dhaka-city-with-residential-area-at-sunset-dhaka-bangladesh-AAEF22036.jpg"
                  alt="Album"
                  className="w-full h-full transition-transform"
                />
              </div>
            </figure>
            <div className="p-3 md:w-1/2">
              <h2 className="md:text-2xl text-xl font-semibold">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim,
                voluptatum.
              </h2>
              <p className="md:text-lg text-sm pt-2">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt, nemo tenetur dolor voluptatem nulla vitae consequuntur
                deserunt, dolore enim obcaecati ex? Obcaecati quasi in molestiae
                possimus recusandae voluptatum tempore beatae.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* <div className="carousel w-full ">
        <div id="slide1" className="carousel-item relative w-full">
          <div className={`card border lg:card-side bg-base-100 shadow-xl `}>
            <figure>
              <div className="md:w-[500px] h-72 relative overflow-hidden">
                <img
                  src="https://us.images.westend61.de/0001588849pw/aerial-view-of-dhaka-city-centre-with-residential-district-at-sunset-dhaka-bangladesh-AAEF11013.jpg"
                  alt="Album"
                  className="w-full h-full transition-transform"
                />
              </div>
            </figure>
            <div className="p-3 md:w-1/2">
              <h2 className="md:text-2xl text-xl font-semibold">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim,
                voluptatum.
              </h2>
              <p className="md:text-lg text-sm pt-2">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt, nemo tenetur dolor voluptatem nulla vitae consequuntur
                deserunt, dolore enim obcaecati ex? Obcaecati quasi in molestiae
                possimus recusandae voluptatum tempore beatae.
              </p>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-1">
            <a href="#slide4" className="btn btn-circle btn-outline btn-error">
              <FaArrowLeft />
            </a>
            <a
              href="#slide2"
              className="btn btn-circle btn-outline ml-5 btn-error"
            >
              <FaArrowRight />
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <div className={`card border lg:card-side bg-base-100 shadow-xl `}>
            <figure>
              <div className="md:w-[500px] h-72 relative overflow-hidden">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM_qcWAvyUC9seL2VS-YmrA_RPwaY5G4upPE7Q_QHSlQ&s"
                  alt="Album"
                  className="w-full h-full transition-transform"
                />
              </div>
            </figure>
            <div className="p-3 md:w-1/2">
              <h2 className="md:text-2xl text-xl font-semibold">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim,
                voluptatum.
              </h2>
              <p className="md:text-lg text-sm pt-2">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt, nemo tenetur dolor voluptatem nulla vitae consequuntur
                deserunt, dolore enim obcaecati ex? Obcaecati quasi in molestiae
                possimus recusandae voluptatum tempore beatae.
              </p>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-1">
            <a href="#slide1" className="btn btn-circle btn-outline btn-error">
              <FaArrowLeft />
            </a>
            <a
              href="#slide3"
              className="btn btn-circle btn-outline ml-5 btn-error"
            >
              <FaArrowRight />
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <div className={`card border lg:card-side bg-base-100 shadow-xl `}>
            <figure>
              <div className="md:w-[500px] h-72 relative overflow-hidden">
                <img
                  src="https://imgv3.fotor.com/images/slider-image/A-blurry-close-up-photo-of-a-woman.jpg"
                  alt="Album"
                  className="w-full h-full transition-transform"
                />
              </div>
            </figure>
            <div className="p-3 md:w-1/2">
              <h2 className="md:text-2xl text-xl font-semibold">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim,
                voluptatum.
              </h2>
              <p className="md:text-lg text-sm pt-2">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt, nemo tenetur dolor voluptatem nulla vitae consequuntur
                deserunt, dolore enim obcaecati ex? Obcaecati quasi in molestiae
                possimus recusandae voluptatum tempore beatae.
              </p>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-1">
            <a href="#slide2" className="btn btn-circle btn-outline btn-error">
              <FaArrowLeft />
            </a>
            <a
              href="#slide4"
              className="btn btn-circle btn-outline ml-5 btn-error"
            >
              <FaArrowRight />
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <div className={`card border lg:card-side bg-base-100 shadow-xl `}>
            <figure>
              <div className="md:w-[500px] h-72 relative overflow-hidden">
                <img
                  src="https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg"
                  alt="Album"
                  className="w-full h-full transition-transform"
                />
              </div>
            </figure>
            <div className="p-3 md:w-1/2">
              <h2 className="md:text-2xl text-xl font-semibold">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim,
                voluptatum.
              </h2>
              <p className="md:text-lg text-sm pt-2">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt, nemo tenetur dolor voluptatem nulla vitae consequuntur
                deserunt, dolore enim obcaecati ex? Obcaecati quasi in molestiae
                possimus recusandae voluptatum tempore beatae.
              </p>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-1">
            <a href="#slide3" className="btn btn-circle btn-outline btn-error">
              <FaArrowLeft />
            </a>
            <a
              href="#slide5"
              className="btn btn-circle btn-outline ml-5 btn-error"
            >
              <FaArrowRight />
            </a>
          </div>
        </div>
        <div id="slide5" className="carousel-item relative w-full">
          <div className={`card border lg:card-side bg-base-100 shadow-xl `}>
            <figure>
              <div className="md:w-[500px] h-72 relative overflow-hidden">
                <img
                  src="https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630"
                  alt="Album"
                  className="w-full h-full transition-transform"
                />
              </div>
            </figure>
            <div className="p-3 md:w-1/2">
              <h2 className="md:text-2xl text-xl font-semibold">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim,
                voluptatum.
              </h2>
              <p className="md:text-lg text-sm pt-2">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt, nemo tenetur dolor voluptatem nulla vitae consequuntur
                deserunt, dolore enim obcaecati ex? Obcaecati quasi in molestiae
                possimus recusandae voluptatum tempore beatae.
              </p>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-1">
            <a href="#slide4" className="btn btn-circle btn-outline btn-error">
              <FaArrowLeft />
            </a>
            <a
              href="#slide6"
              className="btn btn-circle btn-outline ml-5 btn-error"
            >
              <FaArrowRight />
            </a>
          </div>
        </div>
        <div id="slide6" className="carousel-item relative w-full">
          <div className={`card border lg:card-side bg-base-100 shadow-xl `}>
            <figure>
              <div className="md:w-[500px] h-72 relative overflow-hidden">
                <img
                  src="https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg"
                  alt="Album"
                  className="w-full h-full transition-transform"
                />
              </div>
            </figure>
            <div className="p-3 md:w-1/2">
              <h2 className="md:text-2xl text-xl font-semibold">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim,
                voluptatum.
              </h2>
              <p className="md:text-lg text-sm pt-2">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt, nemo tenetur dolor voluptatem nulla vitae consequuntur
                deserunt, dolore enim obcaecati ex? Obcaecati quasi in molestiae
                possimus recusandae voluptatum tempore beatae.
              </p>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-1">
            <a href="#slide5" className="btn btn-circle btn-outline btn-error">
              <FaArrowLeft />
            </a>
            <a
              href="#slide1"
              className="btn btn-circle btn-outline ml-5 btn-error"
            >
              <FaArrowRight />
            </a>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default AboutSlider;
