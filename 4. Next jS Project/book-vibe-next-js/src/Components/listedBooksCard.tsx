import { BookType } from "@/types/bookType";
import Image from "next/image";
import Link from "next/link";


const ListedBooksCard = ({ book }: { book: BookType }) => {
    return (
        <div className="flex items-center gap-5 p-4 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">

            {/* Book Image */}
            <Image
                src={book.image}
                alt={book.bookName}
                width={80}
                height={112}
                className="w-20 h-28 object-cover rounded-lg"
            />

            {/* Book Info */}
            <div className="flex-1">
                <h2 className="text-xl font-bold text-gray-800">
                    {book.bookName}
                </h2>

                <p className="text-gray-500 mt-1">
                    by {book.author}
                </p>

                <div className="flex items-center gap-3 mt-3 text-sm">
                    <span className="px-3 py-1 bg-green-50 text-green-600 rounded-full">
                        {book.category}
                    </span>

                    <span className="text-gray-500">
                        {book.totalPages} pages
                    </span>

                    <span className="text-gray-500">
                        {book.yearOfPublishing}
                    </span>
                </div>
            </div>

            {/* Rating */}
            <div className="text-center px-5">
                <p className="text-yellow-500 text-xl font-bold">
                    ★ {book.rating}
                </p>
                <p className="text-sm text-gray-400">Rating</p>
            </div>

            {/* Button */}
            <Link href={`/books/${book.bookId}`}>
                <button className="px-5 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
                    View Details
                </button>
            </Link>
        </div>
    );
};

export default ListedBooksCard;