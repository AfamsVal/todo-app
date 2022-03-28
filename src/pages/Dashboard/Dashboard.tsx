import { Fragment, useState } from "react";
import { Switch } from "react-router-dom";
import SideNav from "../../components/SideNav/SideNav";
import TopNav from "../../components/TopNav/TopNav";
import Todos from "../Todos/Todos";
import ProtectedRoute from "../../components/ProtectedRoute/ProtectedRoute";
import NotFound from "../../components/NotFound/NotFound";
import "./Dashboard.css";

const Dashboard = () => {
  const [toggleNav, setToggleNav] = useState(false);

  return (
    <Fragment>
      <div className="d-flex">
        <SideNav toggleNav={toggleNav} setToggleNav={setToggleNav} />
        <div id="main-area">
          <TopNav toggleNav={toggleNav} setToggleNav={setToggleNav} />
          <Switch>
            <ProtectedRoute exact path="/todos">
              <Todos />
            </ProtectedRoute>
            <ProtectedRoute>
              <NotFound />
            </ProtectedRoute>
          </Switch>
        </div>
      </div>
    </Fragment>
  );
};

export default Dashboard;
