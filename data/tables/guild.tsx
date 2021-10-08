

interface Table {
    tableName: string
    tableData: TableData[]
}

interface TableData {
    headers: any
    data: any
}

export const tables
    = [
        {
            tableName: "guild",
            tableCaption: "",
            tableData: {
                headers: ["Name", "Emblem", "Description", "Requirement", "Point of Contact", "Social Media", "Discord"],
                data: [
					[`cRekto Club`, `<img src="/guild/crekto-club.png" alt = "cRekto Club" />`, `Friends of cRekto`, `Members need to polite, constructive, and have a Wraangler set`, `<a href = "https://twitter.com/Mingkuan100" target = "_blank">cRekto</a>`, `<a href = "https://t.me/cRekto_club" target = "_blank">Telegram</a>`, `<a href = "https://discord.gg/KAbuvbSA" target = "_blank">Link</a>`],
					[`Ghost Squad`, `<img src="/guild/ghost-squad.png" alt = "Ghost Squad Guild" />`, `Active community of Gotchiverse addicts, game developers and content creators.`, `Miner Helmet`, `gotchinomics@gmail.com`, `<a href = "https://twitter.com/gotchighstsquad" target = "_blank">Twitter</a>`, `<a href = "https://discord.gg/JQHx9u8mcV" target = "_blank">Link</a>`],
					[`Gotchi Riders`, `<img src="/guild/gotchi-riders.png" alt = "Gotchi Riders Guild" />`, `Gotchis ride together! We are a Gotchi biker gang! We travel far and wide, and beat up Lickquidators!`, `Every Gotchi can become a prospect by wearing a 'Biker Jacket'. The insignia of the Gotchi Riders!`, `CryptoGotchi#9089`, ``, `<a href = "https://discord.gg/uxFxBYJjF6" target = "_blank">Link</a>`],
					[`Los Mustachos`, `<img src="/guild/mustachos.png" alt = "Los Mustachos Guild" />`, `First and only spanglish guild for Mustacho aficionados. Decentralized`, `None, but a moustache earns you voting power. <br> 1 mustache= 1 vote`, `Fantasma#1777`, ``, `<a href = "https://discord.gg/bnAKfeczhu" target = "_blank">Link</a>`],
					[`MSG`, `<img src="/guild/msg.jpg" alt = "MSG Guild" />`, `We are a Lickuidator and Aavegotchi coordination guild. Our focus is on mass coordination efforts amongst Gotchis and Lickuidators to maximize benefits for all. We also focus on expanding the overall Aavegotchi ecosystem by providing moar use case and rewards in GHST. We are here to work together as well as with other guidls to dominate the Reaalm. We are Legion. We are many. We do not forgive. We do not forget to pet. Expect us.`, `Dedication and Love`, `🐙Musashi13#5579`, `<a href = "https://twitter.com/msg13gaang" target = "_blank">Twitter</a><br><a href = "https://www.twitch.tv/msg13gaang" target = "_blank">Twitch</a>`, `<a href = "https://discord.gg/XUASaaxu2Q" target = "_blank">Link</a>`],
					[`The Order of Portal Mages`, `<img src="/guild/the-order-of-portal-mages.jpg" alt = "The Order of Portal Mages Guild" />`, `The Order of Portal Mages are the Mages Guild of Aavegotchi! Within our sacred Tavern you will find the finest assembly of Wizards, Witches and Portal Mages in all the Realm. If a Wizard or Witch ye be, then enroll in our Mages College to learn the arts of wizardry & witchcraft! If you are a holder of the legendary Portal Mage gear, you will be welcomed into the Lordship of Portal Mages and a title will be bestowed. All new members are asked to show their POM (Proof of Mage) upon entering the Tavern, if they seek to join the Order.`, `Proof of Mage (can be found in discord)`, `<a href = "https://twitter.com/hillzcrypto" target = "_blank">@hillzcrypto</a>`, `<a href = "https://twitter.com/PortalMages" target = "_blank">Twitter</a>`, `<a href = "https://discord.gg/yHr4H6uVFC" target = "_blank">Link</a>`],
					[`WAGMI Warriors`, `<img src="/guild/WAGMI-warriors.png" alt = "WAGMI Warriors Guild" />`, `We are a wearable based guild for the Gotchiverse`, `You must have an Aavegotchi equipped with any of the wagie wearables; a wagie cap, headphones, or WGMI shirt`, `jarrod | aavegotchistats.com#9686`, `<a href = "https://twitter.com/WagmiWarriors" target = "_blank">Twitter</a>`, `<a href = "https://discord.gg/TNneBnhrM2" target = "_blank">Link</a>`]
				]
            }
        }
    ]