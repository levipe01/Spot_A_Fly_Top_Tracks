import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

class ContextMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.List = '';
  }

  updateStyle() {
    const { position } = this.props;
    this.List = styled.div`
      position: fixed;
      z-index: 2;
      top: ${position.top - 126}px;
      left: ${position.left}px;
      list-style-type: none;
      padding: 0px 0px;
    `;
  }

  render() {
    this.updateStyle();
    const { List } = this;

    return (
      <List className="contextMenu">
        <div>Start Radio</div>
        <div>Save to Your library</div>
        <div>Add to Queue</div>
        <div>Add to Playlist</div>
        <div>Copy Song link</div>
      </List>
    );
  }
}

ContextMenu.propTypes = {
  position: PropTypes.shape({
    top: PropTypes.number.isRequired,
    left: PropTypes.number.isRequired,
  }).isRequired
};

export default ContextMenu;
