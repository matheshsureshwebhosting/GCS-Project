import React from 'react';
import {BrowserRouter as Router,Route,Link,NavLink,Switch} from 'react-router-dom';


class Main extends React.Component {
    render() {
        return (
            <div>
                <div class="main">
                    <Link to="/home"><img src="assets/img/main-logo.jpg"/></Link>
                </div>
            </div>
        )
    }
}
export default Main;