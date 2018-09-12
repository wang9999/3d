
$(document).ready(function(){
    let url = window.location.href.split('#');
    var name1=url[1];
    console.log(name1);
    var lesson=url[2];
    console.log(lesson);
    $.ajax({
        type: "GET",
        url: "json/a.json",
        dataType: "json",
        success: function(data){
            console.log(data);
            var data1=data.data;
            console.log(data1);
            var introduce=data.introduce;
            console.log(data1.length);
            for (i=0;i<data1.length;i++){
                name2=data1[i].name;
                var self=data1[i].tasks;
                console.log(self);
                var k=self.length;
                if(name1==name2&&!lesson){
                    console.log(self);
                    for(m=0;m<k;m++){
                        var h=self[m].png;
                        console.log(self[m].png);
                        var oDiv=document.createElement("div");
                        var oA=document.createElement("a");
                        var c4=document.getElementById("main");
                        oDiv.id=m;
                        oDiv.className="col-md-4";
                        var oImg=document.createElement("img");
                        oImg.id="img"+m;
                        oImg.className='imgClass';
                        oA.id='a'+m;
                        c4.appendChild(oDiv);
                        oDiv.appendChild(oA);
                        oA.appendChild(oImg);
                        document.getElementById("img"+m).setAttribute("src",h);
                        document.getElementById('a'+m).setAttribute('href','task.html'+"#"+name1+"#"+m);
                    }
                }
                if(name1==name2&&lesson){
                    var swf=data1[i].tasks[lesson].swf;
                    var video=data1[i].tasks[lesson].mp4;
                    console.log(video);
                    console.log(swf);
                    document.getElementById('swf').setAttribute('src',swf);
                    document.getElementById('video').setAttribute('src',video);
                    console.log(introduce[i]);
                    document.getElementById('introduce').innerHTML=introduce[i].l;
                    document.getElementById('explain').innerHTML=data1[i].tasks[lesson].explain;
                }
            }
        }
    });
});
// var task= [{
//     "id": 1,
//     "name": "李龙",
//     "games": [{
//         "game1":"http://jns.img.bucket.ks3-cn-beijing.ksyun.com/skill/1/dfdcdb8d-306a-48d7-a084-27e3de851562.swf",
//         "explain":"这是一个小游戏"
//     },{
//         "game2":"http://jns.img.bucket.ks3-cn-beijing.ksyun.com/skill/1/dfdcdb8d-306a-48d7-a084-27e3de851562.swf",
//         "explain":"这是区别于第一个游戏"
//     }]
// }, {
//         "id": 2,
//         "name": "哈哈",
//         "games": [{
//             "game1":"http://jns.img.bucket.ks3-cn-beijing.ksyun.com/skill/1/dfdcdb8d-306a-48d7-a084-27e3de851562.swf",
//             "explain":"这是一个小游戏"
//         },{
//             "game2":"http://jns.img.bucket.ks3-cn-beijing.ksyun.com/skill/1/dfdcdb8d-306a-48d7-a084-27e3de851562.swf",
//             "explain":"这是区别于第一个游戏"
//         }]
//     }
// ]
