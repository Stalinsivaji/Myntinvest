import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';


const Paragraph = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'brand',
    className
  );

  return (
    <div
      {...props}
      className={classes}
    >
      <p className="">
      We've Built your <br/>Crypto portfolio for you.
      </p>
    </div>
  );
}

export default Paragraph;