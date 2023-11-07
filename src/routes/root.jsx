import "../styles/App.css";

import Footer from "../components/footer/footer.jsx";
import Cards from "../components/cards/cards.jsx";
import Header from "../components/header/header.jsx";

import Est from "../components/test/est.jsx";

import Onview from "../components/onview/onview.jsx";
export default function App() {
  return (
    <>
      <section>
        <Header />
      </section>

      <section>
        <Cards />
      </section>

      <section>
        <Est />
      </section>

      <section>
        <Onview />
      </section>

      <section>
        <Footer />
      </section>
    </>
  );
}
