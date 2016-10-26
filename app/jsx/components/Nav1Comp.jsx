// ##### Navigation - Home Component ##### //

import React from 'react'
import 'details-polyfill'
import Breakpoints from '../../js/breakpoints.json'

class Nav1Comp extends React.Component {
  componentWillMount() {
    if (matchMedia) {
      this.mq = matchMedia("(min-width:"+Breakpoints.screen2+")")
      this.mq.addListener(this.widthChange)
      this.widthChange()
    }
  }
  widthChange = ()=> {
    this.setState({isOpen: this.mq.matches})
  }
  render() {
    return (
      <nav className="c-nav1">
        <details open={this.state.isOpen ? "open" : ""} className="c-nav1__main">
          <summary className="c-nav1__main-button" role="button">Menu
          </summary>
          <div className="c-nav1__main-items">
            <a className="c-nav1__item--active" href="">About</a>
            <details className="c-nav1__sub">
              <summary className="c-nav1__sub-button">
                Campuses
              </summary>
              <div className="c-nav1__sub-items">
                <a href="">UC Berkeley</a>
                <a href="">UC Davis</a>
                <a href="">UC Irvine</a>
                <a href="">UCLA</a>
                <a href="">UC Merced</a>
                <a href="">UC Riverside</a>
                <a href="">UC San Diego</a>
                <a href="">UC San Francisco</a>
                <a href="">UC Santa Barbara</a>
                <a href="">UC Santa Cruz</a>
                <a href="">UC Office of the President</a>
                <a href="">UC Press</a>
              </div>
            </details>
            <a href="">Open Access Policies</a>
            <a href="">Journals</a>
            <a href="">Get Started</a>
          </div>
        </details>
      </nav>
    )
  }
}

module.exports = Nav1Comp;
