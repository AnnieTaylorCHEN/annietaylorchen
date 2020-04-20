import React from 'react'
import { Link } from 'react-router-dom'

export default function ProjectIngersAlternativ() {
  return (
    <>
      <section className='project-grid'>
        <div className='project-intro'>
          <h2 className='project-title'>The Making of Ingers Alternativ</h2>
          <p className='project-text'>
            Ingers Alternativ is a website for a therapist from Stockholm. This
            is my very first commercial web project that’s built from scratch,
            with hand made HTML and CSS designed and written by me, before I
            started to learn Javascript.
          </p>
        </div>

        <div className='did'>
          <h3 className='project-subtitle'>What I did</h3>
          <ol>
            <li className='did-list-item'>Content Creation Strategy</li>
            <li className='did-list-item'>SEO</li>
            <li className='did-list-item'>Web Development</li>
            <li className='did-list-item'>Logo and Business Card Design</li>
            <li className='did-list-item'>Photography</li>
            <li className='did-list-item'>Promo Video Creation</li>
          </ol>
        </div>
        <div className='tech'>
          <h3 className='project-subtitle'>Tech I used</h3>
          <ol>
            <li className='did-list-item'>HTML5</li>
            <li className='did-list-item'>CSS3</li>
            <li className='did-list-item'>Javascript </li>
          </ol>
        </div>
        <div className='demo-code'>
          <a
            className='demo-code--button'
            href='https://ingersalternativ.se/'
            target='_blank'
            rel='noopener noreferrer'
          >
            LIVE DEMO
          </a>
          <small>
            Production site repo as private. Available upon request.
          </small>
        </div>
      </section>

      <section className='inger-grid'>
        <div className='inger-rebrand'>
          <h4 className='context-subtitle'>Rebranding</h4>
          <p className='project-text'>
            The previous site was a very simple Wordpress site with zero
            branding concept. I wanted to help the client build a strong brand
            that reflects her business core, which offers valuable information
            to her customers. We spent a lot of time discussing the business
            goal, unique selling point, SWOT analysis as well as creating
            persona. I guided my client through all the process to help her
            write what we were going to put online.
          </p>
        </div>

        <div className='rebrandimg'>
          <img
            src='/imgs/projects/ingers-rebrandimg.jpg'
            alt='blur background of Ingers Alternativ preparation plan'
          />
        </div>

        <div className='inger-senior'>
          <h4 className='context-subtitle'>Design for seniors</h4>
          <p className='project-text'>
            We decided to use a calm muted green as branding color, as it is
            related to the core business – therapies and meditation. The design
            is made for seniors, so everything is slightly bigger than average.
            I hand picked beautiful images to add visual aid to the content.
          </p>
          <p className='project-text'>
            The client is a senior person with limited technical skills and
            time, so we decided not to go full range when it comes to social
            media marketing.{' '}
          </p>
        </div>

        <div className='inger-ba'>
          <div className='ba-tag before'>before</div>
          <div>
            <video width='50%' height='100%' muted loop autoPlay playsInline>
              <source src='/imgs/projects/inger-before.mp4' type='video/mp4' />
              Your browser doesn't support the video tag.
            </video>
          </div>
          <div>
            <div className='ba-tag after'>after</div>
            <video width='50%' height='100%' muted loop autoPlay playsInline>
              <source src='/imgs/projects/inger-after.mp4' type='video/mp4' />
              Your browser doesn't support the video tag.
            </video>
          </div>
        </div>

        <div className='inger-video'>
          <iframe
            title='Ingers Alternativ reklam'
            width='100%'
            height='700px'
            src='https://www.youtube.com/embed/d5Nsktdv1SM'
            frameBorder='0'
            allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          ></iframe>
        </div>

        <div className='inger-videotext'>
          <p className='project-text'>
            We had a limited budget, but I managed to squeeze a promo video that
            was made from open source footage and the ones I shot myself.
          </p>
        </div>

        <div className='inger-challenge'>
          <h4 className='context-subtitle'>Challenge we had</h4>
          <p className='project-text'>
            One thing I never realized before was that many seniors don’t update
            their software as often as possible. So soon after we launched the
            brand new site, people were reporting that it was not showing up
            correctly. I realized that they were still using vintage IE that is
            notorious for bad behavior! I didn’t want to compromise our design
            and frankly, I don’t think it’s fair to adapt to the out-of-date
            browsers because if customers keep using those browsers, they also
            face fatal risks for their online activities. I decided to go with
            javascript that detects people’s vintage browsers and asks them to
            update. I also urged my client to inform her existing customers (by
            email and phone) to update their browsers, and provided related
            article links to educate them the importance of using modern updated
            browsers.{' '}
          </p>
          <p className='project-text'>
            It was a happy ending.{' '}
            <span role='img' aria-label='smiley face'>
              &#9786;
            </span>{' '}
          </p>
        </div>

        <div className='inger-card'>
          <div className="inger-old-card-container">
            <div className='ba-tag before'>before</div>
            <img
                className='inger-old-card'
              src='/imgs/projects/inger-old-card.jpg'
              alt="Inger's old business card"
            />
          </div>
          <div>
            <div className='ba-tag after'>after</div>
            <img
              src='/imgs/projects/inger-new-card.jpg'
              alt="Inger's new business card"
            />
          </div>
        </div>
      </section>
      <section>
        <Link to='/projects' className='demo-code--button back-to-projects'>
          Back to Projects
        </Link>
      </section>
    </>
  )
}
