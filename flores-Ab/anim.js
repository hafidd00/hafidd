// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "No finjas, que ya lo sé todo, soy mayor que tú", time: 10},
  { text: "No pienses que con eso voy a atarme a tus sentimientos", time: 16 },
  { text: "No es tu primera vez, ya me di cuenta", time: 20},
  { text: "Ya no llores, ya no temas", time: 25 },
  { text: "Eso no es todo en el amor", time: 29},
  { text: "Tranquila, que aquí estoy yo", time: 31.4 },
  { text: "Tampoco pienses que soy", time: 34},
  { text: "Como aquel que burló tu inocencia", time: 36.5},
  { text: "Sé que sí te lastimó, no hablemos más del tema", time: 41.2 },
  { text: "Pero algo aquí falló y para eso estoy yo", time: 44.5},
  { text: "Para hablarte del amor", time: 50.4 },
  { text: "Ahora entrégate", time: 56.5 },
  { text: "Si lloro o tiemblo, es por ti, amor", time: 57.7 },
  { text: "Es que Dios me mandó para ti", time: 63 },
  { text: "A adorarte para toda la vida", time: 66.5 },
  { text: "Siénteme", time: 69 },
  { text: "Soy el hombre que muere contigo, amor", time: 74 },
  { text: "Te respeta y nació para ti", time: 77 },
  { text: "Niña de mi vida", time: 83 },
  { text: "TE QUIERO MUCHO BLANQUITA :3", time:85}, 
  { text: "TE QUIERO MUCHO BLANQUITA :3", time:86},
  { text: "TE QUIERO MUCHO BLANQUITA :3", time:87},
  { text: "TE QUIERO MUCHO BLANQUITA :3", time:88},
  { text: "TE QUIERO MUCHO BLANQUITA :3", time:89},
  { text: "TE QUIERO MUCHO BLANQUITA :3", time:90},
  { text: "TE QUIERO MUCHO BLANQUITA :3", time:91},
  { text: "TE QUIERO MUCHO BLANQUITA :3", time:92},
  { text: "TE QUIERO MUCHO BLANQUITA :3", time:93},
  { text: "TE QUIERO MUCHO BLANQUITA :3", time:94},
  { text: "TE QUIERO MUCHO BLANQUITA :3", time:95},
  { text: "TE QUIERO MUCHO BLANQUITA :3", time:96},
  { text: "TE QUIERO MUCHO BLANQUITA :3", time:97},
  { text: "TE QUIERO MUCHO BLANQUITA :3", time:98},
  { text: "TE QUIERO MUCHO BLANQUITA :3", time:99},
  { text: "TE QUIERO MUCHO BLANQUITA :3", time:100},
  { text: "TE QUIERO MUCHO BLANQUITA :3", time:101},
  { text: "TE QUIERO MUCHO BLANQUITA :3", time:102},
  { text: "TE QUIERO MUCHO BLANQUITA :3", time:103},
  { text: "TE QUIERO MUCHO BLANQUITA :3", time:104},
  { text: "TE QUIERO MUCHO BLANQUITA :3", time:105},
  { text: "TE QUIERO MUCHO BLANQUITA :3", time:106},
  { text: "TE QUIERO MUCHO BLANQUITA :3", time:107},
  { text: "TE QUIERO MUCHO BLANQUITA :3", time:108},
  { text: "TE QUIERO MUCHO BLANQUITA :3", time:109},
  { text: "TE QUIERO MUCHO BLANQUITA :3", time:110},
  { text: "TE QUIERO MUCHO BLANQUITA :3", time:111},
  { text: "TE QUIERO MUCHO BLANQUITA :3", time:112},
  { text: "TE QUIERO MUCHO BLANQUITA :3", time:113},
  { text: "TE QUIERO MUCHO BLANQUITA :3", time:114},
  { text: "TE QUIERO MUCHO BLANQUITA :3", time:115},
  { text: "TE QUIERO MUCHO BLANQUITA :3", time:116},
  { text: "TE QUIERO MUCHO BLANQUITA :3", time:117},
  { text: "TE QUIERO MUCHO BLANQUITA :3", time:118},
  { text: "TE QUIERO MUCHO BLANQUITA :3", time:119},
  { text: "TE QUIERO MUCHO BLANQUITA :3", time:120},
  { text: "TE QUIERO MUCHO BLANQUITA :3", time:121},
  { text: "TE QUIERO MUCHO BLANQUITA :3", time:122},
  { text: "TE QUIERO MUCHO BLANQUITA :3", time:123},
  { text: "TE QUIERO MUCHO BLANQUITA :3", time:124},
  { text: "TE QUIERO MUCHO BLANQUITA :3", time:125},
  { text: "TE QUIERO MUCHO BLANQUITA :3", time:126},
  { text: "TE QUIERO MUCHO BLANQUITA :3", time:127},
  { text: "TE QUIERO MUCHO BLANQUITA :3", time:128},
  { text: "TE QUIERO MUCHO BLANQUITA :3", time:129},
  { text: "TE QUIERO MUCHO BLANQUITA :3", time:130},
  { text: "TE QUIERO MUCHO BLANQUITA :3", time:131},
  { text: "TE QUIERO MUCHO BLANQUITA :3", time:132},
  { text: "TE QUIERO MUCHO BLANQUITA :3", time:133},
  { text: "TE QUIERO MUCHO BLANQUITA :3", time:134},
  { text: "TE QUIERO MUCHO BLANQUITA :3", time:135},
  { text: "TE QUIERO MUCHO BLANQUITA :3", time:136},
  { text: "TE QUIERO MUCHO BLANQUITA :3", time:137},
  { text: "TE QUIERO MUCHO BLANQUITA :3", time:138},
  { text: "TE QUIERO MUCHO BLANQUITA :3", time:139},
  { text: "TE QUIERO MUCHO BLANQUITA :3", time:140},
  { text: "TE QUIERO MUCHO BLANQUITA :3", time:141},
  { text: "TE QUIERO MUCHO BLANQUITA :3", time:142},
  { text: "TE QUIERO MUCHO BLANQUITA :3", time:143},
  { text: "TE QUIERO MUCHO BLANQUITA :3", time:144},
  { text: "TE QUIERO MUCHO BLANQUITA :3", time:145},
  { text: "TE QUIERO MUCHO BLANQUITA :3", time:146},
  { text: "TE QUIERO MUCHO BLANQUITA :3", time:147},
  { text: "TE QUIERO MUCHO BLANQUITA :3", time:148},
  { text: "TE QUIERO MUCHO BLANQUITA :3", time:149},
  { text: "TE QUIERO MUCHO BLANQUITA :3", time:150},
  { text: "TE QUIERO MUCHO BLANQUITA :3", time:151},
  { text: "TE QUIERO MUCHO BLANQUITA :3", time:152},
  { text: "TE QUIERO MUCHO BLANQUITA :3", time:153},
  { text: "TE QUIERO MUCHO BLANQUITA :3", time:154},
  { text: "TE QUIERO MUCHO BLANQUITA :3", time:155},
  { text: "TE QUIERO MUCHO BLANQUITA :3", time:156},
  { text: "TE QUIERO MUCHO BLANQUITA :3", time:157},
  { text: "TE QUIERO MUCHO BLANQUITA :3", time:158},
  { text: "TE QUIERO MUCHO BLANQUITA :3", time:159},
  { text: "TE QUIERO MUCHO BLANQUITA :3", time:160},
  { text: "TE QUIERO MUCHO BLANQUITA :3", time:161},
  { text: "TE QUIERO MUCHO BLANQUITA :3", time:162},
  { text: "TE QUIERO MUCHO BLANQUITA :3", time:163},
  { text: "TE QUIERO MUCHO BLANQUITA :3", time:164},
  { text: "TE QUIERO MUCHO BLANQUITA :3", time:165},
  { text: "TE QUIERO MUCHO BLANQUITA :3", time:166},
  { text: "TE QUIERO MUCHO BLANQUITA :3", time:167},
  { text: "TE QUIERO MUCHO BLANQUITA :3", time:168},
  { text: "TE QUIERO MUCHO BLANQUITA :3", time:169},
  { text: "TE QUIERO MUCHO BLANQUITA :3", time:170},
  { text: "TE QUIERO MUCHO BLANQUITA :3", time:171},
  { text: "TE QUIERO MUCHO BLANQUITA :3", time:172},
  { text: "TE QUIERO MUCHO BLANQUITA :3", time:173},
  { text: "TE QUIERO MUCHO BLANQUITA :3", time:174},
  { text: "TE QUIERO MUCHO BLANQUITA :3", time:175},
  { text: "TE QUIERO MUCHO BLANQUITA :3", time:176},
  { text: "TE QUIERO MUCHO BLANQUITA :3", time:177},
  { text: "TE QUIERO MUCHO BLANQUITA :3", time:178},
  { text: "TE QUIERO MUCHO BLANQUITA :3", time:179},
  { text: "TE QUIERO MUCHO BLANQUITA :3", time:180},
  { text: "TE QUIERO MUCHO BLANQUITA :3", time:181},
  { text: "TE QUIERO MUCHO BLANQUITA :3", time:182},
  { text: "TE QUIERO MUCHO BLANQUITA :3", time:183},
  { text: "TE QUIERO MUCHO BLANQUITA :3", time:184},
  { text: "TE QUIERO MUCHO BLANQUITA :3", time:185},
  { text: "TE QUIERO MUCHO BLANQUITA :3", time:186},
  { text: "TE QUIERO MUCHO BLANQUITA :3", time:187},
  { text: "TE QUIERO MUCHO BLANQUITA :3", time:188},
  { text: "TE QUIERO MUCHO BLANQUITA :3", time:189},
  { text: "TE QUIERO MUCHO BLANQUITA :3", time:190},
  { text: "TE QUIERO MUCHO BLANQUITA :3", time:191},
  { text: "TE QUIERO MUCHO BLANQUITA :3", time:192},
  { text: "TE QUIERO MUCHO BLANQUITA :3", time:193},
  { text: "TE QUIERO MUCHO BLANQUITA :3", time:194},
  { text: "TE QUIERO MUCHO BLANQUITA :3", time:195},
  { text: "TE QUIERO MUCHO BLANQUITA :3", time:196},
  { text: "TE QUIERO MUCHO BLANQUITA :3", time:197},
  { text: "TE QUIERO MUCHO BLANQUITA :3", time:198},
  { text: "TE QUIERO MUCHO BLANQUITA :3", time:199},
  { text: "TE QUIERO MUCHO BLANQUITA :3", time:200},
  { text: "TE QUIERO MUCHO BLANQUITA :3", time:201},
  { text: "TE QUIERO MUCHO BLANQUITA :3", time:202},
  { text: "TE QUIERO MUCHO BLANQUITA :3", time:203},
  { text: "TE QUIERO MUCHO BLANQUITA :3", time:204},
  { text: "TE QUIERO MUCHO BLANQUITA :3", time:205},
  { text: "TE QUIERO MUCHO BLANQUITA :3", time:206},
  { text: "TE QUIERO MUCHO BLANQUITA :3", time:207},
  { text: "TE QUIERO MUCHO BLANQUITA :3", time:208},
  { text: "TE QUIERO MUCHO BLANQUITA :3", time:209},
  { text: "TE QUIERO MUCHO BLANQUITA :3", time:210},
  { text: "TE QUIERO MUCHO BLANQUITA :3", time:211},
  { text: "TE QUIERO MUCHO BLANQUITA :3", time:212},
  { text: "TE QUIERO MUCHO BLANQUITA :3", time:213},
  { text: "TE QUIERO MUCHO BLANQUITA :3", time:214},
  { text: "TE QUIERO MUCHO BLANQUITA :3", time:215},
  { text: "TE QUIERO MUCHO BLANQUITA :3", time:216},
  { text: "TE QUIERO MUCHO BLANQUITA :3", time:217},
  { text: "TE QUIERO MUCHO BLANQUITA :3", time:218},
  { text: "TE QUIERO MUCHO BLANQUITA :3", time:219},
  { text: "TE QUIERO MUCHO BLANQUITA :3", time:220},
  { text: "TE QUIERO MUCHO BLANQUITA :3", time:221},
  { text: "TE QUIERO MUCHO BLANQUITA :3", time:222},
  { text: "TE QUIERO MUCHO BLANQUITA :3", time:223},
  { text: "TE QUIERO MUCHO BLANQUITA :3", time:224},
  { text: "TE QUIERO MUCHO BLANQUITA :3", time:225},
  { text: "TE QUIERO MUCHO BLANQUITA :3", time:226},
  { text: "TE QUIERO MUCHO BLANQUITA :3", time:227},
  { text: "TE QUIERO MUCHO BLANQUITA :3", time:228},
  { text: "TE QUIERO MUCHO BLANQUITA :3", time:229},
  { text: "TE QUIERO MUCHO BLANQUITA :3", time:230},
  { text: "TE QUIERO MUCHO BLANQUITA :3", time:231},
  { text: "TE QUIERO MUCHO BLANQUITA :3", time:232},
  { text: "TE QUIERO MUCHO BLANQUITA :3", time:233},
  { text: "TE QUIERO MUCHO BLANQUITA :3", time:234},
  { text: "TE QUIERO MUCHO BLANQUITA :3", time:235},
  { text: "TE QUIERO MUCHO BLANQUITA :3", time:236},
  { text: "TE QUIERO MUCHO BLANQUITA :3", time:237},
  { text: "TE QUIERO MUCHO BLANQUITA :3", time:238},
  { text: "TE QUIERO MUCHO BLANQUITA :3", time:239},
  { text: "TE QUIERO MUCHO BLANQUITA :3", time:240},
  { text: "TE QUIERO MUCHO BLANQUITA :3", time:241},
  { text: "TE QUIERO MUCHO BLANQUITA :3", time:242},
  { text: "TE QUIERO MUCHO BLANQUITA :3", time:243},
  { text: "TE QUIERO MUCHO BLANQUITA :3", time:244},
  { text: "TE QUIERO MUCHO BLANQUITA :3", time:245},
  { text: "TE QUIERO MUCHO BLANQUITA :3", time:246},
  { text: "TE QUIERO MUCHO BLANQUITA :3", time:247},
  { text: "TE QUIERO MUCHO BLANQUITA :3", time:248},
  { text: "TE QUIERO MUCHO BLANQUITA :3", time:249},
  { text: "TE QUIERO MUCHO BLANQUITA :3", time:250},



]

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 4.5
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
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