/**
 * Created by ShanGuo on 2017/6/29.
 */
/**
 * HTTP Cookie
 *
 * 服务器响应头
 * HTTP/1.1 200 OK
 * Content-type: text/html
 * Set-Cookie: name=value
 * Other-header: other-header-value
 *
 * 1、限制；
 * 浏览器对单个Cookie大小的限制，一般为4KB；
 * 对个数的限制一般为30-50个；
 *
 * 2、构成；
 *
 * 名称：
 * 不区分大小写；
 * 名称必须是经过URL编码的。
 *
 * 值：
 * 字符串，必须被URL编码。
 *
 * 域：
 * Cookie对于有效的域发送的请求都会包含这个cookie信息。
 *
 * 路径：
 * 对于指定域中的那个路径，应该向服务器发送cookie；
 *
 * 失效时间：
 * 表示cookie何时应该被删除的时间戳（也就是何时停止向服务器发送这个cookie）。
 * 默认情况下，浏览器会话结束时即将所有的cookie删除，不过可以自己设置删除的时间。GMT格式的日期。
 *
 * 安全标志：
 * 指定后，cookie只有在使用SSL连接的时候才发送到服务器。
 */

var CookieUtil = {
    //获取cookie
    get: function (name) {
        var cookieName = encodeURIComponent(name) + "=",
            cookieStart = document.cookie.indexOf(cookieName),
            cookieValue = null;

        if (cookieStart > -1) {
            var cookieEnd = document.cookie.indexOf(";", cookieStart);
            if (cookieEnd === -1) {
                cookieEnd = document.cookie.length;
            }
            cookieValue = decodeURIComponent(document.cookie.substring(cookieStart + cookieName.length, cookieEnd))
        }

        return cookieValue;
    },
    //设置cookie
    set: function (name, value, expires, path, domain, secure) {
        var cookieText = encodeURIComponent(name) + "=" + encodeURIComponent(value);

        if (expires instanceof Date) {
            cookieText += "; expires=" + expires.toString();
        }

        if (path) {
            cookieText += "; path=" + path;
        }

        if (domain) {
            cookieText += "; domain=" + domain;
        }

        if (secure) {
            cookieText += "; secure";
        }

        document.cookie = cookieText;
    },
    //删除cookie
    unset: function (name, path, domain, secure) {
        this.set(name, "", new Date(0), path, domain, secure)
    }
};


//设置cookie
CookieUtil.set("name", "Alex Shan");
CookieUtil.set("book", 'CSS3');

//读取cookie的值；
console.log(CookieUtil.get("name"));
console.log(CookieUtil.get("book"));

//删除cookie
CookieUtil.unset("name");
CookieUtil.unset("book");

//设置cookie，包括它的路径、域、失效时间；

CookieUtil.set("name","Alex Shan", new Date("January 1, 2020"));

//删除刚刚设置的cookie
CookieUtil.unset("name");

//设置安全的cookie
CookieUtil.set("name", "Alex Shan",null, null, null, "secure");