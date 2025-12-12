import {Card} from "react-bootstrap";
import type {GetAllProductDto} from "../../../../data/product/product.type.ts";
import {Link} from "@tanstack/react-router";

interface Props{
    getAllProductDto: GetAllProductDto;
}

export default function ProductCard({getAllProductDto}:Props){
    return(
        <Link to={"/product/$productId"} params={{productId: getAllProductDto.pid.toString()}}
              className="text-decoration-none">
        <Card id="card" style={{ width: '14rem'}}>
            <div className="justify-content-center text-center">
            <Card.Img id="cardImg" variant="top" src={getAllProductDto.image_url} style={{height:200}}/>
            <Card.Body>
                <Card.Title className="fs-6 fw-bold">{getAllProductDto.artist}</Card.Title>
                <Card.Title className="fs-6 fw-bold" style={{height:"2rem"}}>{getAllProductDto.album}</Card.Title>
                <Card.Text className="fw-bold fs-7" style={{color:"#FB6500"}}>${getAllProductDto.price.toLocaleString()}</Card.Text>

                {getAllProductDto.hasStock
                    ? <Card.Text className="square border bg-dark text-white text-center small text-1"
                                 style={{width: 80}}>In Stock</Card.Text>
                    : <Card.Text className="square border bg-secondary text-white text-center small text-1"
                                 style={{width: 100}}>Out Of Stock</Card.Text>
                }
            </Card.Body>
            </div>
        </Card>
        </Link>
    );
}