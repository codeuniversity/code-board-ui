function getFormatedMinutes(minutes){
	let unformatedString = '' + minutes;
	if(unformatedString.length === 1){
		return '0'+ unformatedString;
	}else{
		return unformatedString;
	}
}
function limitedText(text, limit){
	let charCount = 0;
	let wordArr = text.split(' ');
	let newText = '';
	for (var i = 0; i < wordArr.length && newText.length < limit; i++) {
		if(newText.length + wordArr[i].length <= limit){
			newText += wordArr[i]+' ';
		}
	}
	return `${newText} ${newText.length > limit ? '...': ''}`;
}
function lerpColor(a, b, amount) {

		var ah = parseInt(a.replace(/#/g, ''), 16),
			ar = ah >> 16, ag = ah >> 8 & 0xff, ab = ah & 0xff,
			bh = parseInt(b.replace(/#/g, ''), 16),
			br = bh >> 16, bg = bh >> 8 & 0xff, bb = bh & 0xff,
			rr = ar + amount * (br - ar),
			rg = ag + amount * (bg - ag),
			rb = ab + amount * (bb - ab);

		return '#' + ((1 << 24) + (rr << 16) + (rg << 8) + rb | 0).toString(16).slice(1);
	}

export default {
	getFormatedMinutes,
	limitedText,
	lerpColor,
	};