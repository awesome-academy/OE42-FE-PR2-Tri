import { toast } from 'react-toastify';

export const success = (title) => toast.success(title, {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false
});
export const fail = (title) => toast.error(title, {
    position: "top-right",
    autoClose: 1000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false
});