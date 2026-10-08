document.addEventListener("DOMContentLoaded", function () {

    const canvas = document.getElementById("graficoCanvas");

    const ctx = canvas.getContext("2d");


    // Dados

    const categorias = [
        "HTML",
        "CSS",
        "JavaScript",
        "SVG"
    ];

    const valores = [
        65,
        80,
        50,
        90
    ];


    // Configurações

    const base = 330;

    const larguraBarra = 70;

    const espacamento = 50;


    // EIXOS

    ctx.beginPath();

    ctx.moveTo(60, 30);

    ctx.lineTo(60, base);

    ctx.lineTo(570, base);

    ctx.strokeStyle = "#222";

    ctx.lineWidth = 2;

    ctx.stroke();


    // BARRAS

    for (let i = 0; i < valores.length; i++) {

        const valor = valores[i];


        // Altura da barra

        const altura = valor * 3;


        // Posição horizontal

        const x = 100 + i * (larguraBarra + espacamento);


        // Posição vertical

        const y = base - altura;


        // Desenha a barra

        ctx.fillStyle = "#3498db";

        ctx.fillRect(
            x,
            y,
            larguraBarra,
            altura
        );


        // Valor

        ctx.fillStyle = "#222";

        ctx.font = "bold 18px Arial";

        ctx.textAlign = "center";

        ctx.fillText(
            valor,
            x + larguraBarra / 2,
            y - 10
        );


        // Categoria

        ctx.font = "15px Arial";

        ctx.fillText(
            categorias[i],
            x + larguraBarra / 2,
            base + 30
        );

    }

});