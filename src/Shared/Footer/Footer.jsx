
import {
  FaFacebook,
  FaInstagram,
  FaTelegram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
 

  return (
    <div>
      <div className="border-b border-t">
        <div className="container mx-auto grid grid-cols-2 items-center py-7">
          <div className="flex justify-between items-center gap-5">
            <div className="text-center">
              <h1 className="text-5xl font-bold uppercase">Pathao</h1>
              <p className="text-xl font-bold">Tour Partner</p>
            </div>
            <div className="text-center">
              <p className="text-xl font-bold">Sponsor by</p>
              <h1 className="text-4xl font-bold uppercase">Jomuna bank plc</h1>
            </div>
          </div>
          <div>
            <div className="flex justify-end items-center gap-5">
              <h1>Follow Us: </h1>
              <FaFacebook className="text-3xl hover:text-blue-700 " />
              <FaInstagram className="text-3xl hover:text-pink-500" />
              <FaYoutube className="text-3xl hover:text-red-600" />
              <FaTwitter className="text-3xl hover:text-blue-700" />
              <FaTelegram className="text-3xl hover:text-blue-700" />
            </div>
          </div>
        </div>
      </div>
      <div className="py-7">
        <p className="text-center pb-3">Affiliates and Content Partners</p>
        <div className="flex justify-center items-center gap-7">
          <img
            className="w-14"
            src="https://www.bdosn.org//images/2019/03/21/bdosn-logo.jpg"
            alt=""
          />
          <img
            className="w-14"
            src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg"
            alt=""
          />
          <img
            className="w-14"
            src="https://logos-world.net/wp-content/uploads/2020/09/Mastercard-Logo.png"
            alt=""
          />
          <img
            className="w-14"
            src="https://upload.wikimedia.org/wikipedia/commons/5/5b/Pathao-logo.jpg"
            alt=""
          />
          <img
            className="w-14"
            src="https://upload.wikimedia.org/wikipedia/commons/5/58/Uber_logo_2018.svg"
            alt=""
          />
          <img
            className="w-14"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/PayPal_logo.svg/1024px-PayPal_logo.svg.png"
            alt=""
          />
          <img
            className="w-24"
            src="https://cdn.worldvectorlogo.com/logos/foodpanda-logo.svg"
            alt=""
          />
        </div>
      </div>
      <p className="text-[10px] text-center pb-7">
        Pathau & Partners is registered in Bangladesh under no. 723828923.
        Registered Office: Pathau & Partners, Mohakhali DOHS, Dhaka, Bangladesh,
        SE1 0LL. <br />
        Dhaka & Partners is the business growth and destination agency for
        DHaka. We are a social enterprise, combining purpose with commercial
        rigour. We are funded by grants, partners and our portfolio of venture
        businesses.
      </p>
      <div className="bg-blue-gray-50 flex justify-evenly items-center p-7">
        <Link to="/" className="hover:underline">
          Contact
        </Link>
        <Link to="/" className="hover:underline">
          About Us
        </Link>
        <Link to="/" className="hover:underline">
          Advertise with us
        </Link>
        <Link to="/" className="hover:underline">
          Sustainability
        </Link>
        <Link to="/" className="hover:underline">
          Accessibility
        </Link>
        <Link to="/" className="hover:underline">
          Terms & Conditions
        </Link>
      </div>
    </div>
  );
};

export default Footer;
