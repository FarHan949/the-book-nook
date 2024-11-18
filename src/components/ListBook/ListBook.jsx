import React from "react";
import { Link } from "react-router-dom";

const ListBook = ({ book }) => {
  const {
    bookName,
    author,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
    bookId,
  } = book;

  return (
    <div className="bg-white p-4 rounded-lg shadow-md flex">
      <img
        src={book.image}
        alt={book.alt}
        className="w-24 h-36 object-cover rounded-lg"
      />
      <div className="ml-4">
        <h2 className="text-xl font-bold ">{bookName}</h2>
        <p className="text-gray-600">By : {author}</p>
        <div className="flex items-center space-x-2 mt-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs"
            >
              #{tag}
            </span>
          ))}
          <span className="text-gray-600 text-sm">
            Year of Publishing: {yearOfPublishing}
          </span>
        </div>
        <p className="text-gray-600 mt-2">
          <i className="fas fa-building"></i> Publisher: {publisher}
        </p>
        <p className="text-gray-600">
          <i className="fas fa-file-alt"></i> Page: {totalPages}
        </p>
        <div className="flex items-center space-x-2 mt-2">
          <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-sm">
            Category: {category}
          </span>
          <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full text-sm">
            Rating: {rating}
          </span>
          <Link to={`/Book/${bookId}`}>
            <button className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-white hover:text-black">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ListBook;
