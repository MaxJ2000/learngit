function smoothscroll() {
    var currentScroll = document.documentElement.scrollTop;
    if (currentScroll > 0) {
        window.requestAnimationFrame(smoothscroll);
        window.scrollTo(0, currentScroll - (currentScroll / 20));
    }
}

var back_to_top = "<button type='button' id='back-to-top' onclick='smoothscroll()'/>";
document.getElementsByClassName("replace").innerHTML = back_to_top;

var para = document.getElementById("body-main-content");
para.className = "body-main-content-para";




$.ajax({
    url: "http://127.0.0.1:23333/",
    type: "get",
    dataType: 'json',
    success: function (result) {
        console.log(result);
        showresult(result);
    }
});
function showresult(result){
    var para1 = document.createElement("div");//这里能用循环语句命名么，真的很想循环一下
    var para1_left = document.createElement("div");
    var para1_right = document.createElement("div");

    var para1_right_h = document.createElement("h1");
    var para1_right_p = document.createElement("p");
    var para1_left_img = document.createElement("img");
    var para1_left_a = document.createElement("a");

    var text1_h = document.createTextNode(result.first.title);
    var text1_p = document.createTextNode(result.first.content);
    var text1_a = document.createTextNode("PLAY");
    para1_left_img.src = "http://www.baidu.com/img/baidu_sylogo1.gif";
    para1_left_a.href = "//www.baidu.com/";

    para1_right_p.appendChild(text1_p);
    para1_right_h.appendChild(text1_h);
    para1_left_a.appendChild(text1_a);
    para1_right.appendChild(para1_right_h);
    para1_right.appendChild(para1_right_p);
    para1_left.appendChild(para1_left_img);
    para1_left.appendChild(para1_left_a);

    para1.appendChild(para1_left);
    para1.appendChild(para1_right);
    para.appendChild(para1);

    para1_left.className = "body-main-content-para-left";
    para1_right.className = "body-main-content-para-right";


    var para2 = document.createElement("div");
    var para2_left = document.createElement("div");
    var para2_right = document.createElement("div");

    var para2_right_h = document.createElement("h1");
    var para2_right_p = document.createElement("p");
    var para2_left_img = document.createElement("img");
    var para2_left_a = document.createElement("a");

    var text2_h = document.createTextNode(result.second.title);
    var text2_p = document.createTextNode(result.second.content);
    var text2_a = document.createTextNode("PLAY");
    para2_left_img.src = "http://www.baidu.com/img/baidu_sylogo1.gif";
    para2_left_a.href = "//www.baidu.com/";

    para2_right_p.appendChild(text2_p);
    para2_right_h.appendChild(text2_h);
    para2_left_a.appendChild(text2_a);
    para2_right.appendChild(para2_right_h);
    para2_right.appendChild(para2_right_p);
    para2_left.appendChild(para2_left_img);
    para2_left.appendChild(para2_left_a);

    para2.appendChild(para2_left);
    para2.appendChild(para2_right);
    para.appendChild(para2);

    para2_left.className = "body-main-content-para-left";
    para2_right.className = "body-main-content-para-right";


    var para3 = document.createElement("div");
    var para3_left = document.createElement("div");
    var para3_right = document.createElement("div");

    var para3_right_h = document.createElement("h1");
    var para3_right_p = document.createElement("p");
    var para3_left_img = document.createElement("img");
    var para3_left_a = document.createElement("a");

    var text3_h = document.createTextNode(result.third.title);
    var text3_p = document.createTextNode(result.third.content);
    var text3_a = document.createTextNode("PLAY");
    para3_left_img.src = "http://www.baidu.com/img/baidu_sylogo1.gif";
    para3_left_a.href = "//www.baidu.com/";

    para3_right_p.appendChild(text3_p);
    para3_right_h.appendChild(text3_h);
    para3_left_a.appendChild(text3_a);
    para3_right.appendChild(para3_right_h);
    para3_right.appendChild(para3_right_p);
    para3_left.appendChild(para3_left_img);
    para3_left.appendChild(para3_left_a);

    para3.appendChild(para3_left);
    para3.appendChild(para3_right);
    para.appendChild(para3);

    para3_left.className = "body-main-content-para-left";
    para3_right.className = "body-main-content-para-right";


    var para4 = document.createElement("div");
    var para4_left = document.createElement("div");
    var para4_right = document.createElement("div");

    var para4_right_h = document.createElement("h1");
    var para4_right_p = document.createElement("p");
    var para4_left_img = document.createElement("img");
    var para4_left_a = document.createElement("a");

    var text4_h = document.createTextNode(result.forth.title);
    var text4_p = document.createTextNode(result.forth.content);
    var text4_a = document.createTextNode("PLAY");
    para4_left_img.src = "http://www.baidu.com/img/baidu_sylogo1.gif";
    para4_left_a.href = "//www.baidu.com/";

    para4_right_p.appendChild(text4_p);
    para4_right_h.appendChild(text4_h);
    para4_left_a.appendChild(text4_a);
    para4_right.appendChild(para4_right_h);
    para4_right.appendChild(para4_right_p);
    para4_left.appendChild(para4_left_img);
    para4_left.appendChild(para4_left_a);

    para4.appendChild(para4_left);
    para4.appendChild(para4_right);
    para.appendChild(para4);

    para4_left.className = "body-main-content-para-left";
    para4_right.className = "body-main-content-para-right";


    var para5 = document.createElement("div");
    var para5_left = document.createElement("div");
    var para5_right = document.createElement("div");

    var para5_right_h = document.createElement("h1");
    var para5_right_p = document.createElement("p");
    var para5_left_img = document.createElement("img");
    var para5_left_a = document.createElement("a");

    var text5_h = document.createTextNode(result.fifth.title);
    var text5_p = document.createTextNode(result.fifth.content);
    var text5_a = document.createTextNode("PLAY");
    para5_left_img.src = "http://www.baidu.com/img/baidu_sylogo1.gif";
    para5_left_a.href = "//www.baidu.com/";

    para5_right_p.appendChild(text5_p);
    para5_right_h.appendChild(text5_h);
    para5_left_a.appendChild(text5_a);
    para5_right.appendChild(para5_right_h);
    para5_right.appendChild(para5_right_p);
    para5_left.appendChild(para5_left_img);
    para5_left.appendChild(para5_left_a);

    para5.appendChild(para5_left);
    para5.appendChild(para5_right);
    para.appendChild(para5);

    para5_left.className = "body-main-content-para-left";
    para5_right.className = "body-main-content-para-right";
}

