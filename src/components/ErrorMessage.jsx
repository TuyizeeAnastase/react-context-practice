import React from "react";

const ErrorMessage = ({ message }) => {
  return (
    <div class="ui negative message">
      <i class="close icon"></i>
      <div class="header">{message}</div>
    </div>
  );
};

export default ErrorMessage;