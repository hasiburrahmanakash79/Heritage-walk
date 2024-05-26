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
            doloribus nesciunt similique. Maxime ipsa unde qui sunt. Lorem ipsum
            dolor sit amet consectetur, adipisicing elit. In ipsum tenetur fugit
            explicabo atque beatae porro, animi nulla qui eius tempore odit
            sequi necessitatibus minima repellat iusto totam? Pariatur in quas
            tenetur fugiat ratione. Ex adipisci officia voluptatum repellat
            voluptas facere alias ad tempora beatae, quos temporibus quis. Quae
            sed itaque est dolor, dolorem, minima ad iusto error ducimus natus
            fugit facere sit. Cupiditate modi incidunt ullam, temporibus
            consequuntur ut? Dolores voluptatum dolorem autem soluta
            reprehenderit, aliquid illum praesentium culpa doloribus, saepe quod
            recusandae quos ex beatae cum! Officia, quos placeat ratione nulla
            sequi consequatur a quia omnis dolores quibusdam veniam illum id
            voluptates sint! Dignissimos aliquid maxime nesciunt laudantium
            reiciendis iusto animi quos voluptatum, ab quisquam optio rerum
            asperiores repellendus obcaecati corrupti quasi ipsam quo tempora
            sequi voluptas! Autem perspiciatis mollitia veritatis, sed,
            consequuntur perferendis odit neque unde sunt, illum debitis ea
            accusantium enim. Iusto, quaerat maxime, exercitationem consectetur
            dicta adipisci, quam dolorum omnis porro amet veniam in ab! Error
            fugit quis eligendi facere quos. Quos expedita sapiente repellat quo
            sed, eveniet porro corporis eum quaerat modi, veniam nam neque,
            tenetur repellendus quam animi hic dignissimos ipsum molestiae a
            ratione necessitatibus. Nulla fugiat, maiores alias nobis assumenda
            repellendus inventore. Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Omnis alias harum voluptatem, vero incidunt
            sapiente voluptatum. Velit dolorem illo at doloremque accusamus ab
            magnam aperiam tempora eius necessitatibus sunt debitis quaerat esse
            voluptate magni, eveniet beatae voluptatibus rem adipisci nihil
            quisquam rerum officiis! Amet iure vel repudiandae excepturi
            nesciunt ab recusandae soluta velit! Error hic soluta amet rem nisi
            voluptatibus, qui architecto vel facilis doloribus. Repellat, vel
            non quos ipsum autem quasi quibusdam. Eligendi molestiae numquam at
            architecto atque laudantium ratione non? Magnam dolorum dolorem
            corporis optio magni error tenetur, iusto consequatur, cupiditate
            assumenda recusandae voluptates eveniet nam ipsa nisi aperiam quae
            expedita exercitationem ea eius placeat. At facere consectetur
            distinctio, ea qui et suscipit. Officia error nisi consequatur
            delectus nesciunt cumque, facilis qui commodi dolore unde cum natus
            corporis molestiae alias debitis aliquid dolorum assumenda ea
            dolorem quibusdam? Nostrum recusandae obcaecati dolor placeat porro
            animi, est exercitationem, itaque odit ut quis. Aperiam unde
            distinctio ducimus cumque expedita possimus consequuntur vel eum
            consectetur, dolorum debitis praesentium ipsam doloribus illum autem
            aliquam nemo dicta alias. Quam, distinctio laborum veniam, ab facere
            blanditiis et quae tenetur quia atque assumenda necessitatibus quod
            earum reprehenderit ullam accusamus provident similique commodi ipsa
            a voluptas iure neque? Recusandae eum blanditiis, quibusdam
            praesentium rem sit quidem officiis in eius odio, expedita nobis
            nesciunt modi deserunt a velit, ullam sed sint dolorem. Corporis
            accusamus harum dolores autem, iste quam cumque doloribus fugiat
            fugit error aut quos officia quo vitae repellat, consequatur rem
            eaque similique. Ipsum harum voluptas inventore facere rerum
            repudiandae quam obcaecati. Illum cum quod dolores commodi saepe
            distinctio sapiente excepturi minus voluptatibus sunt. Illum
            assumenda nam id numquam eaque corporis porro ab hic ut et ducimus
            perspiciatis similique iure ex ea possimus, vel molestias, corrupti
            deleniti quos repudiandae? Odit minus eius veritatis provident eos
            animi ad?
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
