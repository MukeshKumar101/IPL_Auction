import React, { Component } from 'react';
import classes from './dialogBox.css';
import ReactModal from 'react-modal';

class Modal extends React.Component {    
  constructor() {
    super();
    this.state = {
      showModal: true
    };    
    this.onCloseModal = this.onCloseModal.bind(this);
  }
  
  onCloseModal() {
    this.setState({ showModal: false });
  }
  
  render() {
    const { error } = this.props;

    return (
      <div>
        <ReactModal 
          isOpen={this.state.showModal}
          onRequestClose={this.onCloseModal}
          className={classes.modal}
        >
          <p>{error}</p>
          <button onClick={this.onCloseModal}>OK</button>
        </ReactModal>
      </div>
    );
  }
}
  
export default Modal;
