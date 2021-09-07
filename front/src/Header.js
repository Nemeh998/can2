import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './Header.css';
import Login from './Login';
import LogoutButton from './LogoutButton';
import { useAuth0 } from "@auth0/auth0-react";
import { withAuth0 } from '@auth0/auth0-react';
import LoginButton from './LoginButton';
class Header extends React.Component {
  render() {
    const {isAuthenticated}=this.props.auth0;
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>My Favorite Books</Navbar.Brand>
        <NavItem><Link to="/" className="nav-link">HOME</Link></NavItem>
        {/* TODO: if the user is logged in, render a navigation link to profile page */}
        <NavItem><Link to="/Profile" className="nav-link">Profile</Link></NavItem>
        {/* TODO: if the user is logged in, render the `LogoutButton` */}
        {(isAuthenticated?<LogoutButton/>:<LoginButton/>)}
      </Navbar>
    )
  }
}

export default withAuth0(Header)
