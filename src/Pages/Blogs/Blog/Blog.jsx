import { Card, CardHeader } from "@material-tailwind/react";
import { FaEllipsisVertical } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Blog = () => {
  const cardDetails = [
    {
      id: 1,
      authorImage:
        "https://headshots-inc.com/wp-content/uploads/2021/04/author-headshots.jpg",
      authorName: "Solayman Khan",
      image:
        "https://us.images.westend61.de/0001588849pw/aerial-view-of-dhaka-city-centre-with-residential-district-at-sunset-dhaka-bangladesh-AAEF11013.jpg",
      title: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda atque tempora hic deleniti nulla delectus reprehenderit quas recusandae dicta harum a aperiam, odio iure maxime amet voluptas vel officia velit, obcaecati eveniet nihil! Aut facere consectetur tempora porro voluptatum quas beatae est perspiciatis molestias, ipsum eum blanditiis quam dolorem eos. Inventore vitae, nam rerum excepturi cumque possimus, odio quasi autem quisquam similique laudantium dolore quidem! Dignissimos distinctio culpa exercitationem assumenda! Consequuntur tempora corrupti, dolorem vel autem ducimus voluptatem! Doloremque, saepe quo commodi dolorum placeat totam assumenda. Numquam adipisci nostrum placeat, itaque quisquam rem earum. Dolorum rem accusamus tempora corrupti ullam.",
    },
    {
      id: 2,
      authorImage:
        "https://headshots-inc.com/wp-content/uploads/2021/04/author-headshots.jpg",
      authorName: "Solayman Khan",
      image:
        "https://as2.ftcdn.net/v2/jpg/03/14/80/03/1000_F_314800369_EbZflpJIAiDOA6ssWHd1KMEtOQHI15x6.jpg",
      title: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda atque tempora hic deleniti nulla delectus reprehenderit quas recusandae dicta harum a aperiam, odio iure maxime amet voluptas vel officia velit, obcaecati eveniet nihil! Aut facere consectetur tempora porro voluptatum quas beatae est perspiciatis molestias, ipsum eum blanditiis quam dolorem eos. Inventore vitae, nam rerum excepturi cumque possimus, odio quasi autem quisquam similique laudantium dolore quidem! Dignissimos distinctio culpa exercitationem assumenda! Consequuntur tempora corrupti, dolorem vel autem ducimus voluptatem! Doloremque, saepe quo commodi dolorum placeat totam assumenda. Numquam adipisci nostrum placeat, itaque quisquam rem earum. Dolorum rem accusamus tempora corrupti ullam.",
    },
    {
      id: 3,
      authorImage:
        "https://headshots-inc.com/wp-content/uploads/2021/04/author-headshots.jpg",
      authorName: "Solayman Khan",
      image:
        "https://us.images.westend61.de/0001890900pw/aerial-view-of-dhaka-city-with-residential-area-at-sunset-dhaka-bangladesh-AAEF22036.jpg",
      title: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda atque tempora hic deleniti nulla delectus reprehenderit quas recusandae dicta harum a aperiam, odio iure maxime amet voluptas vel officia velit, obcaecati eveniet nihil! Aut facere consectetur tempora porro voluptatum quas beatae est perspiciatis molestias, ipsum eum blanditiis quam dolorem eos. Inventore vitae, nam rerum excepturi cumque possimus, odio quasi autem quisquam similique laudantium dolore quidem! Dignissimos distinctio culpa exercitationem assumenda! Consequuntur tempora corrupti, dolorem vel autem ducimus voluptatem! Doloremque, saepe quo commodi dolorum placeat totam assumenda. Numquam adipisci nostrum placeat, itaque quisquam rem earum. Dolorum rem accusamus tempora corrupti ullam.",
    },
  ];

  return (
    <div>
      <div className="bg-[url('https://images.squarespace-cdn.com/content/v1/5876d8d6e3df28c4d83ae377/1485224208084-2QZTQMXNZGNF72C4MWMO/dhaka+new+market+rickshaws+2.jpg')] bg-cover">
        <div className="p-5 py-16 bg-black/20 text-white">
          <h2 className="text-2xl md:text-6xl font-semibold uppercase md:ps-20 mt-14 md:mt-28">
            Blogs
          </h2>
        </div>
      </div>
      <div className="md:grid grid-cols-3 space-y-5 md:space-y-0 justify-center my-10 items-center container mx-auto gap-10">
        {cardDetails.map((card) => (
          <Card key={card.id} className="overflow-hidden p-3 hover:shadow-xl">
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
            <div className="mt-4 flex justify-between items-center">
              <Link className="flex items-center gap-3">
                <div className="avatar ">
                  <div className="w-6 rounded-full">
                    <img src={card.authorImage} alt="" />
                  </div>
                </div>
                <p>{card.authorName}</p>
              </Link>
              <Link>
                <FaEllipsisVertical />
              </Link>
            </div>
            <div className="py-3">
              <Link
                to="/"
                className="md:text-xl text-black font-semibold text-sm"
              >
                {card.title}
              </Link>
            </div>
            <div>
              <span>
                {card.details.slice(0, 100)}.....{" "}
                <Link to={`/blogDetails/${card.id}`} className="text-blue-700">
                  Read more
                </Link>
              </span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Blog;
