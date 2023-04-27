import { Component } from "react";
import "./NavbarStyles.css";
import {FaHandsHelping} from 'react-icons/fa'
import { MenuItems } from "./Menuitems";
import { Link } from 'react-router-dom';

class Navbar extends Component {

    state = {clicked: false};
    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }
    render(){
        return(
            <nav className="Navbaritems">
               
               <h1><FaHandsHelping className="navbar-logo"/>Sahayak</h1>
               <div className="menu-icons" onClick={this.handleClick}>
                    <i className={this.state.clicked ? "fas fa-times" : "fa fa-bars"}></i>
                    
                </div>
                <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                    {MenuItems.map((item, index) => {
                        return(
                            <li key={index}>
                        <Link className={item.cName} to={item.url}>
                        <i className={item.icon}></i>
                        {item.title}
                        
                        </Link>
                        
                    </li>
                    
                    );
                    
                    })}
                    
                    
                   
                </ul>
                    
                
            </nav>
            
        );
    }
}

export default Navbar;