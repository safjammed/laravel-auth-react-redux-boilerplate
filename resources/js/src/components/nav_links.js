import React, {Component} from 'react';
import {Nav,Navbar,NavDropdown} from 'react-bootstrap';
import {connect} from "react-redux";
import {fetchUser} from "../actions";
import axios from 'axios';
import _ from 'lodash';
import {Link} from "react-router-dom";

class NavLinks extends Component{
    //get username on initiation
    componentWillMount() {
        this.props.fetchUser();
    }
    logout(){
        axios.post("/logout",{_token : window.crsf}).then(resp =>{
            console.log("then ", resp);
            window.location.href="/";
        } ).catch(resp => console.log("catch", resp));
    }
    AccountDropdown (){
        let userName = this.props.user.name;
        if (! _.isEmpty(this.props.user)){
        return (
            <NavDropdown title={userName} >
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={(e) => this.logout()}>Logout</NavDropdown.Item>
            </NavDropdown>
        );
        }else{
            return (
                <NavDropdown title={"Account"} >
                    <NavDropdown.Item href="/login">Login</NavDropdown.Item>
                    <NavDropdown.Item href="/register">Register</NavDropdown.Item>
                </NavDropdown>
            );
        }
    }
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
                <Navbar.Brand href="/" onClick={() => history.push("/")} >React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Link className="nav-link" to={"/user_info"}>User Info</Link>
                        <Link className="nav-link" to={"/page"}>Normal Page</Link>
                        <Link className="nav-link" to={"/onlyloggedin"}>Only Logged In</Link>
                    </Nav>
                    <Nav>
                        <Nav.Link eventKey={2} href="#memes">
                            Dank memes
                        </Nav.Link>
                        {this.AccountDropdown()}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }

}


function mapStateToProps(state) {
    return { user : state.user };
}

export default connect(mapStateToProps,{fetchUser})(NavLinks);