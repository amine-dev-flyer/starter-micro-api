import http from 'http';
import fs from "fs"

http.createServer(function (req, res) {

var count = 0;

    
    count++;
    const date = new Date().toJSON();

    console.log('---------------------');
    console.log('Count :'+count);
    console.log('Date :'+date);
    
    res.write('!!'+date);
    res.end(); 
    
    fs.appendFile(`file-${date}--${count}.json`, JSON.stringify(''), "utf8", function(err) {
        if (err) throw err;
        console.log("!!! File saved.");
      });  
    });
    
    }).listen(process.env.PORT || 3000);

    /*fs.appendFile(`file-${date}--${count}.json`, JSON.stringify(''), "utf8", function(err) {
        if (err) throw err;
        console.log("!!! File saved.");
      }); 
     
  });
 */
  //getQuotes();




/*import http from 'http';
http.createServer(function (req, res) {
    console.log(`Just got a request at ${req.url}!`)
    const date = new Date().toJSON();
    res.write('!!'+date);
    
    res.end();
}).listen(process.env.PORT || 3000);

console.log("test");*/
