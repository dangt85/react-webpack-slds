'use strict';

import React from 'react';

import {ButtonIcon, Icon} from './IconsComponent';


require('styles//PageHeader.styl');

class PageHeaderComponent extends React.Component {
	render() {
		return (
			<div className="slds-page-header" role="banner">
				<div className="slds-grid">
					<div className="slds-col slds-has-flexi-truncate">
						<div className="slds-media slds-media--center slds-no-space slds-grow">
							<div className="slds-media__figure">
								<Icon category="standard" name="user" />
							</div>
							<div className="slds-media__body">
								<p className="slds-text-heading--label">Record Type</p>
								<h1 className="slds-page-header__title slds-m-right--small slds-truncate slds-align-middle" title="Record Title">Record Title</h1>
							</div>
						</div>
					</div>
					<div className="slds-col slds-no-flex slds-grid slds-align-bottom">
						<button className="slds-button slds-button--neutral slds-not-selected" aria-live="assertive">
							<span className="slds-text-not-selected">
								<ButtonIcon category="utility" name="add" stateful="true" position="left" />
								Follow
							</span>
							<span className="slds-text-selected">
								<ButtonIcon category="utility" name="check" stateful="true" position="left" />
								Following
							</span>
							<span className="slds-text-selected-focus">
								<ButtonIcon category="utility" name="close" stateful="true" position="left" />
								Unfollow
							</span>
						</button>
						<div className="slds-button-group" role="group">
							<button className="slds-button slds-button--neutral">Edit</button>
							<button className="slds-button slds-button--neutral">Delete</button>
							<button className="slds-button slds-button--neutral">Clone</button>
							<div className="slds-button--last">
								<button className="slds-button slds-button--icon-border-filled">
									<ButtonIcon category="utility" name="down" />
									<span className="slds-assistive-text">More</span>
								</button>
							</div>
						</div>
					</div>
				</div>

				<ul className="slds-grid slds-m-vertical--medium">
					<li className="slds-page-header__detail-block">
						<p className="slds-text-heading--label-normal slds-truncate slds-m-bottom--xx-small" title="Field 1">Field 1</p>
						<p className="slds-text-body--regular slds-truncate" title="Description that demonstrates truncation with a long text field">Description that demonstrates truncation with a long text field.</p>
					</li>
					<li className="slds-page-header__detail-block">
						<p className="slds-text-heading--label-normal slds-truncate slds-m-bottom--xx-small" title="Field2 (3)">Field 2 (3)
							<button className="slds-button slds-button--icon-bare">
								<ButtonIcon category="utility" name="down" size="small" />
								<span className="slds-assistive-text">More Actions</span>
							</button>
						</p>
						<p className="slds-text-body--regular">Multiple Values</p>
					</li>
					<li className="slds-page-header__detail-block">
						<p className="slds-text-heading--label-normal slds-truncate slds-m-bottom--xx-small" title="Field 3">Field 3</p><a href="javascript:void(0);">Hyperlink</a>
					</li>
					<li className="slds-page-header__detail-block">
						<p className="slds-text-heading--label-normal slds-truncate slds-m-bottom--xx-small" title="Field 4">Field 4</p>
						<p>
							<span title="Description (2-line truncation—must use JS to truncate).">Description (2-line truncat...</span>
						</p>
					</li>
				</ul>
			</div>
		);
	}
}

PageHeaderComponent.displayName = 'PageHeaderComponent';

// Uncomment properties you need
// PageHeaderComponent.propTypes = {};
// PageHeaderComponent.defaultProps = {};

export default PageHeaderComponent;
