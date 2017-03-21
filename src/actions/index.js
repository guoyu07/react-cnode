//登入，登出，设置状态 三种 状态

export default (id) => {
	var action = {};
	var actionArr = ['SIGN_IN_SUCCESS', 'SIGN_OUT', 'SET_STATE'];
	for(let i =0; i < actionArr.length; i++) {
		action[actionArr[i]] = (data) => {
			return {
				id: id,
				type: actionArr[i],
				data: data
			}
		}
	} 
	return action;
}