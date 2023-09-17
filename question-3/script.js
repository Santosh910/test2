var x = 121;

function read(num){
    for(var i = 0;i < num.length/2;i++){
        console.log(i)
        if(num[i] !== num[num.length]){
             return false;
        }
            
        
    }
return true;
}
console.log(read(x));