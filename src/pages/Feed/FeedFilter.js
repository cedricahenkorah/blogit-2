const filterList = [
  "all",
  "lifestyle",
  "business",
  "technology",
  "news",
  "education",
  "entertainment",
  "sports",
];

export default function FeedFilter({ currentFilter, changeFilter }) {
  const handleClick = (newFilter) => {
    changeFilter(newFilter);
  };

  return (
    <div className="project-filter bg-white rounded">
      <nav>
        <p>views:</p>
        {filterList.map((f) => (
          <button
            key={f}
            onClick={() => handleClick(f)}
            className={currentFilter === f ? "active" : ""}
          >
            {f}
          </button>
        ))}
      </nav>
    </div>
  );
}
