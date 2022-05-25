import React from "react"
import { products } from "../Data/Productos"
import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import NavBar from "../NavBar/NavBar";

export default function ItemDetailContainer() {
    const [items, setItems] = useState([])
    const getItems = new Promise((resolve, reject) => {
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
        getItems
            .then((result) => setItems(result))
            .catch((error) => console.log(error))
    }, [])

    console.log(items) 
    return (
        <div>
            <ItemDetail items={items} />     
        </div>
         
    );
    
}