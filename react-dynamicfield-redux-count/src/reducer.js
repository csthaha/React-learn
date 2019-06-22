export default (state = 0, action) => {
    console.log(action);
    switch(action.type) {
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state - 1
        default:
            return state
    }
}
// 定义一个方法，定义完之后就暴露出去