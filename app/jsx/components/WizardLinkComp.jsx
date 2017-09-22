// ##### Deposit Wizard - Link Component ##### //

import React from 'react'

class WizardLinkComp extends React.Component {
  render() {
    return (
      <div className="c-wizard__step">
        <header>
          <h1 tabIndex="-1">eScholarship Deposit</h1>
          <a onClick = {(event)=>{
            event.preventDefault()
            this.props.goBackward()}
          } href=""><span>Go back</span></a>
          <button onClick={this.props.closeModal}><span>Close</span></button>
        </header>
        <div className="c-wizard__heading">
          UC Publication Management
        </div>
        <div className="c-wizard__message">
          <p>Faculty use the UC Publication Management system for all eScholarship deposits– including to claim and deposit publications in compliance with the <a href="">UC Academic Senate faculty Open Acces Policy</a>.</p>
          <a className="c-wizard__external-link" href="">Go to UC Publication Management</a>
        </div>
        <footer>
          Alternately, you may choose to wait for the system to automatically detect your new publication and send you a deposit link via email.
        </footer>
      </div>
    )
  }
}

module.exports = WizardLinkComp;
