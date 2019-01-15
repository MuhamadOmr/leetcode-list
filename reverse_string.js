/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
    let reversed = '';
    for(character of s ){
        reversed = character + reversed;
    }
    return reversed;
};
// ==============================================
/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {

	const  strArray = s.split('') 
	let  left = 0
	let  right = strArray.length - 1 
	while(left < right){
		let temp = strArray[left]
		strArray[left] = strArray[right]
		strArray[right] = temp
		++left
		--right
	}
	return strArray.join('');

};


const restult = reverseString('hello');

console.log(restult);
