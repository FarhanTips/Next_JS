import { Inknut_Antiqua } from 'next/font/google';
import Link from 'next/link';
import React from 'react';

const BookCard = ({book}) => {
    return (
        <div className="card bg-base-100 border shadow-sm">
            <div className="card-body">
                <h2 className="card-title">{book.title}</h2>
                <p>{book.description}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                    <Link href={`/books/${book.id}`}><button className="btn btn-primary">Show Details</button></Link>
                </div>

            </div>
        </div>
    );
};

export default BookCard;