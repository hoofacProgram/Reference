/**
 * str의 자릿수를  maxLength만큼 fillStr로 채워넣는다.
 * ex) padStart("123", 5, "0") => "00123"
 * ES 2017 이후에는 자체 padStart 함수가 존재한다.
 * @param {String} str
 * @param {Integer} maxLength 
 * @param {String} fillStr 
 * @returns 
 */
function padStart (str, maxLength, fillStr) {
  str = String(str)
  if (maxLength > str.length) {
    str = new Array(maxLength - str.length + 1).join(`${fillStr}`) + str
  }
  return str
}
/**
 * str의 자릿수를  maxLength만큼 fillStr로 채워넣는다.
 * ex) padEnd("123", 5, "0") => "12300"
 * ES 2017 이후에는 자체 padEnd 함수가 존재한다.
 * @param {String} str
 * @param {Integer} maxLength 
 * @param {String} fillStr 
 * @returns 
 */
function padEnd (str, maxLength, fillStr) {
  str = String(str)
  if (maxLength > str.length) {
    str = str + new Array(maxLength - str.length + 1).join(`${fillStr}`)
  }
  return str
}