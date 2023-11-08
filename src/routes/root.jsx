import "../styles/App.css";

import Footer from "../components/footer/footer.jsx";
import Cards from "../components/cards/cards.jsx";
import Est from "../components/home-header/est.jsx";
import Omni from "../components/omniverse/omni.jsx";
import Onview from "../components/onview/onview.jsx";

export default function App() {
  return (
    <>
      <section>
        <Est />
      </section>

      <section>
        <Cards />
      </section>

      <section>
        <Onview />
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
