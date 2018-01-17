import React from 'react';
import { toast } from 'react-toastify';

export const showInfoToast = text => toast(
  <p><i className="fas fa-info-circle" aria-hidden="true" /> {text}</p>,
  { type: toast.TYPE.INFO }
);

export const showErrorToast = (title, error) => toast(
  <div>
    <p><i className="fas fa-exclamation-circle" aria-hidden="true" /> {title}</p>
    <p>Message: {error.message}</p>
  </div>,
  { type: toast.TYPE.ERROR }
);
