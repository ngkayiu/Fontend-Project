import {Button, Stack} from "react-bootstrap";

interface Props{
    quantity: number;
    handleQuantityMinusOne: () => void;
    handleQuantityPlusOne: () => void;
}

export default function QuantitySelector({
                                             quantity,
                                             handleQuantityMinusOne,
                                             handleQuantityPlusOne
                                         }:Props){
    return(
        <Stack direction="horizontal" className="mb-0">
            <Button onClick={handleQuantityMinusOne} className="btn-sm btn-secondary"> - </Button>
            <span className="mx-3 fs-6">{quantity}</span>
            <Button onClick={handleQuantityPlusOne} className="btn-sm btn-secondary"> + </Button>
        </Stack>
    )
}