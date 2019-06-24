import React, { Component } from 'react'
import withLogin from './WithLogin'
@withLogin 
class LoginStatus extends Component {
    render() {
        return (
            <button>已经登陆</button>
        )
    }
}
LoginStatus.displayName = 'LoginStatus'
export default LoginStatus