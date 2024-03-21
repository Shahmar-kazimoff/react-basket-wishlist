import React from 'react';
import { useWishlist } from "../Context/Context";
import { RiDeleteBin5Line } from "react-icons/ri";

const Wishlist = () => {
    const { wishlist, removeFromWishlist } = useWishlist();

    return (
        <div>
            <ul className='flex'>
                {wishlist.map((product) => (
                    <li key={product.id}>
                        <div className="border p-1 m-2 rounded-lg shadow-lg relative">
                            <img
                                className="border w-96 object-cover"
                                src={product.image}
                                alt="Product"
                            />
                            <div className="p-2">
                                <h2 className="lg:text-2xl text-xs font-semibold">{product.name}</h2>
                                <p className="text-gray-500 my-2">${product.price}</p>
                                <button onClick={() => removeFromWishlist(product.id)}>
                                    <RiDeleteBin5Line className='text-2xl' />
                                </button>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Wishlist;
