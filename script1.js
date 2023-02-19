var request1=new XMLHttpRequest();
request1.open("GET","https://restcountries.com/v3.1/all");
request1.send();
request1.onload=function(){
    var result1=JSON.parse(request1.response);
    for(var i=0;i<result1.length;i++){
        console.log(result1[i].name,result1[i].region,result1[i].subregion,result1[i].population);
    }
    }