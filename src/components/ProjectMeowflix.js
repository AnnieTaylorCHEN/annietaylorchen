import React from 'react';
import { Link } from 'react-router-dom';

export default function ProjectMeowflix() {
	return (
		<>
			<section className="project-grid">
				<div className="project-intro">
					<h2 className="project-title">The Making of Meowflix</h2>
					<p className="project-text">
						Meowflix is my first project made with Svelte, a Javascript
						compiler. I wanted it to be a fun project that reflects my design
						and my love for movies. It is also a project that extends from
						another one called{' '}
						<a
							className="highlight underline"
							href="https://meowlo.annietaylorchen.com/"
							target="_blank"
							rel="noopener noreferrer"
						>
							Meowlo
						</a>
						, a cat startup. If you're interested you can read{' '}
						<a
							className="highlight underline"
							href="https://www.annietaylorchen.com/projects/meowlo"
							target="_blank"
							rel="noopener noreferrer"
						>
							The Making of Meowlo{' '}
						</a>
						.
					</p>
				</div>

				<div className="did">
					<h3 className="project-subtitle">What I did</h3>
					<ol>
						<li className="did-list-item">Web Development</li>
						<li className="did-list-item">Content Creation</li>
						<li className="did-list-item">Graphic Design </li>
						<li className="did-list-item">Ecommerce Integration </li>
					</ol>
				</div>
				<div className="tech">
					<h3 className="project-subtitle">Tech I used</h3>
					<ol>
						<li className="did-list-item">Svelte</li>
						<li className="did-list-item">Strapi</li>
						<li className="did-list-item">Stripe</li>
						<li className="did-list-item">Netlify</li>
						<li className="did-list-item">Digital Ocean</li>
					</ol>
					<h3 className="project-subtitle--year">Year: 2020</h3>
				</div>
				<div className="demo-code">
					<a
						className="button"
						href="https://meowflix.annietaylorchen.com/"
						target="_blank"
						rel="noopener noreferrer"
					>
						LIVE DEMO
					</a>
					<a
						className="button"
						href="https://github.com/AnnieTaylorCHEN/meowflix"
						target="_blank"
						rel="noopener noreferrer"
					>
						VIEW CODE
					</a>
				</div>
			</section>

			<section className="meowflix-grid">
			<div className="meowflix-video3">
					<iframe
					title="Annie Taylor Chen: How to build a cat-themed streaming service with Svelte"
						width="100%"
						height="900"
						src="https://www.youtube.com/embed/axpeyzQOVxM"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
					></iframe>
				</div>
				<div className="meowflix-story">
					<h4 className="context-subtitle">Strapi as CMS</h4>
					<p className="project-text">
						Strapi is an open source CMS. It's very easy to set up a strapi
						server locally and create content types in development mode. Then I
						ran a local build and uploaded it on Digital Ocean's VPS for
						hosting. The best thing about Strapi is that it comes with admin
						panel, from here you can easily manage the content, users, and
						orders. It also provides option to use plugin so images can be
						uploaded directly to Cloudinary, a third party media hosting
						service. GraphQL plugin also makes it easier to query data when you
						have more complicated content types. Then you can get your data
						through endpoints and use them in your front-end. Thus you can host
						your front-end and back-end on different servers.
					</p>
					<p className="project-text">
						For payment I use Stripe and changed the UI to fit into my own
						design system. After the charge is successful, you shall get some
						cat loving!
						<span role="img" aria-label="cat loving emoji">
							😻
						</span>
					</p>
				</div>
				<div className="meowflix-video">
					<video width="100%" height="auto" muted loop autoPlay playsInline>
						<source src="/imgs/projects/meowflix-1.mp4" type="video/mp4" />
						Your browser doesn't support the video tag.
					</video>
				</div>
				<div className="meowflix-image">
					<img
						src="/imgs/projects/meowflix-strapi-1.jpg"
						alt="meowflix strapi admin panel"
					/>
					<img
						src="/imgs/projects/meowflix-strapi-2.jpg"
						alt="meowflix strapi admin panel"
					/>
				</div>
				<div className="meowflix-video2">
					<video width="100%" height="auto" muted loop autoPlay playsInline>
						<source src="/imgs/projects/meowflix-2.mp4" type="video/mp4" />
						Your browser doesn't support the video tag.
					</video>
				</div>
				<div className="meowflix-story2">
					<h4 className="context-subtitle">Svelte for Front-end</h4>
					<p className="project-text">
						Svelte is a Javascript compiler which enables developers to write
						less code to perform the same functions. The bundle size it sends is
						also a lot smaller, and it doesn't use virtual DOM. It almost
						"disappears" in the front-end, that's why it is blazingly fast.
						Svelte's state management is also easier than, for instance, Redux
						for React. Not to mention the integrated transition and animation in
						Svelte has made it super easy for developers to improve user
						experience through adding a little visual effects.
					</p>
					<p className="project-text">
						You might also notice there is a "recommendation" in each movie
						page. Currently it's just a fake algorithm to randomly generate four
						movies to show, but in reality it's possible to track your user
						preferences and combine that with catalog categorization to provide
						a personalization service.
					</p>
					<p className="project-text">
						Last but not least, I hope you enjoy those funny Meowflix Originals
						movie posters designed by me.{' '}
						<span role="img" aria-label="cat smiley emoji">
							🐱
						</span>{' '}
						If you want to suggest more fun ideas about movies, feel free to
						drop me a line.
					</p>
				</div>
				<div className="meowflix-image2">
					<img
						src="/imgs/projects/meowflix-originals.jpg"
						alt="meowflix originals movie posters"
					/>
				</div>
				
			</section>

			<section>
				<Link to="/projects" className="button back-to-projects">
					Back to Projects
				</Link>
			</section>
		</>
	);
}
