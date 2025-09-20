import React from 'react'

const About = () => {
  return (
    <>
      <section
        id="about"
        className="d-flex align-items-center text-center text-white"
        style={{
          height: "100vh",
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url("https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container bg-dark bg-opacity-50 p-5 rounded shadow">
          <h2 className="fw-bold mb-4">ABOUT ME</h2>
          <p className="lead">
            I'M AN <span className='fw-bold'>ARCHITECT</span> PASSIONATE ABOUT CREATING TIMELESS, FUNCTIONAL AND
            SUSTAINABLE SPACES. <br />
            WITH OVER <span className="fw-bold">10 YEARS OF EXPERIENCE</span>, I
            BRING VISIONS TO LIFE THROUGH MODERN DESIGN.
          </p>
        </div>
      </section>
    </>
  )
}

export default About
