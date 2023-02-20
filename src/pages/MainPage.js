import AboutUs from '../components/aboutUs/AboutUs';
import ChooseUs from '../components/chooseUs/ChooseUs';
import FreshVeg from '../components/freshVeg/FreshVeg';
import Header from '../components/header/Header';
import HeaderContent from '../components/headerContent/HeaderContent';

function MainPage() {
    return (
        <>
            <Header />
            <HeaderContent />
            <main>
                <ChooseUs />
                <AboutUs />
                <FreshVeg />
            </main>
        </>
    );
}

export default MainPage;
