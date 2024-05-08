import { useState } from 'react';
import { Card, CardBody, CardHeader } from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Accommodation = () => {
  const [cardDetails, setCardDetails] = useState([
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
  ]);

  const handleDeleteUser = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You won’t be able to remove this user!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        // Perform deletion logic and update state
        const updatedCards = cardDetails.filter((card) => card.id !== id);
        setCardDetails(updatedCards);

        // Display success message
        Swal.fire('Deleted!', 'User has been deleted.', 'success');
      }
    });
  };

  const handleEditUser = (id) => {
    // Find the card to edit based on ID
    const cardToEdit = cardDetails.find((card) => card.id === id);

    // Show a prompt to edit the card title
    Swal.fire({
      title: 'Edit Card Title',
      input: 'text',
      inputValue: cardToEdit.title,
      showCancelButton: true,
      confirmButtonText: 'Save',
      cancelButtonText: 'Cancel',
      inputValidator: (value) => {
        if (!value) {
          return 'Title cannot be empty';
        }
      },
    }).then((result) => {
      if (result.isConfirmed) {
        // Update the card title and set the state
        const updatedCards = cardDetails.map((card) =>
          card.id === id ? { ...card, title: result.value } : card
        );
        setCardDetails(updatedCards);
        Swal.fire('Saved!', 'Card title has been updated.', 'success');
      }
    });
  };

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
              <button onClick={() => handleDeleteUser(card.id)} className="text-white mx-3 bg-red-700 p-2 rounded">
                Delete
              </button>
              <button onClick={() => handleEditUser(card.id)} className="text-white bg-blue-700 p-2 rounded">
                Edit
              </button>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Accommodation;
