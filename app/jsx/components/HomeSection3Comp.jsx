// ##### Home Section 3 Component ##### //

import React from 'react'
import JournalGridComp from '../components/JournalGridComp.jsx'

class HomeSection3Comp extends React.Component {
  render() {
    return (
      <div id="publishing" className="c-homesection3">
        <strong className="c-homesection3__heading">eScholarship is also an open access publishing platform</strong>
        <div className="c-homesection3__description">
          <h3>eScholarship Publishing</h3>
          <p>eScholarship Publishing is an open access publishing platform subsidized by the University of California, managed by the California Digital Library, and offered free of charge to UC-affiliated departments, research units, publishing programs and individual scholars.</p>
          <p>We offer publishing and production tools, including a full editorial and peer review system, as well as professional support and consulting services.</p>
        </div>
        <a href="" className="c-homesection3__start">How to start a journal</a>
        <div className="c-homesection3__journalgrid">
          <JournalGridComp />
        </div>
        <a href="" className="c-homesection3__browse-all">Browse all eScholarship journals</a>
      </div>
    )
  }
}

module.exports = HomeSection3Comp;
