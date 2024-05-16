import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";

const Hotels = () => {
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
      id: 3,
      authorImage:
        "https://headshots-inc.com/wp-content/uploads/2021/04/author-headshots.jpg",
      authorName: "Solayman Khan",
      image:
        "https://media.istockphoto.com/id/1418012316/photo/tea-garden.jpg?s=612x612&w=0&k=20&c=yk7d_zIIoDISNQAO_yFHtj_QQY7xCpVY8Bg33CD28hY=",
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
        "https://www.bhmpics.com/downloads/bangladesh-nature/1.feat_30d48d6e-7b84-4dfe-bf22-6306f8a2d403.jpg",
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
        "https://images.prothomalo.com/prothomalo-english%2F2023-04%2Fc9065616-4564-443f-b409-066dce650145%2FJatiya_Sangsad.webp?rect=0%2C111%2C800%2C420&w=1200&ar=40%3A21&auto=format%2Ccompress&ogImage=true&mode=crop&overlay=&overlay_position=bottom&overlay_width_pct=1",
      title: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda atque tempora hic deleniti nulla delectus reprehenderit quas recusandae dicta harum a aperiam, odio iure maxime amet voluptas vel officia velit, obcaecati eveniet nihil! Aut facere consectetur tempora porro voluptatum quas beatae est perspiciatis molestias, ipsum eum blanditiis quam dolorem eos. Inventore vitae, nam rerum excepturi cumque possimus, odio quasi autem quisquam similique laudantium dolore quidem! Dignissimos distinctio culpa exercitationem assumenda! Consequuntur tempora corrupti, dolorem vel autem ducimus voluptatem! Doloremque, saepe quo commodi dolorum placeat totam assumenda. Numquam adipisci nostrum placeat, itaque quisquam rem earum. Dolorum rem accusamus tempora corrupti ullam.",
      views: 100,
    },
  ];
  console.log(cardDetails);
  return (
    <div className="md:p-10">
      <h1 className="md:text-4xl text-xl font-bold mb-4">Hotels in Dhaka</h1>
      <div className="md:grid grid-cols-3 justify-center items-center gap-10">
        <Card className="overflow-hidden text-center text-red-500 border hover:shadow-xl">
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 rounded-none"
          >
            <div className="relative h-44 overflow-hidden">
              {/* Set a fixed height for the image container */}
              <img
                src="https://cdn.britannica.com/97/189797-050-1FC0041B/Night-view-Dhaka-Bangladesh.jpg"
                alt="UI/UX Review Check"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
          </CardHeader>
          <CardBody>
            <Typography className="md:text-xl font-semibold text-sm">
              UI/UX Review Check
            </Typography>
          </CardBody>
        </Card>
        <Card className="overflow-hidden text-center my-3 text-red-500 border hover:shadow-xl">
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 rounded-none"
          >
            <div className="relative h-44 overflow-hidden">
              {/* Set a fixed height for the image container */}
              <img
                src="https://i.pinimg.com/736x/29/91/37/299137cc6b735ef3d5a1b0627b4c0fbb.jpg"
                alt="UI/UX Review Check"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
          </CardHeader>
          <CardBody>
            <Typography className="md:text-xl font-semibold text-sm">
              UI/UX Review Check
            </Typography>
          </CardBody>
        </Card>
        <Card className="overflow-hidden text-center text-red-500 border hover:shadow-xl">
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 rounded-none"
          >
            <div className="relative h-44 overflow-hidden">
              {/* Set a fixed height for the image container */}
              <img
                src="https://content.r9cdn.net/rimg/dimg/c9/06/8d4fe0d8-city-28030-164fcc85915.jpg?width=1200&height=630&xhint=1477&yhint=1081&crop=true"
                alt="UI/UX Review Check"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
          </CardHeader>
          <CardBody>
            <Typography className="md:text-xl font-semibold text-sm">
              UI/UX Review Check
            </Typography>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default Hotels;
