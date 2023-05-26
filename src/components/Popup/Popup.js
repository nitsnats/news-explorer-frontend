import React from 'react';

const Popup = (props) => {
  function closePopup() {
    props.togglePopup(false);
    props.toggleFormPopup(false);
  }
  return (
    <section className={`modal ${props.isPopupOpen ? 'modal_visible' : ''}`}>
      <div className={`popup ${props.isPopupOpen ? 'popup_visible' : ''}`}>
        <div className='popup-container'>
          <button className='popup__exit' type='button' onClick={closePopup}/>
          {props.children}
        </div>
      </div>
    </section>
  );
};

export default Popup;