let data = [
    {
        name: 'niu',
        sex: 'female',
    },{
        name: 'li',
        sex: 'male'
    }
]
var text = JSON.stringify(data); //[{"name":"niu","sex":"female"},{"name":"li","sex":"male"}]

var text = JSON.stringify(data, ['name']) // [{"name":"niu"},{"name":"li"}]

var text = JSON.stringify(data, function(key, value){
    if(key != 'sex') {
        console.log(key, value, '-------');
        return value
    }
})  // [{"name":"niu"},{"name":"li"}]
console.log(text)