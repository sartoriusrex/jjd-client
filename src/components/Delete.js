import React from 'react';
import history from '../history';


const Delete = ({ item, actionHandler, userid, itemid }) => {
  return(
    <div 
      className="bg-transparent"
      role="dialog"
      id="modalPopup"
      onClick={ () => history.goBack() }
    >
      <div 
        className="modal-lg modal-dialog"
        role="document"
        onClick={ (e) => e.stopPropagation() }
      >
        <div className="modal-content">
          <div className="modal-header">
            <h3>Delete { item }</h3>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={ e => {
                history.goBack();
                e.stopPropagation(); 
              }}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            Are you sure you want to delete this { item.toLowerCase() }?
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary shadow-lg"
              data-dismiss="modal"
              onClick={ e => {
                history.goBack();
                e.stopPropagation(); 
              }}
            >
              Cancel
            </button>
            <button
              type="button"
              className="btn btn-danger shadow-lg"
              onClick={ () => 
                actionHandler( userid, itemid )
              }
            >
              Delete { item }
            </button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Delete;