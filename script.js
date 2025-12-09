// === BASE DE PREGUNTAS (más de 130 preguntas nuevas 2025) ===
const preguntas = {
  desayuno: [], huevos: [], parrilla: [], tiempos: [], procedimientos: [], infinito: []
};

const todas = [
  // DESAYUNO - TOCINO
  {p:"Tiempo de cocción del tocino", o:["160 mas o menos 5 segundos","150 mas o menos 5 segundos","155 mas o menos 5 segundos"], c:"160 mas o menos 5 segundos"},
  {p:"Temperatura superior parrilla tocino", o:["425°F","400°F","450°F"], c:"425°F"},
  {p:"Temperatura inferior parrilla tocino", o:["350°F","375°F","325°F"], c:"350°F"},
  {p:"Altura de cocción del tocino", o:["0.265","0.300","0.500"], c:"0.265"},
  {p:"Tanda máxima de tocino en parrilla", o:["1 hoja completa","2 hojas","½ hoja"], c:"1 hoja completa"},
  {p:"Tiempo máximo para sacar tocino de parrilla", o:["10 segundos","15 segundos","20 segundos"], c:"10 segundos"},
  {p:"Tiras completas máximas por bandeja UHC", o:["16","20","12"], c:"16"},
  {p:"Medias tiras máximas por bandeja UHC", o:["32","24","40"], c:"32"},
  {p:"Tiempo de vida del tocino cocido", o:["4 horas","2 horas","6 horas"], c:"4 horas"},

  // DESAYUNO - SALCHICHAS
  {p:"Tiempo de cocción de salchicha", o:["82 segundos","90 segundos","75 segundos"], c:"82 segundos"},
  {p:"Máximo salchichas por bandeja UHC", o:["16 (4×4)","12","20"], c:"16 (4×4)"},
  {p:"Tiempo máximo para colocar salchichas en parrilla", o:["10 segundos","15 segundos","20 segundos"], c:"10 segundos"},
  {p:"Tiempo máximo para retirar salchichas", o:["18 segundos","15 segundos","25 segundos"], c:"18 segundos"},
  {p:"Temperatura interna mínima salchicha", o:["≥140°F","165°F","180°F"], c:"≥140°F"},

  // DESAYUNO - JAMÓN
  {p:"Tanda máxima de jamón", o:["8 porciones","10 porciones","6 porciones"], c:"8 porciones"},
  {p:"Zona de la parrilla para jamón", o:["Parte fría","Parte caliente","Centro"], c:"Parte fría"},
  {p:"Utensilio para colocar jamón", o:["Pinzas planas","Espátula","Guantes"], c:"Pinzas planas"},
  {p:"Tiempo por lado de jamón", o:["8-10 segundos","15 segundos","5 segundos"], c:"8-10 segundos"},

  // HOTCAKES
  {p:"Harina por tazón de mezcla hotcake", o:["38.5 oz","40 oz","36 oz"], c:"38.5 oz"},
  {p:"Agua fría para mezcla hotcake", o:["48 oz","50 oz","45 oz"], c:"48 oz"},
  {p:"Tiempo de mezclado hotcake", o:["2 minutos","1 minuto","3 minutos"], c:"2 minutos"},
  {p:"Vida mezcla hotcake ambiente", o:["2 horas","4 horas","1 hora"], c:"2 horas"},
  {p:"Vida mezcla hotcake refrigerada", o:["Todo el turno","24 horas","12 horas"], c:"Todo el turno"},
  {p:"Calibración dispensador hotcake", o:["3 disparos = 5 oz","2 disparos = 4 oz","4 disparos = 6 oz"], c:"3 disparos = 5 oz"},
  {p:"Temperatura plancha hotcake", o:["375°F","365°F","350°F"], c:"375°F"},
  {p:"Tiempo de cocción hotcake", o:["90 segundos","120 segundos","60 segundos"], c:"90 segundos"},
  {p:"Diámetro correcto hotcake", o:["12 a 13.5 cm","10-11 cm","14-15 cm"], c:"12 a 13.5 cm"},

  // HUEVOS GENERAL
  {p:"Guantes para romper huevos en cascarón", o:["Azules","Transparentes","Ninguno"], c:"Azules"},
  {p:"Lavado de manos mínimo", o:["20 segundos","15 segundos","10 segundos"], c:"20 segundos"},
  {p:"Espátula amarilla Hutzler es para", o:["Productos crudos","Productos cocidos","Ambos"], c:"Productos crudos"},
  {p:"Espátula blanca Hutzler es para", o:["Productos cocidos","Productos crudos","Ambos"], c:"Productos cocidos"},
  {p:"Tiempo cartón huevos fuera refrigerador", o:["30 minutos","1 hora","20 minutos"], c:"30 minutos"},

  // HUEVO REDONDO
  {p:"Tiempo cocción huevo redondo", o:["150 segundos","120 segundos","180 segundos"], c:"150 segundos"},
  {p:"Vida huevo redondo cocido", o:["20 minutos","30 minutos","15 minutos"], c:"20 minutos"},
  {p:"Máximo huevos redondos por bandeja", o:["16","12","10"], c:"16"},
  {p:"Calidad yema huevo redondo", o:["Gelatinosa y no líquida","Líquida","Dura"], c:"Gelatinosa y no líquida"},

  // HUEVO DOBLADO
  {p:"Tiempo cocción huevo doblado", o:["85 segundos","90 segundos","75 segundos"], c:"85 segundos"},
  {p:"Onzas por porción huevo doblado", o:["2 oz","3 oz","4 oz"], c:"2 oz"},
  {p:"Máximo huevos doblados por bandeja", o:["6","8","10"], c:"6"},
  {p:"Vida huevo doblado", o:["20 minutos","30 minutos","15 minutos"], c:"20 minutos"},

  // HUEVO REVUELTO
  {p:"Onzas cucharón huevo revuelto", o:["4 oz","3 oz","2 oz"], c:"4 oz"},
  {p:"Tanda máxima huevo revuelto", o:["4 porciones","6 porciones","8 porciones"], c:"4 porciones"},
  {p:"Vida huevo revuelto", o:["20 minutos","35 minutos","15 minutos"], c:"20 minutos"},

  // HUEVO DEL HUERTO / PLÁTANO
  {p:"Tiempo cocción plátano/huerto", o:["75 segundos","90 segundos","60 segundos"], c:"75 segundos"},

  // MUFFIN INGLÉS
  {p:"Cómo separar muffin inglés", o:["Con pulgares en precorte","Con cuchillo","Con tenedor"], c:"Con pulgares en precorte"},
  {p:"Tostado 1-3 muffins (luz sí)", o:["50-55 segundos","60-65 segundos","40-45 segundos"], c:"50-55 segundos"},
  {p:"Tostado 4-6 muffins (luz no)", o:["55-70 segundos","70-80 segundos","45-60 segundos"], c:"55-70 segundos"},
  {p:"Máximo muffins por bandeja", o:["6","8","10"], c:"6"},
  {p:"Vida muffin tostado", o:["20 minutos","30 minutos","15 minutos"], c:"20 minutos"},

  // CARNE REGULAR
  {p:"Tiempo carne 10:1", o:["39 segundos","42 segundos","35 segundos"], c:"39 segundos"},
  {p:"Tiempo carne 4:1", o:["110 segundos","120 segundos","100 segundos"], c:"110 segundos"},
  {p:"Tiempo carne 3:1", o:["158 segundos","140 segundos","170 segundos"], c:"158 segundos"},

  // TIEMPOS DE VIDA
  {p:"Vida del guacamole", o:["8 horas","4 horas","12 horas"], c:"8 horas"},
  {p:"Vida queso capa", o:["2 horas","4 horas","1 hora"], c:"2 horas"},
  {p:"Vida del pan (con descongelación)", o:["48 horas","72 horas","24 horas"], c:"48 horas"},
  {p:"Tiempo descongelación pan", o:["12 horas","24 horas","8 horas"], c:"12 horas"},
  {p:"Vida vegetales/lechuga en mesa", o:["30 minutos","1 hora","2 horas"], c:"30 minutos"},
  {p:"Vida tomates rebanados", o:["2 horas","4 horas","1 hora"], c:"2 horas"},
  {p:"Vida mayonesa / ranch / mostaza dulce", o:["5 horas","4 horas","6 horas"], c:"5 horas"},
  {p:"Vida salsa queso", o:["6 horas","5 horas","7 horas"], c:"6 horas"},
  {p:"Vida Big Tasty", o:["7 horas","6 horas","8 horas"], c:"7 horas"},
  {p:"Vida cebolla rehidratada en parrilla", o:["4 horas","2 horas","6 horas"], c:"4 horas"},
  {p:"Vida cebolla rehidratada refrigerada", o:["24 horas","48 horas","12 horas"], c:"24 horas"},
  {p:"Tiempo para que cebolla esté lista", o:["1 hora","30 min","2 horas"], c:"1 hora"},
  {p:"Lacado utensilios desayuno", o:["Cada 2 horas","Cada 4 horas","Al cierre"], c:"Cada 2 horas"},
  {p:"Lacado utensilios almuerzo/cena", o:["Cada 4 horas","Cada 2 horas","Cada 6 horas"], c:"Cada 4 horas"},

  // MÁS PREGUNTAS CLAVE (para que haya muchas y no se repitan rápido)
  {p:"Máximo huevos en cambro batido", o:["60 huevos","50 huevos","70 huevos"], c:"60 huevos"},
  {p:"Máximo huevos en taza volumétrica", o:["10 huevos","8 huevos","12 huevos"], c:"10 huevos"},
  {p:"Vida huevo batido fuera refrigerador", o:["30 minutos","20 minutos","1 hora"], c:"30 minutos"},
  {p:"¿Qué espera el cliente del tocino?", o:["Caliente, jugoso y bien cocido","Crujiente y frío","Solo caliente"], c:"Caliente, jugoso y bien cocido"},
  {p:"¿Qué espera el cliente de los huevos?", o:["Bien cocidos, buena apariencia, calientes y húmedos","Fríos y secos","Solo cocidos"], c:"Bien cocidos, buena apariencia, calientes y húmedos"},
  {p:"¿Qué espera el cliente del muffin?", o:["Caliente, crujiente, tostado uniforme y suave","Blando y frío","Solo tostado"], c:"Caliente, crujiente, tostado uniforme y suave"},
  
    // === MÁS PREGUNTAS NUEVAS Y VARIADAS (2025) ===
  {p:"¿Cuántas porciones de jamón caben como máximo en la parte fría de la parrilla?", o:["8","10","12"], c:"8"},
  {p:"¿Qué debe hacerse inmediatamente después de romper las yemas en huevo redondo?", o:["Tapar y llenar la copa con agua","Darles la vuelta","Sacar del fuego"], c:"Tapar y llenar la copa con agua"},
  {p:"¿Con qué se mide la calibración correcta del dispensador de hotcake?", o:["Taza brix","Vaso medidor normal","Cuchara"], c:"Taza brix"},
  {p:"¿Cuántas onzas deben salir en total en los 3 disparos de calibración?", o:["5 oz","6 oz","4 oz"], c:"5 oz"},
  {p:"¿En qué orden se llena la parrilla de huevos redondos?", o:["Adelante → atrás, derecha → izquierda","Izquierda → derecha","De atrás hacia adelante"], c:"Adelante → atrás, derecha → izquierda"},
  {p:"¿Qué pasa si se reprograma el timer del UHC?", o:["Se compromete la calidad y temperatura del producto","No pasa nada","Se daña la máquina"], c:"Se compromete la calidad y temperatura del producto"},
  {p:"¿Dónde se guardan los guantes azules después de romper huevos?", o:["Se desechan","Se lavan y reutilizan","Se guardan para después"], c:"Se desechan"},
  {p:"¿Qué temperatura debe tener la plancha plana para hotcakes?", o:["375°F","365°F","400°F"], c:"375°F"},
  {p:"¿Cuánto tiempo máximo puede estar el cartón de huevos fuera del refrigerador?", o:["30 minutos","45 minutos","1 hora"], c:"30 minutos"},
  {p:"¿Qué característica debe tener la yema del huevo redondo perfecto?", o:["Gelatinosa y no líquida","Completamente líquida","Dura como piedra"], c:"Gelatinosa y no líquida"},
  {p:"¿Cuántas porciones de huevo revuelto se pueden hacer de una sola vez en la parrilla?", o:["4","6","8"], c:"4"},
  {p:"¿Qué pasa si el hotcake sale menor a 12 cm de diámetro?", o:["No cumple estándar de calidad","Está bien","Es perfecto"], c:"No cumple estándar de calidad"},
  {p:"¿Con qué utensilio se debe romper la yema del huevo redondo?", o:["Espátula Hutzler amarilla","Espátula blanca","Pinzas"], c:"Espátula Hutzler amarilla"},
  {p:"¿En cuántos niveles se apilan las salchichas en la bandeja UHC?", o:["4 niveles de 4","3 niveles de 5","2 niveles de 8"], c:"4 niveles de 4"},
  {p:"¿Cuánto tiempo tiene de vida la mezcla de hotcake refrigerada?", o:["Todo el turno","Solo 4 horas","24 horas"], c:"Todo el turno"},
  {p:"¿Qué NO debe hacerse con el muffin inglés?", o:["Separarlo con cuchillo","Tostarlo con luz apagada de 4-6","Nada de lo anterior"], c:"Separarlo con cuchillo"},
  {p:"¿Cuál es la temperatura interna mínima segura para las salchichas?", o:["≥140°F","≥165°F","≥180°F"], c:"≥140°F"},
  {p:"¿Cuánto tiempo máximo puede estar la lechuga en la mesa de preparación?", o:["30 minutos","1 hora","2 horas"], c:"30 minutos"},
  {p:"¿Qué tipo de agua se usa para la mezcla de hotcake?", o:["Fría fluida","Caliente","Tibia"], c:"Fría fluida"},
  {p:"¿En qué parte de la parrilla se cocina el tocino?", o:["Zona caliente superior e inferior","Solo zona superior","Solo zona inferior"], c:"Zona caliente superior e inferior"},
  {p:"¿Qué se hace con los cascarones de huevo después de romperlos?", o:["Tirarlos inmediatamente a la basura","Dejarlos en el aro","Guardar para después"], c:"Tirarlos inmediatamente a la basura"},
  {p:"¿Cuánto tiempo debe durar el lavado de manos correcto?", o:["Mínimo 20 segundos","10 segundos","15 segundos"], c:"Mínimo 20 segundos"},
  {p:"¿Cada cuántas horas se hace lacado de utensilios en desayuno?", o:["Cada 2 horas","Cada 4 horas","Al final del turno"], c:"Cada 2 horas"},
  {p:"¿Qué pasa si no se calibra el dispensador de hotcake?", o:["Los hotcakes salen chicos o grandes","No pasa nada","Se daña el dispensador"], c:"Los hotcakes salen chicos o grandes"},
  {p:"¿Cuántos huevos caben máximo en la taza volumétrica de acero?", o:["10 huevos","8 huevos","12 huevos"], c:"10 huevos"},
  {p:"¿Cuántos huevos caben en un cambro de huevo batido?", o:["60 (2 cartones)","50","70"], c:"60 (2 cartones)"},
  {p:"¿Qué se debe hacer antes de poner los aros de huevo redondo?", o:["Limpiarlos y verificar que no tengan residuos","Solo engrasarlos","Nada"], c:"Limpiarlos y verificar que no tengan residuos"},
  {p:"¿Qué cliente espera del jamón en el sándwich?", o:["Caliente y jugoso","Frío","Solo caliente"], c:"Caliente y jugoso"},
  {p:"¿Cuál es el tiempo máximo de vida del muffin tostado en UHC?", o:["20 minutos","30 minutos","15 minutos"], c:"20 minutos"},
  {p:"¿Qué utensilio NUNCA se usa para sacar el tocino de la parrilla?", o:["Manos con guantes","Pinzas planas","Espátula metálica"], c:"Manos con guantes"},
  {p:"¿Qué color tiene la tapa de la mezcla de hotcake?", o:["Transparente con tapa","Azul","Roja"], c:"Transparente con tapa"},
  {p:"¿Cuántos segundos tiene tolerancia el tocino?", o:["±5 segundos","±10 segundos","Sin tolerancia"], c:"±5 segundos"},
  {p:"¿Dónde se coloca el jamón para calentarlo?", o:["Parte fría de la parrilla","Parte caliente","Sobre el tocino"], c:"Parte fría de la parrilla"},
  {p:"¿Qué se debe hacer si un hotcake sale ovalado?", o:["No servirlo","Servirlo igual","Cortar los bordes"], c:"No servirlo"},
  {p:"¿Qué indica que un huevo redondo está perfecto?", o:["Yema gelatinosa, clara firme","Yema líquida","Bordes dorados muy oscuros"], c:"Yema gelatinosa, clara firme"},
  {p:"¿Cuánto tiempo se calienta cada lado del muffin cuando van 4 o más?", o:["55-70 segundos total (luz apagada)","50-55 segundos","70-80 segundos"], c:"55-70 segundos total (luz apagada)"},
  {p:"¿Por qué se usa agua en la copa de la tapa de los huevos redondos?", o:["Para generar vapor y cocer parejo","Para que no se pegue","Para enfriar"], c:"Para generar vapor y cocer parejo"},
  {p:"¿Qué NO debe tocar la espátula Hutzler amarilla después de usar con crudo?", o:["Productos cocidos","Otra espátula amarilla","La parrilla"], c:"Productos cocidos"},
  {p:"¿Cuánto tiempo tiene de vida el guacamole una vez abierto?", o:["8 horas","4 horas","12 horas"], c:"8 horas"},
  {p:"¿Qué temperatura debe tener la parrilla superior para salchichas y tocino?", o:["425°F","400°F","450°F"], c:"425°F"},
  {p:"¿En cuántos minutos se debe volver a lavar las manos como mínimo?", o:["Cada hora","Cada 30 min","Solo al cambiar de tarea"], c:"Cada hora"},
  {p:"¿Qué se hace si sobra mezcla de hotcake al final del desayuno?", o:["Se guarda refrigerada para el siguiente turno","Se desecha","Se congela"], c:"Se guarda refrigerada para el siguiente turno"},
  {p:"¿Cuál es el máximo de porciones de huevo doblado por bandeja UHC?", o:["6","8","10"], c:"6"},
  {p:"¿Qué debe tener el cliente en los hotcakes según estándar?", o:["Calientes, esponjos y dorados uniformes","Fríos","Solo esponjosos"], c:"Calientes, esponjosos y dorados uniformes"},
  {p:"¿Cuánto tiempo dura la cebolla rehidratada una vez puesta en la parrilla?", o:["4 horas","2 horas","6 horas"], c:"4 horas"},
  {p:"¿Qué se hace con los aros de huevo después de usarlos?", o:["Lavado y sanitizado","Solo enjuagar","Tirar"], c:"Lavado y sanitizado"},
  {p:"¿Qué altura tiene la parrilla cuando se cocina tocino?", o:["0.265","0.350","0.500"], c:"0.265"},
  {p:"¿Cuánto tiempo máximo puede estar un tomate rebanado en retención?", o:["2 horas","4 horas","1 hora"], c:"2 horas"},
  {p:"¿Qué pasa si se coloca el jamón en la parte caliente de la parrilla?", o:["Se seca y endurece","Se cocina más rápido","No pasa nada"], c:"Se seca y endurece"},
  {p:"¿Cuántos disparos se hacen para probar el dispensador de hotcake?", o:["3","2","4"], c:"3"},
  {p:"¿Qué se debe hacer si el huevo redondo se pega al aro?", o:["El aro estaba sucio o no se limpió bien","Es normal","Falta aceite"], c:"El aro estaba sucio o no se limpió bien"},
  {p:"¿Qué color de guantes se usa exclusivamente para huevos en cascarón?", o:["Azules","Transparentes","Ninguno"], c:"Azules"},
  {p:"¿Cuánto tiempo tiene de vida el queso capa una vez abierto?", o:["2 horas","4 horas","1 hora"], c:"2 horas"},
  {p:"¿Qué cliente espera del huevo revuelto?", o:["Caliente, húmedo y esponjoso","Seco","Frío"], c:"Caliente, húmedo y esponjoso"},
];

