import React from 'react';

const SequenceShowDescription = ({ description, notes }) => {
  return(
    <>
      { 
        description &&
        <div className="d-flex justify-content-start align-items-center pt-2 pb-2">

          <div><strong>Description</strong></div>
          <div className="m-0">: { description } </div>

        </div>
      }
      { notes &&
        <>
          <strong>Notes:</strong>
            <ul className="list-group">
              { notes.map( note => 
                <li 
                  key={ note }
                  className="list-group-item border-0 p-2 bg-transparent"
                > - { note }</li>
              )}
            </ul>
        </>
      }
    </>
  )
}

export default SequenceShowDescription;