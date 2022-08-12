var {readFile,writeFile} = require('fs');

readFile('./first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err);
        return;
    }
    const first = result;
    readFile('./second.txt','utf-8',(err,result)=>{
        if(err){
            console.log(err);
            return;
        }
        const second = result;
        writeFile('./final-result.txt',`this is the super final result ${first} \n ${second}`,(err,result)=>{
            if(err){
                console.log(err);
                return;
            }
            console.log(result);
        })
    })
});



 