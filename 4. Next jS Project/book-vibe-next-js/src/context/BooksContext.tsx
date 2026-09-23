
'use client';
import { BookType } from '@/types/bookType';
import React, { createContext, ReactNode, useState } from 'react';

interface BooksContextType {
    readBooks: BookType[];
    setReadBooks: React.Dispatch<React.SetStateAction<BookType[]>>;
    wishList: BookType[];
    setWishList: React.Dispatch<React.SetStateAction<BookType[]>>;
}
export const BooksContext = createContext<BooksContextType>({
    readBooks: [],
    setReadBooks: () => { },
    wishList: [],
    setWishList: () => { }
});


const BooksProvider = ({ children }: { children: ReactNode }) => {

    const [readBooks, setReadBooks] = useState<BookType[]>([]);
    const [wishList, setWishList] = useState<BookType[]>([]);

    const sharedData: BooksContextType = {
        readBooks,
        setReadBooks,
        wishList,
        setWishList
    }
    return (
        <BooksContext.Provider value={sharedData}>
            {children}
        </BooksContext.Provider>
    );
};

export default BooksProvider;