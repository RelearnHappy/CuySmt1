const http = require('http');
const rupiah = require('rupiah-format');
const fs = require('fs');
const host = '127.0.0.1'
const port = 3002

// request = data masuk dari luar
// respone = data keluar dari sistem

const server = http.createServer(function (request, respone) {
    const nama = "AZIDIN SURYADI";
    let uang = 500000;
    let jajan = 150000;
    let sisa = uang - jajan;

    uang = rupiah.convert(uang)
    jajan = rupiah.convert(jajan)
    sisa = rupiah.convert(sisa)

    fs.appendFile('sisauang.txt', sisa, () => {
        Console.log('data uang berhasil disimpan')
    });

    const hasil = `
    <head>
        <title>${nama}</title>
    </head>
    <body>
        <h1 style='background: black;color: white;padding: 20px; text-align: center'>CONTOH NODE JS</h1>
        <p>
        Halo nama saya ${nama}, Saya jajan sebanyak ${jajan}, Uang saya tadinya ${uang} Sekarang menjadi ${sisa}
        </p>
    </body>
    `

    respone.statusCode = 200;
    respone.end(hasil);
});

server.listen(port, host, '', function () {
    console.log(`server menyala di ${host}:${port}`);
});