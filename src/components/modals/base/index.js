import React from 'react';
import PropTypes from 'prop-types';

import './modal.scss';

const Modal = props =>
  (props.isShown ?
    <div className="background">
      <div className={`modal ${props.className}`}>
        <div className="modal__header">
          <h2 className="modal__title">
            {props.title}
            <span
              className="modal__close-button"
              onClick={props.handleClose}>&times;
            </span>
          </h2>
        </div>
        <div className="modal__content">
          {props.content}
        </div>
      </div>
    </div> : null);

Modal.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  content: PropTypes.element.isRequired,
  isShown: PropTypes.bool,
  handleClose: PropTypes.func.isRequired
};

Modal.defaultProps = {
  className: '',
  isShown: false
};

export default Modal;
