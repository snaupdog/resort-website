import "../styles/App.css";

import Navbar from "../components/navbar/navbar.jsx";
import Footer from "../components/footer/footer.jsx";
import Cards from "../components/cards/cards.jsx";
import Est from "../components/home-header/est.jsx";
import Omni from "../components/omniverse/omni.jsx";

export default function App() {
  return (
    <>
      <section>
        <Est />
      </section>

      <section>
        <Navbar />
      </section>

      <section>
        <Cards />
      </section>

      <section>
        <Omni />
      </section>

      <section>
        <Footer />
      </section>
    </>
  );
}
