import React, { useState } from 'react';
import propTypes from 'prop-types';
import * as styles from './index.module.css';

const Button = ({
  testId, children, buttonOnClick,
}) => (
  <button className={styles.buttonStyle} type="submit" data-testid={testId} onClick={buttonOnClick}>{children}</button>
);

export default Button;

Button.propTypes = {
  testId: propTypes.string,
  children: propTypes.string.isRequired,
  buttonOnClick: propTypes.func.isRequired,
};
