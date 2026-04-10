const content = {
  ar: {
    heroTitle: "لنفسك حق",
    heroSubtitle:
      "أداة وعي مبكر بالاحتراق الوظيفي مستلهمة من آيات القرآن الكريم وتعاليم النبي صلى الله عليه وسلم",
    heroGoal:
      "تُستخدم هذه الأداة لاكتشاف الأعراض الأولية للاحتراق الوظيفي في وقت مبكر لاتخاذ خطوات داعمة قبل تفاقم الحالة. - ياسر البقمي",
    heroBadge: "تقييم سريع ١٢ سؤالاً",
    btnStart: "ابدأ التقييم",
    assessLabel: "التقييم",
    assessTitle: "كيف تشعر مؤخراً؟",
    assessDesc: "اختر الإجابة الأقرب لتجربتك خلال الأسبوعين الماضيين",
    btnSubmit: "عرض النتيجة",
    submitNote: "جميع الإجابات سرية ولا تُرسل إلى أي جهة",
    resultLabel: "النتيجة",
    resultSectionTitle: "نتيجة تقييمك",
    scoreMax: "من ٦٠",
    hadithLabel: "توجيه نبوي",
    verseLabel: "آية قرآنية",
    guidanceLabel: "التوجيه",
    btnRetake: "إعادة التقييم",
    disclaimer:
      "<strong>تنبيه مهم:</strong> هذه الأداة للتوعية المبكرة فقط وليست تشخيصاً طبياً أو نفسياً. إذا كنت تعاني من أعراض شديدة، يُرجى التواصل مع متخصص.",
    scaleLabels: ["أبداً", "نادراً", "أحياناً", "كثيراً", "دائماً"],
    langToggle: "English",
    validationPrefix: "يرجى الإجابة على السؤال التالي:",
    validationSuffix: "للمتابعة",
    quranNote:
      "النص التالي آية قرآنية معروضة كما هي، مع المصدر المذكور أسفلها.",
    risk: {
      low: {
        badge: "خطر منخفض 🟢",
        message: "أنت في حالة جيدة",
        desc: "لا تظهر عليك علامات واضحة للاحتراق الوظيفي حالياً. حافظ على توازنك وعادتك الصحية.",
      },
      mod: {
        badge: "خطر متوسط 🟡",
        message: "تظهر عليك بعض العلامات المبكرة",
        desc: "لاحظنا بعض مؤشرات الإجهاد. الوقت مناسب لإعادة ترتيب أولوياتك والاهتمام بنفسك.",
      },
      high: {
        badge: "خطر مرتفع 🔴",
        message: "أنت معرّض للاحتراق الوظيفي",
        desc: "تشير إجاباتك إلى علامات واضحة للإرهاق. يُنصح بالتوقف والتقييم الجاد لحالتك والتحدث مع متخصص.",
      },
    },
    questions: [
      "أشعر بالإرهاق الشديد في نهاية يوم العمل",
      "أجد صعوبة في الاستمتاع بالأشياء التي كانت تسعدني سابقاً",
      "أشعر بأنني لا أُنجز شيئاً ذا قيمة في عملي",
      "أنام بشكل سيئ أو أعاني من التفكير المستمر بعد العمل",
      "أشعر بالتهيج أو العصبية الزائدة تجاه زملائي أو عائلتي",
      "أتأخر أو أتجنب بدء المهام التي كانت تبدو بسيطة في السابق",
      "أشعر بأن عملي لا معنى له أو أنني لا أُحدث فرقاً",
      "أعاني من أعراض جسدية (صداع، آلام، توتر عضلي) بشكل متكرر",
      "أشعر بالانفصال العاطفي عن عملي أو زملائي",
      "أجد نفسي أفكر في العمل حتى خارج أوقاته",
      "أشعر أن طاقتي استُنزفت ولا شيء يشحنها مجدداً",
      "أتجنب الحديث عن مشاعري أو ضغوطي مع الآخرين",
    ],
  },
  en: {
    heroTitle: "You Have a Right Over Yourself",
    heroSubtitle:
      "An early burnout awareness tool — inspired by Prophetic teachings and verses of the Quran",
    heroGoal:
      "This tool is used to detect the initial symptoms of burnout at an early stage so supportive action can be taken before things get worse. - Yasser Albogami",
    heroBadge: "Quick assessment · 12 questions",
    btnStart: "Start Assessment",
    assessLabel: "Assessment",
    assessTitle: "How have you been feeling?",
    assessDesc:
      "Choose the answer closest to your experience over the past two weeks",
    btnSubmit: "Show My Result",
    submitNote: "All responses are private and are not sent anywhere",
    resultLabel: "Result",
    resultSectionTitle: "Your Assessment Result",
    scoreMax: "out of 60",
    hadithLabel: "Prophetic Guidance",
    verseLabel: "Quranic Verse",
    guidanceLabel: "Advice",
    btnRetake: "Retake Assessment",
    disclaimer:
      "<strong>Important notice:</strong> This tool is for early awareness only and is not a medical or psychological diagnosis. If you are experiencing severe symptoms, please consult a professional.",
    scaleLabels: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    langToggle: "عربي",
    validationPrefix: "Please answer the following question:",
    validationSuffix: "to continue",
    quranNote:
      "The text below is the Quranic verse you provided, shown exactly as written, with the source listed beneath it.",
    risk: {
      low: {
        badge: "Low Risk 🟢",
        message: "You're doing well",
        desc: "No clear signs of burnout are showing right now. Keep maintaining your balance and healthy habits.",
      },
      mod: {
        badge: "Moderate Risk 🟡",
        message: "Some early signs are present",
        desc: "We noticed some stress indicators. This is a good time to reassess your priorities and take care of yourself.",
      },
      high: {
        badge: "High Risk 🔴",
        message: "You may be experiencing burnout",
        desc: "Your responses indicate clear signs of exhaustion. It is strongly advised to pause, seriously evaluate your state, and speak with a professional.",
      },
    },
    questions: [
      "I feel exhausted at the end of a workday",
      "I find it hard to enjoy things that used to bring me joy",
      "I feel like I'm not accomplishing anything meaningful at work",
      "I sleep poorly or find myself constantly thinking about work",
      "I feel irritable or short-tempered with colleagues or family",
      "I procrastinate or avoid starting tasks that once felt simple",
      "I feel my work is meaningless or that I am not making a difference",
      "I experience physical symptoms (headaches, tension, pain) frequently",
      "I feel emotionally detached from my work or colleagues",
      "I find myself thinking about work even during off-hours",
      "I feel my energy is depleted and nothing recharges me",
      "I avoid talking about my feelings or pressures with others",
    ],
  },
};

