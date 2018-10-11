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
    url: "//rabbitchat.herokuapp.com/play.json",
    type: "get",
    dataType: 'json',
    success: function (result) {
        console.log(result);
        showresult(result);
    }
});
    function showresult(result) {
        for (var i in result)
            if (result.hasOwnProperty(i)) {
                var para = document.createElement("div");//这里能用循环语句命名么，真的很想循环一下
                var para_left = document.createElement("div");
                var para_right = document.createElement("div");

                var para_right_h = document.createElement("h1");
                var para_right_p = document.createElement("p");
                var para_left_img = document.createElement("img");
                var para_left_a = document.createElement("a");

                var text_h = document.createTextNode(result[i]["title"]);
                var text_p = document.createTextNode(result[i]["content"]);
                var text_a = document.createTextNode("PLAY");
                para_left_img.src = "//www.baidu.com/img/baidu_sylogo1.gif";
                para_left_a.href = "//www.baidu.com/";

                para_right_p.appendChild(text_p);
                para_right_h.appendChild(text_h);
                para_left_a.appendChild(text_a);
                para_right.appendChild(para_right_h);
                para_right.appendChild(para_right_p);
                para_left.appendChild(para_left_img);
                para_left.appendChild(para_left_a);

                para.appendChild(para_left);
                para.appendChild(para_right);
                para.appendChild(para);

                para_left.className = "body-main-content-para-left";
                para_right.className = "body-main-content-para-right";
            }
    }
