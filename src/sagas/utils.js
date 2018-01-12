import { toast } from 'react-toastify';

export const showInfoToast = text => toast(text, { type: toast.TYPE.INFO });
export const showErrorToast = text => toast(text, { type: toast.TYPE.ERROR });
