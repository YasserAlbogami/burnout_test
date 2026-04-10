/**
 * ============================================================
 *  hadith.js — Prophetic Guidance Content
 *  لنفسك حق — بيانات الأحاديث النبوية والتوجيهات
 * ============================================================
 *
 *  HOW TO USE / طريقة الاستخدام:
 *  ─────────────────────────────
 *  Fill in each object below with an authentic Hadith and
 *  its matching guidance for each risk level.
 *
 *  ملء كل كائن أدناه بحديث صحيح وتوجيهه لكل مستوى خطر.
 *
 *  STRUCTURE / البنية:
 *  ───────────────────
 *  hadithData = {
 *    low      → user is doing well, reinforce good habits
 *    moderate → user showing early signs, gentle call to action
 *    high     → user at risk, stronger guidance toward rest & balance
 *  }
 *
 *  Each level has:
 *    arabic  → original Arabic Hadith text + guidance in Arabic
 *    english → meaning translation (NOT verbatim) + guidance in English
 *
 *  ⚠️  IMPORTANT / تنبيه مهم:
 *  The English text must be clearly labeled as a
 *  "translation of the meaning" — not the original text.
 *  النص الإنجليزي يجب أن يكون ترجمةً للمعنى فقط وليس النص الأصلي.
 * ============================================================
 */

