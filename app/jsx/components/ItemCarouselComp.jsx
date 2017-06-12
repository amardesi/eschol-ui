// ##### Item Carousel Component ##### //

import React from 'react'
import $ from 'jquery'
import Flickity from 'flickity-imagesloaded'

class ItemCarouselComp extends React.Component {
  componentDidMount () {
    var carousel = $('.c-itemcarousel__carousel')[0];
    var options = {
      cellAlign: 'left',
      contain: true,
      initialIndex: 0,
      pageDots: false
    }
    this.flkty = new Flickity(carousel, options);
  }
  componentWillUnmount() {
    if (this.flkty) {
      this.flkty.destroy();
    }
  }
  render() {
    return (
      <div className="c-itemcarousel">
        <h2 className="c-itemcarousel__heading">Center for Medieval and Renaissance Studies</h2>
        <div className="c-itemcarousel__carousel">
          <div className="c-itemcarousel__item">
            Item 1
          </div>
          <div className="c-itemcarousel__item">
            Item 2
          </div>
          <div className="c-itemcarousel__item">
            Item 3
          </div>
          <div className="c-itemcarousel__item">
            Item 4
          </div>
          <div className="c-itemcarousel__item">
            Item 5
          </div>
        </div>
        <div className="o-stat--item c-itemcarousel__stats-item">
          <b>1,000</b>Items
        </div>
        <div className="o-stat--view c-itemcarousel__stats-view">
          <b>100,000</b>Views
        </div>
      </div>
    )
  }
}

module.exports = ItemCarouselComp;
