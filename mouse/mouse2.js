/*HTML DOM 事件
http://www.runoob.com/jsref/dom-obj-event.html
* */

function dClick() {
    console.log("您双击了页面！");
    //您按下了页面！
    //您释放了页面！
    //您按下了页面！
    //您释放了页面！
    //您双击了页面！：即第二次释放后触发
}

function sClick() {
    console.log("您单击了页面！");
    //您按下了页面！
    //您释放了页面！
    //您单击了页面！//即第一次释放后触发
}

function down() {
    console.log("您按下了页面！");
    //按下的一瞬间
}

function up() {
    console.log("您释放了页面！");
    //松手的一瞬间
}
// https://blog.csdn.net/sinat_31057219/article/details/60965045
