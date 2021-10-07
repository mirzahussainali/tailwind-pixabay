import React, { useState } from "react";

const ImageSearch = ({ searchText }) => {
  const [text, setText] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    searchText(text);
  };
  return (
    <div className="max-w-sm rounded overflow-hidden my-10 mx-auto">
      <form onSubmit={onSubmit} className="w-full max-w-sm">
        <div className="bg-white shadow p-4 flex">
          <input
            onChange={(e) => setText(e.target.value)}
            className="w-full rounded p-2"
            type="text"
            placeholder="Search Image..."
          />
          <button className="bg-red-400 hover:bg-red-300 rounded text-white p-2 pl-4 pr-4">
            <p className="font-semibold text-sm">Search</p>
          </button>
        </div>
      </form>
    </div>
  );
};

export default ImageSearch;
