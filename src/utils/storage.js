/**
 * 定义本地存储对象
 * Created by wangfengliang
 */
var Cookie = {
    write: function (key, value, duration) {
        var d = new Date();
        d.setTime(d.getTime() + 1000 * 60 * 60 * 24 * (duration || 7));
        document.cookie = key + "=" + encodeURI(value) + "; expires=" + d.toGMTString();
    },
    read: function (key) {
        var arr = document.cookie.match(new RegExp("(^| )" + key + "=([^;]*)(;|$)"));
        if (arr != null)
            return decodeURIComponent(arr[2]);
        return "";
    }
};

var storageObj = {
    getItem(key) {
        return window.localStorage ? localStorage.getItem(key) : Cookie.read(key);
    },
    setItem(key, val) {
        if (typeof val !== 'string') {
            val = JSON.stringify(val);
        }
        if (window.localStorage) {
            localStorage.setItem(key, val);
        } else {
            Cookie.write(key, val);
        }
    },
    removeItem(key) {
        if (window.localStorage) {
            localStorage.removeItem(key);
        } else {
            Cookie.write(key, '', -1);
        }
    }
}

export default storageObj;