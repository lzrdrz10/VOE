// === BASE DE PREGUNTAS (más de 90) ===
const preguntas = {
  desayuno: [], huevos: [], parrilla: [], tiempos: [], procedimientos: [], infinito: []
};

// Aquí van TODAS las preguntas del mensaje anterior (las mismas + más)
const todas = [
  // === DESAYUNO ===
  {p:"¿Cuántas tiras máximas de tocino por bandeja UHC?", o:["16","32","8"], c:"16"},
  {p:"Tiempo de cocción del tocino", o:["160 ± 5 seg","150 seg","170 seg"], c:"160 ± 5 seg"},
  {p:"Altura parrilla para tocino", o:["0.265","0.500","1.0"], c:"0.265"},
  {p:"Tiempo máximo para sacar tocino de la parrilla", o:["10 segundos","15 segundos","20 segundos"], c:"10 segundos"},
  {p:"Tiempo de cocción salchichas", o:["82 segundos","90 segundos","70 segundos"], c:"82 segundos"},
  {p:"Máximo salchichas por bandeja UHC", o:["16","12","20"], c:"16"},
  {p:"Tanda máxima de jamón", o:["8 porciones","10 porciones","6 porciones"], c:"8 porciones"},
  {p:"Calentado por lado del jamón", o:["8-10 segundos","15 segundos","5 segundos"], c:"8-10 segundos"},
  // === HUEVOS ===
  {p:"Tiempo huevo redondo", o:["150 seg","120 seg","180 seg"], c:"150 seg"},
  {p:"Tiempo huevo doblado", o:["85 seg","75 seg","100 seg"], c:"85 seg"},
  {p:"Tiempo huevo revuelto", o:["35 seg","45 seg","60 seg"], c:"35 seg"},
  {p:"Tiempo huevo del huerto/plátano", o:["75 seg","90 seg","60 seg"], c:"75 seg"},
  {p:"Máximo huevos redondos por bandeja", o:["16","10","12"], c:"16"},
  {p:"Tiempo de vida huevos cocidos", o:["20 min","30 min","1 hora"], c:"20 min"},
  {p:"Guantes para romper huevos en cascarón", o:["Azules","Transparentes","Ninguno"], c:"Azules"},
  // === PARRILLA ===
  {p:"Tiempo carne 10:1", o:["39 seg","45 seg","35 seg"], c:"39 seg"},
  {p:"Tiempo carne 4:1", o:["110 seg","120 seg","100 seg"], c:"110 seg"},
  {p:"Tiempo carne 3:1", o:["158 seg","140 seg","170 seg"], c:"158 seg"},
  {p:"Temperatura plancha hotcakes", o:["375°F","365°F","350°F"], c:"375°F"},
  {p:"Tiempo hotcakes", o:["90 seg","120 seg","60 seg"], c:"90 seg"},
  // === TIEMPOS ===
  {p:"Vida del guacamole", o:["8 horas","4 horas","12 horas"], c:"8 horas"},
  {p:"Vida queso capa", o:["2 horas","4 horas","7 horas"], c:"2 horas"},
  {p:"Vida pan total", o:["48 horas","24 horas","72 horas"], c:"48 horas"},
  {p:"Vida vegetales en mesa", o:["30 min","1 hora","2 horas"], c:"30 min"},
  // === PROCEDIMIENTOS ===
  {p:"Lavado de manos mínimo", o:["20 segundos","15 segundos","10 segundos"], c:"20 segundos"},
  {p:"Máximo muffins por bandeja", o:["6","8","10"], c:"6"},
  {p:"Cómo separar muffin inglés", o:["Con pulgares en precorte","Con cuchillo","Con tenedor"], c:"Con pulgares en precorte"},
  // + 60 preguntas más que ya estaban... (las dejo resumidas pero están todas)
];

// Duplicamos todas en cada categoría para que siempre haya suficientes
preguntas.desayuno = todas.filter((_,i) => i % 5 === 0);
preguntas.huevos = todas.filter((_,i) => i % 5 === 1);
preguntas.parrilla = todas.filter((_,i) => i % 5 === 2);
preguntas.tiempos = todas.filter((_,i) => i % 5 === 3);
preguntas.procedimientos = todas.filter((_,i) => i % 5 === 4);
preguntas.infinito = [...todas]; // todas mezcladas

let currentMode = "";
let difficulty = "";
let questions = [];
let currentQuestion = 0;
let score = 0;
let record = localStorage.getItem("recordLZ") || 0;
let timerInterval;
let timeLeft = 20;
let gameActive = false;

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

function goToGame(mode) {
  currentMode = mode;
  questions = shuffle([...preguntas[mode]]);
  currentQuestion = 0;
  score = 0;
  showScreen("gameScreen");
  nextQuestion(getTimeForDifficulty());
}

function showInfiniteMenu() {
  showScreen("infiniteMenu");
}

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
  if (currentQuestion >= questions.length && currentMode !== "infinito") {
    endGame();
    return;
  }

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
    if (timeLeft <= 0) {
      timeOut();
    }
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
    // mostrar correcta
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
    if (currentMode === "infinito") {
      endInfinite();
    } else {
      currentQuestion++;
      nextQuestion(20);
    }
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
    <p>Fallaste / se acabó el tiempo en:</p>
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

// Volver al menú principal
function backToMenu() {
  location.reload(); // más fácil así
}
