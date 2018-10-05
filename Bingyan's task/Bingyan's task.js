function smoothscroll(){
    var currentScroll = document.documentElement.scrollTop;
    if (currentScroll > 0) {
        window.requestAnimationFrame(smoothscroll);
        window.scrollTo (0,currentScroll - (currentScroll/20));
    }
}
var back_to_top="<button type='button' id='back-to-top' onclick='smoothscroll()'></button>";
document.getElementsByClassName("replace").innerHTML=back_to_top;

var para=document.getElementById("body-main-content");
para.className="body-main-content-para";

var para1=document.createElement("div");//这里能用循环语句命名么，真的很想循环一下
var para1_left=document.createElement("div");
var para1_right=document.createElement("div");

var para1_right_h=document.createElement("h1");
var para1_right_p=document.createElement("p");
var para1_left_img=document.createElement("img");
var para1_left_a=document.createElement("a");

var text1_h =document.createTextNode("这里是标题");
var text1_p=document.createTextNode("这里是段落");
var text1_a=document.createTextNode("PLAY");
para1_left_img.src="http://www.baidu.com/img/baidu_sylogo1.gif";
para1_left_a.href="//www.baidu.com/";

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

para1_left.className="body-main-content-para-left";
para1_right.className="body-main-content-para-right";


var para2=document.createElement("div");
var para2_left=document.createElement("div");
var para2_right=document.createElement("div");

var para2_right_h=document.createElement("h1");
var para2_right_p=document.createElement("p");
var para2_left_img=document.createElement("img");
var para2_left_a=document.createElement("a");

var text2_h =document.createTextNode("这里是标题");
var text2_p=document.createTextNode("这里是段落");
var text2_a=document.createTextNode("PLAY");
para2_left_img.src="http://www.baidu.com/img/baidu_sylogo1.gif";
para2_left_a.href="//www.baidu.com/";

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

para2_left.className="body-main-content-para-left";
para2_right.className="body-main-content-para-right";


var para3=document.createElement("div");
var para3_left=document.createElement("div");
var para3_right=document.createElement("div");

var para3_right_h=document.createElement("h1");
var para3_right_p=document.createElement("p");
var para3_left_img=document.createElement("img");
var para3_left_a=document.createElement("a");

var text3_h =document.createTextNode("这里是标题");
var text3_p=document.createTextNode("这里是段落");
var text3_a=document.createTextNode("PLAY");
para3_left_img.src="http://www.baidu.com/img/baidu_sylogo1.gif";
para3_left_a.href="//www.baidu.com/";

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

para3_left.className="body-main-content-para-left";
para3_right.className="body-main-content-para-right";


var para4=document.createElement("div");
var para4_left=document.createElement("div");
var para4_right=document.createElement("div");

var para4_right_h=document.createElement("h1");
var para4_right_p=document.createElement("p");
var para4_left_img=document.createElement("img");
var para4_left_a=document.createElement("a");

var text4_h =document.createTextNode("这里是标题");
var text4_p=document.createTextNode("这里是段落");
var text4_a=document.createTextNode("PLAY");
para4_left_img.src="http://www.baidu.com/img/baidu_sylogo1.gif";
para4_left_a.href="//www.baidu.com/";

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

para4_left.className="body-main-content-para-left";
para4_right.className="body-main-content-para-right";


var para5=document.createElement("div");
var para5_left=document.createElement("div");
var para5_right=document.createElement("div");

var para5_right_h=document.createElement("h1");
var para5_right_p=document.createElement("p");
var para5_left_img=document.createElement("img");
var para5_left_a=document.createElement("a");

var text5_h =document.createTextNode("这里是标题");
var text5_p=document.createTextNode("这里是段落");
var text5_a=document.createTextNode("PLAY");
para5_left_img.src="http://www.baidu.com/img/baidu_sylogo1.gif";
para5_left_a.href="//www.baidu.com/";

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

para5_left.className="body-main-content-para-left";
para5_right.className="body-main-content-para-right";


var para6=document.createElement("div");
var para6_left=document.createElement("div");
var para6_right=document.createElement("div");

var para6_right_h=document.createElement("h1");
var para6_right_p=document.createElement("p");
var para6_left_img=document.createElement("img");
var para6_left_a=document.createElement("a");

var text6_h =document.createTextNode("这里是标题");
var text6_p=document.createTextNode("这里是段落");
var text6_a=document.createTextNode("PLAY");
para6_left_img.src="http://www.baidu.com/img/baidu_sylogo1.gif";
para6_left_a.href="//www.baidu.com/";

