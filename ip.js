const weaapi = "http://pv.sohu.com/cityjson"

$httpClient.get(weaapi, function(error, response, data){
    if (error){
        console.log(error);
        $done();                   
    } else {
        var obj = JSON.parse(data);
        console.log(obj);
        var city = "所在城市： " + obj.cname;
        var ip = "所在P： " + obj.cip;
        let wmation = [city,ip];
        $notification.post(wmation[0], wmation[1], wmation[2]);
        $done();
    }
}
);


/*****************************************************************
获取本地IP
*****************************************************************/