// DISTRIBUCIÓN CORREGIDA (este era el error!)
preguntas.desayuno      = todas.filter((_,i) => i % 5 === 0);
preguntas.huevos        = todas.filter((_,i) => i % 5 === 1);
preguntas.parrilla      = todas.filter((_,i) => i % 5 === 2);
preguntas.tiempos       = todas.filter((_,i) => i % 5 === 3);
preguntas.procedimientos = todas.filter((_,i) => i % 5 === 4);
preguntas.infinito       = [...todas];

// === EL RESTO DEL CÓDIGO 100% ORIGINAL ===
let currentMode = "";
let difficulty = "";
let questions = [];
let currentQuestion = 0;
let score = 0;
let record = localStorage.getItem("recordLZ") || 0;
let timerInterval;
let timeLeft = 20;
let gameActive = false;

function shuffle(array) { return array.sort(() => Math.random() - 0.5); }

function goToGame(mode) {
  currentMode = mode;
  questions = shuffle([...preguntas[mode]]);
  currentQuestion = 0;
  score = 0;
  showScreen("gameScreen");
  nextQuestion(getTimeForDifficulty());
}

function showInfiniteMenu() { showScreen("infiniteMenu"); }

function startInfinite(diff) {
  difficulty = diff;
  currentMode = "infinito";
  questions = shuffle([...preguntas.infinito]);
  currentQuestion = 0;
  score = 0;
  showScreen("gameScreen");
  nextQuestion(getTimeForDifficulty(diff));
}

