import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

export const notify = (message) => {
  toast.info(`${message}`, {
    position: "top-right",
    autoClose: 1500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    progress: undefined,
  });
};
