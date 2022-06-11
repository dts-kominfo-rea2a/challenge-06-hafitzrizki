// TODO: import module bila dibutuhkan di sini
const fs = require ('fs');

// ! JANGAN DIMODIFIKASI
let file1 = "./data1.json";
let file2 = "./data2.json";
let file3 = "./data3.json";

// ! JANGAN DIMODIFIKASI
let modifyFile1 = (val) => {
  file1 = val;
};
let modifyFile2 = (val) => {
  file2 = val;
};
let modifyFile3 = (val) => {
  file3 = val;
};

// TODO: Kerjakan bacaData
// gunakan variabel file1, file2, dan file3
// const bacaData = null;

const bacaData = (fnCallback) =>{
  let hasilAkhir = []

  fs.readFile(
    // nama file
    file1,
    // object encoding
    {encoding: 'utf-8'},
    // fungsi callback
    (err, data) => {
      if (err) {
        return console.log('terjadi kesalahan '+err);
      }
      const word = JSON.parse(data); 
      hasilAkhir.push(word.message.split(' ')[1]);

      //membaca file kedua
      fs.readFile(
        // nama file
        file2,
        // object encoding
        {encoding: 'utf-8'},
        // fungsi callback
        (err, data) => {
          if (err) {
            return console.log('terjadi kesalahan '+err);
          }
          const word = JSON.parse(data);
          hasilAkhir.push(word[0].message.split(' ')[1]);
          
          //membaca file ke tiga
          fs.readFile(
            // nama file
            file3,
            //object encoding
            {encoding: 'utf-8'},
            //fungsi callback
            (err, data) => {
              if (err) {
                return console.log('terjadi kesalahan '+err);
              }
              const word = JSON.parse(data);
              hasilAkhir.push(word[0].data.message.split(' ')[1]);
              fnCallback(null, hasilAkhir);
            }
          );
        }
      );
    }
  );
};

// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};
