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
              Obcaecati quos totam, Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ipsam vitae aperiam ut, placeat facere facilis explicabo fuga vel blanditiis reiciendis illo architecto nulla maiores culpa sed nostrum expedita consequatur impedit odio rerum corporis! Facere porro vel quis dolore tempore!
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
