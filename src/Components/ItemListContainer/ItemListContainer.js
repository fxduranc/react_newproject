import { Container, Col, Row, Card } from 'react-bootstrap'
import ItemCount from '../ItemCount/ItemCount';
import ItemList from '../ItemList/ItemList';
import React from "react"
import { products } from "../Data/Productos"
import { useEffect, useState } from "react";
import NavBar from '../NavBar/NavBar';
import { useParams } from 'react-router-dom';

export default function ItemListContainer({ greeting }) {
    const {categoryId} = useParams ();
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

    useEffect(() => {
        

    }, [])

    console.log('Lista de Productos', productsList)
    return (
        <Container fluid>
            <>
                <NavBar />
                <Card className="text-center">
                    <Card.Body>
                        <Card.Text>
                            <h1>Todo para tu Oufit</h1>
                        </Card.Text>
                    </Card.Body>
                    <Card.Img sm md lg xl variant="bottom" width={100} height={350} src="Images/Banner/shopping-bags-and-a-group-of-multiethnic-shoppers_01.png" />
                </Card>
                <br></br>
            </>
            <Row className="justify-content-md-center">
                <Col sm md lg xl><ItemCount /></Col>
                <Col sm md lg xl><ItemCount /></Col>
                <Col sm md lg xl><ItemCount /></Col>
            </Row>
            <br></br>
            <Row className="justify-content-md-center">
                <ItemList productsList={productsList} />
            </Row>
        </Container>
    );
}