let start=1;
let end=1000;
for(var i=start;i<=end;i++){
    var temp=i;
    var noOfDigits=i.toString().length;
    var sum=0;
    while(temp>0){
        var digit=temp%10;
        temp=parseInt(temp/10);
        sum+=digit**noOfDigits;

    }
    if(sum==i){
        console.log(i)
    }
}