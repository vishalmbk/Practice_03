import React from "react";

const Contact = () => {
  const numbers = [1, 2, 3, 4, 5];
  const listItems = numbers.map((number) =>
    <li key={number.toString()}>
      {number}
    </li>
  );
  return (<div>
    <h1>This is Contact page</h1>
    <h3>{listItems}</h3>
  </div>)
}
export default Contact;
