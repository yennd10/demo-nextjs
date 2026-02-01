"use client"
import { useState } from "react";
import InputProduct from "./input-product";
import "./product.css";

const ProductList = () => {
    const [listProducts, setListProducts] = useState(["First product title"]);

    return (
        <>            
            <InputProduct  listProducts = {listProducts} setListProducts = {setListProducts}/>
            <div className="product-list">
                <p className="font-bold">List To Do</p>
                <ul className="w-full">
                    {listProducts.map((item, index) => {
                        return (
                            <li key={index}>{item}</li>
                        )
                    })}                
                </ul>
            </div>
        </>
    );
}

export default ProductList;
