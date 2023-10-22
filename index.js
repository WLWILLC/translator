var engTotha = {
    "a": "ฟ" ,
    "b": "ิ" ,
    "c": "แ" ,
    "d": "ก" ,
    "e": "ำ" ,
    "f": "ด" ,
    "g": "เ" ,
    "h": "้" ,
    "i": "ร" ,
    "j": "่" ,
    "k": "า" ,
    "l": "ส" ,
    "m": "ท" ,
    "n": "ื" ,
    "o": "น" ,
    "p": "ย" ,
    "q": "ๆ" ,
    "r": "พ" ,
    "s": "ห" ,
    "t": "ะ" ,
    "u": "ี" ,
    "v": "อ" ,
    "w": "ไ" ,
    "x": "ป" ,
    "y": "ั" ,
    "z": "ผ" ,
    "{": "ฐ" ,
    "|": "ฅ" ,
    "}": "," ,
    "A": "ฤ" ,
    "B": "ฺ" ,
    "C": "ฉ" ,
    "D": "ฏ" ,
    "E": "ฎ" ,
    "F": "โ" ,
    "G": "ฌ" ,
    "H": "็" ,
    "I": "ณ" ,
    "J": "๋" ,
    "K": "ษ" ,
    "L": "ศ" ,
    "M": "?" ,
    "N": "์" ,
    "O": "ฯ" ,
    "P": "ญ" ,
    "Q": "๐" ,
    "R": "ฑ" ,
    "S": "ฆ" ,
    "T": "ธ" ,
    "U": "๊" ,
    "V": "ฮ" ,
    "W": "_" ,
    "X": ")" ,
    "Y": "ํ" ,
    "Z": "(" ,
    "[": "บ" ,
    "\\": "ฅ" ,
    "]": "ล" ,
    "^": "ู" ,
    "_": "๘" ,
    "`": "." ,
    ",": "ม",
    ".": "ใ",
    "'": "ง",
    "4": "ภ",
    "5": "ภ",
    "6": "ุ",
    "7": "ึ",
    "8": "ค",
    "9": "ต",
    "-": "ข",
    "=": "ช",
    ";": "ว",
    ":": "ซ",
    " ": " "
}








function t(){
    a = document.getElementById("mytext").value;
    b = a.length;
    th = "";
    for(var i=0; i<b; i++){
        console.log(a[i])
        c = engTotha[a[i]];
        console.log(c)
        th = th + c;
    }
    console.log(th)
    document.getElementById("o").innerHTML = th;
}

function copy(){
    const inputField = document.getElementById("o");
    const copyButton = document.getElementById("#copy");

    const text = inputField.innerHTML;
    navigator.clipboard.writeText(text);
}


