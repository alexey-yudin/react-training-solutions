import React from 'react';
import {Component} from 'react';
import './view-type-buttons.css';

export class ViewTypeButtons extends Component {
  getActiveStyle = viewType => {
    return this.props.viewType === viewType ? 'view-type-button--active' : '';
  };

  render() {
    return (
      <div className='view-type-buttons'>
        <button
          type='button'
          className={`view-type-button ${this.getActiveStyle('list')}`}
          onClick={this.props.setViewType('list')}>
          List
        </button>
        <button
          type='button'
          className={`view-type-button ${this.getActiveStyle('grid')}`}
          onClick={this.props.setViewType('grid')}>
          Grid
        </button>
      </div>
    );
  }
}
