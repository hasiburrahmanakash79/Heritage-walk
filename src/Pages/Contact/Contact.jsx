const Contact = () => {
  return (
    <div>
      <div className="bg-[url('https://i.ibb.co/QvkN8mj/contact.jpg')] bg-cover">
        <div className="p-5 py-16 bg-black/20 text-white">
          <h2 className="text-2xl md:text-6xl font-semibold uppercase md:ps-20 mt-14 md:mt-28">
            Contact
          </h2>
        </div>
      </div>
      <div className="grid grid-cols-5 my-10 container mx-auto">
        <div className="col-span-3">
          <h1 className="text-4xl">Contact the Heritage Walk team</h1>
        </div>
        <div className="flex items-center col-span-2 justify-center bg-gray-100">
          <div className="bg-white p-8 rounded shadow-lg w-full">
            <h2 className="text-2xl font-bold mb-4 text-center">Contact Us</h2>
            <form>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-500 text-white py-2 rounded-md hover:bg-indigo-600 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
