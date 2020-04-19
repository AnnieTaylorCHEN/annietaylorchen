import React from 'react'
import ResourceCard from './ResourceCard'

const devToolsData = [
  {
    img: '/imgs/resources/mdn.jpg',
    name: 'MDN Web Docs',
    description: 'The MDN Web Docs site provides information about Open Web technologies including HTML, CSS, and APIs for both Web sites and progressive web apps.',
    url: 'https://developer.mozilla.org/en-US/',
  },
  {
    img: '/imgs/resources/can-i-use.jpg',
    name: 'Can I Use',
    description: 'Can I use... Browser support tables for modern web technologies.',
    url: 'https://caniuse.com/',
  },
  {
    img: '/imgs/resources/overapi.jpg',
    name: 'Over API - cheat sheets',
    description: 'Collecting All Cheat Sheets.',
    url: 'http://overapi.com/',
  },
  {
    img: '/imgs/resources/html-css-js.jpg',
    name: 'HTML CSS JS Tools',
    description: 'HTML CSS JS tools, cheat sheets and editors.',
    url: 'https://html-css-js.com/',
  },
  {
    img: '/imgs/resources/codebeautify.jpg',
    name: 'Code Beautify',
    description: 'Online Tools like Beautifiers, Editors, Viewers, Minifier, Validators, Converters for Developers: XML, JSON, CSS, JavaScript, Java, C#, MXML, SQL, CSV, Excel.',
    url: 'https://codebeautify.org/',
  },
  {
    img: '/imgs/resources/pinetools.jpg',
    name: 'Pine Tools',
    description: 'Free online tools for every situation, work with text (reverse, convert to uppercase or lowercase), images (invert, resize, crop), lists (sort in alphabetical order, ... ',
    url: 'https://pinetools.com/',
  },
  {
    img: '/imgs/resources/cssmatic.jpg',
    name: 'CSSMatic',
    description: 'Gradient, Border Radius, Noise Texture, Text-Shadow generator.',
    url: 'https://www.cssmatic.com/',
  },
  {
    img: '/imgs/resources/css-masonry.jpg',
    name: 'CSS Masonry Generator',
    description: 'Generating vertical CSS masonry layout.',
    url: 'https://w3bits.com/tools/masonry-generator/',
  },
  {
    img: '/imgs/resources/css-filter-black-hex.jpg',
    name: 'CSS Filter Convert Black to Target Hex Color',
    description: 'Using CSS filter to convert black to target hex color.',
    url: 'https://codepen.io/sosuke/pen/Pjoqqp',
  },
  {
    img: '/imgs/resources/clippy.jpg',
    name: 'Clippy - CSS clip path maker',
    description: 'About Clip Paths. The clip-path property allows you to make complex shapes in CSS by clipping an element to a basic shape (circle, ellipse, polygon, or inset).',
    url: 'https://bennettfeely.com/clippy/',
  },
  {
    img: '/imgs/resources/http-status-code.jpg',
    name: 'HTTP Status Codes',
    description: 'httpstatuses.com is an easy to reference database of HTTP Status Codes with their definitions and helpful code references all in one place.',
    url: 'https://httpstatuses.com/',
  },
  {
    img: '/imgs/resources/sizzy.jpg',
    name: 'Sizzy Responsive Views in All',
    description: 'Made for designers and developers. Make your life easier and instantly preview your website across multiple devices.',
    url: 'https://sizzy.co/',
  },
  {
    img: '/imgs/resources/browser-stack.jpg',
    name: 'Browser Stack - Browsing Simulation',
    description: 'Instant access to 2000+ browsers and real iOS and Android devices for cross browser testing. Ship apps and websites that work for everyone, every time.',
    url: 'https://www.browserstack.com/',
  },
  {
    img: '/imgs/resources/pingdom.jpg',
    name: 'Pingdom Web Speed Tester',
    description: 'Monitor your website\'s availability and performance for free with Pingdom and always be the first to know when your website is down. No installation required.',
    url: 'https://tools.pingdom.com/',
  },
  {
    img: '/imgs/resources/gtmetrix.jpg',
    name: 'GTMetrix - Web Speed and Performance Optimization',
    description: 'GTmetrix is a free tool that analyzes your page\'s speed performance. Using PageSpeed and YSlow, GTmetrix generates scores for your pages and offers',
    url: 'https://gtmetrix.com/',
  },
  {
    img: '/imgs/resources/woorank.jpg',
    name: 'Woorank SEO Tool',
    description: 'Instantly review your website for free with the WooRank SEO Checker! Find issues, track keywords, identify opportunities & create reports.',
    url: 'https://www.woorank.com/',
  },
]

const DevTools = () => {
  return (
    <div className="resource-cards-container">
      {devToolsData.map((item) => (
        <ResourceCard key={item.name} item={item} />
      ))}
    </div>
  )
}

export default DevTools
