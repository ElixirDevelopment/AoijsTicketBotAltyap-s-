const embedRenk = '#010101';
const ticketRol = '$getGuildVar[ticketRol]';
const ticketKategori = '$getGuildVar[ticketKategori]';
const ticketText = `### [$memberDisplayName](<https#COLON#//discord.com/users/$authorID>)
- Ticket oluşturduğunuz için teşekkürler.
- Lütfen sabırlı bir şekilde yetkililerimizi bekleyiniz.
- Sorununuz çözüldüğünde \`Ticket Kapat\` butonuna basabilirsiniz.`;

module.exports = [{
    type: "interaction",
    prototype: 'button',
    name: "ticketOluşturButon",
    code: `
$interactionReply[;{newEmbed:{author:$memberDisplayName:$userAvatar}{description:
### Ticket Oluşturuldu
- Kullanıcı #COLON# <@$authorID>,
- Kanal #COLON# <#$get[ticketKanal]>
}{footer:Elixir Development}{color:${embedRenk}}};{actionRow:{button:Kanala Git!:link:https#COLON#//discord.com/channels/$guildID/$get[ticketKanal]:false}};;everyone;true]

$let[ticketKanal;$newTicket[ticket-$memberDisplayName;<@&${ticketRol}>{newEmbed:{author:$memberDisplayName:$userAvatar}{description:
${ticketText}
}{footer:Elixir Development}{color:${embedRenk}}}{actionRow:{button:Ticket Kapat:danger:ticketKapatButon:false}};${ticketKategori};true;Bir hata oluştu!]]
`
},{
    type: "interaction",
    prototype: 'button',
    name: "ticketKapatButon",
    code: `
$closeTicket[Bir hata oluştu!]    
`
}]