import React, { useState } from 'react'

export default function Profile() {
    
    const [mouseMove, setMouseMove] = useState({
      skew: 0,
      delta: 0,
      topLayerWidth: 'calc(47vw + 1000px)',
      handleLeft: 47 + '%'
    })
     

    const handleMouseMove = (e) => {
      let delta = (e.clientX - window.innerWidth / 2) * 0.5
      let skew = 1000
      
       setMouseMove({
         skew: skew,
         delta: delta,
         topLayerWidth: e.clientX + skew + delta +'px',
         handleLeft: e.clientX + delta + 'px'
       })
    }

    return (
        <>
          <div
            id="profile-wrapper" 
            className="skewed"
            onMouseMove={e => handleMouseMove(e)} >
            <div className="layer bottom">
              <div className="content-wrap">
                <div className="content-body">
                  <h2 className="content-body__title">Full-Stack Developer</h2>
                  <p>Building digital products with amazing UI/UX through clean code.</p> 
                </div>
                <img src="/imgs/annie-coding.png" alt="Annie Taylor CHEN - full-stack developer" />
              </div>
            </div>

            <div className="layer top" style={{width: mouseMove.topLayerWidth }}>
              <div className="content-wrap">
                <div className="content-body">
                  <h2 className="content-body__title">Photographer</h2>
                  <p>Creating beautiful photos with design in mind.</p>
                </div>
                <img src="/imgs/annie-on-the-moon.png" alt="Annie Taylor CHEN - photographer" />
              </div>
            </div>

            <div className="handle" style={{left: mouseMove.handleLeft}}></div>

          </div>
        </>
    )
}
