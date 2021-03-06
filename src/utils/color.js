// rgb转hex
export function convertRgbToHex(r, g, b) {
    r = Math.max(Math.min(Number(r), 100), 0) * 2.55;
    g = Math.max(Math.min(Number(g), 100), 0) * 2.55;
    b = Math.max(Math.min(Number(b), 100), 0) * 2.55;
    r = ("0" + (Math.round(r) || 0).toString(16)).slice(-2);
    g = ("0" + (Math.round(g) || 0).toString(16)).slice(-2);
    b = ("0" + (Math.round(b) || 0).toString(16)).slice(-2);
    let hex = "#" + r + g + b;
    return hex;
  }