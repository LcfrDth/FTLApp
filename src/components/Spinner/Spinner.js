import React from 'react';
import { CircularProgress } from "@material-ui/core";

const Spinner = () => {
  return (
    <div className="spinner flex justify-center items-center w-full h-screen">
        <CircularProgress />
    </div>
  )
}

export default Spinner
