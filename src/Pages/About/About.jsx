import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const About = () => {

  return (
    <div>
      <div className="bg-[url('https://i.ibb.co/6Z9KgFc/photo-1625216846235-c49ef7dd38c9-q-80-w-2938-auto.jpg')] bg-cover">
        <div className="p-5 py-16 bg-black/20 text-white">
          <h2 className="text-2xl md:text-6xl font-semibold uppercase md:ps-20 mt-14 md:mt-28">
            About Us
          </h2>
        </div>
      </div>
      <div className="container mx-auto my-10">
        <div className="md:grid grid-cols-3 gap-10 mb-10">
          <div className="col-span-2">
            <h1 className="text-2xl font-semibold mb-3">
              About heritage-walk-dhaka.com
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
              placeat magnam, autem praesentium eligendi soluta iure a
              perspiciatis odio, expedita consectetur tempore quas odit
              asperiores assumenda dignissimos nemo? Sequi sed expedita autem.
              Debitis ullam quo possimus cum omnis mollitia hic eius adipisci
              quia, ipsam facilis consectetur? Id, nobis corporis quisquam
              dignissimos doloribus tenetur. Deleniti nihil nulla nobis fuga
              odit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Obcaecati quos totam, impedit voluptates omnis voluptas non vitae
              consequatur nobis tempore repudiandae cum rerum magni architecto
              ipsa dolorum, adipisci rem? Numquam, officia delectus deleniti,
              cum sed perferendis architecto corporis voluptas in, iusto facere.
              Sit unde temporibus aliquam autem placeat sequi vel? Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Ex quo, culpa magnam
              corporis delectus molestias sapiente nulla dolorem. Non veniam
              magnam tempore libero sed accusantium harum rem voluptate quia,
              vero ut rerum eaque autem! Totam assumenda dolorem minus, iure at
              ad praesentium illum laudantium, eaque nostrum quae tenetur
              veritatis rem?
            </p>
          </div>
          <div className="col-span-1">
            <img
              src="https://www.inestweb.com/wp-content/uploads/2021/03/about-image.png"
              alt=""
            />
          </div>
        </div>

        {/* test card */}

        <div className="md:w-9/12 mx-auto">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            
            <SwiperSlide>
              <div
                className={`card border lg:card-side bg-base-100 shadow-xl `}
              >
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
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Enim, voluptatum.
                  </h2>
                  <p className="md:text-lg text-sm pt-2">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Nesciunt, nemo tenetur dolor voluptatem nulla vitae
                    consequuntur deserunt, dolore enim obcaecati ex? Obcaecati
                    quasi in molestiae possimus recusandae voluptatum tempore
                    beatae.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className={`card border lg:card-side bg-base-100 shadow-xl `}
              >
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
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Enim, voluptatum.
                  </h2>
                  <p className="md:text-lg text-sm pt-2">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Nesciunt, nemo tenetur dolor voluptatem nulla vitae
                    consequuntur deserunt, dolore enim obcaecati ex? Obcaecati
                    quasi in molestiae possimus recusandae voluptatum tempore
                    beatae.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className={`card border lg:card-side bg-base-100 shadow-xl `}
              >
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
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Enim, voluptatum.
                  </h2>
                  <p className="md:text-lg text-sm pt-2">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Nesciunt, nemo tenetur dolor voluptatem nulla vitae
                    consequuntur deserunt, dolore enim obcaecati ex? Obcaecati
                    quasi in molestiae possimus recusandae voluptatum tempore
                    beatae.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className={`card border lg:card-side bg-base-100 shadow-xl `}
              >
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
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Enim, voluptatum.
                  </h2>
                  <p className="md:text-lg text-sm pt-2">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Nesciunt, nemo tenetur dolor voluptatem nulla vitae
                    consequuntur deserunt, dolore enim obcaecati ex? Obcaecati
                    quasi in molestiae possimus recusandae voluptatum tempore
                    beatae.
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default About;
