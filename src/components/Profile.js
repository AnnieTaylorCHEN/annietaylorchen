import React, { useState } from 'react'

export default function Profile() {
    
    let topLayerWidth 
    let handleLeft 
    
    const [mouseMove, setMouseMove] = useState({
      x: 0,
      skew: 1000,
      delta: 0,
      topLayerWidth: 50,
      handleLeft: 50 + '%'
    })

    const handleMouseMove = (e) => {
      let delta = (e.clientX - window.innerWidth / 2) * 0.5
      let skew = mouseMove.skew
      console.log(delta)
       setMouseMove({
         delta: delta,
         topLayerWidth: e.clientX + skew + delta +'px',
         handleLeft: e.clientX + delta + 'px'
       })
       console.log(topLayerWidth)
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
                  <h2>Full-Stack Developer</h2>
                  <p>Building digital products with amazing UI/UX through clean code.</p> 
                </div>
                <img src="/imgs/1.jpg" alt="Annie Taylor CHEN - full-stack developer" />
              </div>
            </div>

            <div className="layer top" style={{width: topLayerWidth }}>
              <div className="content-wrap">
                <div className="content-body">
                  <h2>Photographer</h2>
                  <p>Creating beautiful photos with design in mind.</p>
                </div>
                <img src="/imgs/2.jpg" alt="Annie Taylor CHEN - photographer" />
              </div>
            </div>

            <div className="handle" style={{left: handleLeft}}></div>

          </div>
        </>
    )
}
