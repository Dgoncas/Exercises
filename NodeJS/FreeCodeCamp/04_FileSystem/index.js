const fs = require('fs');

fs.writeFile('example.txt','Example \n',(err) => {
    if(err) 
        console.log(err);
    else
        console.log('File created');
});

fs.readFile('example.txt','UTF8', (err,file) =>{
    if(err)
        console.log(err);
    else
        console.log(file);
});

fs.rename('example.txt','example2.txt', (err) =>{
    if(err)
        console.log(err);
    else
        console.log('File renamed');
});

fs.appendFile('example2.txt','Appended Content',(err) => {
    if(err)
        console.log(err);
    else
        console.log('Appended content');
});


fs.unlink('example2.txt', (err) => {
     if(err)
         console.log(err);
     else
         console.log('Removed File');
});

fs.mkdir('test',(err) => console.log(err? err:'Dir created'));

for(let index = 0; index<20; index++){
    fs.writeFile('./test/'+index+'.txt','test',(err) => console.log(err? err:'created '+index+' file'))
}

fs.readdir('test',(err,files) => {
    if(err)
        console.log(err);
    else{
        files.forEach((file) => fs.unlink('./test/'+file,(err) => console.log(err? err:'deleted '+file+' file')));
        fs.rmdir('test',(err) => console.log(err? err:'Deleted directory'));
    }
});

