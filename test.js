const fs = require('fs')
function readFile(){
    fs.readFile('file.txt', 'utf8', function (err, data) {
      if (err) throw err;
      console.log(data);
      }
  );
  }

  async function f() {
    const fsPromises = require('fs').promises;
    const data = await fsPromises.readFile('file.txt',"utf-8")
                       .catch((err) => console.error('Failed to read file', err));
            return data.toString();
  }

  const arr = async (x) =>{
      const p = await x();
      const vc = p.split('\n')
      console.log(vc)

 }
arr(f)

bot.on('message', msg => {
  //if the message is coming from the new user by importing data from txt file
if (msg.content.length <= 14) {
  //check for userid and verify if address is stored on txt file
  //if valid 
  var userID = msg.member.user.tag
  const arrFile = [arr(readFile)]
  for(i=0; i<arrFile.length; i++){
    const compare = arrFile[i].slice(1,5)
    if(compare===userID){
      signsig(userID);
     assignRole(msg);
    }
  }
  
}
});