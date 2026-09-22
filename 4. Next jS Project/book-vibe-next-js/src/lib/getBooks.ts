import { BookType } from "@/types/bookType";


export const getBooks = async (): Promise<BookType[]> => {
    const res = await fetch("http://localhost:3000/booksData.json");
    const data = await res.json();
    return data;
}