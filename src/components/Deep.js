import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <div className="App">
                <h3>Deep</h3>
                <Link to="">Home</Link> -&nbsp;
                <Link to="/sub">Sub</Link> -&nbsp;
                <Link to="/sub/deep">Deep</Link> -&nbsp;
                <Link to="/sub/deep-2">Deep 2</Link> 
            </div>
        );
    }
}

export default App;