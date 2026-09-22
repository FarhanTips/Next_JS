import { BookType } from "@/types/bookType";
import Image from "next/image";
import Link from "next/link";

interface BooksCardProps {
    book: BookType
}

const BooksCard = ({ book }: BooksCardProps) => {
    return (
        <div className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

            {/* Image */}
            <div className="flex h-60 items-center justify-center bg-white p-5">
                <div className="flex h-full w-10/12 items-center justify-center rounded-2xl bg-linear-to-br from-slate-50 to-slate-100 py-5 shadow-inner ring-1 ring-slate-200/70">
                    <Image
                        src={book.image}
                        alt={book.bookName}
                        width={180}
                        height={230}
                        className="h-full w-auto rounded-lg object-contain drop-shadow-lg transition-transform duration-300 group-hover:scale-105"
                    />
                </div>
            </div>

            {/* Content */}
            <div className="p-4">

                {/* Category */}
                <span className="inline-block rounded-full border border-green-200 bg-green-50 px-3 py-1 text-xs font-medium text-green-600 shadow-sm">
                    {book.category}
                </span>

                {/* Book Name */}
                <h2 className="mt-3 text-xl font-bold leading-tight text-[#131313]">
                    {book.bookName}
                </h2>

                {/* Author */}
                <p className="mt-1.5 text-sm text-gray-500">
                    By: <span className="font-medium text-gray-700">{book.author}</span>
                </p>

                {/* Publisher & Rating */}
                <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-3">

                    <p className="max-w-[65%] truncate text-xs text-gray-500">
                        {book.publisher}
                    </p>

                    <div className="flex items-center gap-1 rounded-lg border border-gray-300 px-2 py-1 text-sm font-semibold text-gray-800 shadow-sm">
                        <span className="text-lg">☆</span>
                        <span>{book.rating}</span>
                    </div>

                </div>

                {/* View Details */}
                <Link href={`/books/${book.bookId}`}>
                    <button className="btn mt-4 w-full rounded-lg bg-black px-4 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-green-700">
                        View Details →
                    </button>
                </Link>

            </div>
        </div>
    );
};

export default BooksCard;