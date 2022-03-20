export const kolobok = (name) => {
    switch (name) {
        case "grandfather": 
            return "Ya ot dedushki ushel";
        case "grandmother": 
            return "Ya ot babushki ushel";
        case "hare": 
            return "Ya ot zaitsa ushel";
        case "wolf": 
            return "Ya ot volka ushel";
        case "bear": 
            return "Ya ot medvedya ushel";
        case "fox": 
            return "Lisa menya s`ela";
        default: 
            return "Net takogo personazha";
    }
};

export const newYear = (character) => {
  if (character === 'Ded Moroz' || character === 'Snegurochka') {
    const a = `${character}! ${character}! ${character}!`;
    return a;
  } else {
    return 'Wrong character';
  }
};

