'use client'

import ListedBooksCard from '@/Components/listedBooksCard';
import { BooksContext } from '@/context/BooksContext';
import { BookType } from '@/types/bookType';
import React, { useContext } from 'react';

const ListedBooksPage = () => {

    const { readBooks, setReadBooks, wishList, setWishList } = useContext(BooksContext);
    console.log("R", readBooks);
    console.log("w", wishList)
    return (
        <div className="tabs tabs-lift w-10/12 mx-auto">
            <input type="radio" name="my_tabs_3" className="tab" 
            aria-label={`Read Books (${readBooks.length})`} defaultChecked
            />

            <div className="tab-content bg-base-100 border-base-300 p-6">
                <div className="space-y-4">
                    {
                    readBooks.map((book: BookType) => <ListedBooksCard key={book.bookId} book={book}></ListedBooksCard>)
                    }
                </div>
            </div>


            <input type="radio" name="my_tabs_3" className="tab"
            aria-label={`Wishlist (${wishList.length})`}
            />

            <div className="tab-content bg-base-100 border-base-300 p-6">
                <div className="space-y-4">
                    {
                    wishList.map((book: BookType) => <ListedBooksCard
                            key={book.bookId}
                            book={book}></ListedBooksCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ListedBooksPage;




/***
 * 
 * 
 * Wishlist tab e gele বর্তমান DaisyUI tabs code-এ readBooks unmount হবে না, readBooks-এর <div> React tree থেকে remove হচ্ছে না।। Tab change করলে DaisyUI মূলত CSS দিয়ে কোন .tab-content দেখা যাবে সেটা পরিবর্তন করে। Tab switch → hide/show → UNMOUNT হয় না।
 * 
 * 
 * আর যদি তুমি condition দিয়ে করো: ReadBooks → unmount → Wishlist mount হবে।
 */


