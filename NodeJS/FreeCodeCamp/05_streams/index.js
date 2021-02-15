const FS = require('fs');
const ZLIB = require('zlib');

if(FS.existsSync('thick_boy.txt')){
    const readStream = FS.createReadStream('thick_boy.txt','UTF8');
    const gzip = ZLIB.createGzip();
    const gunzip = ZLIB.createUnzip();
    const writeStream = FS.createWriteStream('thick_boy2.txt');

    readStream.pipe(gzip).pipe(gunzip).pipe(writeStream);

    
}else{
    FS.writeFile('thick_boy.txt','', (err) => {
        if(err)
            console.log('Error creating the file');
        else{
            const writeStream = FS.createWriteStream('thick_boy.txt');
            //2 KB
            let size = 2 * (1024*1024);
            while(size--){
                writeStream.write('F');
            }
        }
    });
}
