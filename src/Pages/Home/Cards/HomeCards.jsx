import AboutPlace from './AboutPlace';
import Highlights from './Highlights';
import Hotels from './Hotels';
import Information from './Information';
import MoneySavings from './MoneySavings';
import Subscribtion from './Subscribtion';
import Traveller from './Traveller';
import WeeklyCard from './WeeklyCard';

const HomeCards = () => {
    return (
        <div>
            <WeeklyCard/>
            <Highlights/>
            <AboutPlace/>
            <MoneySavings/>
            <Traveller/>
            <Hotels/>
            <Information/>

            <Subscribtion/>
        </div>
    );
};

export default HomeCards;