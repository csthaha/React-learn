import React, { Component } from 'react'

const withLogin = (Com) => {
    const isLogin = false
    class NewComponent extends Component {
        render() {
            // 集中处理一下未登录时的状态
            if(!isLogin) {
                return (
                    <button>需要登录</button>
                )
            }
            return (
                <Com />
            )
        }
    }
    NewComponent.displayName = `withLogin${Com.displayName}`
    return NewComponent;
}

export default withLogin;