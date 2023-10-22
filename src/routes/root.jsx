
import "../styles/App.css";

import Footer from "../components/footer/footer.jsx";
import Cards from '../components/cards/cards.jsx'
import Header from '../components/header/header.jsx'



export default function App() {



  return (
      <>
    <section className="scroller">
      <section>
        <Header />
      </section>

      <section>
       <Cards/>
      </section>


      <section>
        <Footer />
      </section>
    </section>
      </>
  );
}
