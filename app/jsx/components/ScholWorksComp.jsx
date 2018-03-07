// ##### Scholarly Works Component ##### //

import React from 'react'
import $ from 'jquery'
import dotdotdot from 'jquery.dotdotdot'
import AuthorListComp from '../components/AuthorListComp.jsx'
import MediaListComp from '../components/MediaListComp.jsx'
import MEDIA_PATH from '../../js/MediaPath.js'
import faker from 'faker/locale/en'

class ScholWorksComp extends React.Component {
  componentDidMount() {
    $('.c-scholworks__heading, .c-scholworks__abstract').dotdotdot({watch:"window"});
  }
  render() {
    return (
      <section className="c-scholworks">
        <div className="c-scholworks__main-column">
          <ul className="c-scholworks__tag-list">
            <li className={'c-scholworks__tag-' + this.props.type}>{this.props.type}</li>
            <li className="c-scholworks__tag-peer">Peer Reviewed</li>
          </ul>
          <heading>
            <h2 className="c-scholworks__heading">
              <a href="">From the New Heights: The City and Migrating Latinas in Real Woman Have Curves and Maria Full of Grace</a>
            </h2 >
          </heading>
          <AuthorListComp />
          <div className="c-scholworks__publication">
            <a href="">Mester Journal, Volume 42, Issue 1</a> (2012)
          </div>
          <div className="c-scholworks__abstract">
            <p>{faker.fake("{{lorem.paragraphs}}")}</p>
          </div>
          <div className="c-scholworks__media">
            <MediaListComp />
            <img src={MEDIA_PATH + 'cc-by-small.svg'} alt="creative commons attribution 4.0 international public license"/>
          </div>
        </div>
        <a className="c-scholworks__thumbnail" href="">
          <img src={MEDIA_PATH + 'temp_article.png'} alt="article"/>
        </a>
      </section>
    )
  }
}

module.exports = ScholWorksComp;
