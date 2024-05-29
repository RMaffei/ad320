import { identity, reverseArray, mapObject, filterArray } from './libraryUtils';

// identity example
const numIdentity = identity<number>(1);
const strIdentity = identity<string>("Rae");

// book interface { details }
interface Book {
  title: string;
  author: string;
  year: number;
  genre: string;
}

// books array
const books: Book[] = [
  { title: "Redwall", author: "Brian Jacques", year: 1986, genre: "Fantasy" },
  { title: "Dune", author: "Frank Herbert", year: 1965, genre: "Sci-Fi" },
  { title: "The Lord of the Rings", author: "J.R.R. Tolkien", year: 1954, genre: "Fantasy" },
];

// reverse collection of books
const reversedBooks = reverseArray(books);

// convert the array to an object for mapObject example
const booksObject = {
  1: { title: "Redwall", author: "Brian Jacques", year: 1986, genre: "Fantasy" },
  2: { title: "Dune", author: "Frank Herbert", year: 1965, genre: "Sci-Fi" },
  3: { title: "The Lord of the Rings", author: "J.R.R. Tolkien", year: 1954, genre: "Fantasy" },
};

// map book object to matching title
const bookTitles = mapObject(booksObject, (book) => book.title);

// map books to genres
function mapBooksToGenres(bookObj: Record<number, Book>): Record<number, string> {
    return mapObject(bookObj, (book) => book.genre);
} 

// id, title, genres example
const bookGenres = mapBooksToGenres(booksObject);
console.log(bookGenres); 

// filter books published after 1966
const recentBooks = filterArray(books, (book) => book.year > 1966);

console.log(numIdentity); 
console.log(strIdentity); 
console.log(reversedBooks); 
console.log(bookTitles);
console.log(recentBooks);