var fs=require("fs");
console.log("deleteing an existing file")
fs.unlink("input.txt",function(err){
    if (err){
        return console.error(err)
    }
    console.log("File deleted sucessfully")
})