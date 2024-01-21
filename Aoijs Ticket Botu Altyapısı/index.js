const { AoiClient } = require("aoi.js");
const { Loader } = require("aoi.loader");
const ayarlar = require('./ayarlar.json');

const client = new AoiClient({
  token: ayarlar.token,// Bot tokeni (ayarlar.json)
  prefix: ayarlar.prefix,// Bot prefixi
  intents: ["MessageContent", "Guilds", "GuildMessages", "GuildMembers", "GuildBans", "GuildEmojisAndStickers", "GuildIntegrations", "GuildWebhooks", "GuildInvites", "GuildVoiceStates", "GuildPresences", "GuildMessageReactions", "GuildMessageTyping", "DirectMessages", "DirectMessageReactions", "DirectMessageTyping"],
  events: ["onMessage", "onInteractionCreate", "onLeave", "onJoin"],
});

////////// KOMUT YÜKLEYİCİ //////////
new Loader(client).load("./Komutlar").then(() => console.log("https://discord.gg/elixirdev"));
////////// KOMUT YÜKLEYİCİ //////////

////////// DATA BASE //////////
const { KeyValue } = require("@akarui/aoi.db")
const db = new KeyValue({
  path: "./database",
  tables: ["main"],
});

db.on("ready", () => {
  console.log("Database okundu!!");
});

db.connect();
////////// DATA BASE //////////

//////////VARİABLE//////////
client.variables({
  otoTicket: "",
  ticketKategori: "",
  ticketKanal: "",
  ticketRol: ""
}, "main")

client.readyCommand({
  channel: "",
  code: `
$log[
$username[$clientID]
- Sunucu Sayısı : $guildCount
- Toplam Üye    : $allMembersCount

]
`
})
//////////OYNUYOR KISMI//////////
client.status({
  name: `$username[$clientID] Ticket`,
  type: `CUSTOM`,
  status: "dnd",
  time: 15
})

/* Elixir Development Ticket botu altyapısı (GELİŞMİŞ) */