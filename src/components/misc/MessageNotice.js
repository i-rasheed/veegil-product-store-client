import React from "react";

export default function MessageNotice(props) {
  return (
    <div className="message-notice">
      <span>{props.message}</span>
      <button onClick={props.clearError}>X</button>
    </div>
  );
}