import React from 'react'
import ResourceCard from './ResourceCard'

const freeAssetsData = [
  {
    img: '/imgs/resources/unsplash.jpg',
    name: 'Unsplash',
    description: 'Beautiful, free images and photos that you can download and use for any project. Better than any royalty free or stock photos.',
    url: 'https://unsplash.com/',
  },
  {
    img: '/imgs/resources/pexels.jpg',
    name: 'Pexels',
    description: 'Free stock photos and videos you can use everywhere. ✓ Free for commercial use ✓ No attribution required.',
    url: 'https://www.pexels.com/',
  },
  {
    img: '/imgs/resources/pixabay.jpg',
    name: 'Pixabay',
    description: 'Free photos, illustrations, vectors, video and music. Note some resources might be amateurish.',
    url: 'https://pixabay.com/',
  },
  {
    img: '/imgs/resources/picsum.jpg',
    name: 'Lorem Picsum',
    description: 'Lorem Ipsum... but for photos.',
    url: 'https://picsum.photos/',
  },
  {
    img: '/imgs/resources/videvo.jpg',
    name: 'Videvo',
    description: 'Free stock video footage with over 28000 video clips in 4k and HD. Quality is a bit amateurish.',
    url: 'https://www.videvo.net/',
  },
  {
    img: '/imgs/resources/mixkit.jpg',
    name: 'Mixkit',
    description: 'Free Stock Video Footage, Stock Music & Premiere Pro Templates for your next video editing project. All royalty free assets are completely free!',
    url: 'https://mixkit.co/',
  },
  {
    img: '/imgs/resources/free-sound.jpg',
    name: 'Free Sound',
    description: 'Freesound is a collaborative repository of CC licensed audio samples, and non-profit organisation, with more than 400,000 sounds and effects, and 8 million registered users. ',
    url: 'https://freesound.org/',
  },
  {
    img: '/imgs/resources/generated-photos.jpg',
    name: 'AI generated faces free for use',
    description: 'AI-generated images have never looked better. Explore and download our diverse, copyright-free headshot images from our production-ready database.',
    url: 'https://generated.photos/',
  },
  {
    img: '/imgs/resources/undraw.jpg',
    name: 'Undraw',
    description: 'The design project with open-source illustrations for any idea you can imagine and create.',
    url: 'https://undraw.co/illustrations',
  },
  {
    img: '/imgs/resources/humaaans.jpg',
    name: 'humaaans',
    description: 'Mix-&-match illustrations of people with a design library. Free for commercial or personal use by Pablo Stanley. ',
    url: 'https://www.humaaans.com/',
  },
  {
    img: '/imgs/resources/icons8.jpg',
    name: 'icons8 free resources',
    description: 'Free Vector Illustrations',
    url: 'https://icons8.com/ouch',
  },
  {
    img: '/imgs/resources/getwaves.jpg',
    name: 'Get Waves',
    description: 'Making wave svg.',
    url: 'https://getwaves.io/',
  },
  {
    img: '/imgs/resources/paaatterns.jpg',
    name: 'paaatterns',
    description: 'Free collection of beautiful patterns for all vector formats',
    url: 'https://products.ls.graphics/paaatterns/',
  },
  {
    img: '/imgs/resources/iconmonstr.jpg',
    name: 'Icon Monsters',
    description: 'iconmonstr - free, monstrously big and continuously growing source of simple icons run by one creator.',
    url: 'https://iconmonstr.com/',
  },
  {
    img: '/imgs/resources/microicon.jpg',
    name: 'MicroIcon',
    description: 'Free to use hosted icons.',
    url: 'https://github.com/jxnblk/microicon',
  },
  {
    img: '/imgs/resources/worldvectorlogo.jpg',
    name: 'World Vector Logo',
    description: 'Worldvectorlogo has the largest SVG logo vector collection. All logos work with EPS, AI, PSD and Adobe PDF. No account and unlimited downloads for free.',
    url: 'https://worldvectorlogo.com/',
  },
  {
    img: '/imgs/resources/figma-ui.jpg',
    name: 'Figma UI Kits',
    description: 'The biggest collection of Figma UI kits.',
    url: 'https://www.figmacrush.com/free-figma-ui-kits/',
  },
  {
    img: '/imgs/resources/sketch-app-resources.jpg',
    name: 'Sketch App Resources',
    description: 'The largest collection of free and premium Sketch resources for mobile, web, UI, and UX designers working with Sketch by Bohemian Coding.',
    url: 'https://www.sketchappsources.com/',
  },
  {
    img: '/imgs/resources/public-apis.jpg',
    name: 'Public APIs',
    description: 'Public APIs for web projects.',
    url: 'https://public-apis.xyz/',
  },
  {
    img: '/imgs/resources/programmableweb.jpg',
    name: 'Programmable Web',
    description: 'The leading source of news & information about APIs, chronicling the evolution of the global API economy & providing the web\'s most relied-on API Directory.',
    url: 'https://www.programmableweb.com/',
  },
]

const FreeAssets = () => {
  return (
    <div className='resource-cards-container'>
      {freeAssetsData.map((item) => (
        <ResourceCard key={item.name} item={item} />
      ))}
    </div>
  )
}

export default FreeAssets
