const embedRenk = '#010101';
const rol = '$findRole[$message]';
const ticketText = `### Ticket Sistemi
- Gereksiz sebepler ile ticket açmak yasaktır.
- Yetkililere etiket spamlamak yasaktır.
- Sabırla beklerseniz en kısa süre içinde yetkililerimiz dönüş yapacaktır \:D`;

module.exports = [{
    name: "setup",
    code: `
$author[$guildName;$guildIcon]
$description[
${ticketText}
]
$footer[Elixir Development Ticket]
$color[${embedRenk}]

$addButton[1;Ticket;secondary;ticketOluşturButon;false]

$onlyIf[$getGuildVar[ticketRol]!=;Lütgen Ticket Yetkili Rolünü ayarlayıp tekrar deneyiniz.]
$onlyIf[$getGuildVar[ticketKategori]!=;Lütfen Ticket Kategorisini ayarlayıp tekrar deneyiniz.]

$onlyPerms[administrator;Bu komutu kullanmak için \`YÖNETİCİ\` iznin olması gerekiyor.]
`
},{
    name: "kategori",
    code: `
$reply
$author[$guildName;$guildIcon]
$description[
### Ticket Kategori
- Ayarlanan kategori : $noMentionMessage
- Yetkili : <@$authorID>
]
$footer[Elixir Development]
$color[${embedRenk}]

$setGuildVar[ticketKategori;$noMentionMessage]

$onlyIf[$isNumber[$noMentionMessage]!=false;Hmm... Kanal ID'si sayılardan oluşur?]
$onlyIf[$noMentionMessage!=;Dostum bir kategori ID'si yazman gerekiyor.]

$onlyPerms[administrator;Bu komutu kullanmak için \`YÖNETİCİ\` iznin olması gerekiyor.]
`
},{
    name: "yetkili-rol",
    code: `
$reply
$author[$guildName;$guildIcon]
$description[
### Ticket Yetkili Rol
- Ayarlanan Rol : ${rol}
- Yetkili : <@$authorID>
]
$footer[Elixir Development]
$color[${embedRenk}]

$setGuildVar[ticketRol;${rol}]

$onlyIf[$roleExists[${rol};$guildID]]
$onlyIf[${rol}!=;Dostum bir rol belirtmen gerekiyor.]

$onlyPerms[administrator;Bu komutu kullanmak için \`YÖNETİCİ\` iznin olması gerekiyor.]
`
},{
    name: "ticket-sıfırla",
    code: `
$reply
$author[$guildName;$guildIcon]
$description[
### Ticket Sıfırla
- Ticket sistemi başarılı bir şekilde sıfırlandı.
- Yetkili : <@$authorID>
]
$footer[Elixir Development]
$color[${embedRenk}]

$setGuildVar[ticketKategori;]
$setGuildVar[ticketKanal;]
$setGuildVar[ticketRol;]

$onlyPerms[administrator;Bu komutu kullanmak için \`YÖNETİCİ\` iznin olması gerekiyor.]
`
}]