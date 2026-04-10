import './App.css'
import React, { Component } from 'react'
import { Modal } from './components/Modal/Modal'

class App extends Component{
    state = {
        isOpen: false,
}

    controleOpen = () => {
        this.setState((prevState) => ({
            isOpen: !prevState.isOpen,
        }))
}
    
    render() {
        return (
          <>
            <button className="openBtn" onClick={this.controleOpen} type="button">open</button>
            {this.state.isOpen && <Modal onClose={this.controleOpen} />}
          </>
        );
    }
}

export default App