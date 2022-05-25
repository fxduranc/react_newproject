import Item from "../Item/Item";

export default function ItemList(props) {
    const {productsList} = props
    return (
        <div>
            <h3>Lista de Productos</h3>
            {productsList.map ((product) => 
            <Item product={product} key={product.id} />
            )}
        </div>



    );

}