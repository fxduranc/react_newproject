import Item from "../Item/Item";

export default function ItemList(props) {
    const {items} = props
    return (
        <div>
            <h3>Lista de Productos</h3>
            {items.map ((product) => 
            <Item product={product} key={product.id} />
            )}
        </div>



    );

}