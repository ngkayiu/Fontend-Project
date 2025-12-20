import {Col, Container, Row} from "react-bootstrap";
import ProductCard from "./ProductCard.tsx";
import type {GetAllProductDto} from "../../../../data/product/product.type.ts";

interface Props {
  getAllProductDtoList: GetAllProductDto[];
}

export default function ProductCardContainer({getAllProductDtoList}: Props) {
  return (
    <Container className="px-5">
      <Row className="my-5">
        {
          getAllProductDtoList
          .map((getAllProductDto) => (
                <Col
                  className="d-flex justify-content-center my-3"
                  sm={6} md={5} lg={4} xl={3}>
                  <ProductCard
                    getAllProductDto={getAllProductDto}
                  />
                </Col>
              )
            )
        }
      </Row>

    </Container>
  )
}