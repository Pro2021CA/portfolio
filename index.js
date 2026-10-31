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
