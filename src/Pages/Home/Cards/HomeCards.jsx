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
        <div className='space-y-5'>
            <WeeklyCard/>
            <Highlights/>
            <AboutPlace/>
            <MoneySavings/>
            <Traveller/>
            <Hotels/>
            <Information/>
            <div className='md:p-10'>
            <Subscribtion/>
            </div>
        </div>
    );
};

export default HomeCards;