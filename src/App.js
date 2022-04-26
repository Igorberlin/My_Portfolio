import Navigation from "./components/navigationComponent/Navigation";

import "./sass/styles.scss";
import Footer from "./components/footer/Footer";
import Content from "./components/content/Content";

export default function App() {
    return (
        <div className="App">
            <Navigation />
            <Content />
            <Footer />
        </div>
    );
}
