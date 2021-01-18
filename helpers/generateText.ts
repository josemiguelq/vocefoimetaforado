import texts from "./texts";

export type ModeType = keyof typeof texts;

export const modeTypes = [
  ["sadness", "Tristeza"],
  ["fear", "Medo"],
  ["happiness", "Felicidade"],
  ["rage", "Raiva"],
  ["scorn", "Nojo"],
  ["tedio", "Tédio"]
] as const;

export function generate(mode?: ModeType) {
  if (mode) {
    const textsInModes = texts[mode];
    return textsInModes[Math.floor(Math.random() * textsInModes.length)];
  }
  return random();
}

export function random() {
  const list = Object.values(texts).flat();
  return list[Math.floor(Math.random() * list.length)];
}
