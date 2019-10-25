const weaapi = "http://pv.sohu.com/cityjson/"

$httpClient.get(weaapi, function(error, response, data){
    if (error){
        console.log(error);
        $done();                   
    } else {
        var obj = JSON.parse(data);
        console.log(obj);
        var dizhi = "所在城市： " + obj.city;
        var szip = "所在IP： " + obj.cip;
        let wmation = [dizhi,szip];
        $notification.post(wmation[0], wmation[1]);
        $done();
    }
}
);


/*****************************************************************
获取本地IP
*****************************************************************/
