import http from "http";
import fs from "fs";

http
  .createServer(function (req, res) {
    var count = 0;

    count++;
    const date = new Date().toJSON().slice(0, 10);
    const datetime = new Date().toJSON();

    console.log("---------------------");
    console.log("Count :" + count);
    console.log("DateTime :" + datetime);

    res.write("!!" + datetime);
    res.end();

    fs.writeFile(
      `file-${date}--${count}.json`,
      "",
      "utf8",
      (err) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log("Successfully written data to file !!!");
      }
    );
  })
  .listen(process.env.PORT || 3000);