const data = {
  /* ──────────────────────────────────────────────
   *  LOW RISK / مستوى منخفض
   *  Theme: gratitude, value of health and time
   *  الموضوع: الشكر، قيمة الصحة والوقت
   * ────────────────────────────────────────────── */
 
  low: {
    type: "verse",
    arabic: {
      hadith:
        "وَمَا هَٰذِهِ الْحَيَاةُ الدُّنْيَا إِلَّا لَهْوٌ وَلَعِبٌ ۚ وَإِنَّ الدَّارَ الْآخِرَةَ لَهِيَ الْحَيَوَانُ ۚ لَوْ كَانُوا يَعْلَمُونَ (64) فَإِذَا رَكِبُوا فِي الْفُلْكِ دَعَوُا اللَّهَ مُخْلِصِينَ لَهُ الدِّينَ فَلَمَّا نَجَّاهُمْ إِلَى الْبَرِّ إِذَا هُمْ يُشْرِكُونَ (65) لِيَكْفُرُوا بِمَا آتَيْنَاهُمْ وَلِيَتَمَتَّعُوا ۖ فَسَوْفَ يَعْلَمُونَ (66) أَوَلَمْ يَرَوْا أَنَّا جَعَلْنَا حَرَمًا آمِنًا وَيُتَخَطَّفُ النَّاسُ مِنْ حَوْلِهِمْ ۚ أَفَبِالْبَاطِلِ يُؤْمِنُونَ وَبِنِعْمَةِ اللَّهِ يَكْفُرُونَ (67) وَمَنْ أَظْلَمُ مِمَّنِ افْتَرَىٰ عَلَى اللَّهِ كَذِبًا أَوْ كَذَّبَ بِالْحَقِّ لَمَّا جَاءَهُ ۚ أَلَيْسَ فِي جَهَنَّمَ مَثْوًى لِّلْكَافِرِينَ (68) وَالَّذِينَ جَاهَدُوا فِينَا لَنَهْدِيَنَّهُمْ سُبُلَنَا ۚ وَإِنَّ اللَّهَ لَمَعَ الْمُحْسِنِينَ (69)",
      source: "سورة العنكبوت",
      guidance:
        "تذكّر أن للدنيا حدوداً، وأن التوازن مع العبادة والراحة جزء من حسن التدبير والاعتدال.",
    },
    english: {
      hadith:
        "وَمَا هَٰذِهِ الْحَيَاةُ الدُّنْيَا إِلَّا لَهْوٌ وَلَعِبٌ ۚ وَإِنَّ الدَّارَ الْآخِرَةَ لَهِيَ الْحَيَوَانُ ۚ لَوْ كَانُوا يَعْلَمُونَ (64) فَإِذَا رَكِبُوا فِي الْفُلْكِ دَعَوُا اللَّهَ مُخْلِصِينَ لَهُ الدِّينَ فَلَمَّا نَجَّاهُمْ إِلَى الْبَرِّ إِذَا هُمْ يُشْرِكُونَ (65) لِيَكْفُرُوا بِمَا آتَيْنَاهُمْ وَلِيَتَمَتَّعُوا ۖ فَسَوْفَ يَعْلَمُونَ (66) أَوَلَمْ يَرَوْا أَنَّا جَعَلْنَا حَرَمًا آمِنًا وَيُتَخَطَّفُ النَّاسُ مِنْ حَوْلِهِمْ ۚ أَفَبِالْبَاطِلِ يُؤْمِنُونَ وَبِنِعْمَةِ اللَّهِ يَكْفُرُونَ (67) وَمَنْ أَظْلَمُ مِمَّنِ افْتَرَىٰ عَلَى اللَّهِ كَذِبًا أَوْ كَذَّبَ بِالْحَقِّ لَمَّا جَاءَهُ ۚ أَلَيْسَ فِي جَهَنَّمَ مَثْوًى لِّلْكَافِرِينَ (68) وَالَّذِينَ جَاهَدُوا فِينَا لَنَهْدِيَنَّهُمْ سُبُلَنَا ۚ وَإِنَّ اللَّهَ لَمَعَ الْمُحْسِنِينَ (69)",
      source: "سورة العنكبوت",
      guidance:
        "The verse reminds you that worldly life is limited, and that balance, worship, and rest are part of wise self-management.",
    },
  },

  /* ──────────────────────────────────────────────
   *  MODERATE RISK / مستوى متوسط
   *  Theme: balance, consistency over intensity
   *  الموضوع: التوازن، الاستمرارية لا الإرهاق
   * ────────────────────────────────────────────── */
  moderate: {
    type: "hadith",
    arabic: {
      hadith:
        "فَأَتَى النَّبِيَّ ﷺ فَذَكَرَ ذَلِكَ لَهُ، <strong>فَقَالَ النَّبِيُّ ﷺ: صَدَقَ سَلْمَانُ</strong> رواه البخاري. وَفِي النَّصِّ: <mark>إِنَّ لِرَبِّكَ عَلَيْكَ حَقًّا، وَإِنَّ لِنَفْسِكَ عَلَيْكَ حَقًّا، وَلأَهْلِكَ عَلَيْكَ حَقًّا، فَأَعْطِ كُلَّ ذِي حَقٍّ حَقَّهُ</mark>",
      source: "رواه البخاري",
      guidance:
        "خذ من هذا التوجيه ميزاناً عملياً: أعطِ العمل حقه، ولا تهمل حق نفسك وأهلك وراحتك.",
    },
    english: {
      hadith:
        "The Prophet was told about this, and he said: Salman spoke the truth. In the report: your Lord has a right over you, your self has a right over you, and your family has a right over you, so give each one their due right.",
      source: "Narrated by Al-Bukhari",
      guidance:
        "Use this as a practical balance: give work its due, but do not neglect your own well-being, your family, or your rest.",
    },
  },

  /* ──────────────────────────────────────────────
   *  HIGH RISK / مستوى مرتفع
   *  Theme: rights of the self, rest is obligatory
   *  الموضوع: حق النفس، الراحة واجبة
   * ────────────────────────────────────────────── */
  high: {
    type: "hadith",
    arabic: {
      hadith:
        "فَأَتَى النَّبِيَّ ﷺ فَذَكَرَ ذَلِكَ لَهُ، <strong>فَقَالَ النَّبِيُّ ﷺ: صَدَقَ سَلْمَانُ</strong> رواه البخاري. وَفِي النَّصِّ: <mark>إِنَّ لِرَبِّكَ عَلَيْكَ حَقًّا، وَإِنَّ لِنَفْسِكَ عَلَيْكَ حَقًّا، وَلأَهْلِكَ عَلَيْكَ حَقًّا، فَأَعْطِ كُلَّ ذِي حَقٍّ حَقَّهُ</mark>",
      source: "رواه البخاري",
      guidance:
        "إذا بلغت الإرهاق هذه الدرجة فالأولوية للراحة وإعادة التوازن، ثم طلب المساندة من متخصص أو من تثق به.",
    },
    english: {
      hadith:
        "The Prophet confirmed that Salman spoke the truth. The report states that your Lord has a right over you, your self has a right over you, and your family has a right over you, so give each one their due right.",
      source: "Narrated by Al-Bukhari",
      guidance:
        "At this level, rest and restoring balance come first, followed by reaching out to a professional or someone you trust for support.",
    },
  },
};

/* ============================================================
 *  DO NOT EDIT BELOW THIS LINE / لا تعدّل ما تحت هذا السطر
 * ============================================================ */
