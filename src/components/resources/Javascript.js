import React from "react";
import ResourceCard from "./ResourceCard";

const javascriptData = [
  {
    img: "/imgs/resources/you-dont-know-js.jpg",
    name: "You Don't Know JS",
    description:
      "You Don't Know JS Yet (book series) - 2nd Edition. This is a series of books diving deep into the core mechanisms of the JavaScript language.",
    url: "https://github.com/getify/You-Dont-Know-JS",
  },
  {
    img: "/imgs/resources/eloquent-javascript.jpg",
    name: "Eloquent Javascript",
    description:
      "Eloquent JavaScript. 3rd edition. This is a book about JavaScript, programming, and the wonders of the digital. ",
    url: "https://eloquentjavascript.net/",
  },
  {
    img: "/imgs/resources/js-info.jpg",
    name: "Javascript Info - Modern JavaScript Tutorial",
    description:
      "Modern JavaScript Tutorial: simple, but detailed explanations with examples and tasks, including: closures, document and events, object oriented programming",
    url: "https://javascript.info/",
  },
];

const Javascript = () => {
  return (
    <div className="resource-cards-container">
      {javascriptData.map((item) => (
        <ResourceCard key={item.name} item={item} />
      ))}
    </div>
  );
};

export default Javascript;
