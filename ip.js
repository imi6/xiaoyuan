const weaapi = "http://ip-api.com/json/?lang=zh-CN"

$httpClient.get(weaapi, function(error, response, data){
    if (error){
        console.log(error);
        $done();                   
    } else {
        var obj = JSON.parse(data);
        console.log(obj);
        var shenfen = "所在省份： " + obj.regionName;
        var chengshi = "所在城市： " + obj.city;
        var szip = "所在IP： " + obj.query;
        let wmation = [shenfen,chengshi,szip];
        $notification.post(wmation[0], wmation[1], wmation[2]);
        $done();
    }
}
);


/*****************************************************************
获取本地IP
*****************************************************************/
