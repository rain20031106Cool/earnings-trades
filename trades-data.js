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
