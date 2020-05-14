import React from "react";
import ResourceCard from "./ResourceCard";

const csData = [
  {
    img: "/imgs/resources/big-o.jpg",
    name: "Big O Cheat Sheet",
    description:
      "This webpage covers the space and time Big-O complexities of common algorithms used in Computer Science. ",
    url: "https://www.bigocheatsheet.com/",
  },
  {
    img: "/imgs/resources/visualgo.jpg",
    name: "VisuAlgo",
    description:
      "VisuAlgo was conceptualised in 2011 by Dr Steven Halim as a tool to help his students better understand data structures and algorithms.",
    url: "https://visualgo.net/en",
  },
  {
    img: "/imgs/resources/sorting-algo.jpg",
    name: "Sorting Algorithm Animation",
    description: "Compare all sorting algorithms animation.",
    url: "https://www.toptal.com/developers/sorting-algorithms",
  },
  {
    img: "/imgs/resources/geeksforgeeks.jpg",
    name: "Geeks for Geeks",
    description: "Computer Science portal for geeks.",
    url: "https://www.geeksforgeeks.org/",
  },
  {
    img: "/imgs/resources/edabit.jpg",
    name: "Edabit",
    description:
      "Learn to code with fun, bite-sized challenges. Gain XP, unlock achievements and level up. It's like Duolingo for learning to code.",
    url: "https://edabit.com/",
  },
  {
    img: "/imgs/resources/codewars.jpg",
    name: "CodeWars",
    description:
      "Codewars is where developers achieve code mastery through challenge. Train on kata in the dojo and reach your highest potential.",
    url: "https://www.codewars.com/",
  },
  {
    img: "/imgs/resources/hackerrank.jpg",
    name: "Hacker Rank",
    description:
      "Join over 7 million developers. Practice coding, prepare for interviews, and get hired.",
    url: "https://www.hackerrank.com/",
  },
  {
    img: "/imgs/resources/leetcode.jpg",
    name: "LeetCode",
    description:
      "Level up your coding skills and quickly land a job. This is the best place to expand your knowledge and get prepared for your next interview.",
    url: "https://leetcode.com/",
  },
];

const ComputerScience = () => {
  return (
    <div className="resource-cards-container">
      {csData.map((item) => (
        <ResourceCard key={item.name} item={item} />
      ))}
    </div>
  );
};

export default ComputerScience;
