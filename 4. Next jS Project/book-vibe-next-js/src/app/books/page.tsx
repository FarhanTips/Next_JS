import BooksCard from "@/Components/BooksCard";
import { getBooks } from "@/lib/getBooks";




const BooksPage = async () => {

    const books = (await getBooks());
    return (
        <div className="w-10/12 mx-auto my-25">
            <h2 className="text-center text-4xl font-semibold tracking-tight text-[#131313]">
                Explore All Books
            </h2>
            <div className="grid grid-cols-3 gap-6 mt-15 mb-30">
                {books.map(book => (
                    <BooksCard key={book.bookId} book={book} />
                ))}
            </div>
        </div>

    );
};

export default BooksPage;
