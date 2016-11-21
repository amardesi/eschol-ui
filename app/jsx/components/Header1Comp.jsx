// ##### Header Component ##### //

import React from 'react'
import Search1Comp from '../components/Search1Comp.jsx'

class HeaderComp1 extends React.Component {
  constructor(props){
    super(props)
    this.state = {searchActive: false}
  }
  render() {
    return (
      <div className="c-header1">
        <div className="c-header1__logosearch">
          <a href="">
            <img className="c-header1__logo" src="images/logo_escholarship.svg" alt="escholarship"/>
          </a>  
          <div className={this.state.searchActive ? "c-header1__search--active" : "c-header1__search"}>
            <Search1Comp onClose = {()=>this.setState({searchActive: false})} />
          </div>
          <button className="c-header1__search-open-button" aria-label="open search field" onClick = {()=> this.setState({searchActive: true})}></button>
        </div>
        <div className="c-header1__deposit">
          <button className="c-header1__deposit-button">Get Started</button>
        </div>
      </div>
    )
  }
}

module.exports = HeaderComp1;
