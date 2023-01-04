
// Set the cookie
export const setCookie = (name, value, time, path, domain) => {
    let strsec = _getsec(time);
    let exp = new Date();
    exp.setTime(exp.getTime() + strsec * 1);
    document.cookie = name + "=" + value + ";expires=" + exp.toGMTString() + ";path=" + path + ";domain=" + domain;
}
// Read cookies
export const getCookie = (name) => {
    let arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg)) return arr[2];
    else return null;
}
// Remove cookies
export const delCookie = (name) => {
    let exp = new Date();
    exp.setTime(exp.getTime() - 1);
    let cval = this.getCookie(name);
    if (cval !== null) document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
}

//Get time
function _getsec(str) {
    let str1 = str.substring(1, str.length) * 1;
    let str2 = str.substring(0, 1);
    if (str2 == "s") {
        return str1 * 1000;
    } else if (str2 == "h") {
        return str1 * 60 * 60 * 1000;
    } else if (str2 == "d") {
        return str1 * 24 * 60 * 60 * 1000;
    }
}