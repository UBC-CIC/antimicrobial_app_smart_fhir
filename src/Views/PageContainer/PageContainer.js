import React, { useState }  from 'react';
import { connect } from "react-redux";
import DynamicGrid from 'terra-dynamic-grid';
import ApplicationNavigation from 'terra-application/lib/application-navigation';
import PatientView from "../Pages/PatientView/PatientView";
import ActionHeader from "terra-action-header";


const navigationItems = [{
    key: 'Patient_1',
    text: 'Patient 1',
}, {
    key: 'Patient_2',
    text: 'Patient 2',
}, {
    key: 'Patient_3',
    text: 'Patient 3',
}];

const userConfig = {
    name: 'Clinician',
    initials: 'DR',
};

const template = {
    'grid-template-columns': '1fr 1fr 1fr 1fr',
    'grid-template-rows': '100px',
    'grid-gap': '10px',
};
const region1 = {
    defaultPosition: {
        'grid-column-start': 1,
        'grid-row-start': 1,
    },
};
const region2 = {
    defaultPosition: {
        'grid-column-start': 2,
        'grid-row-start': 1,
    },
};
const region3 = {
    defaultPosition: {
        'grid-column-start': 3,
        'grid-row-start': 1,
    },
};
const region4 = {
    defaultPosition: {
        'grid-column-start': 4,
        'grid-row-start': 1,
    },
};

const PageContainer = (props) => {
    const [activeNavItem, setActiveNavItem] = useState('Patient_1');
    const {allergies} = props;
    let allergyList = [];
    if (allergies) {
        allergyList = allergies.map(allergy => {
            return <div>{allergy.description}</div>
        })
    }
    return (
        <div>
            <div>
                <ActionHeader
                    title={"Viewing Patient: " + `${props.name}`}
                    onBack={() => alert('You clicked back!')}
                    onClose={() => alert('You clicked close!')}
                />
            </div>
            <div>
                <div>SMART ON FHIR LAUNCH SUCCESSFUL</div>
            </div>
            <div>
                <DynamicGrid defaultTemplate={template}>
                    <DynamicGrid.Region {...region1}>
                        <div>
                            Resistant Organisms
                        </div>
                    </DynamicGrid.Region>
                    <DynamicGrid.Region {...region2}>
                        <div>
                            Diseases
                        </div>
                    </DynamicGrid.Region>
                    <DynamicGrid.Region {...region3}>
                        <div>
                            Recent Antibiotics
                        </div>
                    </DynamicGrid.Region>
                    <DynamicGrid.Region {...region4}>
                        <div className={"col-4 d-flex"} style={{border: "2px solid red"}}>
                            <div className={"row"}>
                                <div className={"col d-flex justify-content-center align-items-center"}>
                                    Allergies:
                                </div>
                            </div>
                            <div className={"row"}>
                                <div className={"col d-flex justify-content-center align-items-center"}>
                                    {(allergies)? <div>{allergyList}</div> : null}
                                </div>
                            </div>
                        </div>
                    </DynamicGrid.Region>
                </DynamicGrid>
            </div>
        </div>
           /* <ApplicationNavigation
                titleConfig={{
                    title: 'Antimicrobial Demo',
                }}
                userConfig={userConfig}
                navigationItems={navigationItems}
                activeNavigationItemKey={"Patient_1"}
                onSelectNavigationItem={(key) => { setActiveNavItem(key); }}
            >
                <PatientView key={"Patient"} title={"Patient"} />
            </ApplicationNavigation>*/
    )
}


const mapStateToProps = (state) => {
    return {
        patient: state.patientData.currentPatient,
        allergies: state.patientData.allergies,
    };
};


export default connect(mapStateToProps, null)(PageContainer);