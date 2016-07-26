require('normalize.css/normalize.css');
require('@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.css');
require('styles/App.css');

import React from 'react';

import PageHeaderComponent from './PageHeaderComponent';
import TabsComponent from './TabsComponent';
import CardComponent from './CardComponent';

// import {Icon} from './IconsComponent';

class AppComponent extends React.Component {
	render() {
		return (
			<div className="index">
				<div className="slds-grid slds-wrap">
					<header className="slds-col slds-size--1-of-1">
						<PageHeaderComponent />
					</header>
					<main className="slds-col--padded slds-m-vertical--medium slds-size--1-of-2">
						<img src="https://s3-us-west-1.amazonaws.com/sfdc-demo/realty/house08.jpg" alt="Cool house." />
					</main>
					<aside className="slds-col--padded slds-m-vertical--medium slds-size--1-of-2">
						<TabsComponent />
					</aside>
					<section className="slds-col--padded slds-size--1-of-1">
						<CardComponent />
					</section>
				</div>
			</div>
		);
	}
}

AppComponent.defaultProps = {
};

export default AppComponent;
