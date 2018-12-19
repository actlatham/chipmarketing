import * as React from 'react';
import PropTypes from 'prop-types';

import { toClassNameObj } from 'src/services/helpers';

function BackgroundIcon({ className = '' }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="815"
      height="495"
      viewBox="0 0 815 495"
      {...toClassNameObj(className)}
    >
      <path
        fill="#F8F8F8"
        fillRule="evenodd"
        d="M524.884 494.931H0c15.157-58.41 56.243-157.442 160.595-157.442 141.421 0 128.92-178.31 211.405-234C448.687 51.714 655.919 151.107 814.857.596v316.826C784.99 321.544 763.706 335.736 751 360c-61 116.49-143.334 48.438-202.508 116.49-5.793 6.662-13.662 12.81-23.608 18.441z"
      />
    </svg>
  );
}
BackgroundIcon.propTypes = {
  className: PropTypes.string,
};

export { BackgroundIcon };
