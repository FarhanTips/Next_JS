'use client'

import { BooksContext } from "@/context/BooksContext";
import { BookType } from "@/types/bookType";
import { useContext } from "react";
import { toast } from "react-toastify";


const ReadButton = ({book}: {book: BookType}) => {

    const {readBooks, setReadBooks} = useContext(BooksContext);

    const handleReadBook = () =>{
        setReadBooks([...readBooks, book]);
        toast.success("Added to Read List");
    }
    return (
        <div>
            <button onClick={() => handleReadBook()} className="btn btn-outline px-6">Read</button>
        </div>
    );
};

export default ReadButton;