function binaryAgent(str) {
    
    str = str.split(" ");
    let sentence = "";

    const asciiMap = {
        "01000001": "A", "01001001": "I", "01000110": "F", "01000011": "C",
        "01100010": "b", "01100101": "e", "01101110": "n", "01110100": "t",
        "01101111": "o", "01100110": "f", "01101001": "i", "01110011": "s",
        "01110101": "u", "01101100": "l", "01110110": "v", "01101101": "m",
        "01110000": "p", "01110010": "r", "00100111": "'", "00100001": "!",
        "00111111": "?", "00100000": " ", "01100100": "d", "01100001": "a"}

    for (let x = 0; x < str.length; x++) {
        sentence += asciiMap[str[x]];
    }
    return sentence;
  }