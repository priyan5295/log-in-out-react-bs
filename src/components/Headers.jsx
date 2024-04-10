import React, { useEffect, useState } from "react";
import { Button, Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const Headers = () => {

  const navigate = useNavigate()

  const [dynamicname, setDynamicname] = useState('')

  useEffect(() => {
    
    //use as var to get the data as reagister
    const fetchedUsername = localStorage.getItem('registerdata'); 
    //in register get localstorage all the details 
    console.log("Fetched dynamicname:", fetchedUsername);

    // if conditions checks the variable json and it as key within the object 
    if (fetchedUsername) {
      const UserData = JSON.parse(fetchedUsername)
      setDynamicname(UserData.username);
    }
  }, []);


  //logout
  function handleLogout() {
    localStorage.removeItem('registerdata');
    navigate('/')
  }

    return (
        <>
        {[false].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-secondary bg-opacity-75 bg-gradient mb-3">
          <Container fluid>
            <Navbar.Brand className="text-white fw-bold fs-4">
                {dynamicname}
            </Navbar.Brand>
            <Navbar.Toggle className="bg-white" aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas className="bg-light bg-gradient bg-opacity"
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`} className="text-black fw-bold fs-4">
                  {dynamicname}
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">

                  <Link className="text-black text-decoration-none mb-3" to="/dashboard/services">Services</Link>

                  <Link className="text-black text-decoration-none mb-3" to='/dashboard/aboutus'>About</Link>

                  <Link className="text-black text-decoration-none mb-3" to='/dashboard/team'>Partners</Link>

                  <Link className="text-black text-decoration-none mb-3" to='/dashboard/contactus'>Contact</Link>
             
                </Nav>
               
                <div className="mt-4 text-center">
                {/* <Link className="btn btn-success text-center" to='/'>Log Out</Link> */}
                <Button onClick={handleLogout}>
                  Logout
                </Button>
                </div>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
        </>
    )
}

export default Headers