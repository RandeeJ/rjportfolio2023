import React from "react";

const BlogSearch = ({ value, handleSearchKey, formSubmit }) => {
  return (
    <div className="blog-search">
      <form>
        <input
          type="text"
          onChange={handleSearchKey}
          placeholder="Search By Category"
          value={value}
        />
        {value && <span onClick={clearSearch}>X</span>}

        <button> GO</button>
      </form>
    </div>
  );
};

export default BlogSearch;
