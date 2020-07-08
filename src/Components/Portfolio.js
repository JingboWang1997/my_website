import React, { Component } from 'react';

/**
 * 1. cirkles
 * 2. algorithm studio
 * 3. voice calorie
 * 4. snapnfly
 * 5. minesweeper
 * 6. foodPrepIt
 * 7. humor analysis
 * 8. open-telemetry
 */
class Portfolio extends Component {
  render() {

    // if(this.props.data){
    //   var projects = this.props.data.projects.map(function(projects){
    //     var projectImage = 'images/portfolio/'+projects.image;
    //     return <div key={projects.title} className="columns portfolio-item">
    //        <div className="item-wrap">
    //         <a href={projects.url} title={projects.title}>
    //            <img alt={projects.title} src={projectImage} />
    //            <div className="overlay">
    //               <div className="portfolio-item-meta">
    //              <h5>{projects.title}</h5>
    //                  <p>{projects.category}</p>
    //               </div>
    //             </div>
    //           <div className="link-icon"><i className="fa fa-link"></i></div>
    //         </a>
    //       </div>
    //     </div>
    //   })
    // }

    return (
      <section id="portfolio">

      <div className="row">

         <div className="twelve columns collapsed">

            <h1>Projects Coming Soon</h1>

            {/* <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                {projects}
            </div> */}
          </div>
      </div>
   </section>
    );
  }
}

export default Portfolio;
