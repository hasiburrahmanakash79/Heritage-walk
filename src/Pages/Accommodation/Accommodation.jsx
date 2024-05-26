import { Card, CardBody, CardHeader } from '@material-tailwind/react';
import { Link } from 'react-router-dom';

const Accommodation = () => {
  const cardDetails = [
    {
      id: 1,
      image:
        'https://cdn.britannica.com/97/189797-050-1FC0041B/Night-view-Dhaka-Bangladesh.jpg',
      title: 'Hatirzil',
    },
    {
      id: 2,
      image:
        'https://i.pinimg.com/736x/29/91/37/299137cc6b735ef3d5a1b0627b4c0fbb.jpg',
      title: 'Gulshan',
    },
    {
      id: 3,
      image:
        'https://content.r9cdn.net/rimg/dimg/c9/06/8d4fe0d8-city-28030-164fcc85915.jpg?width=1200&height=630&xhint=1477&yhint=1081&crop=true',
      title: 'Lalbag Kella',
    },
    {
      id: 3,
      image:
        'https://content.r9cdn.net/rimg/dimg/c9/06/8d4fe0d8-city-28030-164fcc85915.jpg?width=1200&height=630&xhint=1477&yhint=1081&crop=true',
      title: 'Lalbag Kella',
    },
    {
      id: 3,
      image:
        'https://content.r9cdn.net/rimg/dimg/c9/06/8d4fe0d8-city-28030-164fcc85915.jpg?width=1200&height=630&xhint=1477&yhint=1081&crop=true',
      title: 'Lalbag Kella',
    },
    {
      id: 3,
      image:
        'https://content.r9cdn.net/rimg/dimg/c9/06/8d4fe0d8-city-28030-164fcc85915.jpg?width=1200&height=630&xhint=1477&yhint=1081&crop=true',
      title: 'Lalbag Kella',
    },
  ];
  

  return (
    <div>
      {/* Your JSX content */}
      <div className="bg-[url('https://i.ibb.co/pryR9Sh/photo.jpg')] bg-cover">
        <div className="p-5 py-16 bg-black/20 text-white">
          <h2 className="text-2xl md:text-6xl font-semibold uppercase md:ps-20 mt-14 md:mt-28">
            Accommodation
          </h2>
        </div>
      </div>
      <div className="md:grid grid-cols-3 space-y-5 md:space-y-0 justify-center my-10 items-center container mx-auto gap-10">
        {cardDetails.map((card) => (
          <Card key={card.id} className="overflow-hidden text-center text-red-500 hover:shadow-xl">
            <CardHeader floated={false} shadow={false} color="transparent" className="m-0 rounded-none">
              <div className="relative h-44 overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
            </CardHeader>
            <CardBody>
              <Link to={`/cardDetails/${card.id}`} className="md:text-xl font-semibold text-sm">
                {card.title}
              </Link>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Accommodation;
