
// Sample data for 20 books
const booksData = [
  {
    name: "The Great Gatsby",
    image: "https://cdn.kobo.com/book-images/2411acbb-9daa-43fb-a5a2-a9aec064e17e/1200/1200/False/the-great-gatsby-238.jpg",
    authorName: "F. Scott Fitzgerald",
    price: 12.99,
    copiesSold: 500,
    releaseDate: new Date('1925-04-10'),
    rating: 4.3,
    publisherName: "Scribner",
    about: "The Great Gatsby is a novel by American writer F. Scott Fitzgerald. It is set in the Jazz Age on Long Island, New York."
  },
  {
    name: "To Kill a Mockingbird",
    image: "https://m.media-amazon.com/images/I/41j-s9fHJcL.jpg",
    authorName: "Harper Lee",
    price: 10.99,
    copiesSold: 800,
    releaseDate: new Date('1960-07-11'),
    rating: 4.5,
    publisherName: "J. B. Lippincott & Co.",
    about: "To Kill a Mockingbird is a novel by Harper Lee published in 1960. It was immediately successful, winning the Pulitzer Prize."
  },
  {
    name: "1984",
    image: "https://m.media-amazon.com/images/I/7180qjGSgDL._AC_UF1000,1000_QL80_.jpg",
    authorName: "George Orwell",
    price: 9.99,
    copiesSold: 1000,
    releaseDate: new Date('1949-06-08'),
    rating: 4.6,
    publisherName: "Secker & Warburg",
    about: "1984 is a dystopian social science fiction novel by English novelist George Orwell. It was published on 8 June 1949."
  },
  {
    name: "Pride and Prejudice",
    image: "https://m.media-amazon.com/images/I/91eKRbuhgaL._AC_UF1000,1000_QL80_.jpg",
    authorName: "Jane Austen",
    price: 8.99,
    copiesSold: 700,
    releaseDate: new Date('1813-01-28'),
    rating: 4.4,
    publisherName: "T. Egerton, Whitehall",
    about: "Pride and Prejudice is an 1813 romantic novel of manners written by Jane Austen. The novel follows the character development of Elizabeth Bennet."
  },
  {
    name: "The Catcher in the Rye",
    image: "https://npr.brightspotcdn.com/dims4/default/f735808/2147483647/strip/true/crop/363x574+0+0/resize/880x1392!/quality/90/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2Flegacy%2Fsites%2Fwkar%2Ffiles%2Fcatcher_in_the_rye_cover.png",
    authorName: "J. D. Salinger",
    price: 11.99,
    copiesSold: 600,
    releaseDate: new Date('1951-07-16'),
    rating: 4.1,
    publisherName: "Little, Brown and Company",
    about: "The Catcher in the Rye is a novel by J. D. Salinger, partially published in serial form in 1945–1946 and as a novel in 1951."
  },
  {
    name: "Harry Potter and the Philosopher's Stone",
    image: "https://images-eu.ssl-images-amazon.com/images/I/81q77Q39nEL._AC_UL210_SR210,210_.jpg",
    authorName: "J. K. Rowling",
    price: 14.99,
    copiesSold: 1500,
    releaseDate: new Date('1997-06-26'),
    rating: 4.8,
    publisherName: "Bloomsbury",
    about: "Harry Potter and the Philosopher's Stone is a fantasy novel written by British author J. K. Rowling. It is the first novel in the Harry Potter series."
  },
  {
    name: "The Hobbit",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a9/The_Hobbit_trilogy_dvd_cover.jpg/220px-The_Hobbit_trilogy_dvd_cover.jpg",
    authorName: "J. R. R. Tolkien",
    price: 13.99,
    copiesSold: 900,
    releaseDate: new Date('1937-09-21'),
    rating: 4.7,
    publisherName: "George Allen & Unwin",
    about: "The Hobbit, or There and Back Again is a children's fantasy novel by English author J. R. R. Tolkien. It was published on 21 September 1937."
  },
  {
    name: "The Lord of the Rings",
    image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1566425108l/33.jpg",
    authorName: "J. R. R. Tolkien",
    price: 24.99,
    copiesSold: 1200,
    releaseDate: new Date('1954-07-29'),
    rating: 4.9,
    publisherName: "George Allen & Unwin",
    about: "The Lord of the Rings is an epic high fantasy novel by English author and scholar J. R. R. Tolkien. It was published in three volumes."
  },
  {
    name: "The Alchemist",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPjinzCwq9paxYaQXq5DP7LDp1Rb59NO_GkA&s",
    authorName: "Paulo Coelho",
    price: 10.99,
    copiesSold: 950,
    releaseDate: new Date('1988-01-01'),
    rating: 4.5,
    publisherName: "HarperCollins",
    about: "The Alchemist is a novel by Brazilian author Paulo Coelho that was first published in 1988. It follows the journey of an Andalusian shepherd boy."
  },
  {
    name: "The Da Vinci Code",
    image: "https://m.media-amazon.com/images/I/71y4X5150dL._AC_UF1000,1000_QL80_.jpg",
    authorName: "Dan Brown",
    price: 11.99,
    copiesSold: 850,
    releaseDate: new Date('2003-03-18'),
    rating: 4.2,
    publisherName: "Doubleday",
    about: "The Da Vinci Code is a mystery thriller novel by Dan Brown. It follows symbologist Robert Langdon and cryptologist Sophie Neveu after a murder."
  },
  {
    name: "The Shining",
    image: "https://cdn.kobo.com/book-images/c6b01ca1-74fc-4986-b958-f3ea423a2da5/1200/1200/False/the-shining.jpg",
    authorName: "Stephen King",
    price: 9.99,
    copiesSold: 550,
    releaseDate: new Date('1977-01-28'),
    rating: 4.6,
    publisherName: "Doubleday",
    about: "The Shining is a horror novel by American author Stephen King. It was King's third published novel and first hardback bestseller."
  },
  {
    name: "Brave New World",
    image: "https://upload.wikimedia.org/wikipedia/en/6/62/BraveNewWorld_FirstEdition.jpg",
    authorName: "Aldous Huxley",
    price: 8.99,
    copiesSold: 400,
    releaseDate: new Date('1932-06-01'),
    rating: 4.4,
    publisherName: "Chatto & Windus",
    about: "Brave New World is a dystopian social science fiction novel by English author Aldous Huxley. It was published in 1932."
  },
  {
    name: "Moby-Dick",
    image: "https://m.media-amazon.com/images/I/41RVtE3JJIL.jpg",
    authorName: "Herman Melville",
    price: 11.99,
    copiesSold: 300,
    releaseDate: new Date('1851-10-18'),
    rating: 4.1,
    publisherName: "Richard Bentley",
    about: "Moby-Dick; or, The Whale is an 1851 novel by American writer Herman Melville. The book is the sailor Ishmael's narrative."
  },
  {
    name: "The Adventures of Sherlock Holmes",
    image: "https://m.media-amazon.com/images/I/61OfF1cJskL._AC_UF1000,1000_QL80_.jpg",
    authorName: "Arthur Conan Doyle",
    price: 7.99,
    copiesSold: 600,
    releaseDate: new Date('1892-10-14'),
    rating: 4.7,
    publisherName: "George Newnes",
    about: "The Adventures of Sherlock Holmes is a collection of twelve short stories by Arthur Conan Doyle, featuring his detective Sherlock Holmes."
  },
  {
    name: "Slaughterhouse-Five",
    image: "https://m.media-amazon.com/images/I/81VuxYiOouL._AC_UF1000,1000_QL80_.jpg",
    authorName: "Kurt Vonnegut",
    price: 9.99,
    copiesSold: 350,
    releaseDate: new Date('1969-03-31'),
    rating: 4.3,
    publisherName: "Delacorte Press",
    about: "Slaughterhouse-Five, or The Children's Crusade: A Duty-Dance with Death is a science fiction-infused anti-war novel by Kurt Vonnegut."
  },
  {
    name: "The Road",
    image: "https://m.media-amazon.com/images/I/51M7XGLQTBL._AC_UF1000,1000_QL80_.jpg",
    authorName: "Cormac McCarthy",
    price: 12.99,
    copiesSold: 250,
    releaseDate: new Date('2006-09-26'),
    rating: 4.5,
    publisherName: "Alfred A. Knopf",
    about: "The Road is a 2006 post-apocalyptic novel by American writer Cormac McCarthy. It won the Pulitzer Prize for Fiction in 2007."
  },
  {
    name: "Frankenstein",
    image: "https://m.media-amazon.com/images/I/81z7E0uWdtL._AC_UF1000,1000_QL80_.jpg",
    authorName: "Mary Shelley",
    price: 8.99,
    copiesSold: 400,
    releaseDate: new Date('1818-01-01'),
    rating: 4.2,
    publisherName: "Lackington, Hughes, Harding, Mavor, & Jones",
    about: "Frankenstein; or, The Modern Prometheus is a novel written by English author Mary Shelley that tells the story of Victor Frankenstein."
  },
  {
    name: "The Picture of Dorian Gray",
    image: "https://m.media-amazon.com/images/I/71ZpShPyThL._AC_UF1000,1000_QL80_.jpg",
    authorName: "Oscar Wilde",
    price: 10.99,
    copiesSold: 500,
    releaseDate: new Date('1890-06-20'),
    rating: 4.4,
    publisherName: "Ward, Lock and Company",
    about: "The Picture of Dorian Gray is a Gothic and philosophical novel by Oscar Wilde, first published complete in the July 1890 issue of Lippincott's Monthly Magazine."
  },
  {
    name: "The Grapes of Wrath",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtVcSQFGYirxzyD1hVL2L1S4wneoflwRG1Bg&s",
    authorName: "John Steinbeck",
    price: 11.99,
    copiesSold: 300,
    releaseDate: new Date('1939-04-14'),
    rating: 4.3,
    publisherName: "The Viking Press",
    about: "The Grapes of Wrath is an American realist novel written by John Steinbeck and published in 1939. It won the National Book Award and Pulitzer Prize."
  }
  // Add more books as needed
  // Repeat the structure for each book
];

module.exports= {data: booksData};