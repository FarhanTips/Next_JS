import ReadButton from '@/Components/bookDetails/ReadButton';
import WishListButton from '@/Components/bookDetails/WishlistButton';
import { getBooks } from '@/lib/getBooks';
import { BookType } from '@/types/bookType';
import Image from 'next/image';
import React from 'react';

interface BookDetailsProps {
    params: Promise<{
        slug: string;
    }>;
}
const BookDetails = async ({ params }: BookDetailsProps) => {
    const { slug } = await params;

    const books = await getBooks();
    const book = books.find(book => book.bookId === Number(slug)) as BookType;

    return (
        <div className="mx-auto my-12 grid w-11/12 max-w-6xl grid-cols-1 gap-10 rounded-3xl border border-gray-200 bg-white p-6 shadow-lg md:grid-cols-2 md:p-10">

            {/* Left - Book Image */}
            <div className="flex items-center justify-center rounded-2xl bg-linear-to-br from-slate-50 to-slate-100 p-8">
                <Image
                    src={book.image}
                    alt={book.bookName}
                    width={400}
                    height={550}
                    className="max-h-137.5 w-auto rounded-xl object-contain shadow-xl"
                />
            </div>

            {/* Right - Book Details */}
            <div className="flex flex-col justify-center">

                {/* Book Name */}
                <h1 className="text-4xl font-bold leading-tight text-[#131313] md:text-5xl">
                    {book.bookName}
                </h1>

                {/* Author */}
                <p className="mt-3 text-lg text-gray-500">
                    By: <span className="font-semibold text-gray-800">{book.author}</span>
                </p>

                {/* Category */}
                <div className="mt-5">
                    <span className="rounded-full border border-green-200 bg-green-50 px-4 py-1.5 text-sm font-semibold text-green-600">
                        {book.category}
                    </span>
                </div>

                {/* Review */}
                <p className="mt-6 text-justify text-base leading-7 text-gray-600">
                    {book.review}
                </p>

                {/* Book Information */}
                <div className="mt-7 grid grid-cols-2 gap-x-6 gap-y-4 border-y border-gray-200 py-5">

                    <div>
                        <p className="text-sm text-gray-400">Total Pages</p>
                        <p className="mt-1 font-semibold text-gray-800">
                            {book.totalPages}
                        </p>
                    </div>

                    <div>
                        <p className="text-sm text-gray-400">Publisher</p>
                        <p className="mt-1 font-semibold text-gray-800">
                            {book.publisher}
                        </p>
                    </div>

                    <div>
                        <p className="text-sm text-gray-400">Year of Publishing</p>
                        <p className="mt-1 font-semibold text-gray-800">
                            {book.yearOfPublishing}
                        </p>
                    </div>

                    <div>
                        <p className="text-sm text-gray-400">Rating</p>
                        <p className="mt-1 font-semibold text-gray-800">
                            <span className="mr-1 text-lg">☆</span>
                            {book.rating}
                        </p>
                    </div>

                </div>

                {/* Buttons */}
                <div className="mt-7 flex gap-4">

                    <ReadButton book={book}></ReadButton>
                    <WishListButton book={book}></WishListButton>

                </div>

            </div>
        </div>
    );
};

export default BookDetails;