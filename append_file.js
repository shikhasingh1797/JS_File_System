var fs=require("fs")
fs.appendFile("write.txt","I am doing Hackathon.",(err)=>{
    console.log("File is created");
})