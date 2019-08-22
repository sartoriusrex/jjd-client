import React from 'react';
import { Resources } from './ResourcesList';

const ResourcesPage = () => {

  const renderCardHeader = ({ id, dataTargetAriaControls, name }) => {
    return(
      <div className="card-header p-0 bg-transparent" id={ id }>
        <h3 className="mb-0">
          <button className="btn pl-0 pr-0" type="button" data-toggle="collapse" data-target={`#${ dataTargetAriaControls }`} aria-expanded="true" aria-controls={ dataTargetAriaControls }>
            { name }
          </button>
        </h3>
      </div>
    )
  }

  const renderListItem = ( { href, title, description } ) => {
    return(
      <li
        key={ title }
        className="list-group-item bg-transparent pl-0 pr-0"
      >
        <a
          href={ href }
          target="_blank"
          rel="noopener noreferrer"
        >{ title }</a>
        <span> - { description } </span>
      </li>
    )
  }

  return(
    <div className="container main min-vh-100 pt-3 pl-1 pr-1">
      <div
        className="container-fluid d-flex justify-content-start align-items-center flex-column pt-4 pb-4"
      >
        <h2 className="pt-4 pb-4">Resources for your Jiu Jitsu Journey</h2>

        <p>
          If you're using this application, then you want more Jiu Jitsu than you can get by just going to class. That's okay. That's why I made this website.
        </p>

        <p>
          Below is a non-comprehensive list of resources for your Jiu Jitsu Journey. Yes, that's cliché. Should we say "path," instead, young grasshopper?
        </p>

        <div className="accordion pt-2 pb-2 w-100 bg-transparent" id="resourcesAccordion">

          <div className="card bg-transparent border-0 border-top border-bottom">

            {renderCardHeader({
              id: "headingOne",
              dataTargetAriaControls: "collapseOne",
              name: "- Forums & Advice"
            })}

            <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#resourcesAccordion">
              <div className="card-body pt-2">
                <ul className="list-group list-group-flush pt-2 pb-2 w-100 bg-transparent">
                  { Resources.forums.sort( 
                    ( first, second ) => {
                      if( first.title < second.title ) { return -1 }
                      if( first.title > second.title ) { return 1 }
                      return 0;
                    }).map( resource =>
                      renderListItem( resource )
                  )}
                </ul>
              </div>
            </div>
          </div>

          <div className="card bg-transparent border-0 border-top border-bottom">

            {renderCardHeader({
              id: "headingTwo",
              dataTargetAriaControls: "collapseTwo",
              name: "- Gis & Apparel"
            })}

            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#resourcesAccordion">
              <div className="card-body pt-2">
                <ul className="list-group list-group-flush pt-2 pb-2 w-100 bg-transparent">
                  <li
                    className="list-group-item bg-transparent p-0"
                  >

                    <div className="accordion pt-2 pb-2 w-100 bg-transparent" id="FirstTimersAccordion">
                      <div className="card bg-transparent border-0 border-top border-bottom">

                        {renderCardHeader({
                          id: "firstTimers",
                          dataTargetAriaControls: "collapsefirstTimers",
                          name: "-- First Gis"
                        })}

                        <div id="collapsefirstTimers" className="collapse" aria-labelledby="firstTimers" data-parent="#FirstTimersAccordion">
                          <div className="card-body pt-2">
                            <ul className="list-group list-group-flush pt-2 pb-2 w-100 bg-transparent">
                              { Resources.firstGis.sort( 
                                ( first, second ) => {
                                  if( first.title < second.title ) { return -1 }
                                  if( first.title > second.title ) { return 1 }
                                  return 0;
                                }).map( resource =>
                                  renderListItem( resource )
                              )}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li
                    className="list-group-item bg-transparent p-0"
                  >
                    <div className="accordion pt-2 pb-2 w-100 bg-transparent" id="StandardAccordion">
                      <div className="card bg-transparent border-0 border-top border-bottom">

                        {renderCardHeader({
                          id: "standard",
                          dataTargetAriaControls: "collapsestandard",
                          name: "-- Standard Apparel"
                        })}

                        <div id="collapsestandard" className="collapse" aria-labelledby="standard" data-parent="#StandardAccordion">
                          <div className="card-body pt-2">
                            <ul className="list-group list-group-flush pt-2 pb-2 w-100 bg-transparent">
                              { Resources.standardGis.sort( 
                                ( first, second ) => {
                                  if( first.title < second.title ) { return -1 }
                                  if( first.title > second.title ) { return 1 }
                                  return 0;
                                }).map( resource =>
                                  renderListItem( resource )
                              )}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li
                    className="list-group-item bg-transparent p-0"
                  >
                    <div className="accordion pt-2 pb-2 w-100 bg-transparent" id="PremiumAccordion">
                      <div className="card bg-transparent border-0 border-top border-bottom">

                        {renderCardHeader({
                          id: "premium",
                          dataTargetAriaControls: "collapsepremium",
                          name: "-- Premium or Limited Quantity"
                        })}

                        <div id="collapsepremium" className="collapse" aria-labelledby="premium" data-parent="#PremiumAccordion">
                          <div className="card-body pt-2">
                            <ul className="list-group list-group-flush pt-2 pb-2 w-100 bg-transparent">
                              { Resources.premiumGis.sort( 
                                ( first, second ) => {
                                  if( first.title < second.title ) { return -1 }
                                  if( first.title > second.title ) { return 1 }
                                  return 0;
                                }).map( resource =>
                                  renderListItem( resource )
                              )}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li
                    className="list-group-item bg-transparent p-0"
                  >
                    <div className="accordion pt-2 pb-2 w-100 bg-transparent" id="SpecialityAccordion">
                      <div className="card bg-transparent border-0 border-top border-bottom">

                        {renderCardHeader({
                          id: "specialty",
                          dataTargetAriaControls: "collapsespecialty",
                          name: "-- Specialty"
                        })}

                        <div id="collapsespecialty" className="collapse" aria-labelledby="specialty" data-parent="#SpecialityAccordion">
                          <div className="card-body pt-2">
                            <ul className="list-group list-group-flush pt-2 pb-2 w-100 bg-transparent">
                              { Resources.specialtyGis.sort( 
                                ( first, second ) => {
                                  if( first.title < second.title ) { return -1 }
                                  if( first.title > second.title ) { return 1 }
                                  return 0;
                                }).map( resource =>
                                  renderListItem( resource )
                              )}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li
                    className="list-group-item bg-transparent p-0"
                  >
                    <div className="accordion pt-2 pb-2 w-100 bg-transparent" id="ResellersAccordion">
                      <div className="card bg-transparent border-0 border-top border-bottom">

                        {renderCardHeader({
                          id: "resellers",
                          dataTargetAriaControls: "collapseresellers",
                          name: "-- Useful Retailers"
                        })}

                        <div id="collapseresellers" className="collapse" aria-labelledby="resellers" data-parent="#ResellersAccordion">
                          <div className="card-body pt-2">
                            <ul className="list-group list-group-flush pt-2 pb-2 w-100 bg-transparent">
                              { Resources.resellers.sort( 
                                ( first, second ) => {
                                  if( first.title < second.title ) { return -1 }
                                  if( first.title > second.title ) { return 1 }
                                  return 0;
                                }).map( resource =>
                                  renderListItem( resource )
                              )}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="card bg-transparent border-0 border-top border-bottom">

            {renderCardHeader({
              id: "headingThree",
              dataTargetAriaControls: "collapseThree",
              name: "- Instructional Sites, Books, and DVDs"
            })}

            <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#resourcesAccordion">
              <div className="card-body pt-2">
                <ul className="list-group list-group-flush pt-2 pb-2 w-100 bg-transparent">
                  { Resources.instructionals.sort( 
                    ( first, second ) => {
                      if( first.title < second.title ) { return -1 }
                      if( first.title > second.title ) { return 1 }
                      return 0;
                    }).map( resource =>
                      renderListItem( resource )
                  )}
                </ul>
              </div>
            </div>
          </div>

          <div className="card bg-transparent border-0 border-top border-bottom">

            {renderCardHeader({
              id: "headingFour",
              dataTargetAriaControls: "collapseFour",
              name: "- Competitions, Seminars, and Other Experiences"
            })}

            <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#resourcesAccordion">
              <div className="card-body pt-2">
                <ul className="list-group list-group-flush pt-2 pb-2 w-100 bg-transparent">
                  { Resources.experiences.sort( 
                    ( first, second ) => {
                      if( first.title < second.title ) { return -1 }
                      if( first.title > second.title ) { return 1 }
                      return 0;
                    }).map( resource =>
                      renderListItem( resource )
                  )}
                </ul>
              </div>
            </div>
          </div>

        </div>

        <small className="p-4">
          Disclaimer: this website is in no way affiliated with any third parties mentioned here and does not receive payment, compensation, referrals, or what-have-you.
        </small>
      </div>
    </div>
  )
}

export default ResourcesPage;