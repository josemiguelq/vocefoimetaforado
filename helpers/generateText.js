import texts from './texts'

export function generate(mode='') {
    if (mode) {
        const textsInModes = texts[mode]
        return textsInModes[Math.floor(Math.random() * textsInModes.length)]
    }

    else return random()
}

export function random() {
    const list = Object.values(texts).flat();
    return list[Math.floor(Math.random() * list.length)]
  }