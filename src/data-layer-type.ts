class Book {
  constructor(
    public author: string,
    public title: string,
  ) {}
}

declare module 'my-lib' {
  interface EntityMap {
    book: Book;
  }
}

///////

class Movie {
  constructor(public director: string) {}
}

declare module 'my-lib' {
  interface EntityMap {
    movie: Movie;
  }
}

////////

class Song {
  constructor(public artist: string) {}
}

declare module 'my-lib' {
  interface EntityMap {
    song: Song;
  }
}

////////

// import * as EntityMap  from 'my-lib';

interface EntityMap {
  book: Book;
  movie: Movie;
  song: Song;
}

class Store {
  get<K extends keyof EntityMap>(
    kind: K,
    id: string,
  ): EntityMap[K] {
    // Implementation
  }

  getAll<K extends keyof EntityMap>(
    kind: K,
  ): EntityMap[K][] {
    // Implementation
  }

  create<K extends keyof EntityMap>(
    kind: K,
    toCreate: EntityMap[K],
  ): void {
    // Implementation
  }

  update<K extends keyof EntityMap>(
    kind: K,
    id: string,
    props: Partial<EntityMap[K]>,
  ): EntityMap[K] {
    // Implementation
  }
}

const store = new Store();

const myBook = new Book('Iryna', 'Lala');

store.get('book', '123');
store.getAll('song'); // Songs[]
store.create('book', myBook); // Book
store.update('book', '123', { title: 'A new title' }); // Book
