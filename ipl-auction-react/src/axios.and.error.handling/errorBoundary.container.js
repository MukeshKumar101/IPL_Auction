import React, { Component } from 'react';
import Modal from 'dialogBox.container';

const errorBoundary = (wrappedComponent, axios) => {    
 
  return class extends Component {
    state = {
      error: null      
    }
    
    componentDidMount() {              
      axios.interceptors.request.use(request => {
        this.setState({ error: null });
      });
      axios.interceptors.response.use(null, error => {
        this.setState({ error });
      });
    }

    render() {
      const { error } = this.state;

      return (
        <>
          <Modal show={error} >
            {error && error.message}
          </Modal>
          <wrappedComponent {...this.props} />
        </>
      ); 
    }
  }
}
