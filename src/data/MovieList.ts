export interface Movie {
  title: string;
  year: number;
  studio: string;
  description: string;
  spanishTitle: string;
  posterPath?: string;
  tmdbId?: number;
}

export const movieList: Movie[] = [
  {
    title: "The Shawshank Redemption",
    year: 1994,
    studio: "Columbia Pictures",
    description:
      "Two imprisoned men bond over years, finding redemption through acts of common decency.",
    spanishTitle: "Cadena Perpetua",
  },
  {
    title: "Pulp Fiction",
    year: 1994,
    studio: "Miramax Films",
    description:
      "The lives of two mob hitmen, a boxer, and a pair of bandits intertwine in four tales of violence.",
    spanishTitle: "Tiempos Violentos",
  },
  {
    title: "The Matrix",
    year: 1999,
    studio: "Warner Bros.",
    description:
      "A hacker discovers reality is a simulation and joins a rebellion against machines.",
    spanishTitle: "Matrix",
  },
  {
    title: "Gladiator",
    year: 2000,
    studio: "DreamWorks Pictures",
    description:
      "A betrayed Roman general seeks revenge as a gladiator in the Colosseum.",
    spanishTitle: "El Gladiador",
  },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    year: 2001,
    studio: "New Line Cinema",
    description:
      "A young hobbit must destroy a powerful ring to save Middle-earth from darkness.",
    spanishTitle: "El Señor de los Anillos: La Comunidad del Anillo",
  },
  {
    title: "Finding Nemo",
    year: 2003,
    studio: "Pixar Animation Studios",
    description:
      "A clownfish crosses the ocean to find his abducted son with help from a forgetful fish.",
    spanishTitle: "Buscando a Nemo",
  },
  {
    title: "The Dark Knight",
    year: 2008,
    studio: "Warner Bros.",
    description:
      "Batman faces the Joker, a criminal mastermind who wants to plunge Gotham into chaos.",
    spanishTitle: "El Caballero de la Noche",
  },
  {
    title: "WALL-E",
    year: 2008,
    studio: "Pixar Animation Studios",
    description:
      "A waste-collecting robot falls in love and embarks on a space journey that affects humanity.",
    spanishTitle: "WALL-E",
  },
  {
    title: "Avatar",
    year: 2009,
    studio: "20th Century Fox",
    description:
      "A paraplegic Marine on an alien moon must choose between following orders or protecting the world.",
    spanishTitle: "Avatar",
  },
  {
    title: "Inception",
    year: 2010,
    studio: "Warner Bros.",
    description:
      "A thief who steals secrets through dreams is given a chance to have his past erased.",
    spanishTitle: "El Origen",
  },
];
