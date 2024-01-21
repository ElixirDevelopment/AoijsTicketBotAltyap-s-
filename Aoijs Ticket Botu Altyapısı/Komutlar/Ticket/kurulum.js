const embedRenk = '#010101';
const ticketText = `### Ticket Sistemi
- Gereksiz sebepler ile ticket açmak yasaktır.
- Yetkililere etiket spamlamak yasaktır.
- Sabırla beklerseniz en kısa süre içinde yetkililerimiz dönüş yapacaktır \:D`;

module.exports = [{
    name: "kurulum",
    code: `
$reply
$author[$guildName;$guildIcon]
$description[
### Ticket kurulum
- Kategori : <#$get[ticketKategori]>,
- Ticket Kanal : <#$get[ticketKanal]>,
- Ticket Yetkili Rol : <@&$get[ticketRol]>
]
$footer[$memberDisplayName;$userAvatar]
$color[${embedRenk}]

$setGuildVar[ticketKategori;$get[ticketKategori]]
$setGuildVar[ticketKanal;$get[ticektKanal]]
$setGuildVar[ticketRol;$get[ticketRol]]

$channelSendMessage[$get[ticketKanal];{newEmbed:{author:$guildName:$guildIcon}{description:
${ticketText}
}{footer:Elixir Development Ticket}{color:${embedRenk}}}{actionRow:{button:Ticket:secondary:ticketOluşturButon:false}}]

$let[ticketRol;$createRole[$guildID;Ticket Sorumlusu;#010101;;;;;;true]]
$let[ticketKanal;$createChannel[$guildID;ticket;Text;true;$get[ticketKategori]]]
$let[ticketKategori;$createChannel[$guildID;TİCKET;Category;true]]

$onlyPerms[administrator;Bu komutu kullanmak için \`YÖNETİCİ\` iznin olması gerekiyor.]
`
}]

/* Elixir Development Ticket botu altyapısı (GELİŞMİŞ) */