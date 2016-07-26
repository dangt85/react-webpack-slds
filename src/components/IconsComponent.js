'use strict';

import React from 'react';

require('styles//Icons.styl');


class ButtonIcon extends React.Component {
  render() {
    let svg = require('file!@salesforce-ux/design-system/assets/icons/' + (this.props.category ? this.props.category : 'utility') + '-sprite/svg/symbols.svg');
    let useTag = '<use xlink:href="' + svg + '#' + this.props.name + '" />';
    let className  = 'slds-button__icon';
    if (this.props.stateful) {
        className += '--stateful';
    }
    if (this.props.inverse) {
        className = className + ' slds-button__icon--inverse';
    }
    if (this.props.position) {
        className = className + ' slds-button__icon--' + this.props.position;
    }
    if (this.props.size) {
        className = className + ' slds-button__icon--' + this.props.size;
    }
    if (this.props.hint) {
        className = className + ' slds-button__icon--hint';
    }
    return(<svg aria-hidden="true" className={className} dangerouslySetInnerHTML={{__html: useTag }} />);
  }
}

ButtonIcon.displayName = 'ButtonIcon';


// Uncomment properties you need
// ButtonIcon.propTypes = {};
// ButtonIcon.defaultProps = {};

class Icon extends React.Component {
  render() {
    let svg = require('file!@salesforce-ux/design-system/assets/icons/' + this.props.category + '-sprite/svg/symbols.svg');

    let useTag = '<use xlink:href="' + svg + '#' + this.props.name + '" />';
    let className  = 'slds-icon';
    let theme = this.props.theme === undefined ? this.props.name : this.props.theme;
    if (this.props.stateful) {
        className += '--stateful';
    }
    if (this.props.inverse) {
        className = className + ' slds-icon--inverse';
    }
    if (this.props.size) {
        className = className + ' slds-icon--' + this.props.size;
    }
    if (this.props.position) {
        className = className + ' slds-icon--' + this.props.position;
    }
    if (theme) {
        className = className + ' slds-icon-' + this.props.category + '-' + theme;
    }
    return(<svg aria-hidden="true" className={className} dangerouslySetInnerHTML={{__html: useTag }} />);
  }
}

Icon.displayName = 'Icon';

// Uncomment properties you need
// Icon.propTypes = {};
Icon.defaultProps = {category: 'standard'};


class InputIcon extends React.Component {
	render() {
        let svg = require('file!@salesforce-ux/design-system/assets/icons/' + (this.props.category ? this.props.category : 'utility') + '-sprite/svg/symbols.svg');
        let useTag = '<use xlink:href="' + svg + '#' + this.props.name + '" />';
        let className  = 'slds-input__icon slds-icon-text-default';
        return <svg aria-hidden="true" className={className} dangerouslySetInnerHTML={{__html: useTag }} />;
    }
}

InputIcon.displayName = 'InputIcon';


// Uncomment properties you need
// InputIcon.propTypes = {};
// InputIcon.defaultProps = {};

export {ButtonIcon, Icon, InputIcon};

