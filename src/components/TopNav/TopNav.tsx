// import moment from "moment";
import { Dispatch, SetStateAction } from "react";
import "./TopNav.css";
import { toastr } from "../notification/notify";

interface TopNavProps {
  toggleNav: boolean;
  setToggleNav: Dispatch<SetStateAction<boolean>>;
}

const TopNav = ({ toggleNav, setToggleNav }: TopNavProps) => {
  return (
    <div id="top-nav" className="d-flex bg-white py-2">
      <div className="top-nav-content align-self-end w-100 bg-white d-flex justify-content-between">
        <div className="d-flex">
          <div className="ms-3">
            <h3>Todo App</h3>
          </div>
        </div>
        <div className="d-flex justfify-content-end align-items-center">
          <div
            id="notification-icon"
            className="d-flex justify-content-center align-items-center cursor-pointer"
            onClick={() => toastr.comingSoon()}
          >
            <i className="fas fa-bell text-white text-center"></i>
          </div>
          <i
            className="fas fa-bars cursor-pointer ms-2 d-block d-lg-none"
            onClick={() => setToggleNav(!toggleNav)}
          ></i>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
