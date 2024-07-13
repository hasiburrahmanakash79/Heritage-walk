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
    {
      id: 4,
      authorImage:
        "https://headshots-inc.com/wp-content/uploads/2021/04/author-headshots.jpg",
      authorName: "Solayman Khan",
      image:
        "https://en.khjasha.com/wp-content/uploads/2021/11/252030232_411541693889826_8674937139699603284_n-910x509.jpg",
      title: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda atque tempora hic deleniti nulla delectus reprehenderit quas recusandae dicta harum a aperiam, odio iure maxime amet voluptas vel officia velit, obcaecati eveniet nihil! Aut facere consectetur tempora porro voluptatum quas beatae est perspiciatis molestias, ipsum eum blanditiis quam dolorem eos. Inventore vitae, nam rerum excepturi cumque possimus, odio quasi autem quisquam similique laudantium dolore quidem! Dignissimos distinctio culpa exercitationem assumenda! Consequuntur tempora corrupti, dolorem vel autem ducimus voluptatem! Doloremque, saepe quo commodi dolorum placeat totam assumenda. Numquam adipisci nostrum placeat, itaque quisquam rem earum. Dolorum rem accusamus tempora corrupti ullam.",
      views: 100,
    },
    {
      id: 5,
      authorImage:
        "https://headshots-inc.com/wp-content/uploads/2021/04/author-headshots.jpg",
      authorName: "Solayman Khan",
      image: "https://elsjnuals.files.wordpress.com/2021/06/dhaka.jpg?w=800",
      title: "Major Environmental Problems of the Dhaka Metropolis",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda atque tempora hic deleniti nulla delectus reprehenderit quas recusandae dicta harum a aperiam, odio iure maxime amet voluptas vel officia velit, obcaecati eveniet nihil! Aut facere consectetur tempora porro voluptatum quas beatae est perspiciatis molestias, ipsum eum blanditiis quam dolorem eos. Inventore vitae, nam rerum excepturi cumque possimus, odio quasi autem quisquam similique laudantium dolore quidem! Dignissimos distinctio culpa exercitationem assumenda! Consequuntur tempora corrupti, dolorem vel autem ducimus voluptatem! Doloremque, saepe quo commodi dolorum placeat totam assumenda. Numquam adipisci nostrum placeat, itaque quisquam rem earum. Dolorum rem accusamus tempora corrupti ullam.",
      views: 100,
    },
    {
      id: 6,
      authorImage:
        "https://headshots-inc.com/wp-content/uploads/2021/04/author-headshots.jpg",
      authorName: "Solayman Khan",
      image:
        "https://ecdn.dhakatribune.net/contents/cache/images/640x359x1/uploads/dten/2021/05/ed-1619830167432.gif",
      title:
        "Govt urged to utilize Bangladeshi expatriates’ expertise in infrastructure projects",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda atque tempora hic deleniti nulla delectus reprehenderit quas recusandae dicta harum a aperiam, odio iure maxime amet voluptas vel officia velit, obcaecati eveniet nihil! Aut facere consectetur tempora porro voluptatum quas beatae est perspiciatis molestias, ipsum eum blanditiis quam dolorem eos. Inventore vitae, nam rerum excepturi cumque possimus, odio quasi autem quisquam similique laudantium dolore quidem! Dignissimos distinctio culpa exercitationem assumenda! Consequuntur tempora corrupti, dolorem vel autem ducimus voluptatem! Doloremque, saepe quo commodi dolorum placeat totam assumenda. Numquam adipisci nostrum placeat, itaque quisquam rem earum. Dolorum rem accusamus tempora corrupti ullam.",
      views: 100,
    },
  ];
  return (
    <div className="my-10 container mx-auto">
      <div className="md:grid grid-cols-3 gap-5 p-3">
        <div className="col-span-2">
          <h1 className="md:text-4xl text-xl font-bold">
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
            src="https://s2.dmcdn.net/v/ULcpR1ZNMVdCHBW5g/x1080"
            className="my-4"
            alt=""
          />
          <p className="text-balance text-sm">
          In literary theory, a text is any object Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos recusandae velit asperiores sit amet molestiae consectetur reprehenderit fugiat iusto cumque minima modi ipsum minus rem vel voluptatum magni temporibus inventore accusamus mollitia incidunt nulla explicabo, nisi cupiditate. Magni, eligendi libero possimus ab nesciunt sequi aut, reiciendis laboriosam maiores quisquam, dignissimos magnam quo natus architecto aliquid. Facilis corrupti repellendus ad ducimus ipsum laborum alias vero consequuntur, quidem voluptatibus reprehenderit veniam dolorem? Atque, dignissimos enim error, qui ex corporis dolore animi, beatae mollitia eaque impedit omnis optio. Sed quisquam sint quo hic ex quasi, amet consectetur facilis sit numquam magnam, aspernatur, explicabo eum nulla quae perferendis cum nostrum. Nihil blanditiis autem illum temporibus quis, molestias nulla officia, ipsam placeat libero reiciendis animi illo, repellendus molestiae odit quae eum magnam esse! Alias quae, reiciendis asperiores velit, modi deserunt nisi assumenda similique recusandae voluptatum sed. Tempore asperiores, doloribus voluptas at iure sapiente et voluptatum alias delectus perferendis expedita est minus. Qui obcaecati, in, ut ducimus, quod architecto pariatur ipsa sint hic illum officiis blanditiis debitis aliquam eligendi quidem perferendis esse repellat tempora consectetur harum? Impedit adipisci nesciunt distinctio facere aliquam labore, reiciendis ipsa consequatur nemo eveniet voluptas quo ad nam dolores voluptatum vero architecto? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis dolore cum aut consequuntur quisquam distinctio! Minus quae sequi animi accusamus assumenda omnis eius labore eos tenetur deserunt rerum mollitia fugit aut aspernatur odit amet, quas sit deleniti commodi fugiat vitae ad excepturi molestias! A eius, fugit ipsam tempora officiis inventore!
          </p>
        </div>
        <div className="col-span-1 md:px-5 md:mt-0 mt-7">
          <h3 className="text-xl font-semibold my-3">Releted blogs</h3>
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
                    className="md:text-xl text-black font-semibold  text-sm"
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
