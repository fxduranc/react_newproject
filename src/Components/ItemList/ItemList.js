import React from "react"
import { products } from "../Data/Productos"
import { useEffect, useState } from "react";
import Item from "../Item/Item";

export default function ItemList() {
    const [productsList, setProductsList] = useState([])
    const getProducts = new Promise((resolve, reject) => {
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
        getProducts
            .then((result) => setProductsList(result))
            .catch((error) => console.log(error))
    }, [])

    console.log('Lista de Productos', productsList)
    return (
        <div>
            {productsList.map((product) => <Item product={product} key={product.id}/>)}
            
        </div>
    );

}