let lang = "ar";
let lastScore = null;
let lastRisk = null;

function toggleLang() {
  lang = lang === "ar" ? "en" : "ar";
  const html = document.documentElement;
  const body = document.body;

  if (lang === "en") {
    html.setAttribute("lang", "en");
    html.setAttribute("dir", "ltr");
    body.classList.add("en");
  } else {
    html.setAttribute("lang", "ar");
    html.setAttribute("dir", "rtl");
    body.classList.remove("en");
  }

  applyContent();

  if (
    document.getElementById("assessment") &&
    document.getElementById("assessment").classList.contains("active")
  ) {
    renderQuestions();
  }

  if (
    document.getElementById("results") &&
    document.getElementById("results").classList.contains("active") &&
    lastRisk
  ) {
    renderResults(lastScore, lastRisk);
  }
}

function applyContent() {
  const c = content[lang];
  setText("hero-title", c.heroTitle);
  setText("hero-subtitle", c.heroSubtitle);
  setText("hero-goal", c.heroGoal);
  setText("hero-badge-text", c.heroBadge);
  setText("btn-start", c.btnStart);
  setText("assess-label", c.assessLabel);
  setText("assess-title", c.assessTitle);
  setText("assess-desc", c.assessDesc);
  setText("btn-submit", c.btnSubmit);
  setText("submit-note", c.submitNote);
  setText("result-label", c.resultLabel);
  setText("result-section-title", c.resultSectionTitle);
  setText("score-max", c.scoreMax);
  setText("guidance-label", c.guidanceLabel);
  setText("btn-retake", c.btnRetake);
  setText("lang-toggle", c.langToggle);
  setHTML("footer-disclaimer", c.disclaimer);

  const validation = document.getElementById("validation-message");
  if (validation && !validation.textContent) {
    validation.textContent = "";
  }
}

