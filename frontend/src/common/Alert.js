import React from "react";

/* Displays alert */
function Alert({ type = "danger", messages = [] }) {
  return (
      <div className={`alert alert-${type}`} role="alert">
        {messages.map(e => (
            <p key={e}>
              {e}
            </p>
        ))}
      </div>
  );
}

export default Alert;