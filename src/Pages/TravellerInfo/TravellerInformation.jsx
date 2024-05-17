import { useEffect, useState } from "react";
import InfoCard from "./InfoCard";
import { Render } from "keep-render";


const TravellerInformation = () => {

 const [name, setName] = useState("akash")
 const [loading, setLoading] =useState(true)
 useEffect(()=> {
  setTimeout(()=> {
    setLoading(false)
  }, 3000)
 },[])
 console.log(loading);
 

  return (
    <div>
      <div className="bg-[url('https://images.squarespace-cdn.com/content/v1/5876d8d6e3df28c4d83ae377/1485224208084-2QZTQMXNZGNF72C4MWMO/dhaka+new+market+rickshaws+2.jpg')] bg-cover">
        <div className="p-5 py-16 bg-black/20 text-white">
          <h2 className="text-2xl md:text-6xl font-semibold uppercase md:ps-20 mt-14 md:mt-28">
            Traveller Information
          </h2>
        </div>
      </div>
      <div>
        {name == "akas" ? <div> my name is akash</div> : <>my name is shakeeb</>}
        
        <Render isLoading={loading}>
        <Render.When isTrue={name == "akash"}>
          my name is akash
        </Render.When>
        <Render.Else>
          my name is shakeeb
        </Render.Else>
        <Render.Loading>
          data loading
        </Render.Loading>
        </Render>
      </div>
      <div className="mx-auto container">
        <InfoCard/>
      </div>
    </div>
  );
};

export default TravellerInformation;
