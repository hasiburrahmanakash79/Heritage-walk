import Hero from "./Hero/Hero";
import PopularNow from "./PopularNow/PopularNow";

const Home = () => {
    return (
        <div>
            <Hero/>
            <div className="w-9/12 mx-auto my-7">
                <PopularNow/>
            </div>
            
        </div>
    );
};

export default Home;