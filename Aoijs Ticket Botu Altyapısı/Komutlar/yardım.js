const embedRenk = '#010101';

module.exports = [{
    name: "yardım",
    aliases: ['help', 'komutlar'],
    code: `
$author[$memberDisplayName;$userAvatar]
$description[
### Kodlayan: [Mert](<https://discord.gg/elixirdev>)
------------------
- ?setup
\`Ticket butonunun textini atar.\`
- ?kurulum
\`Otomatik olarak kurulum yapar siz uğraşmazsınız. (En Sağlıklısı!)\`
- ?kategori
\`Ticket kategorisini ayarlarsın.\`
- ?yetkili-rol
\`Ticket yetkili rolünü ayarlarsın.\`
- ?ticket-sıfırla
\`Ticket sistemini sıfırlarsın.\`
]
$footer[Elixr Development]
$color[${embedRenk}]
`
}]