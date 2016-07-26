'use strict';

import React from 'react';

import {Icon} from './IconsComponent';


require('styles//PageHeader.styl');

class PageHeaderComponent extends React.Component {
  render() {
    return (
		<div className="slds-page-header" role="banner">
			<div className="slds-media slds-media--center">
				<div className="slds-media__figure">
					<Icon category="standard" name="opportunity" size="small" position="right" />
				</div>
				<div className="slds-media__body">
					<p className="slds-page-header__title slds-truncate slds-align-middle" title="Rohde Corp - 80,000 Widgets">Rohde Corp - 80,000 Widgets</p>
					<p className="slds-text-body--small page-header__info">Mark Jaeckal • Unlimited Customer • 11/13/15</p>
				</div>
			</div>
		</div>
    );
  }
}

PageHeaderComponent.displayName = 'PageHeaderComponent';

// Uncomment properties you need
// PageHeaderComponent.propTypes = {};
// PageHeaderComponent.defaultProps = {};

export default PageHeaderComponent;
