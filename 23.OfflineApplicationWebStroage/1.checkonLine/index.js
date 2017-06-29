/**
 * Created by ShanGuo on 2017/6/29.
 */
/**
 * H5属性，存在兼容性；
 */

//1、离线检测；
if (navigator.onLine) {
    //正常工作
    document.getElementById("doc").innerText = "onLine"
} else {
    //执行离线状态时的状态
    document.getElementById("doc").innerText = "offLine"
}

//2、online \ offline 两个事件，当网络状态发生改变时候触发；

window.addEventListener("online", function () {
    //当连接网络的时候触发；
    console.log("online");
});
    window.addEventListener("offline", function () {
        //当网络断开的时候触发；
        console.log("offline");
});