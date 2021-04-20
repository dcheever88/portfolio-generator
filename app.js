const fs = require("fs");
const generatePage = require("./src/page-template.js");

const profileDataArgs = process.argv.slice(2);

const [namE, github] = profileDataArgs;

fs.writeFile("./index.html", generatePage(namE, github), err => {
    if (err) throw new Error(err);

    console.log("Portfolio complete! Check out index.html to see the output!");
});


// const printprofileData = profileDataArr => {
//     // this
//     for (let i = 0; i < profileDataArr.length; i++) {
//         console.log(profileDataArr[i]);
//     }

//     console.log("================");

//     // is the same as this...
//     profileDataArr.forEach((profileItem) => console.log(profileItem));
// };

// printprofileData(profileDataArgs);