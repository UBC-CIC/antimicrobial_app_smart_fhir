import React from 'react';
import PropTypes from 'prop-types';
import ApplicationErrorBoundary from 'terra-application/lib/application-error-boundary/ApplicationErrorBoundary';


const ErrorBoundaryWrapper = ({ children }) => {
    return (
            <ApplicationErrorBoundary>
                {children}
            </ApplicationErrorBoundary>
    );
};

ErrorBoundaryWrapper.propTypes = {
    children: PropTypes.node,
};

export default ErrorBoundaryWrapper;