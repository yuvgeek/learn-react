function SearchResult(props) {
  return (
    <div>
      <div className="search-url">{props.url}</div>
      <h2 className="search-title">{props.title}</h2>
      <div className="search-description">{props.description}</div>
    </div>
  );
}

export default SearchResult;