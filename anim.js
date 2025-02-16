// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Si hay algo que quieras saber de mi pasado", time: 9 },
  { text: "No tienes mas que preguntar", time: 13},
  { text: "Tambien yo eh sentido que el mundo es demasiado", time: 18 },
  { text: "Complicado para navegar", time: 22 },
  { text: "Si hay algo que te tenga triste y derrotada", time: 28 },
  { text: "No tienes que disimular", time: 33 },
  { text: "Mejor aceptarlo y pasar el trago amargo", time: 36 },
  { text: "Con paciencia y con honestidad", time: 42 },
  { text: "Lo mejor suele estar por llegar", time: 46 },
  { text: "Hay, hay, hay", time: 52 },
  { text: "Tiempos para llorar", time: 55 },
  { text: "Hay tambien", time: 61 },
  { text: "tiempos pa' renacer", time: 66 },
  { text: "Si hay algo que pueda yo hacer para que te mejores", time: 70 },
  { text: "Dimelo nomas", time: 76 },
  { text: "Si hay algo que pueda yo hacer para que TE ENAMORES", time: 79 },
  { text: "Dimelo nomas", time: 84 },
  { text: "Regalarte una flor", time: 88 },
  { text: "Cantarte una cancion al oido", time: 90 },
  { text: "Dibujarte un paisaje colorido", time: 94 },
  { text: "De la luna y el mar, bailen un chachacha", time: 98 },
  { text: "Y si bailamos tu y yo, veras lo bien que la pasamos", time: 103 },
  { text: "Si hay algo que quieras hablar conmigo a solas", time: 110 },
  { text: "Hablemos, no debes dudar", time: 115 },
  { text: "Tambien yo eh sentido el golpe de esas olas", time: 120 },
  { text: "De la vida que nos quieren ahogar", time: 125 },
  { text: "Pero respira, yo te quiero ayudar", time: 130 },
  { text: "Hay, hay, hay", time: 134 },
  { text: "Tiempos para llorar", time: 138 },
  { text: "Hay tambien", time: 144 },
  { text: "tiempos pa' renacer-e-e-e-e", time: 149 },
  { text: "Si hay algo que pueda yo hacer para que te mejores", time: 155 },
  { text: "Dimelo nomas", time: 159 },
  { text: "Si hay algo que pueda yo hacer para que TE ENAMORES", time: 163 },
  { text: "Dimelo nomas", time: 167 },
  { text: "Regalarte una flor", time: 170 },
  { text: "Cantarte una cancion al oido", time: 172 },
  { text: "Dibujarte un paisaje colorido", time: 176 },
  { text: "De la luna y el mar, bailen un chachacha", time: 180 },
  { text: "Y si bailamos tu y yo, veras lo bien que la pasamos", time: 185 },
  { text: "Uoh-oh-oh", time: 189 },
  { text: "Regalarte una flor", time: 209 },
  { text: "Cantarte una cancion al oido", time: 213 },
  { text: "Dibujarte un paisaje colorido", time: 214 },
  { text: "De la luna y el mar, bailen un chachacha", time: 218 },
  { text: "Y si bailamos tu y yo, veras lo bien que la pasamos", time: 223 },
  { text: "Uoh-oh-oh", time: 226 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.2; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);
