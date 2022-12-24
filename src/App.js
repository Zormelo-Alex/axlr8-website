import { Link, Route, Routes } from "react-router-dom";
import FrontPage from "./partials/frontPage";
import Midsec from "./partials/midsec";
import Events from "./partials/events";
import Members from "./partials/members";
import Vision from "./partials/vision";
import Footer from "./partials/footer";
import Gallery from "./partials/gallery";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={
          <>
            <FrontPage />
            <Midsec />
            <Events />
            <Members />
            <Vision />
            <Footer />
          </>
        }/>
        <Route path="/gallery/:name" exact element={ <Gallery />}/>
        <Route path="*" element={
          <>
          <h1>Page not found</h1>
          <p><Link to="/">Go Home</Link></p>
          </>
        }/>
      </Routes>  
            
    </div>
  );
}


export default App;