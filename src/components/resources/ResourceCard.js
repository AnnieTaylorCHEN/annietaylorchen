import React from 'react'

const ResourceCard = ({ item }) => (
  <div>
    <a href={item.url} target='_blank' rel='noopener noreferrer'>
      <img src={item.img} alt={item.name} />
      <h3 className="resource-card-name">{item.name}</h3>
      <p>{item.description}</p>
    </a>
  </div>
)

export default ResourceCard
