
import "../styles/App.css";

import Footer from "../components/footer/footer.jsx";
import Cards from '../components/cards/cards.jsx'
import Header from '../components/header/header.jsx'

import Est from "../components/test/est.jsx";


export default function App() {


  return (
      <>
    <section className="scroller">
      <section>
        <Header />
      </section>

      <section>
      <Cards />
      </section>


      <section>
      <Est/>
      </section>



      <section>
        <Footer />
      </section>
    </section>
      </>
  );
}
