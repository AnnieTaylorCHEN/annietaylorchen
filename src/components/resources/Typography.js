import React from 'react'
import ResourceCard from './ResourceCard'

const typographyData = [
  {
    img: '/imgs/resources/practical-typography.jpg',
    name: 'Butterick\'s Practical Typography',
    description: 'Butterick\'s Practical Typography, online e-book.',
    url: 'https://practicaltypography.com/',
  },
  {
    img: '/imgs/resources/font-squirrel.jpg',
    name: 'Font Squirrel',
    description: 'Font Squirrel scours the internet for high quality, legitimately free fonts . Download thousands of completely legal, high quality, free fonts.',
    url: 'http://www.fontsquirrel.com/',
  },
  {
    img: '/imgs/resources/google-fonts.jpg',
    name: 'Google Fonts',
    description: 'Great selection of free Google Fonts',
    url: 'https://fonts.google.com/',
  },
  {
    img: '/imgs/resources/google-fonts-helper.jpg',
    name: 'Google Webfonts Helper',
    description: 'A Hassle-Free Way to Self-Host Google Fonts',
    url: 'https://google-webfonts-helper.herokuapp.com/fonts',
  },
  {
    img: '/imgs/resources/font-converter.jpg',
    name: 'Font Converter',
    description: 'Convert to TTF, OTF, EOT, WOFF, WOFF 2 and SVG.',
    url: 'https://www.font-converter.net/en',
  },
]

const Typography = () => {
  return (
    <div className="resource-cards-container">
      {typographyData.map((item) => (
        <ResourceCard key={item.name} item={item} />
      ))}
    </div>
  )
}

export default Typography
