import {Outlet, createRootRoute} from '@tanstack/react-router'
import {useEffect, useState} from "react";
import type {UserData} from "../data/user/user.type.ts";
import {onAuthStateChanged} from "../authService/FirebaseAuthService.ts";
import {LoginUserContext} from "../context/LoginUserContext.tsx";
import {GetAllProductContext} from "../context/GetAllProductContext.tsx";
import type {GetAllProductDto} from "../data/product/product.type.ts";
import {getAllProduct} from "../api/product/productApi.ts";

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {

  const [loginUser, setLoginUser] = useState<UserData | null | undefined>(undefined);
  const [getAllProductDtoList, setGetAllProductDtoList] = useState<GetAllProductDto[] | null | undefined>(undefined);

  useEffect(() => {
    onAuthStateChanged(setLoginUser)
    const fetchAllProduct = async () => {

      const responseData: GetAllProductDto[] = await getAllProduct();
      setGetAllProductDtoList(responseData);
    }
    fetchAllProduct();
  }, []);

  return (
    <GetAllProductContext.Provider value={getAllProductDtoList}>
    <LoginUserContext.Provider value={loginUser}>
      <Outlet/>
    </LoginUserContext.Provider>
    </GetAllProductContext.Provider>
  )
}
