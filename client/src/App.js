import "./App.css";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/NavBar/Navbar";
import Landing from "./components/Landing/Landing";
import CountriesPage from "./components/CountriesPage/countriesPage";
import DetailsPage from "./components/DetailsPage/detailsPage";
import ActivityCreationPage from "./components/ActivityCreation/activityCreationPage";
import Error404Page from "./components/P404/P404";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/countries" component={CountriesPage} />
        <Route exact path="/details" component={DetailsPage} />
        <Route exact path="/activity" component={ActivityCreationPage} />
        <Route path="*" component={Error404Page} />
      </Switch>
    </>
  );
}

export default App;
