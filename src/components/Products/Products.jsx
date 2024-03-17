import ProductItem from "../ProductItem/ProductItem"
import productData from "../../../src/productData"; 
const Products = (props) => {
    return (
        <div className="grid grid-cols-3  mt-24">
            {productData.map((product) => (
                <ProductItem key={product.id} product={product} cart={props.cart} setCart={props.setCart} />
            ))}

        </div>
    )
}

export default Products