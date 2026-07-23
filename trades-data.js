const trades = [
  
/*
{
  date: "",
  stock: "",
  buyPrice: null,
  shares: null,
  sellPrice: null,
  desc: "",
  reason: "",
  ratings: {
    valuation: "",
    growth: "",
    profitability: "",
    momentum: "",
    epsRev: ""
  }
},
*/
  {
    date: "2026/07/22",
    stock: "RTXG",
    buyPrice: 23.5,
    shares: 256,
    sellPrice: 27.04,
    desc: "Strong Buy",
    reason: "雷神科技是老牌國防股票，雖然評級幾乎都是HOLDING，但獲利能力有顯著的表現，可惜估值比較高。",
    ratings: {
      valuation: "D",
      growth: "C-",
      profitability: "A+",
      momentum: "B-",
      epsRev: "B"
    }
  },

  {
    date: "2026/07/22",
    stock: "AALG",
    buyPrice: 14.1,
    shares: 426,
    sellPrice: 11.57,
    desc: "Strong Buy",
    reason: "評級全對，相當值得購買！",
    ratings: {
      valuation: "A+",
      growth: "A+",
      profitability: "A-",
      momentum: "B+",
      epsRev: "B-"
    }
  },

  {
    date: "2026/07/22",
    stock: "STM",
    buyPrice: 66.17,
    shares: 181,
    sellPrice: 55.21,
    desc: "Strong Buy",
    reason: "推特白毛股神推薦過的股票，評級不錯，沾上半導體，我覺得有上漲空間。",
    ratings: {
      valuation: "D",
      growth: "A",
      profitability: "C",
      momentum: "A",
      epsRev: "C"
    }
  },

    {
    date: "2026/07/22",
    stock: "LNOK",
    buyPrice: 38.17,
    shares: 40,
    sellPrice: 34.49,
    desc: "Hold",
    reason: "推特白毛股神推薦過的股票，沾上矽光子，碰到點位，評級還可以。",
    ratings: {
      valuation: "D-",
      growth: "D",
      profitability: "B",
      momentum: "A-",
      epsRev: "B-"
    }
  },

  {
    date: "2026/07/20",
    stock: "VICR",
    buyPrice: 240,
    shares: 61,
    sellPrice: 220.4,
    desc: "Strong Buy",
    reason: "半導體數一數二強的股票，我認為會暴漲。",
    ratings: {
      valuation: "D",
      growth: "A+",
      profitability: "B-",
      momentum: "A+",
      epsRev: "A-"
    }
  },

    {
    date: "2026/07/20",
    stock: "GM",
    buyPrice: 76.4,
    shares: 159,
    sellPrice: 82.25,
    desc: "Strong Buy",
    reason: "通用汽車屬於穩定的股票，漲幅不大但我依策略進行，不然其實會想要All in VICR。",
    ratings: {
      valuation: "B-",
      growth: "B+",
      profitability: "A+",
      momentum: "B",
      epsRev: "B+"
    }
  },

  {
    date: "2026/07/16",
    stock: "VIST",
    buyPrice: 64.5,
    shares: 373,
    sellPrice:62.9,
    desc: "Strong Buy。",
    reason: "EPS表現得特別好，近期又是能源股很好的標的。",
    ratings: {
      valuation: "B-",
      growth: "B+",
      profitability: "D+",
      momentum: "A-",
      epsRev: "A+"
    }
  },

    {
    date: "2026/07/16",
    stock: "ISUL",
    buyPrice: 17,
    shares: 60,
    sellPrice:13.4,    
    desc: "HOLD。",
    reason: "ISRG在未來非常有前景，但是目前表現得不好，我認為法說會的時候會說到未來的獨佔性而股價上升。",
    ratings: {
      valuation: "D-",
      growth: "D+",
      profitability: "A+",
      momentum: "D+",
      epsRev: "A-"
    }
  },

  {
    date: "2026/07/15",
    stock: "UAL",
    buyPrice: 122,
    shares: 14,
    sellPrice:118.19,
    desc: "Buy",
    reason: "雖然我覺得他很綁定DAL的財報關係，但我覺得他的成長性滿大的。",
    ratings: {
      valuation: "A-",
      growth: "C-",
      profitability: "A+",
      momentum: "B+",
      epsRev: "B-"
    }
  },

  {
    date: "2026/07/15",
    stock: "UNHG",
    buyPrice: 23.5,
    shares: 54,
    sellPrice:25.04,
    desc: "HOLD",
    reason: "UNH雖然整體的估值跟成長性不佳，但我覺得EPS和momentum、profitability看起來不錯就可以表現好。",
    ratings: {
      valuation: "D-",
      growth: "F",
      profitability: "A+",
      momentum: "B+",
      epsRev: "A-"
    }
  },

    {
    date: "2026/07/15",
    stock: "TSMX",
    buyPrice: 80,
    shares: 150,
    sellPrice:76.53,
    desc: "HOLD。",
    reason: "TSM這理論上是買18股(1500美)，但我覺得評級是valuation把它拉垮，實際上應該能表現得不錯。",
    ratings: {
      valuation: "D-",
      growth: "A-",
      profitability: "A+",
      momentum: "B",
      epsRev: "A+"
    }
  },

    {
    date: "2026/07/14",
    stock: "PNC",
    buyPrice: 256,
    shares: 6,
    sellPrice: 254.1,
    desc: "Strong Buy",
    reason: "有個問題是波動率極低，我想這隻不買也罷？",
    ratings: {
      valuation: "C-",
      growth: "C+",
      profitability: "A",
      momentum: "B+",
      epsRev: "B"
    }
  },

  {
    date: "2026/07/14",
    stock: "ASMU",
    buyPrice: 33.3,
    shares: 33,
    sellPrice: 33,
    desc: "Hold",
    reason: "ASML我認為是一間不錯的公司，但評級普普通通，所以買的不多，參數除了Valuation都長得不錯，我想因為這樣才被評為hold。",
    ratings: {
      valuation: "F",
      growth: "B+",
      profitability: "A+",
      momentum: "B+",
      epsRev: "B"
    }
  },

  {
    date: "2026/07/13",
    stock: "BAC",
    buyPrice: 59.2,
    shares: 33,
    sellPrice: 60.4,
    desc: "Strong Buy.",
    reason: "嘗試看看這個波動率很低 大概3%的銀行股。",
    ratings: {
      valuation: "D+",
      growth: "B+",
      profitability: "A+",
      momentum: "B",
      epsRev: "B+"
    }
  },

  {
    date: "2026/07/09",
    stock: "DAL",
    buyPrice: 88.88,
    shares: 25,
    sellPrice: 86.5,
    desc: "Buy.",
    reason: "其他評級皆為 A，財報隔日沖觀察標的。",
    ratings: {
      valuation: "C+",
      growth: "B",
      profitability: "A+",
      momentum: "A",
      epsRev: "C+"
    }
  },

  {
    date: "2026/07/07",
    stock: "PENG",
    buyPrice: 61.916,
    shares: 195,
    sellPrice: 72.566,
    desc: "Strong Buy.",
    reason: "PENG 碰到了記憶體板塊的好處，其他指標參數皆優良。",
    ratings: {
      valuation: "C",
      growth: "C",
      profitability: "C+",
      momentum: "A+",
      epsRev: "B-"
    }
  },

];
