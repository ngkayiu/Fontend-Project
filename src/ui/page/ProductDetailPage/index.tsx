import TopNavBar from "../../components/TopNavBar.tsx";
import {Button, Container} from "react-bootstrap";
import QuantitySelector from "../../components/QuantitySelector.tsx";
import {useContext, useEffect, useState} from "react";
import type {ProductDto} from "../../../data/product/product.type.ts";

// import mockData from "./response.json"
import LoadingContainer from "../../components/LoadingContainer.tsx";
import {Link, useNavigate, useParams} from "@tanstack/react-router";
import {getProductByPid} from "../../../api/product/productApi.ts";
import {LoginUserContext} from "../../../context/LoginUserContext.tsx";
import {putCartItem} from "../../../api/cartItem/cartItemApi.ts";


export default function ProductDetailPage(){

    const [productDto, setProductDto] = useState<ProductDto | undefined>(undefined);
    const [isLoading, setIsLoading] = useState(true);

    const loginUser = useContext(LoginUserContext);
    const [isAddingToCart, setIsAddingToCart] = useState(false)
    const [isAddSuccess, setIsAddSuccess] = useState(false)

    const {productId} = useParams({from:"/product/$productId"});
    const navigate = useNavigate({from:"/product/$productId"})

    const [quantity, setQuantity] = useState(1);
    const handleQuantityMinusOne =  () =>{
        if (quantity > 1){
            setQuantity(prevState => (prevState - 1))
        }
    }
    const handleQuantityPlusOne =  () =>{
        if (productDto && quantity < productDto.stock){
            setQuantity(prevState => (prevState + 1))
        }
    }

    const handlePutCartItem = async ()=>{
        if(loginUser === null) {
            navigate({to:"/login"})
        } else if (loginUser){
            try{
                if(productDto){
                    setIsAddingToCart(true);
                    await putCartItem(productDto.pid, quantity);
                    setIsAddingToCart(false);
                    setIsAddSuccess(true);

                    setTimeout( ()=>{
                        setIsAddSuccess(false);
                    }, 2000
                    )
                }
            }catch{
                navigate({to:"/error"})
            }
        }
    }

    const renderAddtoCartBtn = () =>{
        if (productDto && productDto.stock>0){

            if(isAddSuccess){
                return (
                    <Button className="btn-warning text-white" disabled style={{width: 180}}>Done</Button>
                )
            }

            if(isAddingToCart){
                return(
                    <Button className="btn-dark text-white" disabled style={{width: 180}}>Processing</Button>
                )
            }
                return(
                <Button className="btn-dark text-white" onClick={handlePutCartItem} style={{width: 180}}>Add to cart</Button>
                )
            } else {
                return(
                <Button disabled
                        className="btn-dark text-white" style={{width: 180}}>Out of Stock</Button>
                )
            }
    }

    useEffect(() => {
        const fetchProductByPid = async () =>{
            try{
                const responseData = await getProductByPid(productId);
                setProductDto(responseData);
                setIsLoading(false);
            } catch {
                navigate({to:"/error"});
            }
        }
        fetchProductByPid();
    }, []);

    return(
       <>
        <TopNavBar/>
       {
        productDto && !isLoading
           ? (
                <Container className="my-5">
                    <div className="d-flex justify-content-center">
                        <div>
                            <img src={productDto.image_url}
                                 width="450"
                                 className="me-4 w-30"
                            />
                            <div style={{width: '450px'}}>
                                <h4 className="mt-5 mb-3">Description</h4>
                                <h6 className="text-secondary fw-light mb-5">{productDto.description}</h6>
                                <h4 className="mb-3">Tracklisting</h4>
                                <h6 className="text-secondary fw-light"
                                    style={{whiteSpace:"pre-line", lineHeight:"1.8"}}
                                >
                                    {productDto.track_list}
                                </h6>
                            </div>
                        </div>

                        <div className="ms-4">
                            <h2>{productDto.artist}</h2>
                            <h2 className="mb-4">{productDto.album}</h2>
                            
                                {/*<Link to={`/genre/${productDto.genre}`}>*/}
                                    <div className="d-flex justify-content-start align-items-baseline">
                                        <span className="me-2 mb-5 text-secondary">Genre:</span>
                                        <Button className="btn-sm btn-warning text-white" >{productDto.genre}</Button>
                                    </div>
                                {/*</Link>*/}
                            
                            <div className="d-flex justify-content-start align-items-baseline">
                                <h6 className="me-3 mb-5">Price: </h6>
                                <h4 style={{color:"#FB6500"}}>HK${productDto.price.toLocaleString()}</h4>
                            </div>
                            <div className="d-flex justify-content-start mb-4">
                                <h6 className="mb-0 me-2" style={{  lineHeight: '2.5' }}>Quantity:</h6>
                                <QuantitySelector
                                                quantity={quantity}
                                                handleQuantityMinusOne={handleQuantityMinusOne}
                                                handleQuantityPlusOne={handleQuantityPlusOne}
                                                stock={productDto.stock}
                                />
                            </div>
                            {renderAddtoCartBtn()}
                        </div>
                    </div>
                </Container>
            )
            : <LoadingContainer/>
       }
       </>
    )
}