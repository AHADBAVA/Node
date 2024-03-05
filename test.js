const fs = require("fs");

fs.readdir("./myfiles", (_, files) => {
    import('dateformat').then(dateFormat => {
        files.forEach((file) => {
            if (/-4-/.test(file)) {
                const dateStr = file.substring(0, file.indexOf('.'));
                const date = new Date(dateStr);
                const formattedDate = dateFormat.default(date, 'ddd, mmm dS, yyyy');
                console.log(file, formattedDate);
            }
        });
    });
});



// const mode = require("./mod1.js");

// mode();