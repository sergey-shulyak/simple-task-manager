import React from 'react';
import { toast } from 'react-toastify';

export const showInfoToast = text => toast(
  <p><i className="fa fa-info-circle" aria-hidden="true" /> {text}</p>,
  { type: toast.TYPE.INFO }
);
export const showErrorToast = text => toast(
  <p><i className="fa fa-exclamation-circle" aria-hidden="true" /> {text}</p>,
  { type: toast.TYPE.ERROR }
);
