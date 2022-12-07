import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { AppBar } from './AppBar/AppBar';
import { Suspense } from 'react';
import 'react-toastify/dist/ReactToastify.css';

export const Layout = () => {
  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      {/* <Toaster position="top-right" reverseOrder={false} /> */}
    </div>
  );
};
