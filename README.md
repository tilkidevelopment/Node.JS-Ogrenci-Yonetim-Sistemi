# Taşımalı ve Kapı Çıkma İzinlileri için Öğle Arası Yönetim Sistemi (NODE.JS)!

## Nasıl Kurulur??
1. Dosyaları bilgisayara aldıktan sonra data dosyasının içinde `sifre.json` var, Ordan şifreleri ayarlayın ve şifreler koyun.
2. Terminal'e gelip `npm i` yazmanız gerekmektedir.
3. Sonra Çalıştırın: `node index.js`

 ## Kullanım
 <b>Öğrenci Ekleme</b>
```
http://localhost:3000/api/ogrenci-ekle?tc=123&adi=Fatma&soy=Veli&tip=tasimali&sifre=tilkidev
http://localhost:3000/api/ogrenci-ekle?tc=321&adi=Emre&soy=Veli&tip=kapi-cikma&sifre=tilkidev
```
Verilen bilgi:
```json
{"message":"Öğrenci başarıyla eklendi.","ogrenci":{"tc":"123","adi":"Fatma","soy":"Veli","tip":"tasimali"}}
{"message":"Öğrenci başarıyla eklendi.","ogrenci":{"tc":"321","adi":"Emre","soy":"Veli","tip":"kapi-cikma"}}
```
<b>Öğrenci Sorgu (Taşımalı)</b>
```
http://localhost:3000/api/tasimali?tc=123
```
Verilen bilgi:
```json
{"message":"Evet, bu öğrenci taşımalı!","ogrenci":{"tc":"123","adi":"Fatma","soy":"Veli","tip":"tasimali"}}
```
<b>Öğrenci Sorgu (Öğle Arası Dışarı Çıkma)</b>
```
http://localhost:3000/api/kapi-cikma-izinli?tc=321
```
Verilen bilgi:
```json
{"message":"Evet, bu öğrenci kapı çıkma iznine sahip.","ogrenci":{"tc":"321","adi":"Ali","soy":"Veli","tip":"kapi-cikma"}}
```
<b>Öğrencinin Tüm Sistemde Kayıt Varmı Kontrol Sistemi</b>
```
http://localhost:3000/api/ogrenci-teyit?tc=123
```
Verilen bilgi:
```json
{"message":"Evet, bu öğrenci kayıtlı.","ogrenci":{"tc":"123","adi":"Fatma","soy":"Veli","tip":"tasimali"}}
```
## Proje'nin Amacı
<p>Bu projenin amacı, öğrencilerin öğle arası yemek düzenlemeleri ve dışarı çıkma izinlerini daha verimli bir şekilde yönetmektir. Taşımalı öğrencilerin yemekhaneye yönlendirilmesi ve kapı çıkma izinlilerinin dışarı çıkma süreçlerinin kolaylaştırılması, okul yönetiminin işleyişini hızlandırmayı hedeflemektedir.</p>

<p align="center">
  <a href="https://tilki.dev/discord">
    <img src="https://img.icons8.com/color/48/000000/discord-logo.png" alt="Discord" />
  </a>
  <a href="https://www.instagram.com/@tilki.dev">
    <img src="https://img.icons8.com/color/48/000000/instagram-new.png" alt="Instagram" />
  </a>
  <a href="https://telegram.org/tilki_dev">
    <img src="https://img.icons8.com/color/48/000000/telegram-app.png" alt="Telegram" />
  </a>
  <a href="https://www.linkedin.com/in/muzaffer-pak-943893317/">
    <img src="https://img.icons8.com/color/48/000000/linkedin.png" alt="LinkedIn" />
  </a>
</p>
