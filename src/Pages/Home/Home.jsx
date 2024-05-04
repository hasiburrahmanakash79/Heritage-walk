import Hero from "./Hero/Hero";
import PopularNow from "./PopularNow/PopularNow";

const Home = () => {
    return (
        <div>
            <Hero/>
            <div className="w-9/12 mx-auto my-12">
                <PopularNow/>
            </div>
            
        </div>
    );
};

export default Home;