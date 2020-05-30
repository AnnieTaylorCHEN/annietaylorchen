import React from "react";
import ResourceCard from "./ResourceCard";

const processingToolsData = [
  {
    img: "/imgs/resources/figma.jpg",
    name: "Figma",
    description:
      "Build better products as a team. Design, prototype, and gather feedback all in one place with Figma.",
    url: "https://www.figma.com/",
  },
  {
    img: "/imgs/resources/canva.jpg",
    name: "Canva",
    description:
      "Canva is a graphic design platform that allows users to create social media graphics, presentations, posters and other visual content. It is available on web and mobile, and integrates millions of images, fonts, templates and illustrations.",
    url: "https://www.canva.com/",
  },
  {
    img: "/imgs/resources/photopea.jpg",
    name: "Photopea",
    description:
      "Photopea Online Photo Editor lets you edit photos, apply effects, filters, add text, crop or resize pictures. Do Online Photo Editing in your browser for free!",
    url: "https://www.photopea.com/",
  },
  {
    img: "/imgs/resources/pixlr.jpg",
    name: "Pixlr",
    description:
      "Discover free and premium online photo editor! Effects, filters, overlays, simple to expert tools.Open almost any image format like PSD (Photoshop), PXD, Jpeg.",
    url: "https://pixlr.com/x/",
  },
  {
    img: "/imgs/resources/diagrams.jpg",
    name: "Diagrams",
    description:
      "diagrams.net is open source, online, desktop and container deployable diagramming software",
    url: "https://app.diagrams.net/",
  },
  {
    img: "/imgs/resources/befunky-collage-maker.jpg",
    name: "Befunky Collage Maker",
    description:
      "BeFunky's Collage Maker gives you the tools to easily create photo collages.",
    url: "https://www.befunky.com/create/collage/",
  },
  {
    img: "/imgs/resources/faviconit.jpg",
    name: "Favicon Generator",
    description:
      "Faviconit generates favicons, apple touch icons and the HTML header to all devices and browsers.",
    url: "http://faviconit.com/en",
  },
  {
    img: "/imgs/resources/tinypng.jpg",
    name: "PNG and JPG compressor",
    description: "Smart PNG and JPEG compression.",
    url: "https://tinypng.com/",
  },
  {
    img: "/imgs/resources/svg-compressor.jpg",
    name: "SVG Compressor",
    description:
      "Minify and automatically embed SVG fonts in a single step, includes export to multiple image formats.",
    url: "https://vecta.io/nano",
  },
  {
    img: "/imgs/resources/ezgif.jpg",
    name: "Animated GIF and Video Editor",
    description:
      "Online GIF maker and toolset for basic animated GIF and video editing.",
    url: "https://ezgif.com/",
  },
  {
    img: "/imgs/resources/ps-to-pdf.jpg",
    name: "Multiple Convertor and Compressor Tool",
    description:
      "Free online tool to convert PS to PDF, JPG to PDF, and Image to PDF for free. You can convert PDF to PostScript, PDF to JPEG and PDF to image.",
    url: "https://www.ps2pdf.com/",
  },
];

const ProcessingTools = () => {
  return (
    <div className="resource-cards-container">
      {processingToolsData.map((item) => (
        <ResourceCard key={item.name} item={item} />
      ))}
    </div>
  );
};

export default ProcessingTools;
