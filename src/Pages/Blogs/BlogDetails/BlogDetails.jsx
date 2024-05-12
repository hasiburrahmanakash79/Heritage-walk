import { Card, CardHeader } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const BlogDetails = () => {
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
      views: 100,
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
      views: 100,
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
      views: 100,
    },
  ];
  return (
    <div className="my-10 container mx-auto">
      <div className="grid grid-cols-3 gap-5">
        <div className="col-span-2">
          <h1 className="text-4xl font-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
            sit?
          </h1>
          <div className="py-5 flex items-center justify-between">
            <Link className="flex items-center gap-3">
              <div className="avatar ">
                <div className="w-6 rounded-full">
                  <img
                    src="https://headshots-inc.com/wp-content/uploads/2021/04/author-headshots.jpg"
                    alt=""
                  />
                </div>
              </div>
              <p>Name Writter</p>
            </Link>
            <p>02 August 2020</p>
          </div>
          <img
            src="https://images.squarespace-cdn.com/content/v1/5876d8d6e3df28c4d83ae377/1485224208084-2QZTQMXNZGNF72C4MWMO/dhaka+new+market+rickshaws+2.jpg"
            className="my-4"
            alt=""
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
            dolorum omnis sed accusamus optio voluptatum similique libero
            suscipit, voluptates nulla eius repudiandae animi quam obcaecati
            odio molestias dignissimos porro consequatur cum, corrupti
            distinctio recusandae doloremque. Suscipit officia quia quis optio
            eaque ipsum nisi dolore sequi, hic reprehenderit tempora quos dicta
            consequuntur eveniet laborum deserunt incidunt rerum pariatur?
            Reprehenderit sint assumenda quibusdam? Dignissimos voluptatem
            tempora nobis itaque assumenda. Nobis sapiente nisi, animi, pariatur
            distinctio perferendis odit debitis corporis iste architecto enim
            obcaecati sunt ipsam provident ratione, explicabo neque itaque ex
            consequuntur recusandae error laborum nulla! In enim eligendi
            voluptate. Cumque voluptates nemo necessitatibus labore quam,
            mollitia esse neque, ullam sit eveniet voluptatem blanditiis
            doloribus nesciunt similique. Maxime ipsa unde qui sunt.
          </p>
        </div>
        <div className="col-span-1 px-5">
          <div className="space-y-5 items-center container mx-auto gap-10">
            {cardDetails.map((card) => (
              <Card key={card.id} className="overflow-hidden hover:shadow-xl">
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
                <div className="p-3">
                  <Link
                    to="/"
                    className="md:text-xl text-black font-semibold text-sm"
                  >
                    {card.title.slice(0, 30)}...
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
