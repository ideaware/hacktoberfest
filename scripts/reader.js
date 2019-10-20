// Dependencies
const fs = require("fs");
const dir = '../tips'
    // Explore directory files
fs.readdir(dir, (err, files) => {
    // Map each file in the directory
    files.map((file, index) => {
        if (file != 'readme.md') {
            let str = fs.readFileSync(`${dir}/${file}`, 'utf8')
            let tip = {
                "hastags": str.split('\n')[0],
                "tip": str.split('\n')[1]
            }
            console.log(tip);
        }
    })
})