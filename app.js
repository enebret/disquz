//token key = "OTEzMDEyNTI1NjMxNjg4NzI0.YZ4TLQ.vtfSdiEBCGGzMqKj8qy5J6OanxU"
//url = https://discord.com/api/oauth2/authorize?client_id=913012525631688724&permissions=0&scope=bot
require("dotenv").config();
const fs = require('fs')
const key = process.env.TOKEN;
const Discord = require('discord.js');
const web3 = require('web3');
const bot = new Discord.Client();
bot.login(key);

async function signsig(userID){
  //use userid to find address
  const file = await readFile()
  const filearr = [file]
  var address;
  for(i=0; i<filearr.length; i++){
    const comp = filearr[i].slice(1,5)
    const addr = arrFile[i].replace(/[compare]/g, '')
    if(userID===comp){
      address = addr
    }
  }
  const signature = web3.eth.sign("Hello world", address)
  return signature
}



function assignRole(msg){
  var role = msg.guild.roles.find(role => role.name === "MyRole");
  msg.member.addRole(role);
}

const arr = async (x) =>{
  const p = await x();
  const vc = p.split('\n')
  return vc

}

function writeFile(x){
  fs.appendFile('file.txt', x +'\n', function (err) {
    if (err) throw err;
    console.log('Saved!');
  });
}

function readFile(){
  fs.readFile('file.txt', 'utf8', function (err, data) {
    if (err) throw err;
    return data;
    }
);
}

bot.on('guildMemberAdd', member => {
    const channel = member.guild.channels.cache.find(ch => ch.name==="general");
    if (!channel) return;

    channel.send("Enter your ETH Address")

});

bot.on('message', msg => {
  if (msg.author.bot){
    return;
  } else     
    if (msg.content.indexOf("0") === 0) {
      writeFile(msg.member.user.tag + msg.content)
        //write to external txt file
        //store userid/tag and address
        //use message.member.user.tag to capture userID
      msg.reply('Kindly verify that this account belongs to you by signing the address with a random string not greater than 14 characters.');
      return
      //msg.channel.send('pong');
    }else if (msg.content.length <= 14) {
      msg.reply("\n" + 'Address signed!' + "\n" + "ETH address");
      //msg.reply('ETH Address');
     /** var userID = msg.member.user.tag
      const arrFile = [arr(readFile)]
      for(i=0; i<arrFile.length; i++){
        const compare = arrFile[i].slice(1,5)
        //const addr = arrFile[i].replace(/[compare]/g, '')
        if(compare===userID){
          signsig(userID);
         assignRole(msg);
        }
      } */
      return
    }
  });

 