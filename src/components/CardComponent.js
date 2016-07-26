'use strict';

import React from 'react';

import {ButtonIcon, Icon} from './IconsComponent';

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
			          <span className="slds-text-heading--small">Contacts (1)</span>
			        </a>
			      </div>
			    </div>
			    <div className="slds-no-flex">
			    	<div className="slds-button-group" role="group">
			    	  <button className="slds-button slds-button--neutral">New</button>
			    	  <button className="slds-button slds-button--icon-more">
			    	  	<ButtonIcon category="utility" name="down" />
			    	  	<span className="slds-assistive-text">More settings</span>
			    	  </button>
			    	</div>
			    </div>
			  </div>
			  <div className="slds-card__body">
			    <table className="slds-table slds-table--bordered slds-no-row-hover slds-table--cell-buffer">
			      <thead>
			        <tr className="slds-text-heading--label">
			          <th scope="col">Name</th>
			          <th scope="col">Company</th>
			          <th scope="col">Title</th>
			          <th scope="col">Email</th>
			          <th scope="col">
			          	<button className="slds-button slds-button--icon-more">
			          		<ButtonIcon category="utility" name="down" size="small" />
			          		<span className="slds-assistive-text">More settings</span>
			          	</button>
			          </th>
			        </tr>
			      </thead>
			      <tbody>
			        <tr className="slds-hint-parent">
			          <th scope="row">
			            <div className="slds-truncate"><a href="javascript:void(0);">Adam Choi</a></div>
			          </th>
			          <td>Company One</td>
			          <td>Director of Operations</td>
			          <td>adam@company.com</td>
			          <td>
			          	<button className="slds-button">
			          		<ButtonIcon category="utility" name="down" size="small" />
			          		<span className="slds-assistive-text">More settings</span>
			          	</button>
			          </td>
			        </tr>
			      </tbody>
			    </table>
			  </div>
			  <div className="slds-card__footer">
			  	<a href="javascript:void(0);">View All <span className="slds-assistive-text">entity type</span></a>
			  </div>
			</div>
		);
	}
}

CardComponent.displayName = 'CardComponent';

// Uncomment properties you need
// CardComponent.propTypes = {};
// CardComponent.defaultProps = {};

export default CardComponent;
