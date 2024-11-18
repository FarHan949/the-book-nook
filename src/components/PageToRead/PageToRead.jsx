import React from "react";
import { useEffect, useState } from "react";
import { getStoredBook } from "../utility/LocalStorage";
import { useLoaderData } from "react-router-dom";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from "recharts";

const PageToRead = () => {

  const pages = useLoaderData([]);

  const [bookPages, setBookPages] = useState([]);
  const color = ["green"]

  useEffect(() => {

    const storageBooksPages = getStoredBook();

    const page = pages.filter((page) =>
      storageBooksPages.includes(page.bookId)
    );
    setBookPages(page);
  }, [pages]);

  console.log(bookPages)

     const data = bookPages.map((page) => ({
        name : page.bookName,
        uv : page.totalPages 
     }))

  return (
      <div className="text-center m-auto w-5/6">
           <h1>Total books {bookPages.length}</h1>
      <BarChart width={900} height={300}
      data={data}
        // margin=
        // {{
        //   top: 20,
        //   right: 30,
        //   left: 20,
        //   bottom: 5,
        // }}
        >
          <XAxis dataKey="name" ></XAxis>
          <YAxis></YAxis>
          <Bar dataKey="name"></Bar>
          <Bar dataKey="uv" stroke={color[0]} fill="#8884d8"></Bar>
      </BarChart>
          </div>
  );
};

export default PageToRead;
