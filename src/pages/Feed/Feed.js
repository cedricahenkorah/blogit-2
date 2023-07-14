import { useState } from "react";
import { useCollection } from "../../hooks/useCollection";
import FeedFilter from "./FeedFilter";
import FeedList from "../../components/FeedList";
import NavBlog from "../../components/NavBlog";

// styles
import "./Feed.css";
import Navbar from "../../components/Navbar";

export default function Feed() {
  const [currentFilter, setCurrentFilter] = useState("all");
  const { documents, error } = useCollection("blogs");

  const changeFilter = (newFilter) => {
    setCurrentFilter(newFilter);
  };

  const blogs = documents
    ? documents.filter((document) => {
        switch (currentFilter) {
          case "all":
            return true;
          case "lifestyle":
          case "business":
          case "technology":
          case "education":
          case "entertainment":
          case "news":
          case "sports":
            console.log(document.category, currentFilter);
            return document.category === currentFilter;
          default:
            return true;
        }
      })
    : null;

  return (
    <>
      <NavBlog />
      <div className="md:px-20 px-5 flex-grow bg-gray-50 min-h-screen">
        <h2 className="pt-3 md:text-3xl font-bold tracking-widest text-xl lg:mt-0">
          Feed
        </h2>
        {error && <p className="error">{error}</p>}
        {documents && (
          <FeedFilter
            currentFilter={currentFilter}
            changeFilter={changeFilter}
          />
        )}
        {blogs && <FeedList blogs={blogs} />}
      </div>
    </>
  );
}
