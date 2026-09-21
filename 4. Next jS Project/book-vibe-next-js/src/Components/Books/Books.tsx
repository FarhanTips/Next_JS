import { BookType } from "@/types/bookType";
import BooksCard from "./BooksCard";

const getBooks = async (): Promise<BookType[]> => {
    const res = await fetch("http://localhost:3000/booksData.json");
    const data = await res.json();
    return data;
}


const Books = async () => {

    const books = await getBooks();
    return (
        <div className="w-10/12 mx-auto my-25">
            <h2 className="text-center text-4xl font-semibold tracking-tight text-[#131313]">
                Books
            </h2>
            <div className="grid grid-cols-3 gap-6 mt-15 mb-30">
                {books.map(book => (
                    <BooksCard key={book.bookId} book={book} />
                ))}
            </div>
        </div>

    );
};

export default Books;
