const express = require('express');
const fs = require('fs');
const path = require('path')
const app = express();
const port = 3000; //port

const filePath = path.join(__dirname, 'data', 'ogrenciler.json'); //öğrencilerin bilgileri olcak dosya
const sifrePath = path.join(__dirname, 'data', 'sifre.json'); //şifre (Öğrencileri sisteme kaydetmek için)

function readData(filePath) {
    if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, JSON.stringify([]));
    }
    const data = fs.readFileSync(filePath);
    return JSON.parse(data);
}

function writeData(filePath, data) {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

app.get('/api/ogrenci-ekle', (req, res) => {
    const { tc, adi, soy, tip, sifre } = req.query;

    if (!tc || !adi || !soy || !tip || !sifre) {
        return res.json({ message: 'Lütfen tüm bilgileri eksiksiz giriniz (tc, adi, soy, tip, sifre).' });
    }

    let sifreler = readData(sifrePath);
    if (!sifreler.includes(sifre)) {
        return res.json({ message: 'Geçersiz şifre!' });
    }

    let ogrenciler = readData(filePath);

    if (ogrenciler.some(ogrenci => ogrenci.tc === tc)) {
        return res.json({ message: 'Bu TC ile bir öğrenci zaten kayıtlı.' });
    }

    ogrenciler.push({ tc, adi, soy, tip });
    writeData(filePath, ogrenciler);

    res.json({ message: 'Öğrenci başarıyla eklendi.', ogrenci: { tc, adi, soy, tip } });
});

app.get('/api/ogrenci-teyit', (req, res) => {
    const { tc } = req.query;

    if (!tc) {
        return res.json({ message: 'Lütfen TC kimlik numarasını giriniz.' });
    }

    let ogrenciler = readData(filePath);
    const ogrenci = ogrenciler.find(ogrenci => ogrenci.tc === tc);

    if (ogrenci) {
        res.json({ message: 'Evet, bu öğrenci kayıtlı.', ogrenci });
    } else {
        res.json({ message: 'Bu öğrenci kayıtlı değil.' });
    }
});

app.get('/api/ogrenci-teyit/tasimali', (req, res) => {
    const { tc } = req.query;

    if (!tc) {
        return res.json({ message: 'Lütfen TC kimlik numarasını giriniz.' });
    }

    let ogrenciler = readData(filePath);
    const ogrenci = ogrenciler.find(ogrenci => ogrenci.tc === tc && ogrenci.tip === 'tasimali');

    if (ogrenci) {
        res.json({ message: 'Evet, bu öğrenci taşımalı!', ogrenci });
    } else {
        res.json({ message: 'Kayıt yok veya öğrenci taşımalı değil.' });
    }
});

app.get('/api/ogrenci-teyit/kapi-cikma-izinli', (req, res) => {
    const { tc } = req.query;

    if (!tc) {
        return res.json({ message: 'Lütfen TC kimlik numarasını giriniz.' });
    }

    let ogrenciler = readData(filePath);
    const ogrenci = ogrenciler.find(ogrenci => ogrenci.tc === tc && ogrenci.tip === 'kapi-cikma');

    if (ogrenci) {
        res.json({ message: 'Evet, bu öğrenci kapı çıkma iznine sahip.', ogrenci });
    } else {
        res.json({ message: 'Bu öğrenci kapı çıkma iznine sahip değil.' });
    }
});

app.listen(port, () => {
    console.log(`API ${port} portunda çalışıyor.`);
});
