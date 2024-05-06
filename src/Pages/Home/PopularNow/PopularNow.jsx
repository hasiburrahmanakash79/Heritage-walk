import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

const PopularNow = () => {
  return (
    <div>
      <div className="bg-gradient-to-r from-indigo-400 from-20% via-sky-700 via-50% to-red-500 to-90% md:p-10 p-3 text-white">
        <h1 className="md:text-4xl text-xl text-center font-semibold mb-7">Popular now</h1>
        <div className="md:grid grid-cols-3 space-y-3 justify-center items-center gap-10">
          <Card className="overflow-hidden md:-mb-3 text-center text-red-500 hover:shadow-xl">
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
              <Typography className="md:text-xl font-semibold text-sm">UI/UX Review Check</Typography>
            </CardBody>
          </Card>
          <Card className="overflow-hidden text-center text-red-500 hover:shadow-xl">
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
              <Typography className="md:text-xl font-semibold text-sm">UI/UX Review Check</Typography>
            </CardBody>
          </Card>
          <Card className="overflow-hidden text-center text-red-500 hover:shadow-xl">
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
              <Typography className="md:text-xl font-semibold text-sm">UI/UX Review Check</Typography>
            </CardBody>
          </Card>
        </div>
      </div>
      <div className="md:grid grid-cols-3 justify-center space-y-5 items-center gap-10 md:p-10 p-3 mt-5">
        <Card className="overflow-hidden text-center md:-mb-5 text-red-500 hover:shadow-xl">
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
            <Typography className="md:text-xl font-semibold text-sm">UI/UX Review Check</Typography>
          </CardBody>
        </Card>
        <Card className="overflow-hidden text-center text-red-500 hover:shadow-xl">
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
            <Typography className="md:text-xl font-semibold text-sm">UI/UX Review Check</Typography>
          </CardBody>
        </Card>
        <Card className="overflow-hidden text-center text-red-500 hover:shadow-xl">
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
            <Typography className="md:text-xl font-semibold text-sm">UI/UX Review Check</Typography>
          </CardBody>
        </Card>
        <Card className="overflow-hidden text-center text-red-500 hover:shadow-xl">
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
            <Typography className="md:text-xl font-semibold text-sm">UI/UX Review Check</Typography>
          </CardBody>
        </Card>
        <Card className="overflow-hidden text-center text-red-500 hover:shadow-xl">
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
            <Typography className="md:text-xl font-semibold text-sm">UI/UX Review Check</Typography>
          </CardBody>
        </Card>
        <Card className="overflow-hidden text-center text-red-500 hover:shadow-xl">
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
            <Typography className="md:text-xl font-semibold text-sm">UI/UX Review Check</Typography>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default PopularNow;
