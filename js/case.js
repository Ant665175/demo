var zsBtn = document.querySelector('.zhishu-btn');

// zsBtn.addEventListener('click', function() {
//     var num = document.querySelector('.zhishu').value;
//     console.log(num)
// })

// document.querySelector('.zhishu-btn').addEventListener('click', function() {
//     console.log(11111111111)
// });

zsBtn.onclick = function() {
    alert('you right');
}

var pwBtn = document.querySelector('.vis-btn');
var oPw = document.querySelector('.pw');
var isVisibility = false;
pwBtn.onclick = function() {
    if (isVisibility) {
        oPw.type = 'password';
        this.innerHTML = '显示';
        isVisibility = false;
    } else {
        oPw.type = 'text';
        this.innerHTML = '隐藏';
        isVisibility = true;
    }
}
var tip = document.querySelector('p');
console.dir(tip)

oPw.onfocus = function() {
    console.log('请输入6-16个字符')
    tip.className = 'tip';
    tip.innerHTML = '请输入6-16个字符';
}
oPw.onblur = function() {
    var num = this.value.length;
    if (num >= 6) {
        tip.innerHTML = '';
    } else {
        tip.innerHTML = '密码太短了';
        tip.className = 'wrong';
    }
}