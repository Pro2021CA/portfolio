function getCodingLanguages(){
    const languages = ["Python", "Skript", "C++", "Rust", "Luau", "Java", "Kotlin", "HTML", "CSS", "PHP", "JavaScript", "GLSL"]

    inner = "<ol>"
    for (let i = 0; i < languages.length; i++){
        inner = inner + "<li>" + languages[i] + "</li>"
    }
    inner = inner + "</ol>"

    document.getElementById("languages").innerHTML = inner;
}

getCodingLanguages()



async function getDiscord(invite){
    let id = invite.replace("https://discord.gg/", "");

    let result = await fetch("https://discord.com/api/v9/invites/"+ id + "?with_counts=true&with_expiration=true");

    return await result.json();
    

}

function getDiscordCount(text){
    return text.approximate_member_count
}


function getDiscordPicture(text){
    let icon = text.guild.icon;


    let guildid = text.guild_id;

    return "https://cdn.discordapp.com/icons/" + guildid + "/" + icon + ".png?size=1024"
}

function getDescription(text){

    return text.guild.description;
}

function getOnline(text){
    return text.approximate_presence_count
}

async function setServers() {
    const servers = new Map()

    servers.set("https://discord.gg/fmc-lifesteal-box-mc-fewer-live-927172634830045264", "FewerMC")
    servers.set("https://discord.gg/yU4vFQQwH7", "Quest Official")
    servers.set("https://discord.gg/89Bca8gpdH", "HuzDupe")
    servers.set("https://discord.gg/b8RrYrnHsx", "EmpireDupe")
    servers.set("https://discord.gg/2uPdasCqEb", "EffectDupe")
    


    inner = ""
    for(const [key, value] of servers){

        let discord = await getDiscord(key);

        let pfp = getDiscordPicture(discord);
        let members = getDiscordCount(discord);
        let description = getDescription(discord);
        let online = getOnline(discord)

        if (description == null){
            description = "No Description Found!"
        }

        inner = inner + "<li><div><img src=\"" + pfp + "width=\"250\" height=\"250\"><h2>" + value + "</h1><h5>" + members + " Members | " + online + " Online</h5><p>" + description + "<br><a href=\"" + key + "\">Join their discord</a></div></li>"
    };

    document.getElementById("servers").innerHTML = inner;
}

setServers()
