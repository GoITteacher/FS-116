export class BooksAPI {
  constructor() {
    this.BASE_URL = 'http://localhost:3000';
    this.END_POINT = '/books';
    this.API_KEY = '123123';
  }

  async getBooks() {
    const url = this.BASE_URL + this.END_POINT;
    const res = await fetch(url);
    return res.json();
  }

  async createBook(data) {
    const url = this.BASE_URL + this.END_POINT;

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };

    try {
      const res = await fetch(url, options);
      return res.json();
    } catch {
      return {};
    }
  }

  updateBook(id, book) {
    const url = `${this.BASE_URL}${this.END_POINT}/${id}`;

    const options = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(book),
    };

    return fetch(url, options).then(res => res.json());
  }

  resetBook(id, book) {
    const url = `${this.BASE_URL}${this.END_POINT}/${id}`;

    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(book),
    };

    return fetch(url, options).then(res => res.json());
  }

  deleteBook(id) {
    const url = `${this.BASE_URL}${this.END_POINT}/${id}`;

    const options = {
      method: 'DELETE',
    };

    return fetch(url, options).then(res => res.json());
  }
}
