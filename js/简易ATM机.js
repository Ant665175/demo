var operate = prompt('选择操作：\n 1.查询余额\n 2.存钱\n 3.取钱\n 4.退出');

var money = 0;
var isContinue = true;
do {
    switch (operate) {
        case '1':
            alert('您当前账户余额为： ' + money);
            operate = prompt('选择操作：\n 1.查询余额\n 2.存钱\n 3.取钱\n 4.退出');
            break;
        case '2':
            var in_money = parseFloat(prompt('请输入存款金额:'));
            if (in_money) {
                money = money + in_money;
                alert('本次存款金额' + in_money + '\n您当前账户余额为： ' + money);
            } else {
                alert('本次存款金额' + 0 + '\n您当前账户余额为： ' + money);
            }
            operate = prompt('选择操作：\n 1.查询余额\n 2.存钱\n 3.取钱\n 4.退出');
            break;
        case '3':
            var out_money = parseFloat(prompt('请输入取款金额:'));
            money = money - out_money;
            alert('本次取款金额' + out_money + '\n您当前账户余额为： ' + money);
            operate = prompt('选择操作：\n 1.查询余额\n 2.存钱\n 3.取钱\n 4.退出');
            break;
        case '4':
            alert('很高兴为您服务！再见');
            if (operate === '4') {
                isContinue = false;
            }
            break;
        default:
            operate = prompt('选择操作：\n 1.查询余额\n 2.存钱\n 3.取钱\n 4.退出');

    }
} while (isContinue);