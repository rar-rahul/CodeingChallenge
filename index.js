//Event Bubbling,capturing,delgation


// document.querySelector("#grand").addEventListener(
//     "click",
//     () => {
//       console.log("grandparent click");
//     },
//     false
//   );
//   document.querySelector("#parent").addEventListener(
//     "click",
//     (e) => {
//       console.log("parent click");
//       e.stopPropagation();
//     },
//     false //bubbling
//   );
//   document.querySelector("#child").addEventListener(
//     "click",
//     (e) => {
//       console.log("child click");
//     },
//     true //capturing
//   );


//Debaunce
  const getdata = () => { 
    console.log("test debaunceing")
  }
  
  // const debauncenew = function (fn, d) {
  //   let timer;
  //   return function () {
  //     let context = this;
  //      args = arguments;
  //     clearTimeout(timer)
  //     timer = setTimeout(() => {
  //       getData.apply(context, arguments);
  //     }, d);
  //   };
  // };
  
  //const magic = debauncenew(getData, 1000);

  //new debaunce function
  const mydebaunce = function (fun,d){
   let timer;
    return function (){ 
      let context = this;
      args = arguments
     clearTimeout(timer)
     timer =  setTimeout(() => { 
        getdata.apply(context,arguments)
      },d)
    }

  }

  const preventApi = mydebaunce(getdata,1000)

  //Find maximun value from arrray
  const array = [10, 100, 3, 2, 6];

  function maxArr(){
    let max = 0;
    for(let i = 0;i< array.length;i++){
      if(array[i] > max){
        max = array[i]
      }
    }
    return max
  }
  console.log(maxArr(array))

  const total = array.reduce((acc,curr) => {
   if(curr > acc) { 
    acc = curr;
   }
   return acc;
  },0)
  console.log(total)

  const users = [
    { firstName: "Alok", lastName: "Raj", age: 23 },
    { firstName: "Ashish", lastName: "Kumar", age: 29 },
    { firstName: "Ankit", lastName: "Roy", age: 29 },
    { firstName: "Pranav", lastName: "Mukherjee", age: 50 },
    ];
    
const ulist = users.reduce((acc,curr) => { 
    if(curr.age > 30){
      acc.push(curr.firstName)
    }
    return acc
},[])
console.log(ulist)

function a() {
  
  var b = 10;
  c();
  function c() {
  console.log(b); // 10
  }
 }

 a();

 function a() {
  console.log(b); // 10
 }
 var b = 101;
 a();

 //Search text from an arrray
const searchText = (e) => {
   let query = document.getElementById("search").value;
  const searchRes =  users.filter((item) => item.firstName.toLowerCase().includes(query.toLowerCase()))
  console.log(searchRes)

}
 
 