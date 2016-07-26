'use strict';

import React from 'react';

import {ButtonIcon, Icon} from './IconsComponent';

require('styles//ActivityTimeline.styl');

class ActivityTimelineComponent extends React.Component {
	render() {
		return (
			<ul>
			  <li>
			    <span className="slds-assistive-text">Task</span>
			    <div className="slds-media">
			      <div className="slds-media__body">
			        <div className="slds-media slds-media--timeline slds-timeline__media--task">
			          <div className="slds-media__figure slds-timeline__icon">
			            <div className="slds-icon_container">
			              <Icon category="standard" name="task" size="small" position="right" />
			            </div>
			          </div>
			          <div className="slds-media__body">
			            <div className="slds-media">
			              <div className="slds-media__figure">
			                <label className="slds-checkbox" htmlFor="mark-complete">
			                  <input name="checkbox" type="checkbox" id="mark-complete" />
			                  <span className="slds-checkbox--faux"></span>
			                  <span className="slds-form-element__label slds-assistive-text">mark-complete</span>
			                </label>
			              </div>
			              <div className="slds-media__body">
			                <p className="slds-truncate" title="Review proposals for EBC deck with larger team and have marketing review this">
			                	<a href="javascript:void(0);">Review proposals for EBC deck with larger team and have marketing review this</a>
		                	</p>
			                <ul className="slds-list--horizontal slds-wrap">
			                  <li className="slds-m-right--large">
			                    <span className="tile__label slds-text-heading--label-normal">Contact:</span>
			                    <span className="slds-text-body--small"><a href="javascript:void(0);">Lei Chan</a></span>
			                  </li>
			                  <li className="slds-m-right--large">
			                    <span className="tile__label slds-text-heading--label-normal">Assigned to:</span>
			                    <span className="slds-text-body--small"><a href="javascript:void(0);">Betty Mason</a></span>
			                  </li>
			                </ul>
			              </div>
			            </div>
			          </div>
			        </div>
			      </div>
			      <div className="slds-media__figure slds-media__figure--reverse">
			        <div className="slds-timeline__actions">
			          <p className="slds-timeline__date">Feb 24</p>
			          <button className="slds-button slds-button--icon-border-filled slds-button--icon-x-small">
			            <ButtonIcon category="standard" name="switch" />
			            <span className="slds-assistive-text">Switch</span>
			          </button>
			        </div>
			      </div>
			    </div>
			  </li>
			  <li>
			    <span className="slds-assistive-text">Event</span>
			    <div className="slds-media">
			      <div className="slds-media__body">
			        <div className="slds-media slds-media--timeline slds-timeline__media--event">
			          <div className="slds-media__figure slds-timeline__icon">
			            <div className="slds-icon_container">
			            	<Icon category="standard" name="event" size="small" />
			            </div>
			          </div>
			          <div className="slds-media__body">
			            <p className="slds-truncate" title="Company One — EBC Meeting"><a href="javascript:void(0);">Company One — EBC Meeting</a></p>
			            <p className="slds-truncate">Let’s get together to review the theater’s layout and facilities. We’ll also discuss potential things that truncate at a certain width.</p>
			            <ul className="slds-list--horizontal slds-wrap">
			              <li className="slds-m-right--large">
			                <span className="tile__label slds-text-heading--label-normal">Time:</span>
			                <span className="slds-text-body--small"><a href="javascript:void(0);">Feb 23, 2015 11:00am–12:00pm</a></span>
			              </li>
			              <li className="slds-m-right--large">
			                <span className="tile__label slds-text-heading--label-normal">Location:</span>
			                <span className="slds-text-body--small"><a href="javascript:void(0);">300 Pike St, San Francisco CA</a></span>
			              </li>
			              <li className="slds-m-right--large">
			                <span className="tile__label slds-text-heading--label-normal">Name:</span>
			                <span className="slds-text-body--small"><a href="javascript:void(0);">Lei Chan</a>, <a href="javascript:void(0);">Jason Dewar</a>, <a href="javascript:void(0);">Gwen Jones</a> and <a href="javascript:void(0);">Pete Schaffer</a></span>
			              </li>
			            </ul>
			          </div>
			        </div>
			      </div>
			      <div className="slds-media__figure slds-media__figure--reverse">
			        <div className="slds-timeline__actions">
			          <p className="slds-timeline__date">Feb 24</p>
			          <button className="slds-button slds-button--icon-border-filled slds-button--icon-x-small">
			            <ButtonIcon category="standard" name="switch" />
			            <span className="slds-assistive-text">Switch</span>
			          </button>
			        </div>
			      </div>
			    </div>
			  </li>
			  <li>
			    <span className="slds-assistive-text">Call</span>
			    <div className="slds-media">
			      <div className="slds-media__body">
			        <div className="slds-media slds-media--timeline slds-timeline__media--call">
			          <div className="slds-media__figure slds-timeline__icon">
			            <div className="slds-icon_container">
			              <Icon category="standard" name="log_a_call" size="small" />
			            </div>
			          </div>
			          <div className="slds-media__body">
			            <p className="slds-truncate" title="Mobile conversation on Monday"><a href="javascript:void(0);">Mobile conversation on Monday</a></p>
			            <p className="slds-truncate">Lei seemed interested in closing this deal quickly! Let’s move.</p>
			            <ul className="slds-list--horizontal slds-wrap">
			              <li className="slds-m-right--large">
			                <span className="tile__label slds-text-heading--label-normal">Name:</span>
			                <span className="slds-text-body--small"><a href="javascript:void(0);">Lei Chan</a></span>
			              </li>
			              <li className="slds-m-right--large">
			                <span className="tile__label slds-text-heading--label-normal">Assigned to:</span>
			                <span className="slds-text-body--small"><a href="javascript:void(0);">Betty Mason</a></span>
			              </li>
			            </ul>
			          </div>
			        </div>
			      </div>
			      <div className="slds-media__figure slds-media__figure--reverse">
			        <div className="slds-timeline__actions">
			          <p className="slds-timeline__date">Feb 24</p>
			          <button className="slds-button slds-button--icon-border-filled slds-button--icon-x-small">
			            <ButtonIcon category="standard" name="switch" />
			            <span className="slds-assistive-text">Switch</span>
			          </button>
			        </div>
			      </div>
			    </div>
			  </li>
			  <li>
			    <span className="slds-assistive-text">Email</span>
			    <div className="slds-media">
			      <div className="slds-media__body">
			        <div className="slds-media slds-media--timeline slds-timeline__media--email">
			          <div className="slds-media__figure slds-timeline__icon">
			            <div className="slds-icon_container">
			              <Icon category="standard" name="email" size="small" />
			            </div>
			          </div>
			          <div className="slds-media__body">
			            <p className="slds-truncate" title="Mobile conversation on Monday"><a href="javascript:void(0);">Mobile conversation on Monday</a></p>
			            <p className="slds-truncate">Hi guys, Thanks for meeting with the team today and going through the proposals we saw. This goes on until it’s truncated.</p>
			            <ul className="slds-list--horizontal slds-wrap">
			              <li className="slds-m-right--large">
			                <span className="tile__label slds-text-heading--label-normal">To:</span>
			                <span className="slds-text-body--small"><a href="javascript:void(0);">Lei Chan</a></span>
			              </li>
			              <li className="slds-m-right--large">
			                <span className="tile__label slds-text-heading--label-normal">From:</span>
			                <span className="slds-text-body--small"><a href="javascript:void(0);">Jason Dewar</a></span>
			              </li>
			            </ul>
			          </div>
			        </div>
			      </div>
			      <div className="slds-media__figure slds-media__figure--reverse">
			        <div className="slds-timeline__actions">
			          <p className="slds-timeline__date">Feb 24</p>
			          <button className="slds-button slds-button--icon-border-filled slds-button--icon-x-small">
			            <ButtonIcon category="standard" name="switch" />
			            <span className="slds-assistive-text">Switch</span>
			          </button>
			        </div>
			      </div>
			    </div>
			  </li>
			</ul>
		);
	}
}

ActivityTimelineComponent.displayName = 'ActivityTimelineComponent';

// Uncomment properties you need
// ActivityTimelineComponent.propTypes = {};
// ActivityTimelineComponent.defaultProps = {};

export default ActivityTimelineComponent;
