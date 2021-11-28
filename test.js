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