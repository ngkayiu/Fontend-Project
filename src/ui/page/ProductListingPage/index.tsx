import TopNavBar from "../../components/TopNavBar.tsx";
import "./style.css";

import TopPhoto from "./components/TopPhoto.tsx";
import ProductCardContainer from "./components/ProductCardContainer.tsx";

// import mockdata from "./response.json"
import {useEffect, useState} from "react";
import type {GetAllProductDto} from "../../../data/product/product.type.ts";
import LoadingContainer from "../../components/LoadingContainer.tsx";
import {getAllProduct} from "../../../api/product/productApi.ts";
import {useNavigate} from "@tanstack/react-router";

export default function ProductListingPage(){

    const [getAllProductDtoList, setGetAllProductDtoList] = useState<GetAllProductDto[] | undefined>(undefined);
    const [isLoading, setIsLoading] = useState(true);

    const navigate = useNavigate({from:"/"})

    useEffect(() => {
        const fetchAllProduct = async () => {
            try{
                const responseData : GetAllProductDto[] = await getAllProduct();
                setGetAllProductDtoList(responseData);
                setIsLoading(false);
            } catch {
                navigate({to:"/error"});
            }

        }
        fetchAllProduct();
    }, []);
    return(
        <>
            <TopNavBar/>
            <TopPhoto/>
            {
                getAllProductDtoList && !isLoading
                ?
                    <ProductCardContainer getAllProductDtoList={getAllProductDtoList}/>
                :   <LoadingContainer/>
            }

        </>
    )
}