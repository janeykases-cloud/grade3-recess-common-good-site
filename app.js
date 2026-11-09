const STORAGE_KEY = "grade3-recess-common-good-v1";

const defaultState = {
  name: "",
  xp: 0,
  completed: [],
  awards: [],
  l1Solved: [],
  l2Tasks: {},
  lessonsDone: [],
  bestScore: 0,
  certificates: [],
  updatedAt: null
};

const encouragements = [
  "你願意先看證據再判斷，已經是很棒的探究者！",
  "每一次重新思考，都讓你的選擇更有力量。",
  "真正的共好，是讓不同需要都能被看見。",
  "你不只完成任務，也學會用理由照顧大家。"
];

const concepts = [
  {
    id: "fact",
    icon: "🔍",
    title: "事實與推想",
    note: "事實能找到證據；推想要再查證。",
    question: "哪一句是可以直接從情境看見的事實？",
    options: ["小晴和兩位同學在聊天。", "小晴很自私。", "小晴故意打擾別人。"],
    answer: 0,
    hint: "找一找：哪一句只描述人物正在做的事？"
  },
  {
    id: "needs",
    icon: "🧩",
    title: "不同需求",
    note: "同一個下課，每個人想做的事可能不同。",
    question: "面對不同需求，第一步最適合做什麼？",
    options: ["請少數人都放棄", "先了解每個人的需要", "只選最多人喜歡的"],
    answer: 1,
    hint: "共好不是要求每個人都一樣。"
  },
  {
    id: "data",
    icon: "📊",
    title: "資料與判斷",
    note: "資料能呈現數量與差異，但不能說出所有感受。",
    question: "看到『走廊碰撞 4 次』，可以確定什麼？",
    options: ["每次都是同一個人造成", "大家都不喜歡走廊", "這週碰撞是紀錄最多的問題"],
    answer: 2,
    hint: "只使用表格真的告訴你的資訊。"
  },
  {
    id: "common",
    icon: "🤝",
    title: "共好判準",
    note: "好方法要安全、尊重、可行，也照顧不同需求。",
    question: "哪一項最符合共好判準？",
    options: ["動作最快的人先拿全部器材", "劃分活動區並輪流使用器材", "大家只能做同一種活動"],
    answer: 1,
    hint: "想想：這個方法是否同時照顧安全、公平與不同需求？"
  }
];

const evidenceItems = [
  { text: "小宇拿著球走向走廊。", answer: "fact" },
  { text: "小宇是故意要撞人的。", answer: "guess" },
  { text: "小晴和兩位同學在教室後方聊天。", answer: "fact" },
  { text: "小晴很自私，只顧自己。", answer: "guess" }
];

const matchItems = [
  { role: "🏀 小宇｜想跑跳", answer: "適當的跑跳空間" },
  { role: "💬 小晴｜想聊天", answer: "聊天時控制音量" },
  { role: "📖 阿哲｜想閱讀", answer: "不被打擾的安靜角落" },
  { role: "🚶 小安｜慢慢走", answer: "安全通行的空間" }
];

const supportOptions = ["適當的跑跳空間", "聊天時控制音量", "不被打擾的安靜角落", "安全通行的空間"];

const vennItems = [
  { text: "跑跳需要較大空間", answer: "dynamic" },
  { text: "器材要輪流使用", answer: "dynamic" },
  { text: "閱讀需要安靜", answer: "quiet" },
  { text: "休息時不被打擾", answer: "quiet" },
  { text: "注意安全", answer: "both" },
  { text: "遵守共同規則", answer: "both" }
];

const dataQuestions = [
  { text: "哪一種活動偏好人數最多？", options: ["跑跳或球類", "聊天或桌遊", "散步或透氣"], answer: 0 },
  { text: "一週紀錄中，哪一個問題出現 4 次？", options: ["音量影響", "器材爭用", "走廊碰撞"], answer: 2 },
  { text: "哪兩種問題的次數相同？", options: ["器材爭用與未收拾", "碰撞與音量", "音量與未收拾"], answer: 0 }
];

const spectrumItems = [
  { id: "a", text: "大家都去走廊玩。", answer: "bad" },
  { id: "b", text: "分成動態活動區和安靜休息區。", answer: "good" },
  { id: "c", text: "最快的人先拿器材，其他人一直等。", answer: "revise" },
  { id: "d", text: "先排隊，再輪流使用器材。", answer: "good" }
];

const actions = [
  "劃分活動區",
  "器材輪流使用",
  "走廊慢行",
  "控制音量",
  "保留休息角",
  "看見危險先提醒",
  "衝突先停再說",
  "需要時找師長",
  "上課鐘前整理"
];

