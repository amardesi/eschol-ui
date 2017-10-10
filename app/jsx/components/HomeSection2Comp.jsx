// ##### Home Section 2 Component ##### //

import React from 'react'

class HomeSection2Comp extends React.Component {
  render() {
    return (
      <div id="repository" className="c-homesection2">
        <strong className="c-homesection2__heading">eScholarship is the institutional repository for the UC system</strong>
        <div className="c-homesection2__map"></div>
        <div className="c-homesection2__description">
          <h3>Institutional Repository</h3>
          <p>eScholarship serves as the institutional repository for the ten University of California campuses and affiliated research centers.</p>
          <p>eScholarship Repository content includes postprints (previously published articles), as well as working papers, electronic theses and dissertations (ETDs), student capstone projects, and seminar/conference proceedings.</p>
        </div>
        <button className="c-homesection2__deposit">Deposit Work</button>
        <a href="" className="c-homesection2__browse-campuses">Browse campuses</a>
        <h3 className="c-homesection2__stat-heading">Repository Holdings</h3>
        <div className="o-stat">
          <div className="o-stat--item">
            <a href="">24,844</a> Items
          </div>
          <div className="o-stat--units">
            <a href="">119</a> Research Units
          </div>
          <div className="o-stat--passed">
            <a href="">6,532</a> Items since UC <br/> OA Policy passed
          </div>
        </div>
        <a href="" className="c-homesection2__browse-all">Browse all eScholarship holdings</a>
        <a href="" className="c-homesection2__more">Learn more about the eScholarship repository</a>
      </div>
    )
  }
}

module.exports = HomeSection2Comp;
