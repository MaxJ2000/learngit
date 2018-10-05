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

var para1=document.getElementById("body-main-content");/*为啥这里不能用class那么，用了element就不算函数了？？*/
para1.appendChild(para1_left);
para1.appendChild(para1_right);
para1.className="body-main-content-para";
