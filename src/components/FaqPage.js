import React from 'react';

import { Faqs } from "./FaqList";

const FaqPage = () => {

  const renderCardHeader = ( question, index, ) => {
    return(
      <div className="card-header p-0 bg-transparent" id={`headingOne${ index }`}>
        <h3 className="mb-0">
          <button className="btn pl-0 pr-0" type="button" data-toggle="collapse" data-target={`#collapse${ index }`} aria-expanded="true" aria-controls={`collapse${ index }`}>
            - { question }
          </button>
        </h3>
      </div>
    )
  }

  const renderCardBody = ( answer, index ) => {
    return(
      <div id={`collapse${ index }`} className="collapse" aria-labelledby={`heading${ index }`} data-parent="#faqAccordion">
        <div className="card-body">
          <p>
            { answer }
          </p>
        </div>
      </div>
    )
  }

  const renderCards = () => {
    return(
      Faqs.map( ( faq, i ) => {
        return(
          <div 
            key={ faq.question} 
            className="card bg-transparent border-0 border-top border-bottom">
              { renderCardHeader( faq.question, i ) }
              { renderCardBody( faq.answer, i ) }
          </div>
        )
      })
    )
  }

  return(
    <div className="container main min-vh-100 pt-3 pl-1 pr-1">
      <div
        className="container-fluid d-flex justify-content-start align-items-center flex-column pt-4 pb-4"
      >
        <h2 className="pt-4 pb-4">FAQ</h2>

        <div className="accordion pt-2 pb-2 w-100 bg-transparent" id="faqAccordion">
          { renderCards() }
        </div>
      </div>
    </div>
  )
}

export default FaqPage;