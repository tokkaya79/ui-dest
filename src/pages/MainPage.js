import AboutUs from '../components/aboutUs/AboutUs';
import ChooseUs from '../components/chooseUs/ChooseUs';
import CookedBy from '../components/cookedBy/CookedBy';
import FreshVeg from '../components/freshVeg/FreshVeg';
import Header from '../components/header/Header';
import HeaderContent from '../components/headerContent/HeaderContent';
import SpecialDish from '../components/specialDish/SpecialDish';

function MainPage() {
    return (
        <>
            <Header />
            <HeaderContent />
            <main>
                <ChooseUs />
                <AboutUs />
                <FreshVeg />
                <CookedBy />
                <SpecialDish />
            </main>
        </>
    );
}

export default MainPage;
