async function emojiHub(){
    let data = await fetch('https://emojihub.yurace.pro/api/random')
    data = await data.json()
    console.log("response")
    console.log(data)
    mostrarEmoji(data)
}

function mostrarEmoji(data){
    var emojisContainer = document.getElementById("emojisContainer");
    emojisContainer.innerHTML = `
    <h1 class="emoji">    
    ${(data.htmlCode[0])}
    </h1>
    `;
    //o 'data.htmlCode[0], pega o objeto 'data' (JSON da API ultilizada), e pega apenas o atributo 'htmlCode' que em sí é uma array, portanto o '[0]' prioriza apenas o primeiro elemento do atributo.
}

