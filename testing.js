async function hello(){
    console.log("hello")
}
// this function return always Promise compulsory because of async


//this function is created by the API we just resolve it
function getData(dataID){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data",dataID);
            resolve("success");
        },2000);
    });
}

//async-await
async function getAllData(){
    console.log("Getting data 1 ....");
    await getData(1);
    console.log("Getting data 2 .....");
    await getData(1);
    console.log("Getting data 3 ....");
    await getData(1);

}

//await keyword used just in the async function. not used namely.