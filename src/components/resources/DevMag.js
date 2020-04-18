import React from 'react'
import ResourceCard from './ResourceCard'

const devMagData = [
  {
    img: '/imgs/resources/smashing-magazine.jpg',
    name: 'Smashing Magazine',
    description: 'Smashing Magazine is a website and eBook publisher that offers editorial content and professional resources for web developers and web designers.',
    url: 'https://www.smashingmagazine.com/',
  },
  {
    img: '/imgs/resources/css-tricks.jpg',
    name: 'CSS Tricks',
    description: 'Daily articles about CSS, HTML, JavaScript, and all things related to web design and development.',
    url: 'https://css-tricks.com/',
  },
  {
    img: '/imgs/resources/shop-talk.jpg',
    name: 'ShopTalk',
    description: 'A live podcast about front end web design and UX.',
    url: 'https://shoptalkshow.com/',
  },
  {
    img: '/imgs/resources/design-shack.jpg',
    name: 'Design Shack',
    description: 'Design Shack is a magazine for creatives and designers. We publish articles about web and graphic design, trends, and inspiration.',
    url: 'https://designshack.net/',
  },
  {
    img: '/imgs/resources/ui-patterns.jpg',
    name: 'UI Patterns',
    description: 'User Interface Design patterns are recurring solutions that solve common design problems. Design patterns are standard reference points for the experienced user interface designer.',
    url: 'https://ui-patterns.com/',
  },
]

const DevMag = () => {
  return (
    <div className="resource-cards-container">
      {devMagData.map((item) => (
        <ResourceCard key={item.name} item={item} />
      ))}
    </div>
  )
}

export default DevMag
