import React from 'react';

const FaqPage = () => {
  return(
    <div className="container main min-vh-100 pt-3 pl-1 pr-1">
      <div
        className="container-fluid d-flex justify-content-start align-items-center flex-column pt-4 pb-4"
      >
        <h2 className="pt-4 pb-4">FAQ</h2>

        <div className="accordion pt-2 pb-2 w-100 bg-transparent" id="faqAccordion">

          <div className="card bg-transparent border-0 border-top border-bottom">
            <div className="card-header p-0 bg-transparent" id="headingOne">
              <h3 className="mb-0">
                <button className="btn pl-0 pr-0" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  - Can I create entries and reactions when I create a technique?
                </button>
              </h3>
            </div>

            <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#faqAccordion">
              <div className="card-body">
                <p>
                  At the moment, that is not a possibility.
                </p>
              </div>
            </div>
          </div>

          <div className="card bg-transparent border-0 border-top border-bottom">
            <div className="card-header p-0 bg-transparent" id="headingOne">
              <h3 className="mb-0">
                <button className="btn pl-0 pr-0" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                  - Do I need to create an account to create, edit, and share techniques and sequences?
                </button>
              </h3>
            </div>

            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#faqAccordion">
              <div className="card-body">
                <p>
                  Yes, currently that is the only way assure quality-control from our users. This has the added benefit of linking techniques and sequences to your and others' accounts for later reference.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FaqPage;