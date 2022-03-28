import { Switch, BrowserRouter, Route } from "react-router-dom";
import NotFound from "./components/NotFound/NotFound";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login/Login";
import UnprotectedRoute from "./components/UnprotectedRoute/UnprotectedRoute";

const App = () => {
  return (
    <div className="icoin">
      <BrowserRouter>
        <Switch>
          <UnprotectedRoute exact path="/">
            <Login />
          </UnprotectedRoute>
          <Dashboard />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
