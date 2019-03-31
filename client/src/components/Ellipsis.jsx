import React, { Component } from 'react';

class Ellipsis extends Component {
  constructor() {
    super();
    this.state = {
      menu: false
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    const { menu } = this.state;
    this.setState({
      menu: !menu
    });
  }

  render() {
    const { menu } = this.state;
    switch (menu) {
      case false: return (
        <div className="ellipsis" onClick={this.toggleMenu}>
          <i className="fas fa-ellipsis-h" />
        </div>
      );
      case true: return (
        <div className="contextMenu" onClick={this.toggleMenu}>
          <div>Start Radio</div>
          <div>Save to Your Library</div>
          <div>Add to Queue</div>
          <div>Add to Playlist</div>
          <div>Copy Song Link</div>
        </div>
      );
      default: return (
        <div className="ellipsis">
          <i className="fas fa-ellipsis-h" />
        </div>
      );
    }
  }
}

export default Ellipsis;

// import React from 'react';
// import PropTypes from 'prop-types';

// function Ellipsis({ menu, showMenu }) {
//   switch (menu) {
//     case false: return (
//       <div className="ellipsis" onClick={showMenu}>
//         <i className="fas fa-ellipsis-h" />
//       </div>
//     );
//     case true: return (
//       <div className="contextMenu">
//         <div>Start Radio</div>
//         <div>Save to Your Library</div>
//         <div>Add to Queue</div>
//         <div>Add to Playlist</div>
//         <div>Copy Song Link</div>
//       </div>
//     );
//     default: return (
//       <div className="ellipsis">
//         <i className="fas fa-ellipsis-h" />
//       </div>
//     );
//   }
// }

// Ellipsis.propTypes = {
//   menu: PropTypes.isRequired,
//   showMenu: PropTypes.isRequired
// };
