/* =========================================================
   anim.js — Sincronización de letras
   Canción: "Flores Amarillas" — Floricienta
   Duración: 3:40 (220 segundos)
   Modo: pareados (2 líneas por frase)
   ========================================================= */

(function () {
  'use strict';

  const audio  = document.querySelector('audio');
  const lyrics = document.querySelector('#lyrics');
  const titulo = document.querySelector('.titulo');

  if (!audio)  console.warn('[anim.js] No se encontró <audio>.');
  if (!lyrics) console.warn('[anim.js] No se encontró #lyrics.');

  /* ---------- CONFIGURACIÓN ---------- */
  // Ajuste global (por si algo queda desfasado)
  //  Positivo → letra aparece ANTES
  //  Negativo → letra aparece DESPUÉS
  const OFFSET = 0;

  const DEFAULT_DURATION = 6;
  const SONG_DURATION_MS = 220000;

  /* ---------- LETRAS + TIEMPOS ----------
     Los primeros 3 pareados ya están calibrados
     con los segundos exactos que me diste.
  ------------------------------------------- */
  const lyricsData = [
    { text: "Él la estaba esperando, con una flor amarilla",           time: 17,  duration: 5 },
    { text: "Ella lo estaba soñando, con la luz en su pupila",         time: 25,  duration: 6 },
    { text: "Y el amarillo del sol iluminaba la esquina",              time: 31,  duration: 7 },
    { text: "Lo sentía tan cercano, lo sentía desde niña",             time: 39,  duration: 7 },
    { text: "Ella sabía que él sabía, que algún día pasaría",          time: 46,  duration: 5 },
    { text: "Que vendría a buscarla, con sus flores amarillas",        time: 51,  duration: 7 },
    { text: "No te apures, no detengas el instante del encuentro",     time: 58,  duration: 6 },
    { text: "Está dicho que es un hecho, no la pierdas, no hay derecho", time: 64, duration: 4 },
    { text: "No te olvides que la vida casi nunca está dormida",       time: 68,  duration: 8 },

    { text: "En ese bar tan desierto, nos esperaba el encuentro",      time: 93,  duration: 7 },
    { text: "Ella llegó en limusina, amarilla por supuesto",           time: 100, duration: 8 },
    { text: "Él se acercó de repente, la miró tan de frente",          time: 108, duration: 8 },
    { text: "Toda una vida soñada, y no pudo decir nada",              time: 116, duration: 7 },

    { text: "Ella sabía que él sabía, que algún día pasaría",          time: 123, duration: 5 },
    { text: "Que vendría a buscarla, con sus flores amarillas",        time: 128, duration: 7 },
    { text: "No te apures, no detengas el instante del encuentro",     time: 135, duration: 5 },
    { text: "Está dicho que es un hecho, no la pierdas, no hay derecho", time: 140, duration: 5 },
    { text: "No te olvides que la vida casi nunca está dormida",       time: 145, duration: 7 },

    { text: "Flores amarillas...",                                     time: 160, duration: 5 },

    { text: "Ella sabía que él sabía, que algún día pasaría",          time: 168, duration: 6 },
    { text: "Que vendría a buscarla, con sus flores amarillas",        time: 174, duration: 6 },
    { text: "No te apures, no detengas el instante del encuentro",     time: 180, duration: 5 },
    { text: "Está dicho que es un hecho, no la pierdas, no hay derecho", time: 185, duration: 5 },
    { text: "No te olvides que la vida casi nunca está dormida",       time: 190, duration: 8 },

    { text: "Ella sabía que él sabía, él sabía, ella sabía...",        time: 198, duration: 6 },
    { text: "Y se olvidaron de sus flores amarillas 💛",                time: 204, duration: 8 }
  ];

  /* ---------- ACTUALIZAR LETRA ---------- */
  function updateLyrics() {
    if (!audio || !lyrics) return;

    const time = Math.floor(audio.currentTime);
    const adjusted = time + OFFSET;

    const currentLine = lyricsData.find((line) => {
      const dur = line.duration || DEFAULT_DURATION;
      return adjusted >= line.time && adjusted < line.time + dur;
    });

    if (currentLine) {
      lyrics.style.opacity = 1;
      if (lyrics.textContent !== currentLine.text) {
        lyrics.textContent = currentLine.text;
      }
    } else {
      lyrics.style.opacity = 0;
    }
  }

  setInterval(updateLyrics, 250);

  /* ---------- OCULTAR TÍTULO AL FINAL ---------- */
  function ocultarTitulo() {
    if (!titulo) return;
    titulo.style.animation = "fadeOut 3s ease-in-out forwards";
    setTimeout(() => { titulo.style.display = "none"; }, 3000);
  }

  setTimeout(ocultarTitulo, SONG_DURATION_MS);

})();