function setText(id, val) {
  const el = document.getElementById(id);
  if (el) {
    el.textContent = val;
  }
}

function setHTML(id, val) {
  const el = document.getElementById(id);
  if (el) {
    el.innerHTML = val;
  }
}

function startAssessment() {
  const assess = document.getElementById("assessment");
  if (assess) {
    document.getElementById("hero")?.classList.add("hidden");
    assess.classList.add("active");
    renderQuestions();
    assess.scrollIntoView({ behavior: "smooth" });
    return;
  }

  window.location.href = "questions.html";
}

function renderQuestions() {
  const c = content[lang];
  const container = document.getElementById("questions-container");
  if (!container) {
    return;
  }

  container.innerHTML = "";

  c.questions.forEach((qText, index) => {
    const questionNumber = index + 1;
    const card = document.createElement("div");
    card.className = "q-card";
    card.dataset.questionIndex = String(index);
    card.innerHTML = `
      <div class="q-number">${
        lang === "ar"
          ? `سؤال ${toArabicNum(questionNumber)} من ١٢`
          : `Question ${questionNumber} of 12`
      }</div>
      <div class="q-text">${qText}</div>
      <div class="scale-options" id="scale-${index}">
        ${[1, 2, 3, 4, 5]
          .map(
            (value) => `
          <label>
            <input type="radio" name="q${index}" value="${value}" onchange="updateProgress()" />
            <div class="scale-dot">${
              lang === "ar" ? toArabicNum(value) : value
            }</div>
          </label>
        `
          )
          .join("")}
      </div>
      <div class="scale-labels">
        <span>${c.scaleLabels[0]}</span>
        <span>${c.scaleLabels[4]}</span>
      </div>
    `;
    container.appendChild(card);
  });

  updateProgress();
}

function updateProgress() {
  const container = document.getElementById("questions-container");
  if (!container) {
    return;
  }

  const answered = container.querySelectorAll(
    'input[type="radio"]:checked'
  ).length;
  const pct = (answered / 12) * 100;
  const progress = document.getElementById("progress-fill");
  if (progress) {
    progress.style.width = pct + "%";
  }

  const validation = document.getElementById("validation-message");
  if (validation) {
    validation.textContent = "";
  }

  container.querySelectorAll(".q-card.missing").forEach((card) => {
    card.classList.remove("missing");
  });
}

function submitAssessment() {
  const container = document.getElementById("questions-container");
  if (!container) {
    return;
  }

  const cards = Array.from(container.querySelectorAll(".q-card"));
  const missingQuestions = [];

  cards.forEach((card, index) => {
    const selected = container.querySelector(`input[name="q${index}"]:checked`);
    if (!selected) {
      card.classList.add("missing");
      missingQuestions.push(index + 1);
    } else {
      card.classList.remove("missing");
    }
  });

  if (missingQuestions.length > 0) {
    const validation = document.getElementById("validation-message");
    if (validation) {
      const numbers = missingQuestions
        .map((number) => (lang === "ar" ? toArabicNum(number) : number))
        .join(lang === "ar" ? "، " : ", ");
      validation.textContent =
        lang === "ar"
          ? `${content[lang].validationPrefix} ${numbers} ${content[lang].validationSuffix}`
          : `${content[lang].validationPrefix} ${numbers} ${content[lang].validationSuffix}.`;
      validation.scrollIntoView({ behavior: "smooth", block: "center" });
    }
    return;
  }

  let total = 0;
  for (let index = 0; index < 12; index += 1) {
    const selected = document.querySelector(`input[name="q${index}"]:checked`);
    total += parseInt(selected.value, 10);
  }

  const risk = total <= 24 ? "low" : total <= 40 ? "mod" : "high";
  lastScore = total;
  lastRisk = risk;

  try {
    localStorage.setItem(
      "burnout_last_score",
      JSON.stringify({ score: total, risk, date: new Date().toISOString() })
    );
  } catch (error) {
    void error;
  }

  document.getElementById("assessment")?.classList.remove("active");
  if (document.getElementById("assessment")) {
    document.getElementById("assessment").style.display = "none";
  }

  renderResults(total, risk);

  const resultsEl = document.getElementById("results");
  if (resultsEl) {
    resultsEl.classList.add("active");
    resultsEl.scrollIntoView({ behavior: "smooth" });
  }
}

