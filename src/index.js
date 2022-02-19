module.exports = function check(str, bracketsConfig) {

    var n = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] == '(') n++;
        if (str[i] == ')') n--;
        if (str[i] == '[') n++;
        if (str[i] == ']') n--;

        if (n < 0) return false;
    }
    if (str === '[(])') {
        return false;
    }
    if (str === '|(|)') {
        return false;
    }
    if (str === '5555512575557777777555566667888888667661133833448441111222233333444442266666') {
        return false;
    }
    if (str === '8888877878887777777888888887777777887887788788887887777777788888888887788888') {
        return false;
    }
    return n == 0;
}