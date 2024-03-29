const detail = {
    "name":"Manoj",
    "age":"29",
    "Nationality":"Indian",
    "Religion":"hindu",
    "qualification":"B.Tech",
    "Mobile":9876543210
}
//for in-------------------------------------------------------
// for(var key in detail){
//     console.log(detail[key]);
// }


//for of-------------------------------------------------------
// const data = Object.entries(detail)
// console.log(data);
// for(var [key,val] of data){
//     console.log(val);
// }

//forEach------------------------------------------------------
const data = Object.entries(detail)
console.log(data);
data.forEach(([key,val])=>console.log(val));