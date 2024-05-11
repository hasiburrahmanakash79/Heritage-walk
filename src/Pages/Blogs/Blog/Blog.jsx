import { Card, CardHeader } from "@material-tailwind/react";
import { Link } from "react-router-dom";


const Blog = () => {
        const cardDetails =[
            {
              id: 1,
              image:
                'https://cdn.britannica.com/97/189797-050-1FC0041B/Night-view-Dhaka-Bangladesh.jpg',
              title: 'Hatirzil',
              details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda atque tempora hic deleniti nulla delectus reprehenderit quas recusandae dicta harum a aperiam, odio iure maxime amet voluptas vel officia velit, obcaecati eveniet nihil! Aut facere consectetur tempora porro voluptatum quas beatae est perspiciatis molestias, ipsum eum blanditiis quam dolorem eos. Inventore vitae, nam rerum excepturi cumque possimus, odio quasi autem quisquam similique laudantium dolore quidem! Dignissimos distinctio culpa exercitationem assumenda! Consequuntur tempora corrupti, dolorem vel autem ducimus voluptatem! Doloremque, saepe quo commodi dolorum placeat totam assumenda. Numquam adipisci nostrum placeat, itaque quisquam rem earum. Dolorum rem accusamus tempora corrupti ullam.'
            },
            {
              id: 2,
              image:
                'https://i.pinimg.com/736x/29/91/37/299137cc6b735ef3d5a1b0627b4c0fbb.jpg',
              title: 'Gulshan',
              details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda atque tempora hic deleniti nulla delectus reprehenderit quas recusandae dicta harum a aperiam, odio iure maxime amet voluptas vel officia velit, obcaecati eveniet nihil! Aut facere consectetur tempora porro voluptatum quas beatae est perspiciatis molestias, ipsum eum blanditiis quam dolorem eos. Inventore vitae, nam rerum excepturi cumque possimus, odio quasi autem quisquam similique laudantium dolore quidem! Dignissimos distinctio culpa exercitationem assumenda! Consequuntur tempora corrupti, dolorem vel autem ducimus voluptatem! Doloremque, saepe quo commodi dolorum placeat totam assumenda. Numquam adipisci nostrum placeat, itaque quisquam rem earum. Dolorum rem accusamus tempora corrupti ullam.'
            },
            {
              id: 3,
              image:
                'https://content.r9cdn.net/rimg/dimg/c9/06/8d4fe0d8-city-28030-164fcc85915.jpg?width=1200&height=630&xhint=1477&yhint=1081&crop=true',
              title: 'Lalbag Kella',
              details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda atque tempora hic deleniti nulla delectus reprehenderit quas recusandae dicta harum a aperiam, odio iure maxime amet voluptas vel officia velit, obcaecati eveniet nihil! Aut facere consectetur tempora porro voluptatum quas beatae est perspiciatis molestias, ipsum eum blanditiis quam dolorem eos. Inventore vitae, nam rerum excepturi cumque possimus, odio quasi autem quisquam similique laudantium dolore quidem! Dignissimos distinctio culpa exercitationem assumenda! Consequuntur tempora corrupti, dolorem vel autem ducimus voluptatem! Doloremque, saepe quo commodi dolorum placeat totam assumenda. Numquam adipisci nostrum placeat, itaque quisquam rem earum. Dolorum rem accusamus tempora corrupti ullam.'
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
                    <CardHeader floated={false} shadow={false} color="transparent" className="m-0 rounded-none">
                      <div className="relative h-44 overflow-hidden">
                        <img
                          src={card.image}
                          alt={card.title}
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                        />
                      </div>
                    </CardHeader>
                    <div className="py-3">
                      <Link to="/" className="md:text-xl text-black font-semibold text-sm">
                        {card.title}
                      </Link>
                    </div>
                    <div>
                        <span>{card.details.slice(0, 100)}..... <Link to={`/blogDetails/${card.id}`} className="text-blue-700">Read more</Link></span>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          );
        };

export default Blog;