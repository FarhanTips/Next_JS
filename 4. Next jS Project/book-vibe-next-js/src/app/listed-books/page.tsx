'use client'

import ListedBooksCard from '@/Components/listedBooksCard';
import { BooksContext } from '@/context/BooksContext';
import { BookType } from '@/types/bookType';
import React, { useContext, useState } from 'react';

const ListedBooksPage = () => {

    const { readBooks, wishList } = useContext(BooksContext);

    const [sortBy, setSortBy] = useState("Sort By");

    const sortBooks = (books: BookType[]) => {
        const sortedBooks = [...books];
        if (sortBy === "rating"){
            sortedBooks.sort((a,b)=> b.rating - a.rating );
        }
        else if (sortBy === "pages"){
            sortedBooks.sort((a,b)=> b.totalPages - a.totalPages );
        }
        else if (sortBy === "year"){
            sortedBooks.sort((a,b)=> b.yearOfPublishing - a.yearOfPublishing );
        }
        else if (sortBy === "Sort By"){
            return sortedBooks;
        }
        return sortedBooks;
    }

    const sortedReadBooks = sortBooks(readBooks);
    const sortedWishList = sortBooks(wishList);

    return (
        <div className='w-10/12 mx-auto my-20'>

            {/* Sort By */}
            <div className='text-center mb-5'>
                <select
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value as "rating"|"pages"|"year"|"Sort By")}
                className="select select-success">
                    <option disabled={true}>Sort By</option>
                    <option value="rating">Rating</option>
                    <option value="pages">Number of pages</option>
                    <option value="year">Year of publication</option>
                </select>
            </div>

            {/* Tab */}
            <div className="tabs tabs-lift">
                <input type="radio" name="my_tabs_3" className="tab"
                    aria-label={`Read Books (${readBooks.length})`} defaultChecked
                />

                <div className="tab-content bg-base-100 border-base-300 p-6">
                    <div className="space-y-4">
                        {
                            sortedReadBooks.map((book: BookType) => <ListedBooksCard key={book.bookId} book={book}></ListedBooksCard>)
                        }
                    </div>
                </div>


                <input type="radio" name="my_tabs_3" className="tab"
                    aria-label={`Wishlist (${wishList.length})`}
                />

                <div className="tab-content bg-base-100 border-base-300 p-6">
                    <div className="space-y-4">
                        {
                            sortedWishList.map((book: BookType) => <ListedBooksCard
                                key={book.bookId}
                                book={book}></ListedBooksCard>)
                        }
                    </div>
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


