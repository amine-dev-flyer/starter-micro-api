import http from "http";
import fs from "fs";

http
  .createServer(function (req, res) {
    var count = 0;

    count++;
    const date = new Date().toJSON().slice(0, 10);

    console.log("---------------------");
    console.log("Count :" + count);
    console.log("Date :" + date);

    res.write("!!" + date);
    res.end();

    fs.appendFile(
      `file-${date}--${count}.json`,
      JSON.stringify(""),
      "utf8",
      function (err) {
        if (err) throw err;
        console.log("!!! File saved.");
      }
    );
  })
  .listen(process.env.PORT || 3000);
