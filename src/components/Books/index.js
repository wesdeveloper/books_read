import React, { useState, useEffect } from "react";
import NavBar from "../NavBar";
import "./books.css";

const Books = () => {
  // [
  //   { id: 0, text: "O milagra da manhã", done: false },
  //   { id: 1, text: "Arrume a sua cama", done: false }
  // ]
  const storageBooks = localStorage.getItem("books");
  const [books, setBooks] = useState(
    storageBooks ? JSON.parse(storageBooks) : []
  );
  const [bookText, setBookText] = useState("");

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  const deleteBook = id => {
    const newBooks = books.filter(book => book.id !== id);
    setBooks(newBooks);
  };

  return (
    <div className="container wrapper">
      <div className="row col s4 offset-s3">
        <NavBar />
        <ul className="collection with-header">
          {books.map(({ id, text, done }) => (
            <li className="collection-item" key={id}>
              <label>
                <input
                  type="checkbox"
                  className="filled-in"
                  defaultChecked={done && "checked"}
                  onChange={() => {
                    const newBooks = [...books];
                    console.log("id", id, newBooks);
                    newBooks[id].done = !newBooks[id].done;
                    setBooks(newBooks);
                  }}
                />
                <span style={{ textDecoration: done && "line-through" }}>
                  {text}
                </span>
              </label>
              <a
                href="#!"
                className="secondary-content"
                onClick={() => deleteBook(id)}
              >
                <i className="material-icons">delete_forever</i>
              </a>

              {/* <a href="#!" className="secondary-content">
                <i className="material-icons">info_outline</i>
              </a> */}
            </li>
          ))}
        </ul>
      </div>
      <div className="row col s6 offset-s3">
        <div className="input-field">
          <input
            id="task-input-text"
            type="text"
            className="validate"
            value={bookText}
            onChange={e => setBookText(e.target.value)}
          />
          <label htmlFor="task-input-text">Novo livro</label>
          <button
            className="btn waves-effect waves-light right"
            type="submit"
            name="action"
            onClick={e => {
              if (bookText.length) {
                const newBooks = [
                  ...books,
                  {
                    id: books.length,
                    text: bookText,
                    done: false
                  }
                ];
                setBooks(newBooks);
                console.log("books", newBooks);
                setBookText("");
              }
            }}
          >
            Adicionar
            <i className="material-icons right">send</i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Books;
