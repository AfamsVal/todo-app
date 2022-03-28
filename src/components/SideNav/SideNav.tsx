import { SetStateAction, Dispatch } from "react";
import { useAppDispatch } from "../../redux/hooks";
import { logout } from "../../redux/auth/authActions";
import SideNavItem from "./SideNavItem";
import { SIDE_MENU_ITEMS } from "./sidemenu";
import { Accordion } from "react-bootstrap";

interface SideNavProps {
  toggleNav: boolean;
  setToggleNav: Dispatch<SetStateAction<boolean>>;
}

const SideNav = ({ toggleNav, setToggleNav }: SideNavProps) => {
  const dispatch = useAppDispatch();

  return (
    <Accordion defaultActiveKey="sidenav">
      <div id="sidenav" className={`${toggleNav ? "toggled" : ""}`}>
        <nav className="d-block">
          <ul
            className="navbar-nav mt-5 text-left"
            style={{ justifyContent: "flex-start" }}
          >
            {SIDE_MENU_ITEMS.map((menu, i) => (
              <div key={i}>
                <SideNavItem
                  title={menu.title}
                  link={menu.link}
                  icon={menu.icon}
                  iconStyle={menu.iconStyle}
                  setToggleNav={setToggleNav}
                />
              </div>
            ))}
            <li
              className="cursor-pointer fw-bold text-red ps-5"
              style={{ marginTop: "20px" }}
              onClick={() => {
                setToggleNav(false);
                dispatch(logout());
              }}
            >
              <i className="fas fa-power-off me-3 text-red"></i>Logout
            </li>
          </ul>
        </nav>
      </div>
    </Accordion>
  );
};

export default SideNav;
