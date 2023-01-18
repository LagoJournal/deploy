import "./App.css";
import { Route } from "react-router-dom";
import Navbar from "./components/NavBar/Navbar";
import Landing from "./components/Landing/Landing";
import CountriesPage from "./components/CountriesPage/countriesPage";
import DetailsPage from "./components/DetailsPage/detailsPage";
import ActivityCreationPage from "./components/ActivityCreation/activityCreationPage";

function App() {
  return (
    <>
      <Navbar />
      <Route exact path="/" component={Landing} />
      <Route exact path="/countries" component={CountriesPage} />
      <Route path="/details" component={DetailsPage} />
      <Route exact path="/activity" component={ActivityCreationPage} />
    </>
  );
}

export default App;
