import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { useWishlist } from "../Context/Context";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductItem = ({ product, cart, setCart }) => {
    const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
    const toggleWishlist = () => {
        if (isInWishlist(product.id)) {
            removeFromWishlist(product.id);
        } else {
            addToWishlist(product);
            setTimeout(notify, 100);
        }
    };

    const notify = () => toast("Product added to Wishlist!");

    const addToCart = (product) => {
        setCart([...cart, product])
    }

    return (
        <div className="border p-1 m-2 rounded-lg shadow-lg relative">
            <img
                className="border w-full object-cover"
                src={product.image}
                alt="Product" />
            <div className="p-2">
                <h2 className="lg:text-2xl text-xs font-semibold">{product.name}</h2>
                <p className="text-gray-500 my-2">${product.price}</p>
                <button
                    className="bg-black py-2 text-white lg:text-xl text-xs rounded hover:bg-green-800 w-full  duration-200"
                    onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
            <button className="absolute top-2" onClick={toggleWishlist}>
                {isInWishlist(product.id) ? <FaHeart className="text-red-500" /> : <FaRegHeart />}
            </button>
            <ToastContainer />
        </div>
    )
}

export default ProductItem
