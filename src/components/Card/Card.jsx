import React from "react";
import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";

const Card = ({ book }) => {
  const { bookId, image, rating, category, tags, publisher, author } = book;

  return (
    <div>
      <Link to={`/Book/${bookId}`}>
        <div className="card cursor-pointer bg-indigo-50 h-9/12 w-80 shadow-xl p-2 m-2">
          <figure>
            <img src={image} width={"150px"} alt="books" />
          </figure>
          <div className="card-body">
            <h2 className="card-title gap-5">
              <div className="badge badge-neutral">{tags[0]}</div>
              <div className="badge badge-neutral">{tags[1]}</div>
            </h2>
            <p className="text-3xl font-bold">{publisher}</p>
            <p className="text-2xl text-slate-700">By : {author}</p>
            <div className="card-actions justify-between">
              <div className="text-xl  text-slate-600">{category}</div>
              <div className="text-xl  text-slate-600 flex justify-items-center gap-1">
                <p>{rating}</p>
                <CiStar />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
