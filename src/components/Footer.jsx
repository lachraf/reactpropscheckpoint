import React from 'react'
import PropTypes from 'prop-types'; // ES6

const Footer = ({message,children}) => {
  return (
    <div>
        <hr/>
       <h1> {message} </h1>
       <h2> {children} </h2>
    </div>
  )
}
Footer.propTypes = {
    message: PropTypes.string
  };
  Footer.defaultProps = {
    message:"this is default props"
  }
export default Footer