import React from "react"
import { products } from "../Data/Productos"
import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";

export default function ItemDetailContainer() {
    const [product, setProduct] = useState([])
    const getItem = new Promise((resolve, reject) => {
        let condition = true
        setTimeout(() => {
            if (condition) {
                resolve(products)
            } else {
                reject('Someting went wrong')
            }
        }, 2000)
    })

    useEffect(() => {
        getItem
            .then((result) => setProduct(result))
            .catch((error) => console.log(error))
    }, [])

    console.log(product) 
    return (
        <div>
            <ItemDetail product={product} />         
        </div>
    );

}