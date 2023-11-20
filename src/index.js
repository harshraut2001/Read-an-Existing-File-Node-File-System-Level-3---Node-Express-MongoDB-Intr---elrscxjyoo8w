const fs = require("fs/promises");
const fileName = "myfile.txt";
const reader = async (fileName) => {
  // write code here
	try{
	const content = await fs.readfile(file);
	console.log(content.toString())
		return content.toString()
	}catch(err){
		console.log(err);
	}
    };
	reader(fileName)
	.then({content} => {
		console.log("content",content)
	})


module.exports =  reader ;
