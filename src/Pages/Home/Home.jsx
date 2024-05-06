import HomeCards from "./Cards/HomeCards";
import Hero from "./Hero/Hero";
import PopularNow from "./PopularNow/PopularNow";

const Home = () => {
    return (
        <div>
            <Hero/>
                <div className="md:w-9/12 mx-auto my-7">
                <PopularNow/>
                </div>
            <div className="md:w-9/12 p-3 mx-auto my-7">
                <HomeCards/>
            </div>
            
        </div>
    );
};

export default Home;