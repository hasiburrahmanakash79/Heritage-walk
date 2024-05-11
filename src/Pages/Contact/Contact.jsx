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
      <div className="md:grid grid-cols-5 items-start gap-10 my-10 container mx-auto">
        <div className="col-span-3">
          <h1 className="text-5xl font-bold mb-5">Contact the Heritage Walk team</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae consectetur expedita quia aliquam impedit eius necessitatibus architecto dicta est quisquam?</p>
          <div className="my-5">
            <img src="https://www.stitchtools.com/assets/images/contact/contact-banner.jpg" alt="" />
          </div>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus sequi, fugit magnam inventore quaerat eligendi? Eaque nulla accusantium doloribus, quisquam magnam unde error asperiores numquam ut molestias tempore et repudiandae ab aliquam blanditiis consequuntur! Consectetur rem aperiam at quibusdam quia repellat ex facilis, eveniet facere perferendis pariatur nemo itaque voluptatem est consequuntur hic officiis eaque suscipit modi repudiandae? Provident inventore, quasi cumque mollitia labore animi aliquid, minima necessitatibus delectus fugiat nisi minus nostrum eveniet. Sint quisquam necessitatibus reprehenderit dolor harum reiciendis cupiditate soluta provident fugiat quibusdam? Corrupti, officiis! Delectus non, nam, a veritatis, consectetur commodi doloribus modi voluptatem dolores dignissimos iure reprehenderit. Ut libero, consequuntur repudiandae iste voluptates vel doloremque praesentium cum earum reiciendis consequatur distinctio autem. Voluptas perspiciatis, sit, tenetur dolor quos architecto nesciunt aperiam adipisci pariatur voluptatum ex, odit dignissimos fuga nobis corporis excepturi dolorem earum. Rem fuga temporibus dolorem incidunt! Tempora, molestiae. Perferendis hic placeat qui velit, aspernatur, ex optio mollitia quod recusandae facilis iste rem neque. Placeat, architecto? Veniam optio unde sunt possimus accusantium temporibus? Reprehenderit a quos labore hic odio architecto ducimus blanditiis. Ea enim doloremque sapiente sed? Accusamus dignissimos maiores corporis in reiciendis natus, impedit ea odit dolor dolorum, voluptatibus cum facilis deleniti cupiditate.</p>
        </div>
        <div className="flex items-center col-span-2 justify-center">
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
