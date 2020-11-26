import React, { useState }  from 'react';
import NavigationPrompt from 'terra-application/lib/navigation-prompt';
import PropTypes from 'prop-types';


const PatientView = ({ title }) => {
    const [hasPendingAction, setHasPendingAction] = useState(false);
    return (
        <div>
            <p>{title}</p>
            <p>
                Toggle pending action:
                {' '}
                <button
                    id="pending-action-toggle"
                    type="button"
                    onClick={() => {
                        setHasPendingAction(!hasPendingAction);
                    }}
                >
                    {hasPendingAction ? 'Disable' : 'Enable'}
                </button>
            </p>
            {hasPendingAction ? <NavigationPrompt description="Testing ApplicationNavigation's navigation prompt handling" /> : undefined}
        </div>
    );
};

PatientView.propTypes = {
    title: PropTypes.string,
};


export default PatientView;