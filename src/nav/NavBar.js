import 'bootstrap/dist/css/bootstrap.css';
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";



const NavBar = () => {
    return(
        <div>
            <Navbar expand="md">
                <NavLink to="/" className="navbar-brand">
                    Shoply
                </NavLink>
                <Nav className='ml-auto' navbar>
                    <NavItem>
                        <NavLink to="/cart">Cart</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </div>
    )
}


export default NavBar;