import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: 1,
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    description: "A young wizard begins his magical journey at Hogwarts.",
    rating: 4.9,
    category: "Fantasy",
    image: "/1.webp"
  },
  {
    id: 2,
    title: "Twilight",
    author: "Stephenie Meyer",
    description: "A teenage girl falls in love with a vampire.",
    rating: 4.2,
    category: "Fantasy",
    image: "/2.jpg"
  },
  {
    id: 3,
    title: "Dune",
    author: "Frank Herbert",
    description: "A science fiction saga set on the desert planet Arrakis.",
    rating: 4.6,
    category: "Sci-Fi",
    image: "/3.webp"
  },
  {
    id: 4,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    description: "Bilbo Baggins goes on a thrilling adventure.",
    rating: 4.8,
    category: "Adventure",
    image: "/4.jpg"
  },
  {
    id: 5,
    title: "Ender's Game",
    author: "Orson Scott Card",
    description: "A young boy is trained to fight aliens in space.",
    rating: 4.5,
    category: "Sci-Fi",
    image: "/5.jpg"
  },
  {
    id: 6,
    title: "Percy Jackson & the Olympians: The Lightning Thief",
    author: "Rick Riordan",
    description: "A boy discovers he's the son of Poseidon.",
    rating: 4.4,
    category: "Adventure",
    image: "/6.jpg"
  },
  {
    id: 7,
    title: "1984",
    author: "George Orwell",
    description: "A dystopian future under totalitarian rule.",
    rating: 4.7,
    category: "Fiction",
    image: "/7.webp"
  },
  {
    id: 8,
    title: "The Martian",
    author: "Andy Weir",
    description: "An astronaut is stranded on Mars and must survive alone.",
    rating: 4.6,
    category: "Sci-Fi",
    image: "/8.jpg"
  },
  {
    id: 9,
    title: "The Maze Runner",
    author: "James Dashner",
    description: "Teens trapped in a deadly maze must escape.",
    rating: 4.1,
    category: "Adventure",
    image: "/9.jpg"
  },
  {
    id: 10,
    title: "Eragon",
    author: "Christopher Paolini",
    description: "A farm boy finds a dragon egg and his destiny.",
    rating: 4.3,
    category: "Fantasy",
    image: "/10.jpg"
  },
  {
    id: 11,
    title: "Mockingjay",
    author: "Suzanne Collins",
    description: "Katniss leads a revolution against the Capitol.",
    rating: 4.4,
    category: "Fiction",
    image: "/11.jpg"
  },
  {
    id: 12,
    title: "Ready Player One",
    author: "Ernest Cline",
    description: "A virtual treasure hunt in a dystopian future.",
    rating: 4.5,
    category: "Sci-Fi",
    image: "/12.webp"
  },
  {
    id: 13,
    title: "The Giver",
    author: "Lois Lowry",
    description: "A boy learns the truth about his perfect society.",
    rating: 4.2,
    category: "Fiction",
    image: "/13.jpg"
  },
  {
    id: 14,
    title: "The Hunger Games",
    author: "Suzanne Collins",
    description: "Teens fight to the death in a televised contest.",
    rating: 4.6,
    category: "Fiction",
    image: "/14.jpg"
  },
  {
    id: 15,
    title: "City of Bones",
    author: "Cassandra Clare",
    description: "A girl discovers a world of Shadowhunters.",
    rating: 4.1,
    category: "Fantasy",
    image: "/15.jpg"
  },
  {
    id: 16,
    title: "Divergent",
    author: "Veronica Roth",
    description: "A girl challenges a divided society.",
    rating: 4.3,
    category: "Fiction",
    image: "/16.jpg"
  },
  {
    id: 17,
    title: "The 5th Wave",
    author: "Rick Yancey",
    description: "Aliens wipe out most of humanity.",
    rating: 4.0,
    category: "Sci-Fi",
    image: "/17.jpg"
  },
  {
    id: 18,
    title: "Life of Pi",
    author: "Yann Martel",
    description: "A boy survives a shipwreck with a tiger.",
    rating: 4.5,
    category: "Adventure",
    image: "/18.jpg"
  },
  {
    id: 19,
    title: "The Alchemist",
    author: "Paulo Coelho",
    description: "A shepherd pursues his personal legend.",
    rating: 4.3,
    category: "Fiction",
    image: "/19.jpg"
  },
  {
    id: 20,
    title: "Artemis Fowl",
    author: "Eoin Colfer",
    description: "A boy genius captures a fairy.",
    rating: 4.2,
    category: "Fantasy",
    image: "/20.jpg"
  },
  {
    id: 21,
    title: "The Golden Compass",
    author: "Philip Pullman",
    description: "A girl journeys through parallel worlds.",
    rating: 4.4,
    category: "Fantasy",
    image: "/21.jpg"
  },
  {
    id: 22,
    title: "The War of the Worlds",
    author: "H.G. Wells",
    description: "Aliens invade Earth in this sci-fi classic.",
    rating: 4.1,
    category: "Sci-Fi",
    image: "/22.jpeg"
  },
  {
    id: 23,
    title: "Treasure Island",
    author: "Robert Louis Stevenson",
    description: "A tale of pirates, treasure maps, and adventure.",
    rating: 4.3,
    category: "Adventure",
    image: "/23.jpg"
  },
  {
    id: 24,
    title: "Journey to the Center of the Earth",
    author: "Jules Verne",
    description: "Explorers travel deep inside the Earth.",
    rating: 4.2,
    category: "Adventure",
    image: "/24.jpg"
  },
  {
    id: 25,
    title: "A Wrinkle in Time",
    author: "Madeleine L'Engle",
    description: "Children travel through space and time.",
    rating: 4.1,
    category: "Sci-Fi",
    image: "/25.jpg"
  }
];

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.push({ id: state.length + 1, ...action.payload });
    },
  },
});

export const { addBook } = bookSlice.actions;
export default bookSlice.reducer;
