// 注意 reducer 是一个纯函数  接收两个参数 state 和 action
const defaultState = {
    inputValue: 'write something',
    list: [
        '这是一次redux的练习，外加ant',
        '祝您福如东海，寿比南山',
        '日子过得是真的快呀'
    ],
    del: false
}
const reducer = (state = defaultState, action) => {
    // console.log(state, action)
    
    // console.log(action)
    if(action.type === 'add'){
        // state.list.push(action.list)  Reducer 里只能接收 state，不能改变state'
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.list
        return newState
    }
    if(action.type === 'addlist') {
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)
        console.log(newState,'++++')
        newState.inputValue = ''
        console.log(newState,'----')
        return newState
    }
    if(action.type === 'delete') {
        let newState = JSON.parse(JSON.stringify(state))
        newState.del = true
        return newState
    }
    return state
}

export default reducer;