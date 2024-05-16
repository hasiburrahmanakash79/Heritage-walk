import { useState } from "react";
import Subscribtion from "../Home/Cards/Subscribtion";

const TicketBooking = () => {
  const getFormattedDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");

  const handleCheckInDateChange = (e) => {
    const selectedDate = e.target.value;
    setCheckInDate(selectedDate);

    const nextDay = new Date(selectedDate);
    nextDay.setDate(nextDay.getDate() + 1);
    setCheckOutDate(getFormattedDate(nextDay));
  };

  const handleCheckOutDateChange = (e) => {
    const selectedDate = e.target.value;
    setCheckOutDate(selectedDate);
  };

  return (
    <div>
      <div className="bg-[url('https://i.ibb.co/vXbhV7c/Post-2022-May-Statecation-Le-Meridien-3.jpg')] bg-cover">
        <div className="p-5 py-16 bg-black/20 text-white">
          <h2 className="text-2xl md:text-6xl font-semibold uppercase md:ps-20 mt-14 md:mt-28">
            Dhaka tickets & offers
          </h2>
        </div>
      </div>
      <div className="container mx-auto">
        <div className=" my-10 flex">
          <div className="bg-blue-gray-50">
            <div className="bg-blue-700 p-3">
              <h1 className="text-2xl text-center text-white font-bold">
                Lorem ipsum dolor sit amet, consectetur adipisicing.
              </h1>
            </div>
            <div className="p-5">
              <div className="flex justify-between items-center gap-5">
                <label className="block text-gray-700 font-bold mb-2">
                  Check-in Date:
                </label>
                <input
                  type="date"
                  className="border border-gray-300 p-2 rounded-md mb-4"
                  value={checkInDate}
                  onChange={handleCheckInDateChange}
                />
              </div>

              <div className="flex  justify-between items-center gap-5">
                <label className="block text-gray-700 font-bold mb-2">
                  Check-out Date:
                </label>
                <input
                  type="date"
                  className="border border-gray-300 p-2 rounded-md"
                  value={checkOutDate}
                  onChange={handleCheckOutDateChange}
                />
              </div>

              <div className="flex items-center my-3 gap-3">
                <label>Adult:</label>
                <input type="number" className="p-2 w-24" placeholder="Adult" />
                <label>Children:</label>
                <input
                  type="number"
                  className="p-2 w-24"
                  placeholder="Children"
                />
              </div>
              <div className="">
                <button className="bg-red-600 w-full mt-5 p-2 uppercase text-white font-semibold rounded">
                  Search{" "}
                </button>
              </div>
            </div>
          </div>
          <div className="hidden md:flex">
            <img
              src="https://i.ibb.co/vXbhV7c/Post-2022-May-Statecation-Le-Meridien-3.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="mb-10">
          <Subscribtion />
        </div>
      </div>
    </div>
  );
};

export default TicketBooking;
