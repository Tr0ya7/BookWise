import BookCard from "./BookCard"

interface Props {
    title: string, books: Book[], containerClassName: string
}

const BookList = ({ title, books, containerClassName }: Props) => (
    <section className={ containerClassName }>
        <h2 className="font-bebas-neue text-4xl text-light-100">
            { title }
        </h2>
        <ul className="book-list">{/* w-screen */}
            { books.map((book, index) => <BookCard key={index} {...book} />) }
        </ul>
    </section>
)

export default BookList