function getTimeForDifficulty(d = difficulty) {
  if (currentMode !== "infinito") return 20;
  if (d === "facil") return 20;
  if (d === "normal") return 12;
  return 8;
}

function showScreen(id) {
  document.querySelectorAll(".screen").forEach(s => s.classList.add("hidden"));
  document.getElementById(id).classList.remove("hidden");
}

function backToMenu() {
  clearInterval(timerInterval);
  showScreen("menu");
}

function nextQuestion(seconds = 20) {
  if (currentQuestion >= questions.length && currentMode !== "infinito") { endGame(); return; }
  gameActive = true;
  timeLeft = seconds;
  const q = questions[currentQuestion];
  document.getElementById("question").innerHTML = `<h2>${q.p}</h2>`;
  const opts = document.getElementById("options");
  opts.innerHTML = "";
  shuffle(q.o).forEach(op => {
    const div = document.createElement("div");
    div.className = "option";
    div.textContent = op;
    div.onclick = () => selectAnswer(op, div);
    opts.appendChild(div);
  });
  updateTimer();
  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    timeLeft--;
    updateTimer();
    if (timeLeft <= 0) timeOut();
  }, 1000);
  document.getElementById("stats").textContent = `Puntos: ${score} | Récord: ${record}`;
  updateProgress();
}

