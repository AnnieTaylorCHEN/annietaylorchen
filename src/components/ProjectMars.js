import React from 'react';
import { Link } from 'react-router-dom';

export default function ProjectMars() {
	return (
		<div>
			<section className='project-grid'>
				<div className='project-intro'>
					<h2 className='project-title'>
						The Making of Thirty Seconds to Mars
					</h2>
					<p className='project-text'>
						I’m a big fan of Thirty Seconds to Mars. I wish I had been to all of
						their concerts. This website is a nostalgic corner I built for
						myself and other Mars fans, where I turn back time and revisit some
						moments (and practice coding).{' '}
					</p>
				</div>

				<div className='did'>
					<h3 className='project-subtitle'>What I did</h3>
					<ol>
						<li className='did-list-item'>Web Development</li>
						<li className='did-list-item'>Content Creation</li>
						<li className='did-list-item'>E-commerce Integration</li>
            <li className='did-list-item'>Graphic Design</li>
						<li className='did-list-item'>Video Production </li>
					</ol>
				</div>

				<div className='tech'>
					<h3 className='project-subtitle'>Tech I used</h3>
					<ol>
						<li className='did-list-item'>Node.js</li>
						<li className='did-list-item'>React</li>
						<li className='did-list-item'>Redux</li>
						<li className='did-list-item'>MongoDB</li>
						<li className='did-list-item'>Stripe</li>
						<li className='did-list-item'>Netlify</li>
						<li className='did-list-item'>Digital Ocean</li>
					</ol>
					<h3 className='project-subtitle--year'>Year: 2019</h3>
				</div>
				<div className='demo-code'>
					<a
						className='button'
						href='https://30stomars.annietaylorchen.com/'
						target='_blank'
						rel='noopener noreferrer'
					>
						LIVE DEMO
					</a>
					<a
						className='button'
						href='https://github.com/AnnieTaylorCHEN/30stoMars'
						target='_blank'
						rel='noopener noreferrer'
					>
						VIEW CODE
					</a>
				</div>
			</section>

			<section className='mars-grid'>
				<div className='mars-story1'>
					<h4 className='context-subtitle'>The Story</h4>
					<p className='project-text'>
						I want to go back to 2015 and promote a European tour for the band.
						I used some footage from their European tours, where national flags
						of European countries were featured while Jared was dancing on the
						stage. The video has to be concise and exciting, with a “good wish”
						and “celebration” as end.
					</p>
					<p className='project-text'>
						I also want to go through a brief history of the band and their
						albums, where the background images should reflect the creative
						spirit of each era, which corresponds to the theme of the album.{' '}
					</p>
				</div>
				<div className='mars-video1'>
					<video width='100%' height='auto' muted loop autoPlay playsInline>
						<source src='/imgs/projects/mars-story.mp4' type='video/mp4' />
						Your browser doesn't support the video tag.
					</video>
				</div>
				<div className='mars-video2'>
					<video width='100%' height='auto' muted loop autoPlay playsInline>
						<source src='/imgs/projects/mars-shop.mp4' type='video/mp4' />
						Your browser doesn't support the video tag.
					</video>
				</div>
				<div className='mars-story2'>
					<h4 className='context-subtitle'>The Shop</h4>
					<p className='project-text'>
						The shop page is a simple e-commerce store, where albums and
						merchandises can be found. I simply want to practice how to load
						items from MongoDB database, and build a simple shopping cart where
						people can pay via Stripe. Of course it’s the simplest mode, for
						real business we would need to write more customized checkout pages.{' '}
						<span role='img' aria-label='wink face'>
							&#x1f609;
						</span>{' '}
						The biggest challenge I met was to get the right amount of money
						matched in the front-end, back-end, database as well as the
						calculation parameters in Stripe.
					</p>
				</div>
				<div className='mars-story3'>
					<h4 className='context-subtitle'>The Echelon</h4>
					<p className='project-text'>
						The Echelon is the community for dedicated fans. Here fans get
						exclusive news from the band, such as tour photos, announcement of
						new single releases, new videos, ticket giveaways etc. I want to
						make it as a pin board for the band to paste messages, photos, audio
						and video.
					</p>
					<p className='project-text'>
						There is also a simple message board where fans can create post and
						comments. The biggest challenge for me is to make sure all the data
						are sent correctly and render correctly, and I like small cute touch
						such as an animated heart when people like a post, or to edit post
						or comment on site.{' '}
					</p>
					<p className='project-text'>
						Obviously, the Guardians of the Galaxy guys were the first ones to
						occupy this section once I released the site, since Star-Lord
						discovered the Up in the Air in the space. Do you want to know more
						story about it? Read it in the Echelon section.{' '}
						<span role='img' aria-label='wink face'>
							&#x1f609;
						</span>
					</p>
					<video width='100%' height='auto' muted loop autoPlay playsInline>
						<source src='/imgs/projects/mars-heart.mp4' type='video/mp4' />
						Your browser doesn't support the video tag.
					</video>
				</div>
				<div className='mars-video3'>
					<video width='100%' height='auto' muted loop autoPlay playsInline>
						<source src='/imgs/projects/mars-echelon.mp4' type='video/mp4' />
						Your browser doesn't support the video tag.
					</video>
				</div>
			</section>

			<section>
				<Link to='/projects' className='button back-to-projects'>
					Back to Projects
				</Link>
			</section>
		</div>
	);
}
