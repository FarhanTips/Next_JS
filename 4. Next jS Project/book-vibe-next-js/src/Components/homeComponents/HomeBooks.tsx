
import BooksCard from "../BooksCard";
import { getBooks } from "@/lib/getBooks";




const HomeBooks = async () => {

    const books = (await getBooks()).slice(0,5);
    return (
        <div className="w-10/12 mx-auto my-25">
            <h2 className="text-center text-4xl font-semibold tracking-tight text-[#131313]">
                Popular Books
            </h2>
            <div className="grid grid-cols-3 gap-6 mt-15 mb-30">
                {books.map(book => (
                    <BooksCard key={book.bookId} book={book} />
                ))}
            </div>
        </div>

    );
};

export default HomeBooks;
