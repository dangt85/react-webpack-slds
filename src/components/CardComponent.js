'use strict';

import React from 'react';

import {Icon} from './IconsComponent';

require('styles//Card.styl');

class CardComponent extends React.Component {
	render() {
		return (
			<div className="slds-card">
			  <div className="slds-card__header slds-grid">
			    <div className="slds-media slds-media--center slds-has-flexi-truncate">
			      <div className="slds-media__figure">
			        <Icon category="standard" name="contact" size="small" />
			      </div>
			      <div className="slds-media__body slds-truncate">
			        <a href="javascript:void(0);" className="slds-text-link--reset">
			          <span className="slds-text-heading--small">Card Header</span>
			        </a>
			      </div>
			    </div>
			    <div className="slds-no-flex">
			      <button className="slds-button slds-button--neutral slds-col--bump-left">New</button>
			    </div>
			  </div>
			  <div className="slds-card__body slds-text-align--center">Card Body (custom goes in here)</div>
			  <div className="slds-card__footer">Card Footer</div>
			</div>
		);
	}
}

CardComponent.displayName = 'CardComponent';

// Uncomment properties you need
// CardComponent.propTypes = {};
// CardComponent.defaultProps = {};

export default CardComponent;
