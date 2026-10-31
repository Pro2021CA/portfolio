async function copyDiscord(){
    navigator.clipboard.writeText("pro2021ca");

    document.getElementById("copy").innerText = "Copied!"
    await new Promise(r => setTimeout(r, 2000));
    document.getElementById("copy").innerText = "Click to copy my discord"
}