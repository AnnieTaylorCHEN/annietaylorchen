import React from 'react'
import { Link } from 'react-router-dom'

export default function PMBlog() {
  return (
    <div>
      <section className='project-grid'>
        <div className='project-intro'>
          <h2 className='project-title'>The Making of Petite &amp; Minimal</h2>
          <p className='project-text'>
            I have been wanting to have my very own website for Petite &amp;
            Minimal for a long time: my design, my code and my content. However,
            due to my limited knowledge in coding before, I could only do
            certain things within other people's template. Now I finally did a
            revamp and said goodbye to Wordpress.{' '}
          </p>
        </div>

        <div className='did'>
          <h3 className='project-subtitle'>What I did</h3>
          <ol>
            <li className='did-list-item'>Content Creation</li>
            <li className='did-list-item'>Photography and Image Processing </li>
            <li className='did-list-item'>Web Development</li>
          </ol>
        </div>

        <div className='tech'>
          <h3 className='project-subtitle'>Tech I used</h3>
          <ol>
            <li className='did-list-item'>Gatsby.js</li>
            <li className='did-list-item'>React</li>
            <li className='did-list-item'>GraphQL</li>
            <li className='did-list-item'>Third Party APIs</li>
          </ol>
        </div>
        <div className='demo-code'>
          <a
            className='demo-code--button'
            href='https://www.petiteandminimal.com/'
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

      <section className='mars-grid'>
        <div className='mars-story1'>
          <h4 className='context-subtitle'>Why I want to migrate from Wordpress?</h4>
          <p className='project-text'>
            Don't get me wrong, Wordpress has done its job beautifully before and I am truly grateful for that. It enabled me to do a lot of things without knowing too much about coding. However, as my needs grew, I also find it more and more challenging to add features without compromising the performance. As we know, Wordpress is a big all-in-one framework that provides a lot of features that one might not need. Not to mention, each time you add a plugin, it adds extra redundant code which eventually slows down the whole site. Although I used the best Wordpress hosting service in the world, I grew more and more dissatisfied with it. In addition, I have been wanting to design the site myself, but without knowing php I couldn't do much. 
          </p>
        </div>
        <div className='mars-video1'>
          <video width='100%' height='auto' muted loop autoPlay playsInline>
            <source src='/imgs/mars-story.mp4' type='video/mp4' />
            Your browser doesn't support the video tag.
          </video>
        </div>
        <div className='mars-video2'>
          <video width='100%' height='auto' muted loop autoPlay playsInline>
            <source src='/imgs/mars-shop.mp4' type='video/mp4' />
            Your browser doesn't support the video tag.
          </video>
        </div>
        <div className='mars-story2'>
          <h4 className='context-subtitle'>Switching to JAMStack</h4>
          <p className='project-text'>
            After 1.5 years of learning to code, I finally made the decision to migrate my site, and this time I used the JAMstack. I also decided to rebrand the site, with new color palette, typography, and edit some of the content. Originally I planned to attach a CMS, but in the end I decided to keep it simple by using markdown files instead. This way I can keep it flexible, as I find it faster to edit code directly in my IDE. For client work, of course a CMS would be a better choice. As for other service, such as email form, sharing, analytics and comment system, I used third-party services. I found expert-maintained micro-services are better suited when I want to focus on content creating instead of website maintaining, fixing security issues or updating things constantly. 
          </p>
        </div>
        <div className='mars-story3'>
          <h4 className='context-subtitle'>The Migration</h4>
          <p className='project-text'>
            I started by forking a gatsby starter and made a simple basic boilerplate that contains basic blogging and page logic. This way I have the best control of the version than using some other more completed starter, which might use some older versions of libraries which can break if you try to update to the latest. 
          </p>
          <p className='project-text'>
            Then I prepared my posts by dividing them into a section of "frontmatter" and main text. The front matter is the meta information, such as title, featured image, url, excerpt, date etc for the post, and the body is the text and images. In my Wordpress site, I had unique layout for every single page, even it looks fun, it was quite time-consuming and my plugin created a lot of redundant code. I decide to minimize that part so I can focus on better content, after all that's the core of a blog! 
          </p>
          <p className='project-text'>
            The last part is of course to style the details. Now since I can write code, I can style everything to my heart's content. I really love interaction which makes the static site more lively. Although it sounds like a serial process, I actually have done all of those in the paralleled time. As I have a lot of posts that need to be redesigned before moving, I couldn't wait until I finish all of them. It's totally fine for me to finish the whole design after I migrated half of my posts, heehee. As I used Github and Netlify, there is no such a thing as final deployment, as they're constantly shipped and in the end when it is all finished, I only needed to move my domain name to my new site.  
          </p>
          <p className='project-text'>
          As you can see, the final result for performance testing is very very good. My performance, accessability, speed, SEO, best practices have all achieved good score. Now I am finally satisfied! <span role="img" aria-label="smiley face">&#9786;</span>
          </p>
          
        </div>
        <div className='mars-video3'>
          <video width='100%' height='auto' muted loop autoPlay playsInline>
            <source src='/imgs/mars-echelon.mp4' type='video/mp4' />
            Your browser doesn't support the video tag.
          </video>
        </div>
      </section>

      <section>
        <Link to='/projects' className='demo-code--button back-to-projects'>
          Back to Projects
        </Link>
      </section>
    </div>
  )
}
