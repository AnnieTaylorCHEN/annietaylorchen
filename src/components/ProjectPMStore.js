import React from 'react'
import { Link } from 'react-router-dom'

export default function PMStore() {
  return (
    <div>
      <section className='project-grid'>
        <div className='project-intro'>
          <h2 className='project-title'>
            The Making of Petite &amp; Minimal Store
          </h2>
          <p className='project-text'>
            <a
              className='highlight underline'
              href='https://www.petiteandminimal.com/'
              target='_blank'
              rel='noopener noreferrer'
            >
              Petite &amp; Minimal
            </a>{' '}
            is actually my lifestyle website (which I also coded myself, you can
            read{' '}
            <Link
              className='highlight underline'
              to='/projects/petiteandminimalblog'
            >
              The Making of Petite &amp; Minimal
            </Link>
            , if interested), where I write about eco-friendly options when it
            comes to food, beauty, style, and minimal living and travel etc.
            Fashion is one topic I write and think about often, so when it comes
            to building an e-commerce demo, I chose to build a store that sells
            clothes that I would buy.
          </p>
        </div>

        <div className='did'>
          <h3 className='project-subtitle'>What I did</h3>
          <ol>
            <li className='did-list-item'>Content Creation</li>
            <li className='did-list-item'>Image Processing </li>
            <li className='did-list-item'>Web Development</li>
          </ol>
        </div>

        <div className='tech'>
          <h3 className='project-subtitle'>Tech I used</h3>
          <ol>
            <li className='did-list-item'>Gatsby.js</li>
            <li className='did-list-item'>GraphQL</li>
            <li className='did-list-item'>Contentful</li>
            <li className='did-list-item'>Commercelayer</li>
          </ol>
        </div>
        <div className='demo-code'>
          <a
            className='button'
            href='https://petiteandminimalstore.netlify.app/'
            target='_blank'
            rel='noopener noreferrer'
          >
            LIVE DEMO
          </a>

          <a
            className='button'
            href='https://github.com/AnnieTaylorCHEN/PetiteandMinimalStore'
            target='_blank'
            rel='noopener noreferrer'
          >
            VIEW CODE
          </a>
        </div>
      </section>

      <section className='pmstore-grid'>
        <div className='pmstore-story1'>
          <h4 className='context-subtitle'>Why JAMstack?</h4>
          <p className='project-text'>
            JAM refers to javascript, api and markdown. It separates the
            front-end presentation, content management and back-end logic to
            different modules. It unlocks designer and coder’s creativity for
            front-end, speeds up loading and improves the performance of the
            website. Using micro-services also means the team can focus on
            solving critical business issues and gain valuable time to the
            market, instead of spending lots of resources to maintain the
            security or complicity of the back-end.
          </p>
        </div>
        <div className='pmstore-media1'>
          <video width='100%' height='auto' muted loop autoPlay playsInline>
            <source
              src='/imgs/projects/petiteandminimalstore-video-1.mp4'
              type='video/mp4'
            />
            Your browser doesn't support the media tag.
          </video>
        </div>
        <div className='pmstore-media2'>
          <video width='100%' height='auto' muted loop autoPlay playsInline>
            <source
              src='/imgs/projects/petiteandminimalstore-video-2.mp4'
              type='video/mp4'
            />
            Your browser doesn't support the media tag.
          </video>
        </div>
        <div className='pmstore-story2'>
          <h4 className='context-subtitle'>The Architecture</h4>
          <p className='project-text'>
            For this project I used:
            <br />
            - Contentful as my headless CMS;
            <br />
            - Commercelayer as the commerce management system that is connected
            to the warehouse for product stocking, warehouse, payment and
            shipping;
            <br />
            - Gatsby to generate static website for the store.
            <br />
            When a merchant uploads the information such as price, quanity and
            market availability about products in Commercelayer, a content
            editor can go to Contentful to add more pictures and fill in
            description of the products, then Gatsby pulls the data from both
            systems to populate the website. For example, the title, description
            and pictures are from Contentful, and sizes, availability for
            delivery, shopping bag and the whole checkout system come from
            Commercelayer. It also allows flexibility to have multi-national,
            and multi-lingual website, which can use the same piece of data for
            the same product. For instance, in Petite&Minimal Store the UK and
            Sweden shares the same catalog, which means they use the same
            warehouse in Europe, while US market has a different warehouse, so
            you won't see certain items, such as coats in US market.
          </p>
        </div>
        <div className='pmstore-story3'>
          <h4 className='context-subtitle'>More details</h4>
          <p className='project-text'>
            For more details about JAMstack e-commerce demo, please refer to the
            essay I wrote for this project.{' '}
          </p>
          <div className='download-pdf'>
            <Link
              to='/imgs/Annie-Taylor-Chen-JAMstack-Ecommerce_compressed.pdf'
              className='button'
            >
              Download PDF
            </Link>
          </div>
        </div>
      </section>

      <section>
        <Link to='/projects' className='button back-to-projects'>
          Back to Projects
        </Link>
      </section>
    </div>
  )
}
