/*
* Special Thanks:
* https://stackoverflow.com/questions/486896/adding-a-parameter-to-the-url-with-javascript
* https://stackoverflow.com/questions/16941104/remove-a-parameter-to-the-url-with-javascript
*/
function insertParam(key, value, status) {
    key = encodeURIComponent(key);
    value = encodeURIComponent(value);
    var kvp = document.location.search.substr(1).split("&");
    let i=0;
    for(; i<kvp.length; i++){
        if (kvp[i].startsWith(key + "=")) {
            let pair = kvp[i].split("=");
            pair[1] = value;
            kvp[i] = pair.join("=");
            break;
        }
    }
    if(i >= kvp.length){
        kvp[kvp.length] = [key,value].join("=");
    }
    let params = kvp.join("&");
    if(status!=1){ document.location.search = params; }
}
function removeParam(key, sourceURL, status) {
    var rtn = sourceURL.split("?")[0],
        param,
        params_arr = [],
        queryString = (sourceURL.indexOf("?") !== -1) ? sourceURL.split("?")[1] : "";
    if (queryString !== "") {
        params_arr = queryString.split("&");
        for (var i = params_arr.length - 1; i >= 0; i -= 1) {
            param = params_arr[i].split("=")[0];
            if (param === key) {
                params_arr.splice(i, 1);
            }
        }
        if (params_arr.length) rtn = rtn + "?" + params_arr.join("&");
    }
    if(status!=1){ location.href = rtn; }    
}
