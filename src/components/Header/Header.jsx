import { FaRegHeart, FaHeart } from "react-icons/fa";
import CartIcon from '../CartIcon/CartIcon';
import { Link } from 'react-router-dom';
import { useWishlist } from "../Context/Context";


const Header = ({ cart, emptyCart, setCart }) => {
    const { wishlist } = useWishlist();
    return (
        <div className='flex justify-between items-center bg-black py-3 px-4 fixed left-0 right-0 top-0 z-10'>
            <div className='text-2xl text-white cursor-pointer'>Shopping Cart</div>
            <div className="flex justify-center items-center gap-4">
                <CartIcon cart={cart} emptyCart={emptyCart} setCart={setCart} />
                <Link to="/wishlist" className="text-white text-xl cursor-pointer">
                    {wishlist.length > 0 ? (
                        <FaHeart className="text-xl text-red-500" />
                    ) : (
                        <FaRegHeart className="text-xl" />
                    )}
                </Link>
            </div>
        </div>
    )
}

export default Header