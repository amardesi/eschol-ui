// ##### Tabs Component ##### //

import React from 'react'
import TabMainComp from '../components/TabMainComp.jsx'
import TabSupplementalComp from '../components/TabSupplementalComp.jsx'
import TabMetricsComp from '../components/TabMetricsComp.jsx'
import TabAuthorComp from '../components/TabAuthorComp.jsx'
import TabCommentsComp from '../components/TabCommentsComp.jsx'

class TabsComp extends React.Component {
  constructor(props){
    super(props)
    this.state = {currentTab: 1, moreTabs: false}
  }
  render() {
    return (
      <div className="c-tabs">
        <div className={this.state.moreTabs ? "c-tabs__tabs--show-all" : "c-tabs__tabs"}>
          <button className="c-tabs__button-more" onClick = {()=> this.setState({moreTabs: !this.state.moreTabs})} aria-label="Show all tabs">...</button>
          <button className={this.state.currentTab === 1 ? "c-tabs__button--active" : "c-tabs__button"} onClick = {()=> this.setState({currentTab: 1})}>Main Content</button>
          <button className={this.state.currentTab === 2 ? "c-tabs__button--active" : "c-tabs__button"} onClick = {()=> this.setState({currentTab: 2})}>Supplemental material</button>
          <button className={this.state.currentTab === 3 ? "c-tabs__button--active" : "c-tabs__button"} onClick = {()=> this.setState({currentTab: 3})}>Metrics</button>
          <button className={this.state.currentTab === 4 ? "c-tabs__button--active" : "c-tabs__button"} onClick = {()=> this.setState({currentTab: 4})}>Author & Article Info</button>
          <button className={this.state.currentTab === 5 ? "c-tabs__button--active" : "c-tabs__button"} onClick = {()=> this.setState({currentTab: 5})}>Comments (2)</button>
        </div>
        <div className="c-tabs__content">
          {this.state.currentTab === 1 ? <TabMainComp /> : null}
          {this.state.currentTab === 2 ? <TabSupplementalComp /> : null}
          {this.state.currentTab === 3 ? <TabMetricsComp /> : null}
          {this.state.currentTab === 4 ? <TabAuthorComp /> : null}
          {this.state.currentTab === 5 ? <TabCommentsComp /> : null}
        </div>
      </div>
    )
  }
}

module.exports = TabsComp;