import React from "react";

const Book = ({ img, title, author }) => {
  const clickHandler = () => {
    alert("Click Success!");
  };

  const complexHandler = (author) => {
    alert(author + " is the Creator");
  };

  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={img} alt="" />
      <h1
        onClick={() => {
          alert(title + " Clicked!");
        }}
      >
        {title}
      </h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        Button Example
      </button>
      <button type="button" onClick={() => complexHandler(author)}>
        Complex Button
      </button>
    </article>
  );
};

export default Book;