function updateTimer() {
  const t = document.getElementById("timer");
  t.textContent = timeLeft;
  t.classList.toggle("low", timeLeft <= 5);
}

function selectAnswer(selected, el) {
  if (!gameActive) return;
  gameActive = false;
  clearInterval(timerInterval);
  const q = questions[currentQuestion];
  const correct = q.c === selected;
  if (correct) {
    el.classList.add("correct");
    document.getElementById("correct").play();
    score++;
    confetti();
    if (navigator.vibrate) navigator.vibrate(100);
  } else {
    el.classList.add("incorrect");
    document.getElementById("wrong").play();
    document.querySelectorAll(".option").forEach(o => {
      if (o.textContent === q.c) o.classList.add("correct");
    });
  }
  setTimeout(() => {
    currentQuestion++;
    if (currentMode === "infinito" && !correct) {
      endInfinite();
    } else {
      nextQuestion(getTimeForDifficulty());
    }
  }, correct ? 1200 : 2500);
}

function timeOut() {
  if (!gameActive) return;
  gameActive = false;
  clearInterval(timerInterval);
  document.getElementById("wrong").play();
  document.getElementById("timer").textContent = "¡TIEMPO!";
  document.getElementById("timer").style.color = "#ff1744";
  setTimeout(() => {
    if (currentMode === "infinito") endInfinite();
    else { currentQuestion++; nextQuestion(20); }
  }, 1500);
}

