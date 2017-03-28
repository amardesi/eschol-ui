// ##### View on External Site Component ##### //

import React from 'react'

class ViewExternalComp extends React.Component {
  render() {
    return (
      <div className="c-viewexternal">
        <button className="c-viewexternal__action">View on External Site</button>
        <div className="c-viewexternal__text">Item not freely available? Link broken?</div>
        <a href="" className="c-viewexternal__report-link">Report a problem accessing this item</a>
      </div>
    )
  }
}

module.exports = ViewExternalComp;
