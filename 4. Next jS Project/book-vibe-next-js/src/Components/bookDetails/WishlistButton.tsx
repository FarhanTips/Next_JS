'use client'

import { BooksContext } from "@/context/BooksContext";
import { BookType } from "@/types/bookType";
import { useContext } from "react";
import { toast } from "react-toastify";


const WishListButton = ({ book }: { book: BookType }) => {

    const { wishList, setWishList } = useContext(BooksContext);

    const handleWishListButton = () => {
        setWishList([...wishList, book]);
        toast.success("Added to Wish List");
    }
    return (
        <div>
            <button onClick={()=> handleWishListButton()} className="btn btn-info text-white px-7">Wishlist</button>
        </div>
    );
};

export default WishListButton;