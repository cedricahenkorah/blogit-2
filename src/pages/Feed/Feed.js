import { useState } from "react";
import { useCollection } from "../../hooks/useCollection";
import FeedFilter from "./FeedFilter";
import FeedList from "../../components/FeedList";

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
      <Navbar />
      <div className="md:px-20 lg:pt-1 px-5 flex-grow">
        <h2 className="md:text-3xl font-bold tracking-widest text-xl mt-2 lg:mt-5">
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
