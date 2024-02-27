import { Component } from "react";
import { MenuItems } from "./MenuItems";
import "./Navbar.css";
import { Link } from "react-router-dom";

class Navbar extends Component {
  state = { clicked: false };
  handleclick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <nav className="nav-items">
        {/* <h2>hellooo</h2> */}
        <h1 className="nav-logo">Travel Trust</h1>
        <div className="menu-icons" onClick={this.handleclick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>

        <ul className={this.state.clicked? "nav-menu active": "nav-menu"} >
          {/* making list tag dynamic  */}
          {MenuItems.map((items, index) => {
            return (
              <li key={index}>
                <Link className={items.cName} to={items.url}>
                  <i className={items.icon}></i>
                  {items.title}
                </Link>
              </li>
            );
          })}
          <button>Sign Up</button>
        </ul>
      </nav>
    );
  }
}
export default Navbar;
