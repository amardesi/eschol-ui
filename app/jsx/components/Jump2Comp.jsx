// ##### New Component ##### //

import React from 'react'

class Jump2Comp extends React.Component {
  render() {
    return (
      <section className="o-columnbox1">
        <header>
          <h2>Jump To</h2>
        </header>
        <div className="c-jump">
          <div><a id="c-jump__label" href="">Article</a></div>
          <ul className="c-jumptree" aria-labelledby="c-jump__label">
            <li><a href="">Abstract</a></li>
            <li><a href="">Main Content</a>
              <ul>
                <li className="c-jumptree-toc"><a href="">Foreword by Karl S. Pister placerat semper mi lorem sit amet lorem placerat semper mi lorem sit amet lorem</a></li>
                <li className="c-jumptree-toc"><a href="">About this Book</a></li>
                <li className="c-jumptree-toc"><a href="">1. The Evolution of a Crisis</a></li>
                <li className="c-jumptree-toc"><a href="">2. The Education of a Chancellor</a></li>
                <li className="c-jumptree-toc"><a href="">3. Who Runs the University?</a></li>
                <li className="c-jumptree-toc"><a href="">Appendix 1. Regents' Resolutions SP-1, SP-2, and RE-28</a></li>
                <li className="c-jumptree-toc"><a href="">Notes</a></li>
              </ul>
            </li>
            <li><a href="">References</a></li>
            <li><a href="">Author Response</a></li>
          </ul>
          <ul className="c-jump__siblings">
            <li><a href="">Supplemental Material</a></li>
            <li><a href="">Metrics</a></li>
            <li><a href="">Author & Article Info</a></li>
            <li><a href="">Comments</a></li>
          </ul>
        </div>
      </section>
    )
  }
}

module.exports = Jump2Comp;
