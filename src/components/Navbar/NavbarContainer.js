import { connect } from "react-redux";
import Navbar from "./Navbar";

const mapSateToProps = (state) => {
  return {
    friends: state.sidebar.friends,
  }
}

const NavbarContainer = connect(mapSateToProps, null)(Navbar);

export default NavbarContainer;