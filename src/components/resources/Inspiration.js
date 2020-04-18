import React from 'react'
import ResourceCard from './ResourceCard'

const inspirationData = [
  {
    img: '/imgs/resources/dribbble.jpg',
    name: 'Dribbble',
    description: 'Dribbble is where designers gain inspiration, feedback, community, and jobs and is your best resource to discover and connect with designers worldwide.',
    url: 'https://dribbble.com/',
  },
  {
    img: '/imgs/resources/behance.jpg',
    name: 'Behance',
    description: 'Behance is a social media platform owned by Adobe which aims "to showcase and discover creative work".',
    url: 'https://www.behance.net/',
  },
  {
    img: '/imgs/resources/awwwards.jpg',
    name: 'Awwwards',
    description: 'Awwwards are the Website Awards that recognize and promote the talent and effort of the best developers, designers and web agencies in the world.',
    url: 'https://www.awwwards.com/',
  },
  {
    img: '/imgs/resources/site-inspire.jpg',
    name: 'Site Inspire',
    description: 'A CSS gallery and showcase of the best web design inspiration, featuring over 2500 websites searchable by type, subject, and style.',
    url: 'https://www.siteinspire.com/',
  },
  {
    img: '/imgs/resources/sidebar.jpg',
    name: 'Sidebar',
    description: 'The five best design links, every day.',
    url: 'https://sidebar.io/',
  },
]

const Inspiration = () => {
  return (
    <div className="resource-cards-container">
      {inspirationData.map((item) => (
        <ResourceCard key={item.name} item={item} />
      ))}
    </div>
  )
}

export default Inspiration
