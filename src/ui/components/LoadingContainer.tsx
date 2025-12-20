import {Spinner} from "react-bootstrap";

export default function LoadingContainer() {
  return (
    <div className="d-flex justify-content-center align-items-center"
         style={{height: "70vh"}}
    >
      <Spinner animation="grow" variant="secondary"
               style={{width: "4rem", height: "4rem", margin: "50px 40px 50px 0px"}}>
      </Spinner>
      <Spinner animation="grow" variant="secondary"
               style={{width: "4rem", height: "4rem", margin: "50px 40px 50px 40px"}}>
      </Spinner>
      <Spinner animation="grow" variant="secondary"
               style={{width: "4rem", height: "4rem", margin: "50px 0px 50px 40px"}}>
      </Spinner>
    </div>
  )
}