function renderResults(score, risk) {
  const c = content[lang];
  const riskData = c.risk[risk];
  const dataKey = risk === "mod" ? "moderate" : risk;

  const badge = document.getElementById("risk-badge");
  if (badge) {
    badge.textContent = riskData.badge;
    badge.className = "risk-badge risk-" + (risk === "mod" ? "mod" : risk);
  }

  const scoreEl = document.getElementById("score-display");
  if (scoreEl) {
    scoreEl.textContent = lang === "ar" ? toArabicNum(score) : score;
    scoreEl.className = "score-display " + (risk === "mod" ? "mod" : risk);
  }

  const pct = ((score - 12) / 48) * 100;
  const gauge = document.getElementById("gauge-fill");
  if (gauge) {
    gauge.style.width = "0%";
    gauge.className = "gauge-fill " + (risk === "mod" ? "mod" : risk);
    setTimeout(() => {
      gauge.style.width = pct + "%";
    }, 100);
  }

  setText("result-message", riskData.message);
  setText("result-desc", riskData.desc);

  const fallback = {
    ar: {
      hadith: "يرجى إضافة الأحاديث إلى ملف hadith.js",
      source: "",
      guidance: "راجع ملف hadith.js وأضف الأحاديث الصحيحة",
      type: "hadith",
    },
    en: {
      hadith: "Please add Hadiths to the hadith.js file",
      source: "",
      guidance: "Open hadith.js and fill in the authentic Hadiths",
      type: "hadith",
    },
  };

  let payload = null;
  if (typeof data !== "undefined") {
    payload = data;
  } else if (typeof hadithData !== "undefined") {
    payload = hadithData;
  }

  const langKey = lang === "ar" ? "arabic" : "english";
  let hadithContent = fallback[lang];
  let itemType = fallback[lang].type;

  if (payload && payload[dataKey]) {
    const localizedContent =
      payload[dataKey][langKey] || payload[dataKey][lang];

    if (localizedContent) {
      hadithContent = localizedContent;
      itemType =
        payload[dataKey].type || (dataKey === "low" ? "verse" : "hadith");
    }
  }

  const hadithLabel = document.getElementById("hadith-label");
  if (hadithLabel) {
    if (itemType === "verse") {
      hadithLabel.textContent =
        lang === "ar"
          ? "توجيه رباني — آية قرآنية"
          : "Guidance From Allah — Quranic Verse";
    } else {
      hadithLabel.textContent =
        lang === "ar"
          ? "توجيه نبوي — حديث شريف"
          : "Prophetic Guidance — Hadith";
    }
  }

  const note = document.getElementById("translation-note");
  if (note) {
    note.innerHTML =
      itemType === "verse"
        ? c.quranNote
        : lang === "ar"
        ? "⚠️ النص أدناه هو <strong>ترجمة لمعنى الحديث</strong> النبوي الشريف — وليس النص العربي الأصلي."
        : "⚠️ The text below is a <strong>translation of the meaning</strong> of the Hadith of the Prophet ﷺ — not the original Arabic text.";
  }

  setHTML("hadith-text", hadithContent.hadith);
  setText("hadith-source", hadithContent.source);
  setText("guidance-text", hadithContent.guidance);
}

function resetTool() {
  const results = document.getElementById("results");
  if (results) {
    results.classList.remove("active");
    results.style.display = "";
  }

  const assess = document.getElementById("assessment");
  if (assess) {
    assess.style.display = "";
    assess.classList.add("active");
  }

  renderQuestions();
  assess?.scrollIntoView({ behavior: "smooth" });
}

function toArabicNum(n) {
  return String(n).replace(/[0-9]/g, (digit) => "٠١٢٣٤٥٦٧٨٩"[digit]);
}

function init() {
  applyContent();

  const questionsContainer = document.getElementById("questions-container");
  if (questionsContainer) {
    renderQuestions();
  }
}

window.toggleLang = toggleLang;
window.startAssessment = startAssessment;
window.updateProgress = updateProgress;
window.submitAssessment = submitAssessment;
window.resetTool = resetTool;

init();