const finalQuestions = [
  {
    q: "哪一句是『事實』？",
    options: ["阿哲坐在閱讀角看書。", "阿哲一定討厭大家。", "阿哲故意不和別人玩。", "阿哲是最自私的人。"],
    answer: 0,
    explain: "事實可以在情境中直接看到或讀到；其他句子都加入了沒有證據的推想。"
  },
  {
    q: "同一個下課時間，有人想跑跳、有人想閱讀，這表示什麼？",
    options: ["一定會吵架", "只能保留一種活動", "每個人的需求可能不同", "人數少的需求不重要"],
    answer: 2,
    explain: "不同需求可以同時存在，先看見差異，才能尋找共好的方法。"
  },
  {
    q: "文氏圖中，最適合放在『兩種活動都需要』的是哪一項？",
    options: ["跑得很快", "安全並遵守規則", "保持完全安靜", "使用球類器材"],
    answer: 1,
    explain: "不論動態或安靜活動，都需要安全與共同規則。"
  },
  {
    q: "一週問題紀錄中，出現次數最多的是哪一項？",
    options: ["音量影響 2 次", "器材爭用 3 次", "未收拾 3 次", "走廊碰撞 4 次"],
    answer: 3,
    explain: "4 次大於 3 次與 2 次，所以走廊碰撞是紀錄最多的問題。"
  },
  {
    q: "8 人活動偏好表中，喜歡跑跳或球類的有幾人？",
    options: ["1 人", "3 人", "2 人", "4 人"],
    answer: 1,
    explain: "表格顯示跑跳或球類有 3 人。"
  },
  {
    q: "資料表不能直接告訴我們哪一件事？",
    options: ["哪項問題出現最多次", "兩項問題的次數是否相同", "每位同學當時真正的感受", "跑跳活動有幾人偏好"],
    answer: 2,
    explain: "表格呈現數量，不能完整說明每個人的想法與感受。"
  },
  {
    q: "依據資料與不同需求，哪一個方案最適合先試行？",
    options: ["分成動態區與安靜區，並訂定安全規則", "所有人只能在走廊跑", "最快的人先拿走全部器材", "取消所有下課活動"],
    answer: 0,
    explain: "分區並訂安全規則，能同時回應不同需求並降低碰撞。"
  },
  {
    q: "進行鑽石分層時，最重要的判準是什麼？",
    options: ["卡片顏色最好看", "只看自己的喜好", "哪一張字最少", "安全、尊重、可行並照顧不同需求"],
    answer: 3,
    explain: "排序要有共同判準，不能只看個人喜好。"
  },
  {
    q: "哪一句最像清楚、友善、可做到的共好約定？",
    options: ["你們都不要亂跑！", "下課在走廊請慢慢走；想跑步可以到指定活動區。", "反正大家自己小心。", "不聽話的人都不能下課。"],
    answer: 1,
    explain: "好約定清楚說出時間、地點、行動，也使用友善語氣。"
  },
  {
    q: "如果多數人喜歡跑跳，最符合共好的做法是什麼？",
    options: ["忽略想休息的人", "要求所有人一起跑", "保留動態活動，也安排安靜休息角", "讓少數人離開教室"],
    answer: 2,
    explain: "共好不是只看多數，也要設法照顧少數需求。"
  }
];

let state = loadState();

function loadState() {
  try {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    const maxAge = 365 * 24 * 60 * 60 * 1000;
    if (stored.updatedAt && Date.now() - stored.updatedAt > maxAge) {
      localStorage.removeItem(STORAGE_KEY);
      return { ...defaultState };
    }
    const nextState = { ...defaultState, ...stored };
    nextState.certificates = (stored.certificates || []).filter(level => level === 3);
    return nextState;
  } catch {
    return { ...defaultState };
  }
}

function saveState() {
  state.updatedAt = Date.now();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  updateHeader();
  updateMap();
}

function award(key, points) {
  if (!state.awards.includes(key)) {
    state.awards.push(key);
    state.xp += points;
    saveState();
  }
}

