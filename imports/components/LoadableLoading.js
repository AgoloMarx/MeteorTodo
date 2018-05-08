import React from 'react';
import PropTypes from 'prop-types';

import Loading from './Loading';

const LoadableLoading = ({ isLoading, pastDelay, error }) => {
  if (isLoading && pastDelay) {
    return <Loading />;
  } else if (error && !isLoading) {
    return (
      <h2>Error loading page!</h2>
    );
  }

  return null;
};

LoadableLoading.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  pastDelay: PropTypes.bool.isRequired,
  error: PropTypes.object,
};

export default LoadableLoading;