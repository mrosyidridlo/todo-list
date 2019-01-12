import React, { Component } from 'react';
import { NavLink, Link, Route } from 'react-router-dom';
import Deep from './Deep';
import Deep2 from './Deep2';

const activeLink = {
    color: 'red'
  };


class App extends Component {
    handleActive(path){
        if (this.props.route.location.pathname === path) {
            return 'red';
        }
        return '';
    }
    render() {
        return (
            <div className="App">
                <h3>Sub</h3>
                {/* <NavLink to="">Home</NavLink> -&nbsp;
                <NavLink to="/sub" exact={true} activeClassName='is-active'>Sub</NavLink> -&nbsp;
                <NavLink to="/sub/deep" activeClassName='is-active'>Deep</NavLink> -&nbsp;
                <NavLink to="/sub/deep2" activeClassName='is-active'>Deep 2</NavLink>  */}
                <Link to="">Home</Link> -&nbsp;
                <NavLink exact to="/sub" activeStyle={activeLink}>Sub</NavLink> -&nbsp;
                <Link to="/sub/deep" className={this.handleActive('/sub/deep')}>Deep></Link> -&nbsp;
                <NavLink exact to="/sub/deep2" activeClassName={'red'}>Deep2</NavLink>
                <hr/>
                <Route path="/sub/deep" component={(match) => (<Deep route={match} />)}></Route>
                <Route path="/sub/deep2" component={(match) => (<Deep2 route={match} />)}></Route>
            </div>
        );
    }
}

export default App;