function showToast(message) {
  const toast = document.querySelector("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("show"), 2600);
}

function showScreen(id) {
  const target = document.querySelector(`#${id}`);
  if (!target) return;
  if (id === "level2" && !isUnlocked(2)) return showToast("先完成第 1 關，才能開啟這座實驗室。");
  if (id === "level3" && !isUnlocked(3)) return showToast("先完成第 2 關，終極檢核才會開啟。");
  document.querySelectorAll(".screen").forEach(screen => screen.classList.toggle("active", screen === target));
  location.hash = id;
  window.scrollTo({ top: 0, behavior: "smooth" });
  if (id === "map") updateMap();
}

function isUnlocked(level) {
  return level === 1 || state.completed.includes(level - 1) || state.completed.includes(level);
}

function updateHeader() {
  document.querySelector("#xp-count").textContent = state.xp;
}

function updateMap() {
  document.querySelector("#map-name").textContent = state.name || "探險隊員";
  document.querySelector("#completed-count").textContent = state.completed.length;
  document.querySelector("#certificate-count").textContent = state.certificates.length;
  document.querySelector("#best-score").textContent = state.bestScore ? `${state.bestScore} 分` : "—";
  document.querySelectorAll(".level-node").forEach(node => {
    const level = Number(node.dataset.level);
    const completed = state.completed.includes(level);
    const unlocked = isUnlocked(level);
    node.disabled = !unlocked;
    node.classList.toggle("locked", !unlocked);
    node.classList.toggle("completed", completed);
    node.querySelector("em").textContent = completed ? "已完成｜可再挑戰" : unlocked ? "開始探索" : "尚未解鎖";
  });
}

function renderConcepts() {
  const grid = document.querySelector("#concept-grid");
  grid.innerHTML = concepts.map((item, index) => `
    <article class="concept-card ${state.l1Solved.includes(item.id) ? "solved" : ""}" data-concept="${item.id}">
      <div class="concept-head"><span class="icon" aria-hidden="true">${item.icon}</span><div><h3>${item.title}</h3><p>${item.note}</p></div></div>
      <div class="concept-body">
        <fieldset><legend>${item.question}</legend>
          <div class="option-stack">${item.options.map((option, i) => `<label><input type="radio" name="concept-${item.id}" value="${i}"> ${option}</label>`).join("")}</div>
        </fieldset>
        <button class="check-button concept-check" data-index="${index}" type="button">檢查答案</button>
        <p class="inline-feedback" aria-live="polite">${state.l1Solved.includes(item.id) ? "✓ 已取得這一格探究能量。" : ""}</p>
      </div>
    </article>`).join("");

  grid.querySelectorAll(".concept-check").forEach(button => {
    button.addEventListener("click", () => {
      const item = concepts[Number(button.dataset.index)];
      const card = button.closest(".concept-card");
      const checked = card.querySelector(`input[name="concept-${item.id}"]:checked`);
      const feedback = card.querySelector(".inline-feedback");
      if (!checked) return setFeedback(feedback, "請先選一個答案。", false);
      if (Number(checked.value) === item.answer) {
        if (!state.l1Solved.includes(item.id)) state.l1Solved.push(item.id);
        award(`concept-${item.id}`, 25);
        card.classList.add("solved");
        setFeedback(feedback, "答對了！你取得一格探究能量。", true);
        updateLevel1();
      } else {
        setFeedback(feedback, `再想一想。線索：${item.hint}`, false);
      }
    });
  });
  updateLevel1();
}

function updateLevel1() {
  const solved = state.l1Solved.length;
  document.querySelector("#l1-progress").style.width = `${solved * 25}%`;
  document.querySelector("#level1-status").textContent = solved === 4 ? "四種探究能量都已收集完成！" : `已完成 ${solved}／4 個概念任務。`;
  document.querySelector("#finish-level1").disabled = solved !== 4;
}

function setFeedback(element, message, good) {
  element.textContent = message;
  element.classList.toggle("good", Boolean(good));
  element.classList.toggle("bad", !good);
}

function completeLevel(level) {
  if (!state.completed.includes(level)) state.completed.push(level);
  award(`level-${level}`, 100);
  saveState();
  confetti();
  renderSuccess(level);
}

function renderSuccess(level) {
  const panels = { 1: "#level1-success", 2: "#level2-success", 3: "#level3-success" };
  const titles = { 1: "概念補給站通關", 2: "三節策略實驗室通關", 3: "課間共好守護者誕生" };
  const panel = document.querySelector(panels[level]);
  const encouragement = encouragements[(level - 1) % encouragements.length];
  panel.hidden = false;
  panel.innerHTML = `
    <div aria-hidden="true" style="font-size:48px">${level === 3 ? "🏅" : "🎉"}</div>
    <h3>${titles[level]}</h3>
    <p>${encouragement}</p>
    ${level === 3 ? `<button class="certificate-button" data-certificate="3" type="button">下載完整通關 PNG 證書</button>` : ""}
    ${level < 3 ? `<button class="next-button" data-next="${level + 1}" type="button">前往第 ${level + 1} 關 →</button>` : `<button class="next-button" data-go-map type="button">回學習地圖</button>`}`;
  panel.querySelector("[data-certificate]")?.addEventListener("click", () => downloadCertificate(3));
  panel.querySelector("[data-next]")?.addEventListener("click", event => showScreen(`level${event.currentTarget.dataset.next}`));
  panel.querySelector("[data-go-map]")?.addEventListener("click", () => showScreen("map"));
  panel.scrollIntoView({ behavior: "smooth", block: "center" });
}

function renderEvidenceGame() {
  document.querySelector("#evidence-game").innerHTML = evidenceItems.map((item, index) => `
    <div class="choice-row"><p>${index + 1}. ${item.text}</p><div class="choice-buttons">
      <label><input type="radio" name="evidence-${index}" value="fact"> 事實</label>
      <label><input type="radio" name="evidence-${index}" value="guess"> 推想／意見</label>
    </div></div>`).join("");
}

function renderMatchGame() {
  document.querySelector("#match-game").innerHTML = matchItems.map((item, index) => `
    <label class="match-item"><b>${item.role}</b><select data-match="${index}"><option value="">選擇支持方式</option>${supportOptions.map(option => `<option>${option}</option>`).join("")}</select></label>`).join("");
}

function renderVennGame() {
  document.querySelector("#venn-game").innerHTML = `
    <section class="concept-bank" data-bank="venn" aria-label="文氏圖概念銀行庫">
      <div class="bank-heading"><span aria-hidden="true">🏦</span><div><b>概念銀行庫</b><small>拖曳圖卡，或先點圖卡再點目標區</small></div></div>
      <div class="bank-cards">${vennItems.map((item, index) => `<button class="drag-chip" draggable="true" type="button" data-venn-chip="${index}" data-zone="">${item.text}</button>`).join("")}</div>
    </section>
    <section class="venn-board" aria-label="文氏圖拖曳區">
      <div class="venn-circle-art circle-dynamic" aria-hidden="true"></div>
      <div class="venn-circle-art circle-quiet" aria-hidden="true"></div>
      <div class="venn-zone dynamic-zone" role="button" tabindex="0" data-venn-target="dynamic" aria-label="動態活動特有區"><h5>動態活動</h5><small>左圓特有</small><span class="drop-hint">拖到左側</span></div>
      <div class="venn-zone both-zone" role="button" tabindex="0" data-venn-target="both" aria-label="兩者共同需要交集區"><h5>共同需要</h5><small>兩圓交集</small><span class="drop-hint">拖到中間</span></div>
      <div class="venn-zone quiet-zone" role="button" tabindex="0" data-venn-target="quiet" aria-label="安靜活動特有區"><h5>安靜活動</h5><small>右圓特有</small><span class="drop-hint">拖到右側</span></div>
    </section>
    <p class="drag-status" id="venn-drag-status" aria-live="polite">尚未選取圖卡。</p>`;
  wireDragBoard({
    root: "#venn-game",
    chip: "[data-venn-chip]",
    target: "[data-venn-target]",
    bank: "[data-bank='venn'] .bank-cards",
    positionKey: "zone",
    targetKey: "vennTarget",
    status: "#venn-drag-status",
    slotMode: false
  });
}

function wireDragBoard({ root, chip, target, bank, positionKey, targetKey, status, slotMode }) {
  const board = document.querySelector(root);
  const bankArea = board.querySelector(bank);
  const statusLine = board.querySelector(status);
  let selectedCard = null;

  const announce = message => { statusLine.textContent = message; };
  const clearSelection = () => {
    board.querySelectorAll(chip).forEach(card => card.classList.remove("selected"));
    selectedCard = null;
  };
  const moveCard = (card, destination) => {
    if (!card || !destination) return;
    if (slotMode) {
      const occupied = destination.querySelector(chip);
      if (occupied && occupied !== card) {
        occupied.dataset[positionKey] = "";
        bankArea.appendChild(occupied);
      }
    }
    destination.appendChild(card);
    card.dataset[positionKey] = destination.dataset[targetKey] || "";
    announce(`${card.textContent.trim()} 已放入 ${destination.getAttribute("aria-label") || "概念銀行庫"}。`);
    clearSelection();
  };

  board.querySelectorAll(chip).forEach(card => {
    let pointerStart = null;
    card.addEventListener("dragstart", event => {
      event.dataTransfer.setData("text/plain", card.dataset.vennChip ?? card.dataset.diamondChip);
      event.dataTransfer.effectAllowed = "move";
      selectedCard = card;
      card.classList.add("selected");
      announce(`已選取 ${card.textContent.trim()}，請拖到目標區。`);
    });
    card.addEventListener("pointerdown", event => {
      pointerStart = { x: event.clientX, y: event.clientY, id: event.pointerId };
      card.setPointerCapture?.(event.pointerId);
    });
    card.addEventListener("pointermove", event => {
      if (!pointerStart) return;
      const distance = Math.hypot(event.clientX - pointerStart.x, event.clientY - pointerStart.y);
      if (distance > 10) {
        selectedCard = card;
        card.dataset.pointerDragging = "true";
        card.classList.add("selected");
        announce(`正在拖曳 ${card.textContent.trim()}。`);
      }
    });
    card.addEventListener("pointerup", event => {
      if (card.dataset.pointerDragging === "true") {
        const elementBelow = document.elementFromPoint(event.clientX, event.clientY);
        const destination = elementBelow?.closest(target);
        if (destination) moveCard(card, destination);
        else if (elementBelow && bankArea.contains(elementBelow)) {
          card.dataset[positionKey] = "";
          bankArea.appendChild(card);
          announce(`${card.textContent.trim()} 已放回概念銀行庫。`);
          clearSelection();
        }
        card.dataset.suppressClick = "true";
        window.setTimeout(() => delete card.dataset.suppressClick, 50);
      }
      delete card.dataset.pointerDragging;
      pointerStart = null;
    });
    card.addEventListener("click", () => {
      if (card.dataset.suppressClick === "true") return;
      board.querySelectorAll(chip).forEach(item => item.classList.remove("selected"));
      selectedCard = card;
      card.classList.add("selected");
      announce(`已選取 ${card.textContent.trim()}，再點選一個目標區。`);
    });
  });

  board.querySelectorAll(target).forEach(zone => {
    zone.addEventListener("dragover", event => { event.preventDefault(); zone.classList.add("drag-over"); });
    zone.addEventListener("dragleave", () => zone.classList.remove("drag-over"));
    zone.addEventListener("drop", event => {
      event.preventDefault();
      zone.classList.remove("drag-over");
      moveCard(selectedCard, zone);
    });
    zone.addEventListener("click", event => {
      if (event.target.closest(chip)) return;
      moveCard(selectedCard, zone);
    });
    zone.addEventListener("keydown", event => {
      if ((event.key === "Enter" || event.key === " ") && selectedCard) {
        event.preventDefault();
        moveCard(selectedCard, zone);
      }
    });
  });

  bankArea.addEventListener("dragover", event => event.preventDefault());
  bankArea.addEventListener("drop", event => {
    event.preventDefault();
    if (!selectedCard) return;
    selectedCard.dataset[positionKey] = "";
    bankArea.appendChild(selectedCard);
    announce(`${selectedCard.textContent.trim()} 已放回概念銀行庫。`);
    clearSelection();
  });
}

function markTask(task, points = 30) {
  state.l2Tasks[task] = true;
  award(`l2-${task}`, points);
  saveState();
  updateLessonButtons();
}

function checkAll(selector, data, attr) {
  const controls = [...document.querySelectorAll(selector)];
  return controls.length === data.length && controls.every((control, index) => control.value === data[index][attr]);
}

function renderDataGame() {
  document.querySelector("#data-game").innerHTML = dataQuestions.map((item, index) => `
    <label class="mini-question"><p>${index + 1}. ${item.text}</p><select data-data="${index}"><option value="">選擇答案</option>${item.options.map((option, i) => `<option value="${i}">${option}</option>`).join("")}</select></label>`).join("");
}

function renderSpectrumGame() {
  document.querySelector("#spectrum-game").innerHTML = `
    <section class="concept-bank spectrum-bank" data-bank="spectrum" aria-label="光譜排序方案銀行庫">
      <div class="bank-heading"><span aria-hidden="true">🏦</span><div><b>方案字卡銀行庫</b><small>拖曳字卡，或先點字卡再點光譜區</small></div></div>
      <div class="bank-cards">${spectrumItems.map((item, index) => `<button class="drag-chip spectrum-chip" draggable="true" type="button" data-spectrum-chip="${index}" data-spectrum=""><span>${String.fromCharCode(65 + index)}</span>${item.text}</button>`).join("")}</div>
    </section>
    <section class="spectrum-board" aria-label="方案適切性光譜拖曳區">
      <div class="spectrum-line" aria-hidden="true"><i></i><i></i><i></i></div>
      <div class="spectrum-zone good-zone" role="button" tabindex="0" data-spectrum-target="good" aria-label="很適合區"><h5>很適合</h5><small>資料支持，也能照顧大家</small><span class="drop-hint">拖到這裡</span></div>
      <div class="spectrum-zone revise-zone" role="button" tabindex="0" data-spectrum-target="revise" aria-label="需要修改區"><h5>需要修改</h5><small>有優點，但還要調整</small><span class="drop-hint">拖到這裡</span></div>
      <div class="spectrum-zone bad-zone" role="button" tabindex="0" data-spectrum-target="bad" aria-label="不適合區"><h5>不適合</h5><small>可能帶來問題或不公平</small><span class="drop-hint">拖到這裡</span></div>
    </section>
    <p class="drag-status" id="spectrum-drag-status" aria-live="polite">尚未選取方案字卡。</p>`;
  wireDragBoard({
    root: "#spectrum-game",
    chip: "[data-spectrum-chip]",
    target: "[data-spectrum-target]",
    bank: "[data-bank='spectrum'] .bank-cards",
    positionKey: "spectrum",
    targetKey: "spectrumTarget",
    status: "#spectrum-drag-status",
    slotMode: false
  });
}

function renderDiamondGame() {
  const rows = [1, 2, 3, 2, 1];
  let slotIndex = 0;
  document.querySelector("#diamond-game").innerHTML = `
    <section class="concept-bank diamond-bank" data-bank="diamond" aria-label="鑽石分層概念銀行庫">
      <div class="bank-heading"><span aria-hidden="true">🏦</span><div><b>概念銀行庫｜9 張行動卡</b><small>拖曳圖卡，或先點圖卡再點空格</small></div></div>
      <div class="bank-cards">${actions.map((action, index) => `<button class="drag-chip action-chip" draggable="true" type="button" data-diamond-chip="${index}" data-layer=""><span>${String(index + 1).padStart(2, "0")}</span>${action}</button>`).join("")}</div>
    </section>
    <section class="diamond-board" aria-label="鑽石分層拖曳區">
      ${rows.map((count, rowIndex) => `<div class="diamond-row layer-${rowIndex + 1}"><b>第 ${rowIndex + 1} 層<small>${["最重要", "很重要", "重要", "次要", "可稍後"][rowIndex]}</small></b><div class="diamond-slots">${Array.from({length: count}, () => { slotIndex += 1; return `<div class="diamond-slot" role="button" tabindex="0" data-diamond-target="${rowIndex + 1}" aria-label="第 ${rowIndex + 1} 層第 ${slotIndex} 個位置"><span class="drop-hint">拖到這裡</span></div>`; }).join("")}</div></div>`).join("")}
    </section>
    <p class="drag-status" id="diamond-drag-status" aria-live="polite">尚未選取行動卡。</p>`;
  wireDragBoard({
    root: "#diamond-game",
    chip: "[data-diamond-chip]",
    target: "[data-diamond-target]",
    bank: "[data-bank='diamond'] .bank-cards",
    positionKey: "layer",
    targetKey: "diamondTarget",
    status: "#diamond-drag-status",
    slotMode: true
  });
}

function renderAgreementOptions() {
  document.querySelector("#agreement-options").innerHTML = actions.map((action, index) => `<label><input type="checkbox" name="agreement-action" value="${action}"> ${index + 1}. ${action}</label>`).join("");
}

function updateLessonButtons() {
  const aDone = ["evidence", "match", "venn"].every(task => state.l2Tasks[task]);
  const bDone = ["data", "spectrum", "reflection"].every(task => state.l2Tasks[task]);
  const cDone = ["diamond", "agreement"].every(task => state.l2Tasks[task]);
  document.querySelector("#complete-a").disabled = !aDone;
  document.querySelector("#complete-b").disabled = !bDone;
  document.querySelector("#complete-c").disabled = !cDone;
  const lessonScore = state.lessonsDone.length;
  const taskScore = Object.keys(state.l2Tasks).filter(key => state.l2Tasks[key]).length;
  document.querySelector("#l2-progress").style.width = `${Math.round((lessonScore * 2 + taskScore) / 14 * 100)}%`;
  document.querySelectorAll(".lesson-tab").forEach((tab, index) => {
    const unlocked = index === 0 || state.lessonsDone.includes(index);
    tab.disabled = !unlocked;
  });
}

function showLesson(id) {
  document.querySelectorAll(".lesson-panel").forEach(panel => panel.classList.toggle("active", panel.id === id));
  document.querySelectorAll(".lesson-tab").forEach(tab => tab.classList.toggle("active", tab.dataset.lesson === id));
  document.querySelector(`#${id}`).scrollIntoView({ behavior: "smooth", block: "start" });
}

function finishLesson(number) {
  if (!state.lessonsDone.includes(number)) state.lessonsDone.push(number);
  award(`lesson-${number}`, 50);
  saveState();
  confetti(22);
  if (number < 3) {
    showToast(`第 ${number} 節策略完成！下一節已解鎖。`);
    updateLessonButtons();
    showLesson(number === 1 ? "lesson-b" : "lesson-c");
  } else {
    completeLevel(2);
  }
}

function renderFinalQuiz() {
  document.querySelector("#final-quiz").innerHTML = finalQuestions.map((item, index) => `
    <article class="quiz-question" data-question="${index}"><fieldset><legend>${item.q}</legend><div class="quiz-options">${item.options.map((option, i) => `<label><input type="radio" name="final-${index}" value="${i}"> ${option}</label>`).join("")}</div></fieldset><p class="quiz-explanation">${item.explain}</p></article>`).join("");
}

function submitQuiz() {
  const answers = finalQuestions.map((_, index) => document.querySelector(`input[name="final-${index}"]:checked`));
  const unanswered = answers.filter(answer => !answer).length;
  if (unanswered) {
    document.querySelector("#quiz-status").textContent = `還有 ${unanswered} 題未作答，請完成後再送出。`;
    return;
  }
  let correct = 0;
  answers.forEach((answer, index) => {
    const card = document.querySelector(`[data-question="${index}"]`);
    const isCorrect = Number(answer.value) === finalQuestions[index].answer;
    if (isCorrect) correct += 1;
    card.classList.add("review");
    card.classList.toggle("correct", isCorrect);
    card.classList.toggle("incorrect", !isCorrect);
  });
  const score = correct * 10;
  state.bestScore = Math.max(state.bestScore, score);
  saveState();
  document.querySelector("#l3-progress").style.width = `${score}%`;
  document.querySelector("#quiz-status").textContent = `本次答對 ${correct} 題，得到 ${score} 分。`;
  const result = document.querySelector("#quiz-result");
  result.hidden = false;
  result.innerHTML = `<strong>${score} 分</strong><p>${score >= 80 ? "通過終極檢核！你會用證據、資料和共好判準做選擇。" : "已找到需要再複習的線索。看看黃色解析，再重新挑戰一次。"}</p>${score < 80 ? '<button class="next-button" id="retry-quiz" type="button">重新挑戰</button>' : ""}`;
  result.querySelector("#retry-quiz")?.addEventListener("click", resetQuizReview);
  if (score >= 80) {
    award("final-pass", 150);
    completeLevel(3);
  } else {
    result.scrollIntoView({ behavior: "smooth", block: "center" });
  }
}

function resetQuizReview() {
  document.querySelectorAll(".quiz-question").forEach(card => card.classList.remove("review", "correct", "incorrect"));
  document.querySelector("#quiz-result").hidden = true;
  document.querySelector("#quiz-status").textContent = "可以保留答案並調整，再次送出。";
  document.querySelector("#final-quiz").scrollIntoView({ behavior: "smooth" });
}

function downloadCertificate(level) {
  const canvas = document.createElement("canvas");
  canvas.width = 1600;
  canvas.height = 900;
  const ctx = canvas.getContext("2d");
  if (level !== 3 || ![1, 2, 3].every(item => state.completed.includes(item)) || state.bestScore < 80) {
    return showToast("完成三個關卡並通過檢核後，才能下載完整通關證書。");
  }
  const accent = "#f28a52";
  ctx.fillStyle = "#fbfaf6";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#17324d";
  ctx.fillRect(0, 0, canvas.width, 120);
  ctx.fillStyle = accent;
  ctx.fillRect(0, 780, canvas.width, 120);
  ctx.strokeStyle = accent;
  ctx.lineWidth = 10;
  ctx.strokeRect(55, 55, 1490, 790);
  ctx.fillStyle = "#f4c95d";
  ctx.beginPath();
  ctx.arc(800, 220, 76, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = "#17324d";
  ctx.textAlign = "center";
  ctx.font = "900 72px PingFang TC, Microsoft JhengHei, sans-serif";
  ctx.fillText("課間共好守護者證書", 800, 355);
  ctx.font = "700 38px PingFang TC, Microsoft JhengHei, sans-serif";
  ctx.fillStyle = "#657789";
  ctx.fillText("課間十分鐘共好實驗室", 800, 415);
  ctx.font = "900 62px PingFang TC, Microsoft JhengHei, sans-serif";
  ctx.fillStyle = accent;
  ctx.fillText(state.name || "共好探險隊員", 800, 525);
  ctx.font = "700 32px PingFang TC, Microsoft JhengHei, sans-serif";
  ctx.fillStyle = "#1e3042";
  ctx.fillText("已完成三關卡與學習成果檢核", 800, 595);
  ctx.font = "700 27px PingFang TC, Microsoft JhengHei, sans-serif";
  ctx.fillStyle = "#1e3042";
  ctx.fillText("第 1 關 概念補給站　｜　第 2 關 三節策略實驗室　｜　第 3 關 共好守護者檢核", 800, 648);
  ctx.font = "900 34px PingFang TC, Microsoft JhengHei, sans-serif";
  ctx.fillStyle = accent;
  ctx.fillText(`成果檢核：${state.bestScore} 分`, 800, 700);
  const date = new Intl.DateTimeFormat("zh-TW", { year: "numeric", month: "long", day: "numeric" }).format(new Date());
  const certId = `GG-${level}-${Date.now().toString(36).toUpperCase()}`;
  ctx.font = "500 22px PingFang TC, Microsoft JhengHei, sans-serif";
  ctx.fillText(`${date}　｜　證書編號 ${certId}`, 800, 752);
  ctx.fillStyle = "#17324d";
  ctx.font = "900 58px sans-serif";
  ctx.fillText(level === 1 ? "🔍" : level === 2 ? "🧭" : "🏅", 800, 242);
  const link = document.createElement("a");
  link.download = `課間十分鐘共好實驗室_完整通關證書_${state.name || "探險隊員"}.png`;
  canvas.toBlob(blob => {
    if (!blob) return showToast("證書產生失敗，請再按一次下載。");
    const url = URL.createObjectURL(blob);
    link.href = url;
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.setTimeout(() => URL.revokeObjectURL(url), 1500);
    if (!state.certificates.includes(level)) state.certificates.push(level);
    saveState();
    showToast("PNG 證書已下載。請到裝置的下載資料夾查看。");
  }, "image/png");
}

function confetti(count = 44) {
  const layer = document.querySelector("#confetti");
  layer.innerHTML = "";
  const colors = ["#23867b", "#5c91bf", "#f28a52", "#f4c95d"];
  for (let i = 0; i < count; i += 1) {
    const piece = document.createElement("i");
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.background = colors[i % colors.length];
    piece.style.animationDelay = `${Math.random() * 0.5}s`;
    piece.style.transform = `rotate(${Math.random() * 180}deg)`;
    layer.appendChild(piece);
  }
  window.setTimeout(() => { layer.innerHTML = ""; }, 2400);
}

function bindEvents() {
  document.querySelector("#start-adventure").addEventListener("click", () => {
    const name = document.querySelector("#student-name").value.trim();
    if (!name) return showToast("請先輸入姓名或暱稱，證書才知道要頒給誰。");
    state.name = name;
    saveState();
    showScreen("map");
  });

  document.querySelector("#student-name").addEventListener("keydown", event => {
    if (event.key === "Enter") document.querySelector("#start-adventure").click();
  });

  document.querySelectorAll("[data-go]").forEach(button => button.addEventListener("click", () => showScreen(button.dataset.go)));
  document.querySelector("#reset-progress").addEventListener("click", () => {
    if (!window.confirm("要清除這台裝置上的姓名、進度與分數，重新開始嗎？")) return;
    localStorage.removeItem(STORAGE_KEY);
    location.hash = "home";
    location.reload();
  });

  document.querySelector("#finish-level1").addEventListener("click", () => completeLevel(1));

  document.querySelector("#check-evidence").addEventListener("click", () => {
    const ok = evidenceItems.every((item, index) => document.querySelector(`input[name="evidence-${index}"]:checked`)?.value === item.answer);
    if (ok) { markTask("evidence"); setFeedback(document.querySelector("#evidence-feedback"), "掃描成功！兩句是事實，兩句加入了推想或評價。", true); }
    else setFeedback(document.querySelector("#evidence-feedback"), "還有句子放錯了。提醒：『故意』『自私』需要更多證據。", false);
  });

  document.querySelector("#check-match").addEventListener("click", () => {
    const ok = checkAll("[data-match]", matchItems, "answer");
    if (ok) { markTask("match"); setFeedback(document.querySelector("#match-feedback"), "配對完成！支持方式要回應角色真正的需要。", true); }
    else setFeedback(document.querySelector("#match-feedback"), "再試一次：想想每位角色遇到的困難是空間、音量、安靜，還是通行安全。", false);
  });

  document.querySelector("#check-venn").addEventListener("click", () => {
    const cards = [...document.querySelectorAll("[data-venn-chip]")];
    const ok = cards.length === vennItems.length && cards.every(card => card.dataset.zone === vennItems[Number(card.dataset.vennChip)].answer);
    if (ok) { markTask("venn"); setFeedback(document.querySelector("#venn-feedback"), "文氏圖完成！安全與遵守規則是兩種活動的共同需要。", true); }
    else setFeedback(document.querySelector("#venn-feedback"), "還有圖卡未放入或位置不適合。先找只屬於一種活動的，再找兩者都需要的。", false);
  });

  document.querySelector("#check-data").addEventListener("click", () => {
    const ok = [...document.querySelectorAll("[data-data]")].every((control, index) => Number(control.value) === dataQuestions[index].answer);
    if (ok) { markTask("data"); setFeedback(document.querySelector("#data-feedback"), "資料發現正確！你會找最多、相同與差異。", true); }
    else setFeedback(document.querySelector("#data-feedback"), "請再對照表格與長條：先讀標題，再比數字。", false);
  });

  document.querySelector("#check-spectrum").addEventListener("click", () => {
    const cards = [...document.querySelectorAll("[data-spectrum-chip]")];
    const ok = cards.length === spectrumItems.length && cards.every(card => card.dataset.spectrum === spectrumItems[Number(card.dataset.spectrumChip)].answer);
    if (ok) { markTask("spectrum"); setFeedback(document.querySelector("#spectrum-feedback"), "光譜完成！分區與輪流能兼顧不同需求；只比快慢需要修改。", true); }
    else setFeedback(document.querySelector("#spectrum-feedback"), "還有方案字卡未放入或位置不適合。想想每個方案是否安全、公平，而且能照顧不同需求。", false);
  });

  document.querySelector("#check-reflection").addEventListener("click", () => {
    const filled = document.querySelector("#reflection-before").value.trim().length >= 3 && document.querySelector("#reflection-reason").value.trim().length >= 3 && document.querySelector("#reflection-decision").value;
    if (filled) { markTask("reflection"); setFeedback(document.querySelector("#reflection-feedback"), "反思完成！有新證據時，改變或保留想法都要說得出理由。", true); }
    else setFeedback(document.querySelector("#reflection-feedback"), "請把三個句子欄位都完成，理由至少寫出一項資料或影響。", false);
  });

  document.querySelector("#check-diamond").addEventListener("click", () => {
    const cards = [...document.querySelectorAll("[data-diamond-chip]")];
    const ok = cards.length === 9 && cards.every(card => card.dataset.layer) && document.querySelectorAll(".diamond-slot > [data-diamond-chip]").length === 9;
    if (ok) { markTask("diamond", 40); setFeedback(document.querySelector("#diamond-feedback"), "鑽石分層完成！排序沒有唯一答案，重要的是符合 1—2—3—2—1，並能說明取捨。", true); }
    else setFeedback(document.querySelector("#diamond-feedback"), "還有行動卡留在概念銀行庫。請把 9 張卡都拖入 1—2—3—2—1 的空格。", false);
  });

  document.querySelector("#check-agreement").addEventListener("click", () => {
    const selected = [...document.querySelectorAll('input[name="agreement-action"]:checked')];
    const filled = document.querySelector("#agreement-where").value && document.querySelector("#agreement-tone").value;
    const checked = ["#check-clear", "#check-doable", "#check-care"].every(selector => document.querySelector(selector).checked);
    if (selected.length === 3 && filled && checked) {
      markTask("agreement", 40);
      setFeedback(document.querySelector("#agreement-feedback"), `約定組裝完成！${document.querySelector("#agreement-where").value}，${document.querySelector("#agreement-tone").value}${selected.map(item => item.value).join("、")}。`, true);
    } else {
      setFeedback(document.querySelector("#agreement-feedback"), `請確認：剛好選 3 項行動、完成時間／地點與友善語氣，並勾選 3 個檢核條件。`, false);
    }
  });

  document.querySelectorAll(".lesson-tab").forEach(tab => tab.addEventListener("click", () => showLesson(tab.dataset.lesson)));
  document.querySelector("#complete-a").addEventListener("click", () => finishLesson(1));
  document.querySelector("#complete-b").addEventListener("click", () => finishLesson(2));
  document.querySelector("#complete-c").addEventListener("click", () => finishLesson(3));
  document.querySelector("#submit-quiz").addEventListener("click", submitQuiz);
}

function init() {
  renderConcepts();
  renderEvidenceGame();
  renderMatchGame();
  renderVennGame();
  renderDataGame();
  renderSpectrumGame();
  renderDiamondGame();
  renderAgreementOptions();
  renderFinalQuiz();
  bindEvents();
  updateHeader();
  updateMap();
  updateLessonButtons();
  if (state.name) document.querySelector("#student-name").value = state.name;
  state.completed.forEach(level => renderSuccess(level));
  const requested = location.hash.replace("#", "");
  showScreen(requested && document.querySelector(`#${requested}`) ? requested : "home");
}

init();
