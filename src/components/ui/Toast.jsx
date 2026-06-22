/**
 * Toast Notification Setup
 * Use: import toast from 'react-hot-toast'
 * toast.success('Message')
 * toast.error('Error')
 */

import { Toaster } from "react-hot-toast";

function ToastContainer() {
  return (
    <Toaster
      position="top-right"
      toastOptions={{
        duration: 3000,
        style: {
          background: "#363636",
          color: "#fff",
        },
      }}
    />
  );
}

export default ToastContainer;
