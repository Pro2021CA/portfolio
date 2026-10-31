async function getDownloads(){
    let json = await fetch("https://api.modrinth.com/v2/project/1hvFBTVN");
    let text = await json.json();

    document.getElementById("dupedownloads").textContent = text.downloads + " Downloads";


}

async function getMinehutGatewayDownloads(){
    let json = await fetch("https://api.modrinth.com/v2/project/8ckqGC3k");
    let text = await json.json();

    document.getElementById("minehutdownloads").textContent = text.downloads + " Downloads";


}

getMinehutGatewayDownloads()
getDownloads()