para6_right_p.appendChild(text6_p);
para6_right_h.appendChild(text6_h);
para6_left_a.appendChild(text6_a);
para6_right.appendChild(para6_right_h);
para6_right.appendChild(para6_right_p);
para6_left.appendChild(para6_left_img);
para6_left.appendChild(para6_left_a);

para6.appendChild(para6_left);
para6.appendChild(para6_right);
para.appendChild(para6);

para6_left.className="body-main-content-para-left";
para6_right.className="body-main-content-para-right";


var para7=document.createElement("div");
var para7_left=document.createElement("div");
var para7_right=document.createElement("div");

var para7_right_h=document.createElement("h1");
var para7_right_p=document.createElement("p");
var para7_left_img=document.createElement("img");
var para7_left_a=document.createElement("a");

var text7_h =document.createTextNode("这里是标题");
var text7_p=document.createTextNode("这里是段落");
var text7_a=document.createTextNode("PLAY");
para7_left_img.src="http://www.baidu.com/img/baidu_sylogo1.gif";
para7_left_a.href="//www.baidu.com/";

para7_right_p.appendChild(text7_p);
para7_right_h.appendChild(text7_h);
para7_left_a.appendChild(text7_a);
para7_right.appendChild(para7_right_h);
para7_right.appendChild(para7_right_p);
para7_left.appendChild(para7_left_img);
para7_left.appendChild(para7_left_a);

para7.appendChild(para7_left);
para7.appendChild(para7_right);
para.appendChild(para7);

para7_left.className="body-main-content-para-left";
para7_right.className="body-main-content-para-right";


var para8=document.createElement("div");
var para8_left=document.createElement("div");
var para8_right=document.createElement("div");

var para8_right_h=document.createElement("h1");
var para8_right_p=document.createElement("p");
var para8_left_img=document.createElement("img");
var para8_left_a=document.createElement("a");

var text8_h =document.createTextNode("这里是标题");
var text8_p=document.createTextNode("这里是段落");
var text8_a=document.createTextNode("PLAY");
para8_left_img.src="http://www.baidu.com/img/baidu_sylogo1.gif";
para8_left_a.href="//www.baidu.com/";

para8_right_p.appendChild(text8_p);
para8_right_h.appendChild(text8_h);
para8_left_a.appendChild(text8_a);
para8_right.appendChild(para8_right_h);
para8_right.appendChild(para8_right_p);
para8_left.appendChild(para8_left_img);
para8_left.appendChild(para8_left_a);

para8.appendChild(para8_left);
para8.appendChild(para8_right);
para.appendChild(para8);

para8_left.className="body-main-content-para-left";
para8_right.className="body-main-content-para-right";


var para9=document.createElement("div");
var para9_left=document.createElement("div");
var para9_right=document.createElement("div");

var para9_right_h=document.createElement("h1");
var para9_right_p=document.createElement("p");
var para9_left_img=document.createElement("img");
var para9_left_a=document.createElement("a");

var text9_h =document.createTextNode("这里是标题");
var text9_p=document.createTextNode("这里是段落");
var text9_a=document.createTextNode("PLAY");
para9_left_img.src="http://www.baidu.com/img/baidu_sylogo1.gif";
para9_left_a.href="//www.baidu.com/";

para9_right_p.appendChild(text9_p);
para9_right_h.appendChild(text9_h);
para9_left_a.appendChild(text9_a);
para9_right.appendChild(para9_right_h);
para9_right.appendChild(para9_right_p);
para9_left.appendChild(para9_left_img);
para9_left.appendChild(para9_left_a);

para9.appendChild(para9_left);
para9.appendChild(para9_right);
para.appendChild(para9);

para9_left.className="body-main-content-para-left";
para9_right.className="body-main-content-para-right";


var para10=document.createElement("div");
var para10_left=document.createElement("div");
var para10_right=document.createElement("div");

var para10_right_h=document.createElement("h1");
var para10_right_p=document.createElement("p");
var para10_left_img=document.createElement("img");
var para10_left_a=document.createElement("a");

var text10_h =document.createTextNode("这里是标题");
var text10_p=document.createTextNode("这里是段落");
var text10_a=document.createTextNode("PLAY");
para10_left_img.src="http://www.baidu.com/img/baidu_sylogo1.gif";
para10_left_a.href="//www.baidu.com/";

para10_right_p.appendChild(text10_p);
para10_right_h.appendChild(text10_h);
para10_left_a.appendChild(text10_a);
para10_right.appendChild(para10_right_h);
para10_right.appendChild(para10_right_p);
para10_left.appendChild(para10_left_img);
para10_left.appendChild(para10_left_a);

para10.appendChild(para10_left);
para10.appendChild(para10_right);
para.appendChild(para10);

para10_left.className="body-main-content-para-left";
para10_right.className="body-main-content-para-right";

