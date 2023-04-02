import React from 'react';
import ShowModalDetails from '../ShowModalDetails/ShowModalDetails';

const Modal = ({details}) => {
    return (
        <>
            <div>
              {
                details.map(detail => <ShowModalDetails 
                  detail = {detail}
                  key = {detail.id}
                ></ShowModalDetails>)
              }
            </div>
        </>
    );
};

export default Modal;