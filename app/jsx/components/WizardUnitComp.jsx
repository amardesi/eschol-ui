// ##### Deposit Wizard - Unit Component ##### //

import React from 'react'

class WizardUnitComp extends React.Component {
  render() {
    return (
      <div className="c-wizard__step" id="c-wizard__unit">
        <header>
          <h1>eScholarship Deposit</h1>
          <a href=""><span>Go back</span></a>
          <button><span>Close</span></button>
        </header>
        <div className="c-wizard__heading">
          What is your departmental affiliation?
        </div>
        <ul className="c-wizard__list">
          <li>
            <a href="">American Cultures Center</a>
          </li>
          <li>
            <a href="">Archaeological Research Facility</a>
          </li>
          <li>
            <a href="">Bay Area International Group</a>
          </li>
          <li>
            <a href="">Berkeley Graduate School of Journalism</a>
          </li>
          <li>
            <a href="">Berkeley Natural History Museum</a>
          </li>
          <li>
            <a href="">Berkeley Program in Law and Economics</a>
          </li>
          <li>
            <a href="">[etc.]</a>
          </li>
        </ul>
        <footer>
          Don't see your department? <a href="">Add it to eScholarship here</a>.
        </footer>
      </div>
    )
  }
}

module.exports = WizardUnitComp;
