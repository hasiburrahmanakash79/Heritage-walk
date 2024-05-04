import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

const PopularNow = () => {
  return (
    <div>
      <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-10 text-white">
        <h1 className="text-4xl font-semibold mb-7">Popular now</h1>

        <div className="md:flex justify-between items-center gap-10">
          <Card className=" overflow-hidden">
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="m-0 rounded-none"
            >
              <img
                src="https://cdn.britannica.com/97/189797-050-1FC0041B/Night-view-Dhaka-Bangladesh.jpg"
                alt="ui/ux review check"
              />
            </CardHeader>
            <CardBody>
              <Typography variant="h4" color="blue-gray">
                UI/UX Review Check
              </Typography>
              
            </CardBody>
            
          </Card>
          <Card className=" my-4 overflow-hidden">
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="m-0 rounded-none"
            >
              <img
                src="https://cdn.britannica.com/97/189797-050-1FC0041B/Night-view-Dhaka-Bangladesh.jpg"
                alt="ui/ux review check"
              />
            </CardHeader>
            <CardBody>
              <Typography variant="h4" color="blue-gray">
                UI/UX Review Check
              </Typography>
              
            </CardBody>
            
          </Card>
          <Card className=" overflow-hidden">
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="m-0 rounded-none"
            >
              <img
                src="https://cdn.britannica.com/97/189797-050-1FC0041B/Night-view-Dhaka-Bangladesh.jpg"
                alt="ui/ux review check"
              />
            </CardHeader>
            <CardBody>
              <Typography variant="h4" color="blue-gray">
                UI/UX Review Check
              </Typography>
              
            </CardBody>
            
          </Card>
        </div>
      </div>
      <div className="md:grid grid-cols-3 justify-center items-center gap-10 p-10">
          <Card className=" overflow-hidden text-center text-red-500 border hover:shadow-xl ">
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="m-0 rounded-none"
            >
              <img
                src="https://cdn.britannica.com/97/189797-050-1FC0041B/Night-view-Dhaka-Bangladesh.jpg"
                alt="ui/ux review check"
              />
            </CardHeader>
            <CardBody>
              <Typography variant="h4">
                UI/UX Review Check
              </Typography>
              
            </CardBody>
            
          </Card>
          <Card className=" my-4 overflow-hidden text-center text-red-500 border hover:shadow-xl ">
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="m-0 rounded-none"
            >
              <img
                src="https://cdn.britannica.com/97/189797-050-1FC0041B/Night-view-Dhaka-Bangladesh.jpg"
                alt="ui/ux review check"
              />
            </CardHeader>
            <CardBody>
              <Typography variant="h4">
                UI/UX Review Check
              </Typography>
              
            </CardBody>
            
          </Card>
          <Card className=" overflow-hidden text-center text-red-500 border hover:shadow-xl ">
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="m-0 rounded-none"
            >
              <img
                src="https://cdn.britannica.com/97/189797-050-1FC0041B/Night-view-Dhaka-Bangladesh.jpg"
                alt="ui/ux review check"
              />
            </CardHeader>
            <CardBody>
              <Typography variant="h4">
                UI/UX Review Check
              </Typography>
              
            </CardBody>
            
          </Card>
          <Card className=" overflow-hidden text-center text-red-500 border hover:shadow-xl ">
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="m-0 rounded-none"
            >
              <img
                src="https://cdn.britannica.com/97/189797-050-1FC0041B/Night-view-Dhaka-Bangladesh.jpg"
                alt="ui/ux review check"
              />
            </CardHeader>
            <CardBody>
              <Typography variant="h4">
                UI/UX Review Check
              </Typography>
              
            </CardBody>
            
          </Card>
          <Card className=" my-4 overflow-hidden text-center text-red-500 border  hover:shadow-xl ">
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="m-0 rounded-none"
            >
              <img
                src="https://cdn.britannica.com/97/189797-050-1FC0041B/Night-view-Dhaka-Bangladesh.jpg"
                alt="ui/ux review check"
              />
            </CardHeader>
            <CardBody>
              <Typography variant="h4">
                UI/UX Review Check
              </Typography>
              
            </CardBody>
            
          </Card>
          <Card className=" overflow-hidden text-center text-red-500 border hover:shadow-xl ">
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="m-0 rounded-none"
            >
              <img
                src="https://cdn.britannica.com/97/189797-050-1FC0041B/Night-view-Dhaka-Bangladesh.jpg"
                alt="ui/ux review check"
              />
            </CardHeader>
            <CardBody>
              <Typography variant="h4">
                UI/UX Review Check
              </Typography>
              
            </CardBody>
            
          </Card>
        </div>
    </div>
  );
};

export default PopularNow;
