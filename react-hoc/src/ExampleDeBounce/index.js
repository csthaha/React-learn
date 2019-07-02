import React, { Component } from 'react'

import { debounce, decDebounce, decArrowDebounce, decDisplayName } from './util'
// 防抖

//加了一个静态属性 displayName 属性
@decDisplayName('CustomExampleDeBounce')
class ExampleDeBounce extends Component {
    state = {  }
    @decDebounce(1000)
    handleSubmit() {
        console.log('submit request')
    }

    @decArrowDebounce(1000)
    handleBuy = () => {
        console.log('buy now');
    }

    // handleSubmit = debounce(function() {
    //     console.log('request subbmit');

    // },1000)

    render() { 
        console.log(this.handleSubmit);
        console.log(this.handleBuy);
        return ( 
            <div>
                <button
                    onClick={this.handleSubmit}
                >
                    提交订单
                </button>
                <button
                    onClick={this.handleBuy}
                >
                    立即购买
                </button>
            </div>
         );
    }
}
 
export default ExampleDeBounce;