module.exports = function check(str, bracketsConfig) {


    var tokenizer = /[()]/g, // ignores characters in between; parentheses are
        count = 0, // pretty useless if they're not grouping *something*
        token;
    while (token = tokenizer.exec(str), token !== null) {
        if (token == "(") {
            count++;
        } else if (token == ")") {
            count--;
            if (count < 0) {
                return false;
            }
        }
    }
    return count == 0;
}