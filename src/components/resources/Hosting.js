import React from "react";
import ResourceCard from "./ResourceCard";

const hostingData = [
  {
    img: "/imgs/resources/netlify.jpg",
    name: "Netlify",
    description:
      "Deploy modern static websites with Netlify. Get CDN, Continuous deployment, 1-click HTTPS, and all the services you need. Get started for free.",
    url: "https://www.netlify.com/",
  },
  {
    img: "/imgs/resources/vercel.jpg",
    name: "Vercel",
    description:
      "Vercel is the easiest way to deploy websites. Host your web projects with zero configuration, automatic SSL, and global CDN.",
    url: "https://vercel.com/",
  },
  {
    img: "/imgs/resources/heroku.jpg",
    name: "Heroku",
    description:
      "Heroku is a platform as a service (PaaS) that enables developers to build, run, and operate applications entirely in the cloud.",
    url: "https://www.heroku.com/",
  },
  {
    img: "/imgs/resources/cloudinary.jpg",
    name: "Cloudinary",
    description:
      "Use Cloudinary to efficiently manage, optimize, and deliver images, videos and other media across every device and channel.",
    url: "https://cloudinary.com/",
  },
  {
    img: "/imgs/resources/mongodb.jpg",
    name: "MongoDB Atlas Cloud",
    description:
      "Host MongoDB in the cloud with MongoDB Atlas, the official database-as-a-service, on AWS, Azure and GCP. Try free!",
    url: "https://www.mongodb.com/cloud/atlas",
  },
  {
    img: "/imgs/resources/firebase.jpg",
    name: "Firebase",
    description:
      "Firebase is Google's mobile platform that helps you quickly develop high-quality apps and grow your business.",
    url: "https://firebase.google.com/",
  },
];

const Hosting = () => {
  return (
    <div className="resource-cards-container">
      {hostingData.map((item) => (
        <ResourceCard key={item.name} item={item} />
      ))}
    </div>
  );
};

export default Hosting;
