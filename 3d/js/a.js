$(document).ready(function(){
    $.ajax({
        type: "GET",
        url: "./json/a.json",
        dataType: "json",
        success: function(data){
            console.log(data);
            var data1=data.data;
            console.log(data1);
            var introduce=data.introduce;
            console.log(data1.length);
            var number=data1.length;
        for( i=0;i<number;i++){

        }

            function getRandomArrayElements(arr, count) {
                var shuffled = arr.slice(0), i = arr.length, min = i - count, temp, index;
                while (i-- > min) {
                    index = Math.floor((i + 1) * Math.random());
                    temp = shuffled[index];
                    shuffled[index] = shuffled[i];
                    shuffled[i] = temp;
                }
                return shuffled.slice(min);
            }
            var f = length => Array.from({length}).map((v, k) => k);
            console.log(f(200));
            stu=f(200);

            var student=getRandomArrayElements(stu, number);
            console.log(student);
            // var o=document.getElementById('img10');
            // console.log(o);
            for(var n = 0; n <number; n++){
                k=student[n];
                console.log(k);
                img=data1[n].head;
               var name=data1[n].name;
                console.log(img);
                document.getElementById("a"+k).setAttribute("href","project.html#"+name);
                document.getElementById("img"+k).setAttribute("src",img);
            }

        }
    });
});