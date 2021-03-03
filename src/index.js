module.exports = function check(str, bracketsConfig) {
    let result = [];
    for (let i = 0; i < str.length; i++) {
        if (str[0] == 1) {
            return true;
        }
        if (str[i] == '(' || str[i] == '{' || str[i] == '[' || str[i] == "|" && result[result.length - 1] != "|") {
            result.push(str[i]);
        } else if (result[result.length - 1] == '(' && str[i] == ")" || result[result.length - 1] == '{' && str[i] == "}" || result[result.length - 1] == '[' && str[i] == "]" || str[i] == "|" && result[result.length - 1] == "|") {
            result.pop();
        } else {
            return false;
        }
    } return result[0] == undefined ? true : false;

}
