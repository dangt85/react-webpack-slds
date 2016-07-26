'use strict';

import React from 'react';

import ActivityTimelineComponent from './ActivityTimelineComponent';

require('styles//Tabs.styl');

class TabsComponent extends React.Component {
  render() {
    return (
      	<div className="slds-tabs--default">
		<ul className="slds-tabs--default__nav" role="tablist">
			<li className="slds-tabs--default__item slds-text-heading--label slds-active" title="Item One" role="presentation">
				<a className="slds-tabs--default__link" href="javascript:void(0);" role="tab" tabIndex="0" aria-selected="true" aria-controls="tab-default-1" id="tab-default-1__item">Item One</a>
			</li>
			<li className="slds-tabs--default__item slds-text-heading--label" title="Item Two" role="presentation">
				<a className="slds-tabs--default__link" href="javascript:void(0);" role="tab" tabIndex="-1" aria-selected="false" aria-controls="tab-default-2" id="tab-default-2__item">Item Two</a>
			</li>
			<li className="slds-tabs--default__item slds-text-heading--label" title="Item Three" role="presentation">
				<a className="slds-tabs--default__link" href="javascript:void(0);" role="tab" tabIndex="-1" aria-selected="false" aria-controls="tab-default-3" id="tab-default-3__item">Item Three</a>
			</li>
		</ul>
		<div id="tab-default-1" className="slds-tabs--default__content slds-show" role="tabpanel" aria-labelledby="tab-default-1__item">
			<ActivityTimelineComponent />
		</div>
		<div id="tab-default-2" className="slds-tabs--default__content slds-hide" role="tabpanel" aria-labelledby="tab-default-2__item">Item Two Content</div>
		<div id="tab-default-3" className="slds-tabs--default__content slds-hide" role="tabpanel" aria-labelledby="tab-default-3__item">Item Three Content</div>
		</div>
    );
  }
}

TabsComponent.displayName = 'TabsComponent';

// Uncomment properties you need
// TabsComponent.propTypes = {};
// TabsComponent.defaultProps = {};

export default TabsComponent;
