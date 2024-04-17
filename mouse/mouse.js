function whichButton(event) {
            var btnNum = event.button;

            console.log("event.button==="+event.button);
            /*event.button=== 0：左键, 2：右键，*/

            console.log("event.which==="+event.which);
            /*event.which=== 1:左键，3:右键*/
            if (btnNum == 2) {//2为右键
                console.log("您点击了鼠标右键！");
            } else if (btnNum == 0) {//0为左键
                console.log("您点击了鼠标左键！");
            } else if (btnNum == 1) {//1为中键
                console.log("您点击了鼠标中键！");
            } else {
                console.log("您点击了" + btnNum + "号键，我不能确定它的名称。！");
            }
        }
// https://blog.csdn.net/sinat_31057219/article/details/60965045
// https://www.runoob.com/jsref/event-onmousedown.html
