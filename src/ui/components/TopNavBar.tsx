import {Button, Col, Container, Form, Navbar} from "react-bootstrap";

export default function TopNavBar(){
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

            <Form className="d-flex">
                <Col xs="auto">
                        <Form.Control
                            type="text"
                            placeholder="Search"
                            className="rounded-start-5"
                            size="sm"
                        />
                </Col>
                <div>
                    <Button type="submit" size="sm" className="btn-warning rounded-end-5">
                        GO
                    </Button>
                </div>
            </Form>

            <div id="login-btn" className="text-light fs-7">
                Login
            </div>
            </Container>
        </Navbar>

    )
}