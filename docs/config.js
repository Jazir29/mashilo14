// ============================================
// CONFIGURACIÓN EDITABLE
// Edita este archivo para cambiar textos.
// No necesitas tocar HTML/CSS/JS.
// ============================================

const CONFIG = {
  // --- Datos básicos ---
  nombre: "Máximo",
  edad: 14,
  firma: "Jazir",

  // --- Portada ---
  portada: {
    titulo: "Feliz cumple, mi bro",
    subtitulo: "con mucho cariño, un pequeño detalle para ti — espero te guste",
    boton: "Abrir →"
  },

  // --- Intro (texto que aparece suave) ---
  intro: [
    "Hace 7 años que Josefita me trajo a casa",
    "para compartir con su familia.",
    "Y quién diría que estando en su casa",
    "compartiría más con su pequeño hermano",
    "que con ella misma.",
    "",
    "Aquí unos cuantos momentos juntos",
    "para conmemorar."
  ],

  // --- Historia (orden cronológico) ---
  historia: [
    {
      id: 1,
      type: "video",
      src: "assets/1.mp4",
      caption: "Aún tengo estos momentos frescos en memoria.\nCuando salíamos de la pandemia y venía a tu casa para compartir con Josefa, pero a todos nuestros momentos siempre se sumaba un pequeño y extrovertido niño — el rata 3 mil jajajaj."
    },
    {
      id: 2,
      type: "video",
      src: "assets/2.mp4",
      caption: "Solíamos hacer siempre algo —\nya sea jugar cualquier cosa que se nos ocurra, como los vasitos o con una simple pelotita, hasta cocinar postres juntos."
    },
    {
      id: 3,
      type: "video",
      src: "assets/3.mp4",
      caption: "Como esta vez que hicimos un keke de chocolate los 3 y se nos ocurrió la gran idea de grabar un comercial totalmente genérico del momento.\nY salió esta joya de video."
    },
    {
      id: 4,
      type: "foto",
      src: "assets/4.jpg",
      caption: "O como otras veces donde hacíamos galletas, e inclusive a veces salían mal y Josefa nos echaba la culpa.\n(Bueno, hay que admitir que sí era nuestra culpa, por andar tonteando y riéndonos mientras la ayudábamos.)"
    },
    {
      id: 5,
      type: "foto",
      src: "assets/5.jpg",
      caption: "Pero al final de todo, por más bueno o malo que fuera el resultado,\nigual iba a nuestras panzas.\nY éramos un equipo, siempre."
    },
    {
      id: 6,
      type: "video",
      src: "assets/6.mp4",
      caption: "Y bueno, aquí otros momentos jugando juntos.\nCreo que aquí estábamos jugando GTA, y como siempre yo piconeándome para hacerte renegar, riéndonos porque en vez de escapar de la poli siempre te tirabas del carro yendo a toda velocidad."
    },
    {
      id: 7,
      type: "foto",
      src: "assets/7.jpg",
      caption: "Como sea, siempre la pasábamos juntos,\ndivirtiéndonos, riéndonos.\nY como siempre, con caras y momentos random."
    },
    {
      id: 8,
      type: "foto",
      src: "assets/8.jpg",
      caption: "Aquí otro momento de cuando fuimos a Megaplaza con Randy.\nEstábamos en el patio de comidas y recuerdo que estabas fastidiando a Randy para hacerlo reír, y de la nada te pusiste a hacerle cosquillas."
    },
    {
      id: 9,
      type: "foto",
      src: "assets/9.jpg",
      caption: "Otro recuerdo de la etapa donde íbamos seguido a la playa.\nA todos nos gustaba ir, pero llegaba un punto donde queríamos irnos — y el Mashilo seguía ahí, revolcándose en el mar sin querer salir jajaja."
    },
    {
      id: 10,
      type: "foto",
      src: "assets/10.jpg",
      caption: "Esta es otra foto random de cuando te llevamos a tu ensayo del drill.\nLlegó un momento donde ya no estaban ensayando — Josefa estaba en su celular, seria, y nosotros como siempre haciendo cualquier tontera para reírnos."
    },
    {
      id: 11,
      type: "foto",
      src: "assets/11.jpg",
      caption: "Y es que siempre estuviste y estás con nosotros.\nEn cada fin de semana, cada día que pasamos — estás tú de por medio, y siempre hay momento para compartir.\nTanto así que a veces ni puedo tomarme una foto solo con Josefa, porque el 3er integrante de nuestro pequeño equipo se entromete jajajaj."
    },
    {
      id: 12,
      type: "foto",
      src: "assets/12.jpg",
      caption: "Y así como tenemos muchas fotos random,\ntambién tenemos fotos de momentos distintos — como cuando fuimos a ver la peli de Michael Jackson, que tú y Josefa tanto querían,\nque hasta caracterizados fueron."
    },
    {
      id: 13,
      type: "video",
      src: "assets/13.MOV",
      caption: "Gracias, Max, por ser ese niño que eres:\ntan talentoso, divertido, noble y de buen corazón.\nNunca dejes de ser ese niño — la vida te obligará a crecer y madurar, pero ese niño interior nunca hay que perderlo.\n\nPsdt. Por favor enséñale a Josefa a hacer bien el paso de Lamine, que da vergüenza 😅"
    }
  ],

  // --- Mensaje final ---
  final: {
    titulo: "Feliz cumpleaños, bro.",
    cuerpo: [
      "Espero te haya podido conmover un poco estos pequeños recuerdos.",
      "Te quiero mucho, mi bro,",
      "y siempre podrás contar conmigo para lo que necesites.",
      "Es un orgullo para mí verte cada año crecer",
      "y ver la persona en la cual te vas convirtiendo.",
      "",
      "Poco a poco ya vas siendo más grande —",
      "y no solo de estatura y de tamaño de patas,",
      "sino también como persona.",
      "Ya vas dejando de ser un niño y tendrás que ir madurando poco a poco,",
      "pero nunca dejes de ser tú.",
      "",
      "De ser ese niño que dibuja Gokus y personajes creados por ti mismo.",
      "Que juega un mismo nivel de Geometry Dash con 5000 intentos.",
      "Que colecciona sus juguetes como si fueran tesoros.",
      "",
      "Nunca dejes de ser tú, bro."
    ],
    cierre: "Diosito te bendiga mucho —",
    firma: "y que sean muchos años más compartiendo historias y momentos contigo. — Jazir"
  },

  // --- Epílogo (video 14, aparece DESPUÉS del mensaje final) ---
  epilogo: {
    intro: "Último psdt:",
    caption: "Para que te des cuenta que hasta en tus máximas locuras te apoyo,\nte dejo esta otra joyita por aquí 😏",
    type: "video",
    src: "assets/14.mp4"
  }
};
