import React, { Component } from 'react'

export class Newsitem extends Component {

    

  render() {
    let {title , description , imageurl , newsurl} = this.props;
    return (
      <>
        <div className="container my-3">
              <div className="card" style={{width: "18rem"}}>
                  <img src={imageurl?imageurl:"https://images.news9live.com/wp-content/uploads/2026/02/India-vs-South-Africa-3.jpg"} className="card-img-top" alt="..."/>
                  <div className="card-body">
                      <h5 className="card-title">{title?title:""}...</h5>
                      <p className="card-text">{description?description:""}...</p>
                      <a rel="noreferrer" href={newsurl} target="_blank" className="btn btn-dark">Read more</a>
                  </div>
              </div>
        </div>
      </>
    )
  }
}

export default Newsitem