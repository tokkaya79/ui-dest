import AboutUs from '../components/aboutUs/AboutUs';
import ChooseUs from '../components/chooseUs/ChooseUs';
import CookedBy from '../components/cookedBy/CookedBy';
import Footer from '../components/footer/Footer';
import FormLetter from '../components/formLetter/FormLetter';
import FreshVeg from '../components/freshVeg/FreshVeg';
import HappyClients from '../components/happyClients/HappyClients';
import Header from '../components/header/Header';
import HeaderContent from '../components/headerContent/HeaderContent';
import SpecialDish from '../components/specialDish/SpecialDish';


function MainPage() {
    return (
        <>
            <Header />
            <HeaderContent/>
            {/* <main>
                <ChooseUs />
                <AboutUs />
                <FreshVeg />
                <CookedBy />
                <SpecialDish />
                <HappyClients />
                <FormLetter />
            </main>
            <Footer/> */}
        </>
    );
}

export default MainPage;
