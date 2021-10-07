import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
//import Navbar from "./components/Navbar";
import Navbar from "./custom/navbar";
import Home from "./pages/Home";
import { UserReports, RevenueReports } from "./pages/Reports";
import Products from "./pages/Products";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/reports/users" exact component={UserReports} />
          <Route path="/reports/revenue" component={RevenueReports} />
          <Route path="/products" exact component={Products} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
