import AboutUs from '../components/aboutUs/AboutUs'
import ChooseUs from '../components/chooseUs/ChooseUs'
import Header from '../components/header/Header'
import HeaderContent from '../components/headerContent/HeaderContent'

function MainPage() {
    return (
        <>
           <Header />
           <HeaderContent/>
           <main>
            <ChooseUs/>
            <AboutUs/>
           </main>
        </>
    )
}

export default MainPage