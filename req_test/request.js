const http = require('http');
var count = 1;
function request_url(){
  new Promise(function(resolve, reject) {
http.get('http://192.168.0.210',(resp)=>{
  let data ='';
  resp.on('data', (test)=>{
    console.log(test)
    data+=test;
    if(count<15){

      setTimeout(function(){
        request_url()
        console.log("request count : "+count)
        count++;
      },1000);
    }

  });
  }).on("error",(err)=>{
  console.log("Error: "+err.message);
})
  });
}

  request_url()


// setInterval(function () {
// request_url();
// }, 1000);
