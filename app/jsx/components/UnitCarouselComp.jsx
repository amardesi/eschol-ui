// ##### Unit Carousel Component ##### //

import React from 'react'
import $ from 'jquery'

class UnitCarouselComp extends React.Component {
  scrollDown = ()=> {
    this.scrollBox.scrollBy({ top: 100, behavior: 'smooth' });
    this.scrollBox.focus()
  }
  scrollUp = ()=> {
    this.scrollBox.scrollBy({ top: -100, behavior: 'smooth' });
    this.scrollBox.focus()
  }
  render() {
    return (
      <div className="c-unitcarousel">
        <button className="c-unitcarousel__button-up" onClick={this.scrollUp} aria-label="Scroll Up"></button>
        <div className="c-unitcarousel__scrollbox" ref={el => this.scrollBox = el} tabIndex="-1">
          <div className="c-unitcarousel__item">
            <h3><a href="">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</a>
            </h3>
            <div className="c-unitcarousel__item-authorlist">
              <div className="c-authorlist">
                <ul className="c-authorlist__list">
                  <li>Barshop, William</li>
                  <li>Bedard James E J</li>
                  <li>Dothager, Matthew</li>
                </ul>
              </div>
            </div>
            <div className="c-unitcarousel__item-type--article">Article</div>
          </div>
          <div className="c-unitcarousel__item">
            <h3><a href="">Quia veritatis est, eum facilis expedita consequatur consequuntur suscipit obcaecati!</a>
            </h3>
            <div className="c-unitcarousel__item-authorlist">
              <div className="c-authorlist">
                <ul className="c-authorlist__list">
                  <li>Barshop, William</li>
                  <li>Bedard James E J</li>
                  <li>Dothager, Matthew</li>
                  <li>Lee, Paul</li>
                  <li>Leung, Wilson</li>
                  <li>Machone, Joshua F</li>
                </ul>
              </div>
            </div>
            <div className="c-unitcarousel__item-type--book">Book</div>
          </div>
          <div className="c-unitcarousel__item">
            <h3><a href="">Pariatur cupiditate rerum quidem, omnis et inventore repellendus velit autem.</a>
            </h3>
            <div className="c-unitcarousel__item-authorlist">
              <div className="c-authorlist">
                <ul className="c-authorlist__list">
                  <li>Barshop, William</li>
                  <li>Bedard James E J</li>
                  <li>Dothager, Matthew</li>
                  <li>Lee, Paul</li>
                </ul>
              </div>
            </div>
            <div className="c-unitcarousel__item-type--thesis">Thesis</div>
          </div>
          <div className="c-unitcarousel__item">
            <h3><a href="">Quidem blanditiis voluptatum pariatur earum doloremque similique ab cumque sit.</a>
            </h3>
            <div className="c-unitcarousel__item-authorlist">
              <div className="c-authorlist">
                <ul className="c-authorlist__list">
                  <li>Barshop, William</li>
                  <li>Bedard James E J</li>
                  <li>Dothager, Matthew</li>
                  <li>Lee, Paul</li>
                  <li>Leung, Wilson</li>
                  <li>Machone, Joshua F</li>
                </ul>
              </div>
            </div>
            <div className="c-unitcarousel__item-type--multimedia">Multimedia</div>
          </div>
          <div className="c-unitcarousel__item">
            <h3><a href="">Ratione ipsa vero aperiam, error quis voluptatibus rerum laboriosam, doloremque.</a>
            </h3>
            <div className="c-unitcarousel__item-authorlist">
              <div className="c-authorlist">
                <ul className="c-authorlist__list">
                  <li>Barshop, William</li>
                  <li>Bedard James E J</li>
                </ul>
              </div>
            </div>
            <div className="c-unitcarousel__item-type--article">Article</div>
          </div>
          <div className="c-unitcarousel__item">
            <h3><a href="">Sunt eos praesentium, voluptates veritatis autem hic eligendi officia odit!</a>
            </h3>
            <div className="c-unitcarousel__item-authorlist">
              <div className="c-authorlist">
                <ul className="c-authorlist__list">
                  <li>Barshop, William</li>
                  <li>Bedard James E J</li>
                  <li>Dothager, Matthew</li>
                  <li>Lee, Paul</li>
                  <li>Leung, Wilson</li>
                  <li>Machone, Joshua F</li>
                </ul>
              </div>
            </div>
            <div className="c-unitcarousel__item-type--book">Book</div>
          </div>
          <div className="c-unitcarousel__item">
            <h3><a href="">Facere, quaerat, consequuntur.</a>
            </h3>
            <div className="c-unitcarousel__item-authorlist">
              <div className="c-authorlist">
                <ul className="c-authorlist__list">
                  <li>Barshop, William</li>
                  <li>Bedard James E J</li>
                  <li>Dothager, Matthew</li>
                  <li>Lee, Paul</li>
                </ul>
              </div>
            </div>
            <div className="c-unitcarousel__item-type--thesis">Thesis</div>
          </div>
          <div className="c-unitcarousel__item">
            <h3><a href="">Esse, quis fugit similique officiis earum molestias vitae dolores odit.</a>
            </h3>
            <div className="c-unitcarousel__item-authorlist">
              <div className="c-authorlist">
                <ul className="c-authorlist__list">
                  <li>Barshop, William</li>
                  <li>Bedard James E J</li>
                  <li>Dothager, Matthew</li>
                  <li>Lee, Paul</li>
                  <li>Leung, Wilson</li>
                  <li>Machone, Joshua F</li>
                </ul>
              </div>
            </div>
            <div className="c-unitcarousel__item-type--multimedia">Multimedia</div>
          </div>
          <div className="c-unitcarousel__item">
            <h3><a href="">Rerum ad itaque rem culpa maxime, animi facilis incidunt quidem!</a>
            </h3>
            <div className="c-unitcarousel__item-authorlist">
              <div className="c-authorlist">
                <ul className="c-authorlist__list">
                  <li>Barshop, William</li>
                  <li>Bedard James E J</li>
                </ul>
              </div>
            </div>
            <div className="c-unitcarousel__item-type--article">Article</div>
          </div>
          <div className="c-unitcarousel__item">
            <h3><a href="">Consectetur nostrum voluptatibus soluta, magnam velit nobis tenetur tempore ipsum!</a>
            </h3>
            <div className="c-authorlist">
              <ul className="c-authorlist__list">
                <li>Barshop, William</li>
                <li>Bedard James E J</li>
                <li>Dothager, Matthew</li>
                <li>Lee, Paul</li>
                <li>Leung, Wilson</li>
                <li>Machone, Joshua F</li>
              </ul>
            </div>
            <div className="c-unitcarousel__item-type--book">Book</div>
          </div>
        </div>
        <button className="c-unitcarousel__button-down" onClick={this.scrollDown} aria-label="Scroll Down"></button>
      </div>
    )
  }
}

module.exports = UnitCarouselComp;
