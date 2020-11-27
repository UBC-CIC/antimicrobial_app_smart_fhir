import React from 'react';
import Button from 'terra-button';
import SlidePanelManager, { disclosureType } from 'terra-application/lib/slide-panel-manager';
import { withDisclosureManager, DisclosureManagerContext, DisclosureManagerHeaderAdapter } from 'terra-application/lib/disclosure-manager';
import CollapsibleMenuView from 'terra-collapsible-menu-view';
const PanelComponentB = () => (
    <React.Fragment>
        <DisclosureManagerHeaderAdapter
            title="Panel Component B"
        />
        <p>I am PanelComponentB!</p>
    </React.Fragment>
);
const PanelComponentA = () => {
    const disclosureManager = React.useContext(DisclosureManagerContext);
    return (
        <div>
            <DisclosureManagerHeaderAdapter
                title="Panel Component A"
                collapsibleMenuView={<CollapsibleMenuView />}
            />
            <p>I am PanelComponentA!</p>
            <Button
                text="Disclose PanelComponentB"
                onClick={() => {
                    disclosureManager.disclose({
                        preferredType: 'panel',
                        size: 'large',
                        content: {
                            key: 'panel-component-b-instance',
                            component: <PanelComponentB />
                        }
                    });
                }}
            />
        </div>
    );
}
const MyContentComponent = withDisclosureManager(({ disclosureManager }) => (
    <div>
        <p>I am MyContentComponent!</p>
        <Button
            text="Disclose PanelComponentA"
            onClick={() => {
                disclosureManager.disclose({
                    preferredType: 'panel',
                    size: 'large',
                    content: {
                        key: 'panel-component-a-instance',
                        component: <PanelComponentA />
                    }
                });
            }}
        />
    </div>
));

const MySlidePanelManagerComponent = () => (
    <SlidePanelManager
        disclosureAccessory={<div>Disclosure Accessory</div>}
    >
        <MyContentComponent />
    </SlidePanelManager>
);

export default MySlidePanelManagerComponent;