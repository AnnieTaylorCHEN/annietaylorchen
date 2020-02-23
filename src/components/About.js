import React from 'react'

const logoG1 = [
  {
    img: 'imgs/html5.svg',
    alt: 'html5 logo',
    name: 'Html 5'
  },
  {
    img: 'imgs/css3.svg',
    alt: 'css3 logo',
    name: 'Css 3'
  },
  {
    img: 'imgs/javascript.svg',
    alt: 'javacript logo',
    name: 'Javascript'
  },
  {
    img: 'imgs/react.svg',
    alt: 'react logo',
    name: 'React'
  },
  {
    img: 'imgs/redux.svg',
    alt: 'recux logo',
    name: 'Redux'
  },
  {
    img: 'imgs/gatsby.svg',
    alt: 'gatsby logo',
    name: 'Gatsby'
  },
  {
    img: 'imgs/jest.svg',
    alt: 'jest logo',
    name: 'Jest'
  },
  {
    img: 'imgs/postman.svg',
    alt: 'postman logo',
    name: 'Postman'
  },
  {
    img: 'imgs/typescript.svg',
    alt: 'typescript logo',
    name: 'Typescript'
  },
  {
    img: 'imgs/nodejs.svg',
    alt: 'nodejs logo',
    name: 'Node.js'
  },
  {
    img: 'imgs/mongodb.svg',
    alt: 'mongodb logo',
    name: 'MongoDB'
  },
  {
    img: 'imgs/postgresql.svg',
    alt: 'postgresql logo',
    name: 'PostgreSQL'
  },
  {
    img: 'imgs/firebase.svg',
    alt: 'firebase logo',
    name: 'Firebase'
  },
  {
    img: 'imgs/graphql.svg',
    alt: 'graphql logo',
    name: 'GraphQL'
  },
  {
    img: 'imgs/prisma.svg',
    alt: 'prisma logo',
    name: 'Prisma'
  },
  {
    img: 'imgs/apollo.svg',
    alt: 'apollo logo',
    name: 'Apollo'
  },
  {
    img: 'imgs/git.svg',
    alt: 'git logo',
    name: 'Git'
  },
  {
    img: 'imgs/heroku.svg',
    alt: 'heroku logo',
    name: 'Heroku'
  },
  {
    img: 'imgs/netlify.svg',
    alt: 'netlify logo',
    name: 'Netlify'
  },
  {
    img: 'imgs/linux-mint.svg',
    alt: 'linux-mint logo',
    name: 'Linux-Mint'
  }
]

const logoG2 = [
  {
    img: 'imgs/gimp.svg',
    alt: 'gimp logo',
    name: 'Gimp - open-source alternative to Photoshop'
  },
  {
    img: 'imgs/inkscape.svg',
    alt: 'inkscape logo',
    name: 'Inkscape - open-source alternative to Illustrator'
  },
  {
    img: 'imgs/figma.svg',
    alt: 'figma logo',
    name: 'Figma'
  },
  {
    img: 'imgs/canva.svg',
    alt: 'canva logo',
    name: 'Canva'
  },
  {
    img: 'imgs/pixlr.svg',
    alt: 'pixlr logo',
    name: 'Pixlr'
  }
]

const logoG3 = [
  {
    img: 'imgs/python.svg',
    alt: 'python logo',
    name: 'Python'
  },
  {
    img: 'imgs/flutter.svg',
    alt: 'flutter logo',
    name: 'Flutter'
  },
  {
    img: 'imgs/AI.png',
    alt: 'AI logo',
    name: 'AI'
  }
]

const ItemRender = ({ logo }) => (
  <div className='skills__item'>
    <img className='skills__item__img' src={logo.img} alt={logo.alt} />
    <p>{logo.name}</p>
  </div>
)

export default function About() {
  return (
    <>
      <section className='about'>
        <div className='about__intro'>
          Hi, I’m Annie. <br />
          I’m a <span className='highlight'>full-stack developer</span> and{' '}
          <span className='highlight'>photographer</span> <br />
          based in Stockholm, Sweden.
        </div>
        <div className='about__details'>
          <p>
            I value autonomy and responsibility. <br />
            I am super organized.
            <br />
            I am very curious and I love to learn and read. <br />I am creative
            and innovative.{' '}
          </p>

          <p>
            Good to know: I am an awesome{' '}
            <span className='highlight'>vegan cook</span> and run a lifestyle
            blog{' '}
            <span className='highlight pm'>
              <a
                href='https://petiteandminimal.com'
                target='_blank'
                rel='noopener noreferrer'
              >
                Petite &amp; Minimal
              </a>
            </span>
            .
            <span role='img' aria-label='smiley face'>
              &#9786;
            </span>
          </p>

          <p>Principles I believe in:</p>
        </div>
        <div className='about__principle principle1'>
          <h3 className='highlight'>Clean Code</h3>
          <p>
            Clean code requires thinking and planning, and it makes your future
            work less stressful
          </p>
        </div>
        <div className='about__principle principle2'>
          <h3 className='highlight'>Good UI/UX</h3>
          <p>
            In a fast-pacing world, we don't just need software, but
            good-looking and easy-to-use software{' '}
          </p>
        </div>
        <div className='about__principle principle3'>
          <h3 className='highlight'>Excellent Performance</h3>
          <p>You lose when you’re slow, optimization is a must-have </p>
        </div>
        <div className='about__principle principle4'>
          <h3 className='highlight'>Responsive</h3>
          <p>Works and looks great anywhere from phone to laptop</p>
        </div>
      </section>

      <section className='skills'>
        <h3>Programming</h3>
        <div className='skills__option'>
          {logoG1.map(logo => (
            <ItemRender logo={logo} />
          ))}
        </div>

        <h3>UI, UX, Prototype</h3>
        <div className='skills__option'>
        {logoG2.map(logo => (
            <ItemRender logo={logo} />
          ))}
        </div>

        <h3>Interested in learning more</h3>
        <div className='skills__option'>
        {logoG3.map(logo => (
            <ItemRender logo={logo} />
          ))}
        </div>
      </section>
    </>
  )
}
