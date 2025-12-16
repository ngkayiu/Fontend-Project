import {Button, Container, Dropdown, Form, InputGroup, Navbar, Spinner} from "react-bootstrap";
import {Link} from "@tanstack/react-router";
import {useContext} from "react";
import {LoginUserContext} from "../../context/LoginUserContext.tsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBasketShopping, faUser} from "@fortawesome/free-solid-svg-icons";
import {signOut} from "../../authService/FirebaseAuthService.ts";



export default function TopNavBar(){

    // const handleSearch = async (event:FormEvent<HTMLFormElement>) =>{
    //     event.preventDefault();
    // }
    // const result = await handleSearch();

    const loginUser = useContext(LoginUserContext);

    const renderLoginContainer = () =>{
        if(loginUser){
            return (<div className="d-flex">
                <Dropdown align="end" className="d-inline me-4">
                    <Dropdown.Toggle
                        as="button"
                        variant="link"
                        className=" p-0 border-0 bg-transparent"
                    >
                        <FontAwesomeIcon icon={faUser} id="accountIcon"  size="xl" style={{color: "#ffffff"}} />
                    </Dropdown.Toggle>

                    <Dropdown.Menu style={{ minWidth: '50px', backgroundColor:`lightgrey`}}>
                        <Dropdown.Item onClick={signOut} className="text-black">
                            Logout
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <Link to={"/shoppingcart"}>
                <FontAwesomeIcon icon={faBasketShopping} id="cartIcon" size="xl" style={{color: "#FFD43B"}} />
                </Link>
            </div>)
        } else if (loginUser === null){
           return (<Link to="/login" className="text-decoration-none">
                <div id="login-btn" className="text-light fs-7">
                    Login
                </div>
            </Link>)
        } else {
            return <Spinner/>
        }
    }

    return(

        <Navbar className="bg-black justify-content-between align-item-center"
        style={{height:140}}>
            <Container>

            <Navbar.Brand href="/" className="d-flex align-items-center">
            <img
                src="/records_logo.png"
                alt="logo"
                height="50"
                className="d-inline-block"
            />
            </Navbar.Brand>

            <Form className="d-flex"
                  // onSubmit={handleSearch}
            >
                <InputGroup size="sm">
                        <Form.Control
                            type="text"
                            placeholder="Search"
                            className="rounded-start-5 border-end-0"
                        />
                    <Button type="submit" className="btn-warning rounded-end-5">

                        GO
                    </Button>
                </InputGroup>
            </Form>

            {renderLoginContainer()}

            </Container>
        </Navbar>

    )
}