function getFormatedMinutes(minutes){
	let unformatedString = '' + minutes;
	if(unformatedString.length === 1){
		return '0'+ unformatedString;
	}else{
		return unformatedString;
	}
}
export default {
    getFormatedMinutes
};