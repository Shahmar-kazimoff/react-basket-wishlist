import { FaRegHeart } from "react-icons/fa";
import CartIcon from '../CartIcon/CartIcon';
import { Link } from 'react-router-dom';


const Header = ({ cart, emptyCart, setCart }) => {
    return (
        <div className='flex justify-between items-center bg-black py-3 px-4 fixed left-0 right-0 top-0 z-10'>
            <div className='text-2xl text-white cursor-pointer'>Shopping Cart</div>
            <div className="flex justify-center items-center gap-4">
                <CartIcon cart={cart} emptyCart={emptyCart} setCart={setCart} />
                <Link to="/wishlist" className="text-white text-xl cursor-pointer">
                    <FaRegHeart />
                </Link>
            </div>
        </div>
    )
}

export default Header