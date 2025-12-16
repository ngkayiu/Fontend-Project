import {Button, Spinner, Stack} from "react-bootstrap";

interface Props{
    quantity: number;
    handleQuantityMinusOne: () => void;
    handleQuantityPlusOne: () => void;
    isLoading?: boolean;
    stock: number;
}

export default function QuantitySelector({
                                             quantity,
                                             handleQuantityMinusOne,
                                             handleQuantityPlusOne,
                                                isLoading=false,
                                                stock
                                         }:Props){
    return(
        <Stack direction="horizontal" className="mb-0">
            <Button onClick={handleQuantityMinusOne} disabled={isLoading || quantity<=1} className="btn-sm btn-secondary"> - </Button>
            <span className="mx-3 fs-6 d-inline-flex align-items-center justify-content-center"
                  style={{ width: '0.5rem', height: '1rem' }}>
                {isLoading? <Spinner size="sm"/>: quantity}
            </span>
            <Button onClick={handleQuantityPlusOne} disabled={isLoading || quantity>=stock} className="btn-sm btn-secondary"> + </Button>
        </Stack>
    )
}