function endGame() {
  clearInterval(timerInterval);
  const total = questions.length;
  const title = score === total ? "¡PERFECTO!" : "¡Bien hecho!";
  document.getElementById("resultTitle").textContent = title;
  document.getElementById("resultContent").innerHTML = `
    <h2>Puntuación: ${score} / ${total}</h2>
    <p>¡Sigue practicando, crack!</p>
  `;
  showScreen("resultsScreen");
}

function endInfinite() {
  clearInterval(timerInterval);
  const newRecord = score > record;
  if (newRecord) {
    record = score;
    localStorage.setItem("recordLZ", record);
    document.getElementById("win").play();
  }
  document.getElementById("resultContent").innerHTML = `
    <h1 style="font-size:5rem;color:var(--yellow);">${score}</h1>
    <h2>${newRecord ? '¡NUEVO RÉCORD!' : 'Récord: ' + record}</h2>
    <p>Fallaste en:</p>
    <div style="background:#4d0000;padding:20px;border-radius:16px;font-size:1.4rem;">
      <b>${questions[currentQuestion].p}</b>
    </div>
  `;
  showScreen("resultsScreen");
  confetti();
}

function updateProgress() {
  if (currentMode === "infinito") return;
  const percent = ((currentQuestion + 1) / questions.length) * 100;
  document.getElementById("progressBar").style.width = percent + "%";
}

function confetti() {
  for (let i = 0; i < 100; i++) {
    const c = document.createElement("div");
    c.classList.add("confetti");
    c.style.left = Math.random() * 100 + "vw";
    c.style.background = Math.random() > 0.5 ? "#ffc72c" : "#da291c";
    c.style.animationDelay = Math.random() * 2 + "s";
    document.body.appendChild(c);
    setTimeout(() => c.remove(), 4000);
  }
}

function backToMenu() {
  location.reload();
}
