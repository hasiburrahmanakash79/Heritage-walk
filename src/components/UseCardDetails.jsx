const UseCardDetails = () => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img
            className="md:h-full h-48 w-full object-cover md:w-48 hover:scale-125 duration-500 "
            src="https://i.pinimg.com/736x/29/91/37/299137cc6b735ef3d5a1b0627b4c0fbb.jpg"
            alt="Person"
          />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Name</div>
          <p className="mt-2 text-gray-600">Lorem ipsum dolor, sit amet consectetur molestiae.</p>
          <button className="mt-4 bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default UseCardDetails;
