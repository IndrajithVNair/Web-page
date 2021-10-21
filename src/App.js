import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
//import Navbar from "./components/Navbar";
import Navbar from "./custom/navbar";
import Home from "./pages/Home";
import { UserReports, RevenueReports } from "./pages/Reports";
import Products from "./pages/CertificationManagement";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/reports/users" exact component={UserReports} />
          <Route path="/reports/revenue" component={RevenueReports} />
          <Route path="/CertificationMangement" exact component={Products} />
          <Route path="/aplicationrequest" exact component={Products} />
          <Route
            path="/aplicationrequest/transferownership"
            exact
            component={Products}
          />
          <Route
            path="/aplicationrequest/licenserenewal"
            exact
            component={Products}
          />
          <Route path="/aplicationrequest/fitness" exact>
            <UserReports />
          </Route>
          <Route path="/aplicationrequest/permit" exact component={Products} />
          <Route
            path="/aplicationrequest/pollution"
            exact
            component={Products}
          />
          <Route path="/payment" exact component={Products} />
          <Route path="/payment/Fines" exact component={Products} />
          <Route path="/payment/Penalities" exact component={Products} />

          <Route path="/Licensemanagement" exact component={Products} />
          <Route
            path="/Licensemanagement/licenserevokesuspend"
            exact
            component={Products}
          />

          <Route path="/vehicle verification" exact component={Products} />
          <Route path="/vehicle crimes" exact component={Products} />
          <Route path="/updatefinesandpenalities" exact component={Products} />

          <Route path="/Login" exact component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
