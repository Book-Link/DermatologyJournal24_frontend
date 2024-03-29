import React, { useState, useEffect } from "react";
import "./BookDisplay.css";
import "react-lazy-load-image-component/src/effects/blur.css";
import axios from "axios";

const BookIndex = () => {
  const [books, setBooks] = useState([]);

  const bookBaseData = `${process.env.REACT_APP_BACKEND_URL}/getBookData`;
  useEffect(() => {
    axios.get(bookBaseData).then((response) => {
      setBooks(response.data);
    });
  }, []);
  return (
    <section>
      <div
        className="offcanvas offcanvas-start"
        tabindex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasExampleLabel">
            Books Name
          </h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          {books?.map((bookData, index) => (
            <div className="" key={bookData?._id}>
              <ul>
                <li>
                  <a
                    href={`/viewPdf/${bookData?._id}`}
                    className="Index_book_name pt-2"
                  >
                    {bookData?.bookName}
                  </a>
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BookIndex;
