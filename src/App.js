import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Header from "./components/header";
import Navigation from "./components/navigation";
import Profile from "./components/profile";
import Portofolio from "./components/portofolio";
import Footer from "./components/footer";
import Banner from "./components/banner";


function App() {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div>
            <Header />
            <Navigation />
            <Banner />
                <div>
                    <br/>
                    <br/>
                </div>
            <Profile />
                <div>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                </div>
            <Portofolio />
                <div>
                    <br/>
                    <br/>
                    <br/>
                </div>
            <Footer />
        </div>
    );
}

export default App;
