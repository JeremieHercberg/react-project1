//External
import React from 'react';

//CSS
import "./Alert.css"

const Alert = ({ alert }) => {
  return (
    alert !== null && (
      <div className="alert">
        <i className="fas fa-info-circle" />
        {alert.msg}
      </div>
    )
  )
}

export default Alert;
