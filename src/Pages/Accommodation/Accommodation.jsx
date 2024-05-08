import { Card, CardBody, CardHeader } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Accommodation = () => {
  const cardDetails = [
    {
      id: 1,
      image:
        "https://cdn.britannica.com/97/189797-050-1FC0041B/Night-view-Dhaka-Bangladesh.jpg",
      title: "Hatirzil",
    },
    {
      id: 2,
      image:
        "https://i.pinimg.com/736x/29/91/37/299137cc6b735ef3d5a1b0627b4c0fbb.jpg",
      title: "Gulshan",
    },
    {
      id: 3,
      image:
        "https://content.r9cdn.net/rimg/dimg/c9/06/8d4fe0d8-city-28030-164fcc85915.jpg?width=1200&height=630&xhint=1477&yhint=1081&crop=true",
      title: "Lalbag Kella",
    },
  ];
  return (
    <div>
      <div className="bg-[url('https://i.ibb.co/pryR9Sh/photo.jpg')] bg-cover">
        <div className="p-5 py-16 bg-black/20 text-white">
          <h2 className="text-2xl md:text-6xl font-semibold uppercase md:ps-20 mt-14 md:mt-28">
            Accommodation
          </h2>
        </div>
      </div>

      <div className="container mx-auto my-10 md:p-10">
        <h1 className="text-4xl font-bold mb-5">Dhaka Accommodation</h1>
        <div className="md:grid grid-cols-3 space-y-5 md:space-y-0 justify-center items-center gap-10">
          {cardDetails.map((cards) => (
            <Card
              key={cards.id}
              className="overflow-hidden text-center text-red-500 hover:shadow-xl"
            >
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="m-0 rounded-none"
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={cards.image}
                    alt="UI/UX Review Check"
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
              </CardHeader>
              <CardBody>
                <Link
                  to="/cardDetails"
                  className="md:text-xl font-semibold text-sm"
                >
                  {cards.title}
                </Link>
              </CardBody>
            </Card>
          ))}
        </div>
      <div>
        <div className="border-2  border-red-500 md:p-10 p-3 rounded-tl-3xl rounded-br-3xl my-10">
          <p className="md:text-lg text-xs">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex magni
            sapiente accusamus labore voluptatibus voluptas obcaecati
            doloremque, repellat esse porro eius id commodi aperiam facilis ut
            mollitia adipisci temporibus atque. Fuga aperiam facilis rem
            recusandae aliquid, porro sint voluptas eos tenetur pariatur!
            Doloribus nobis consequuntur dicta nisi repudiandae est facere,
            eveniet minima id, dolor magni aspernatur. Laudantium voluptas
            consectetur optio illo aspernatur aliquam provident nihil ullam
            consequuntur excepturi, labore quas adipisci explicabo quis
            perferendis expedita distinctio fugiat deleniti laboriosam quibusdam
            delectus. Corrupti veritatis id debitis impedit eius nulla? Eaque,
            et. Necessitatibus exercitationem ex excepturi inventore labont.
          </p>
        </div>
        <div className="md:grid grid-cols-3 p-6 bg-blue-gray-50 gap-5 items-center rounded-md">
          <p className="col-span-2 mb-3 md:text-lg text-xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            error deleniti quod dolorem, quaerat tempora? Mollitia dolorem minus
            perspiciatis nesciunt velit ipsa! Aperiam ducimus autem similique
            ipsa? Harum, ipsam esse.
          </p>
          <div className="col-span-1 w-full ">
            <button className="bg-red-600 hover:bg-red-800 hover:scale-105 duration-300 w-full p-3 rounded text-white md:text-lg text-xs font-semibold">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Accommodation;
