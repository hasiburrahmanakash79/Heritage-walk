import AboutSlider from "./AboutSlider";
import Team from "./Team";
import Testimonial from "./Testimonial";

const About = () => {
  return (
    <div>
      <div className="bg-[url('https://i.ibb.co/QpgkSWC/perlament.jpg')] bg-cover">
        <div className="p-5 py-16 bg-black/20 text-white">
          <h2 className="text-2xl md:text-6xl font-semibold uppercase md:ps-20 mt-14 md:mt-28">
            About Us
          </h2>
        </div>
      </div>
      <div className="container mx-auto my-10">
        <div className="md:grid grid-cols-3 gap-10 mb-10">
          <div className="col-span-2">
            <h1 className="md:text-5xl text-2xl font-semibold mb-3">
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
        <div className="md:w-9/12 mx-auto p-3">
        <div>
          <AboutSlider />
        </div>
        
        <div>
          <Team />
        </div>
        <div>
          <Testimonial />
        </div>
        </div>
      </div>
    </div>
  );
};

export default About;
