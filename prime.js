let num=10
let flag=true

for(let i=2;i<num;i++){
    if(num%i==0){
        flag=false
        break;
    }
}
if(flag){
    console.log("Yes")
}else{
    console.log("No")

}