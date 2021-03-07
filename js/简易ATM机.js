// var operate = prompt('选择操作：\n 1.查询余额\n 2.存钱\n 3.取钱\n 4.退出');

// var money = 0;
// var isContinue = true;
// do {
//     switch (operate) {
//         case '1':
//             alert('您当前账户余额为： ' + money);
//             operate = prompt('选择操作：\n 1.查询余额\n 2.存钱\n 3.取钱\n 4.退出');
//             break;
//         case '2':
//             var in_money = parseFloat(prompt('请输入存款金额:'));
//             if (in_money) {
//                 money = money + in_money;
//                 alert('本次存款金额' + in_money + '\n您当前账户余额为： ' + money);
//             } else {
//                 alert('本次存款金额' + 0 + '\n您当前账户余额为： ' + money);
//             }
//             operate = prompt('选择操作：\n 1.查询余额\n 2.存钱\n 3.取钱\n 4.退出');
//             break;
//         case '3':
//             var out_money = parseFloat(prompt('请输入取款金额:'));
//             money = money - out_money;
//             alert('本次取款金额' + out_money + '\n您当前账户余额为： ' + money);
//             operate = prompt('选择操作：\n 1.查询余额\n 2.存钱\n 3.取钱\n 4.退出');
//             break;
//         case '4':
//             alert('很高兴为您服务！再见');
//             if (operate === '4') {
//                 isContinue = false;
//             }
//             break;
//         default:
//             operate = prompt('选择操作：\n 1.查询余额\n 2.存钱\n 3.取钱\n 4.退出');

//     }
// } while (isContinue);



// 倒计时
var nowDate = new Date();

function countDown(inputTime) {
    var date = +new Date(inputTime);
    var times = (date - nowDate.getTime()) / 1000;
    var d = parseInt(times / 60 / 60 / 24);
    d = d < 10 ? '0' + d : d;
    var h = parseInt(times / 60 / 60 % 24);
    h = h < 10 ? '0' + h : h;
    var m = parseInt(times / 60 % 60);
    m = m < 10 ? '0' + m : m;
    var s = parseInt(times % 60);
    s = s < 10 ? '0' + s : s;
    var str = d + '天' + h + '时' + m + '分' + s + '秒'
    console.log("离活动开始还有:", str);
}


var date = +new Date("2021-03-5");
var spanItem = document.querySelectorAll('.timer span');
var timerCallback = function() {
    var nowDate = new Date();
    var times = (date - nowDate.getTime()) / 1000;
    var d = parseInt(times / 60 / 60 / 24);
    d = d < 10 ? '0' + d : d;
    var h = parseInt(times / 60 / 60 % 24);
    h = h < 10 ? '0' + h : h;
    var m = parseInt(times / 60 % 60);
    m = m < 10 ? '0' + m : m;
    var s = parseInt(times % 60);
    s = s < 10 ? '0' + s : s;
    spanItem[0].innerHTML = h;
    spanItem[1].innerHTML = m;
    spanItem[2].innerHTML = s;
}

timerCallback(); //先调用一次
countDown("2021-03-4");
setInterval(timerCallback, 1000);



//  60秒倒计时
var oDiv = document.querySelectorAll('.time-down span');
var timer1 = null;
var handle = function() {
    oDiv[1].removeEventListener('click', handle, false);
    var time = 5;
    oDiv[1].disabled = true;
    oDiv[1].style.cursor = 'default';

    oDiv[0].innerHTML = time;
    timer1 = setInterval(() => {
        time--;
        oDiv[0].innerHTML = time;
        if (time < 0) {
            oDiv[1].disabled = false;
            oDiv[1].style.cursor = 'pointer';
            oDiv[0].innerHTML = '';
            clearInterval(timer1);
            oDiv[1].addEventListener('click', handle, false);
        }
    }, 1000);
};
oDiv[1].addEventListener('click', handle, false);