
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
    const comp = filearr[i].slice(1,14)
    if(userID===comp){
      address = filearr[i]
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
  fs.appendFile('file.txt', 'x'+'\n', function (err) {
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
    const channel = member.guild.channels.cache.get('913014138547105802');
    if (!channel) return;

    channel.send("Enter your ETH Address")

});

bot.on('message', msg => {
    if (msg.content === "datatype:number") {
      writeFile(msg.member.user.tag + msg.content)
        //write to external txt file
        //store userid/tag and address
        //use message.member.user.tag to capture userID
      msg.reply('Enter a random word to sign your Address');
      //msg.channel.send('pong');
    }
  });

  bot.on('message', msg => {
      //if the message is coming from the new user by importing data from txt file
    if (msg.content === "datatype:string") {
      //check for userid and verify if address is stored on txt file
      //if valid 
      var userID = msg.member.user.tag
      for(i=0; i<arr.length; i++){
        let arrSigma = arr(readFile)
        if(arrSigma[i]===userID){
          signsig(userID);
         assignRole(msg);
        }
      }
      
    }
  });