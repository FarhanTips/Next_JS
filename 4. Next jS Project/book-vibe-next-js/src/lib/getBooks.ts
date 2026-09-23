import { BookType } from "@/types/bookType";


export const getBooks = async (): Promise<BookType[]> => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/booksData.json`);
        const data = await res.json();
        return data;
    }catch(error){
        console.error("Error fetching books:", error);
        return [];
    }

}