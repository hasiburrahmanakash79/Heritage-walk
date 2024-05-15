import { Card, CardHeader } from "@material-tailwind/react";

const InfoCard = () => {
  const cardDetails = [
    {
      id: 1,
      image:
        "https://tds-images.thedailystar.net/sites/default/files/styles/very_big_201/public/images/2022/02/20/metro-rail.jpg",
      title: "Public transport in Dhaka",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda atque tempora hic deleniti nulla delectus reprehenderit quas recusandae dicta harum a aperiam, odio iure maxime amet voluptas vel officia velit, obcaecati eveniet nihil! Aut facere consectetur tempora porro voluptatum quas beatae est perspiciatis molestias, ipsum eum blanditiis quam dolorem eos. Inventore vitae, nam rerum excepturi cumque possimus, odio quasi autem quisquam similique laudantium dolore quidem! Dignissimos distinctio culpa exercitationem assumenda! Consequuntur tempora corrupti, dolorem vel autem ducimus voluptatem! Doloremque, saepe quo commodi dolorum placeat totam assumenda. Numquam adipisci nostrum placeat, itaque quisquam rem earum. Dolorum rem accusamus tempora corrupti ullam.",
      views: 100,
    },
    {
      id: 2,
      image:
        "https://dhakaairport.org/img/airport1_hu9908cbf1f0541bdd5bcb04b672ed0c4d_403674_660x0_resize_box_3.png",
      title: "Dhaka Airport",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda atque tempora hic deleniti nulla delectus reprehenderit quas recusandae dicta harum a aperiam, odio iure maxime amet voluptas vel officia velit, obcaecati eveniet nihil! Aut facere consectetur tempora porro voluptatum quas beatae est perspiciatis molestias, ipsum eum blanditiis quam dolorem eos. Inventore vitae, nam rerum excepturi cumque possimus, odio quasi autem quisquam similique laudantium dolore quidem! Dignissimos distinctio culpa exercitationem assumenda! Consequuntur tempora corrupti, dolorem vel autem ducimus voluptatem! Doloremque, saepe quo commodi dolorum placeat totam assumenda. Numquam adipisci nostrum placeat, itaque quisquam rem earum. Dolorum rem accusamus tempora corrupti ullam.",
      views: 100,
    },
    {
      id: 3,
      image:
        "https://cdn.sketchbubble.com/pub/media/catalog/product/optimized1/4/0/4009f4c31ed68ad9317a7f62a5d846b874ac5b5a28d74bad286b3c2775b4e7cb/dhaka-map-slide2.png",
      title: "Dhaka city Map",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda atque tempora hic deleniti nulla delectus reprehenderit quas recusandae dicta harum a aperiam, odio iure maxime amet voluptas vel officia velit, obcaecati eveniet nihil! Aut facere consectetur tempora porro voluptatum quas beatae est perspiciatis molestias, ipsum eum blanditiis quam dolorem eos. Inventore vitae, nam rerum excepturi cumque possimus, odio quasi autem quisquam similique laudantium dolore quidem! Dignissimos distinctio culpa exercitationem assumenda! Consequuntur tempora corrupti, dolorem vel autem ducimus voluptatem! Doloremque, saepe quo commodi dolorum placeat totam assumenda. Numquam adipisci nostrum placeat, itaque quisquam rem earum. Dolorum rem accusamus tempora corrupti ullam.",
      views: 100,
    },
    {
      id: 4,
      image:
        "https://ecdn.dhakatribune.net/contents/cache/images/600x315x1/uploads/dten/2020/06/ride-sharing-obhai-zakir-1592750284918.jpg",
      title: "Dhaka City Ride Partner",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda atque tempora hic deleniti nulla delectus reprehenderit quas recusandae dicta harum a aperiam, odio iure maxime amet voluptas vel officia velit, obcaecati eveniet nihil! Aut facere consectetur tempora porro voluptatum quas beatae est perspiciatis molestias, ipsum eum blanditiis quam dolorem eos. Inventore vitae, nam rerum excepturi cumque possimus, odio quasi autem quisquam similique laudantium dolore quidem! Dignissimos distinctio culpa exercitationem assumenda! Consequuntur tempora corrupti, dolorem vel autem ducimus voluptatem! Doloremque, saepe quo commodi dolorum placeat totam assumenda. Numquam adipisci nostrum placeat, itaque quisquam rem earum. Dolorum rem accusamus tempora corrupti ullam.",
      views: 100,
    },
  ];
  return (
    <div className="md:grid grid-cols-3 gap-10 my-10">
      <div className="md:grid grid-cols-2 p-3 space-y-5 md:space-y-0 col-span-2 justify-center  items-center gap-10">
        {cardDetails.map((card) => (
          <Card key={card.id} className="overflow-hidden border text-red-500 p-3 hover:shadow-xl">
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="m-0 rounded-none"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
            </CardHeader>
            <div>
              <h1 className="md:text-xl text-center p-3 hover:underline font-semibold text-sm">
                {card.title}
              </h1>
            </div>
          </Card>
        ))}
      </div>
      <div className="col-span-1">
        <h1 className="text-xl">Suggest Hotels</h1>
      </div>
    </div>
  );
};

export default InfoCard;
