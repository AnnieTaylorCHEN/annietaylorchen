import React from 'react'
import ResourceCard from './ResourceCard'

const colorsData = [
  {
    img: '/imgs/resources/design-seeds.jpg',
    name: 'Design Seeds',
    description: 'Colors inspired by beautiful images',
    url: 'https://www.design-seeds.com/',
  },
  {
    img: '/imgs/resources/color-wheel.jpg',
    name: 'Color Wheel',
    description: 'Adobe color wheel tool for generating multiple themed color palettes.',
    url: 'https://color.adobe.com/create/color-wheel/',
  },
  {
    img: '/imgs/resources/try-colors.jpg',
    name: 'Try Colors',
    description: 'A color mixing tool to blend colors and have fun with colors.',
    url: 'https://trycolors.com/',
  },
  {
    img: '/imgs/resources/hsl-color-picker.jpg',
    name: 'HSL Color Picker',
    description: 'Converting hex to hsla or rgba.',
    url: 'http://hslpicker.com/',
  },
  {
    img: '/imgs/resources/gradient-generator.jpg',
    name: 'Gradient Generator',
    description: 'Generating multiple colored gradients.',
    url: 'https://mycolor.space/',
  },
  {
    img: '/imgs/resources/color-blind-filter.jpg',
    name: 'Color Blind Filter',
    description: 'Seeing the websites through color-blinded eyes.',
    url: 'https://www.toptal.com/designers/colorfilter',
  },
]

const Colors = () => {
  return (
    <div className="resource-cards-container">
      {colorsData.map((item) => (
        <ResourceCard key={item.name} item={item} />
      ))}
    </div>
  )
}

export default Colors
