import React from 'react'

function About() {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">About This News Website</h2>

      <p className="lead text-center">
        Welcome to our News App!
      </p>

      <p><strong>
        This website provides the latest top headlines from 
        Business categories.
        The news is fetched dynamically using an external News API.
        </strong>
      </p>

      <p>
        Built using:
      </p>

      <ul>
        <li>React JS</li>
        <li>Bootstrap for styling</li>
        <li>News API for real-time news data</li>
        <li>React Router for navigation</li>
      </ul>

      <div className="text-center mt-4">
        <h5>Stay Updated. Stay Informed.</h5>
      </div>
    </div>
  )
}

export default About