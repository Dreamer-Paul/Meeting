/* ----

# Meeting
# By: Dreamer-Paul
# Last Update: 2017.6.20

一个类幻灯片的网页，用于我在学校主持的一次以梦想为主题的晨会。

欢迎你加入缤奇，和我们一起改变世界。
本代码为缤奇保罗原创，并遵守 GPL3 开源协议。保罗的个人博客：https://hi-paul.space

---- */

var frame = document.getElementsByTagName("iframe")[0];
var page_pre = document.getElementsByClassName("previous-page")[0];
var page_nex = document.getElementsByClassName("next-page")[0];

page_pre.addEventListener("click", page_prev);
page_nex.addEventListener("click", page_next);

var page = 0;

// 上一页
function page_prev() {
    if(page != 0){
        page --;
        page_set(page);
    }
    else {
        alert("已经在第一页了 QWQ")
    }
}

// 下一页
function page_next() {
    if(page != 8){
        page ++;
        page_set(page);
    }
    else {
        alert("已经在最后一页了 QWQ")
    }
}

// 左侧翻页菜单
function sidebar() {
    var link_list = document.getElementsByClassName("page-switch");

    link_list[0].addEventListener("click", function () {
        page_set(1);
        page = 1;
        sidebar_btn();
    });
    link_list[1].addEventListener("click", function () {
        page_set(2);
        page = 2;
        sidebar_btn();
    });
    link_list[2].addEventListener("click", function () {
        page_set(3);
        page = 3;
        sidebar_btn();
    });
    link_list[3].addEventListener("click", function () {
        page_set(4);
        page = 4;
        sidebar_btn();
    });
    link_list[4].addEventListener("click", function () {
        page_set(5);
        page = 5;
        sidebar_btn();
    });
    link_list[5].addEventListener("click", function () {
        page_set(6);
        page = 6;
        sidebar_btn();
    });
    link_list[6].addEventListener("click", function () {
        page_set(7);
        page = 7;
        sidebar_btn();
    });
}
sidebar();

// 菜单按钮
var side_btn = document.getElementsByClassName("side-btn")[0];
var sidebar = document.getElementsByTagName("aside")[0];

side_btn.addEventListener("click", sidebar_btn);

function sidebar_btn() {
    sidebar.classList.toggle("active");
}

// 音乐按钮
var music_btn = document.getElementsByClassName("music-btn")[0];
var music_box = document.getElementsByClassName("music-box")[0];

music_btn.addEventListener("click", function () {
    music_box.classList.toggle("active");
});

// 生成按钮
var rand_btn = document.getElementsByClassName("random-btn")[0];
var rand_box = document.getElementsByClassName("random-box")[0];

rand_btn.addEventListener("click", function () {
    rand_box.classList.toggle("active");
});

var bg = document.getElementsByClassName("container")[0];

// 设置页面
function page_set(page) {
    frame.src = "./pages/" + page + ".html";
    bg.style.backgroundImage = "url(./sources/bg-" + page + ".jpg)";
}

// 时钟显示
setInterval(time, 1000);

function time(){
    var timer = document.getElementsByClassName("timer")[0];
    var date = new Date();
    var hours = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    var time = zerofill(hours) + ":" + zerofill(minute) + ":" + zerofill(second);
    timer.innerHTML = "<span>" + time + "</span>";

    function zerofill(str){
        var num;
        str >= 10 ? num = str : num = "0" + str;
        return num;
    }
}

// 随机数生成
function random(min,max){
    return Math.floor(min + Math.random()*(max-min));
}

var random_gen = document.getElementById("random_gen");

random_gen.addEventListener("click", function () {
    var random_min = eval(document.getElementById("random_min").value);
    var random_max = eval(document.getElementById("random_max").value);

    if (isNaN(random_min) || isNaN(random_max) || random_min=="" || random_max==""){
        alert("输入有误，请检查");
    }
    else{
        alert("生成数是：" + random(random_min, random_max));
    }
});

// 音乐播放器
var music = new Audio;
music.volume = 0.5;
var music_stop = document.getElementById("music_stop");

music_stop.addEventListener("click", function () {
    music.pause();
});
function music_ready() {
    var music_item = document.getElementsByClassName("music-item");
    var mid = 0;

    music_item[0].addEventListener("click", music_ready.bind(1, 1));
    music_item[1].addEventListener("click", music_ready.bind(2, 2));
    music_item[2].addEventListener("click", music_ready.bind(3, 3));
    music_item[3].addEventListener("click", music_ready.bind(4, 4));
    music_item[4].addEventListener("click", music_ready.bind(5, 5));
    music_item[5].addEventListener("click", music_ready.bind(6, 6));
    music_item[6].addEventListener("click", music_ready.bind(7, 7));
    music_item[7].addEventListener("click", music_ready.bind(8, 8));

    function music_ready(mid) {
        switch (mid){
            case 1: music_play("./sources/bgm-1.ogg"); break;
            case 2: music_play("./sources/bgm-2.ogg"); break;
            case 3: music_play("./sources/bgm-3.ogg"); break;
            case 4: music_play("./sources/bgm-4.ogg"); break;
            case 5: music_play("./sources/bgm-5.ogg"); break;
            case 6: music_play("./sources/bgm-6.ogg"); break;
            case 7: music_play("./sources/bgm-7.ogg"); break;
            case 8: music_play("./sources/bgm-8.ogg"); break;
        }
    }
    function music_play(src) {
        music.src=src;
        music.play();
    }
}
music_ready();