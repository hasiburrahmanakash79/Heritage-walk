import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./Testimonial.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      authorImage:
        "https://headshots-inc.com/wp-content/uploads/2021/04/author-headshots.jpg",
      authorName: "Solayman Khan",
      image:
        "https://us.images.westend61.de/0001588849pw/aerial-view-of-dhaka-city-centre-with-residential-district-at-sunset-dhaka-bangladesh-AAEF11013.jpg",
      title:
        "lorem ipsum dolor sit amet consectetur adipisicing elit.lorem ipsum dolor sit amet consectetur adipisicing elit.lorem ipsum dolor sit amet consectetur adipisicing elit.lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 2,
      authorImage:
        "https://headshots-inc.com/wp-content/uploads/2021/04/author-headshots.jpg",
      authorName: "Solayman Khan",
      image:
        "https://as2.ftcdn.net/v2/jpg/03/14/80/03/1000_F_314800369_EbZflpJIAiDOA6ssWHd1KMEtOQHI15x6.jpg",
      title:
        "lorem ipsum dolor sit amet consectetur adipisicing elit.lorem ipsum dolor sit amet consectetur adipisicing elit.lorem ipsum dolor sit amet consectetur adipisicing elit.lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 3,
      authorImage:
        "https://headshots-inc.com/wp-content/uploads/2021/04/author-headshots.jpg",
      authorName: "Solayman Khan",
      image:
        "https://us.images.westend61.de/0001890900pw/aerial-view-of-dhaka-city-with-residential-area-at-sunset-dhaka-bangladesh-AAEF22036.jpg",
      title:
        "lorem ipsum dolor sit amet consectetur adipisicing elit.lorem ipsum dolor sit amet consectetur adipisicing elit.lorem ipsum dolor sit amet consectetur adipisicing elit.lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 4,
      authorImage:
        "https://headshots-inc.com/wp-content/uploads/2021/04/author-headshots.jpg",
      authorName: "Solayman Khan",
      image:
        "https://en.khjasha.com/wp-content/uploads/2021/11/252030232_411541693889826_8674937139699603284_n-910x509.jpg",
      title:
        "lorem ipsum dolor sit amet consectetur adipisicing elit.lorem ipsum dolor sit amet consectetur adipisicing elit.lorem ipsum dolor sit amet consectetur adipisicing elit.lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 5,
      authorImage:
        "https://headshots-inc.com/wp-content/uploads/2021/04/author-headshots.jpg",
      authorName: "Solayman Khan",
      image: "https://elsjnuals.files.wordpress.com/2021/06/dhaka.jpg?w=800",
      title:
        "lorem ipsum dolor sit amet consectetur adipisicing elit.lorem ipsum dolor sit amet consectetur adipisicing elit.lorem ipsum dolor sit amet consectetur adipisicing elit.lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 6,
      authorImage:
        "https://headshots-inc.com/wp-content/uploads/2021/04/author-headshots.jpg",
      authorName: "Solayman Khan",
      image:
        "https://ecdn.dhakatribune.net/contents/cache/images/640x359x1/uploads/dten/2021/05/ed-1619830167432.gif",
      title:
        "lorem ipsum dolor sit amet consectetur adipisicing elit.lorem ipsum dolor sit amet consectetur adipisicing elit.lorem ipsum dolor sit amet consectetur adipisicing elit.lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
  ];
  return (
    <div>
      <h1 className="text-4xl font-bold text-center my-16">User Feedback</h1>
      <div className="p-5 mb-20 -z-1">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {testimonials?.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="shadow-xl border card w-96 -z-10 h-80 mb-7">
                <figure className="pt-5 pb-2">
                  <img
                    className="mx-auto -z-10"
                    style={{
                      height: "100px",
                      width: "100px",
                      objectFit: "cover",
                      borderRadius: "50%",
                    }}
                    src={testimonial.authorImage}
                  />
                </figure>
                <div className="items-center px-10 text-center -z-10">
                  <p className="mb-2 text-xl"> {testimonial.authorName}</p>
                  <p className="text-sm"> {testimonial.title}</p>
                  <div className="flex justify-center mb-5 -z-10"></div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
