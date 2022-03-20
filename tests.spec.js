import { kolobok, newYear } from "./src/homework4.js";

describe ("testing kolobok function", () => {

    test ('import w/o errors', () => {
        expect(kolobok).toBeDefined();
    });

    test ('is function', () => {
        expect(typeof kolobok).toBe('function');
    });
    test ('granpa', () => {
        const result = "Ya ot dedushki ushel";
        expect(kolobok('grandfather')).toBe(result);
    });
    
    test ('grandma', () => {
        const result = "Ya ot babushki ushel";
        expect(kolobok('grandmother')).toBe(result);
    });

    test ('hear', () => {
        const result = "Ya ot zaitsa ushel";
        expect(kolobok('hare')).toBe(result);
    });

    test ('wolf', () => {
        const result = "Ya ot volka ushel";
        expect(kolobok('wolf')).toBe(result);
    });

    test ('bear', () => {
        const result = "Ya ot medvedya ushel";
        expect(kolobok('bear')).toBe(result);
    });

    test ('fox', () => {
        const result = "Lisa menya s`ela";
        expect(kolobok('fox')).toBe(result);
    });

    test ('random', () => {
        const result = "Net takogo personazha";
        expect(kolobok(Math.random().toString(36).replace(/[^a-z]+/g, ''))).toBe(result);
    });
    
});

describe ("testing newYear function", () => {
    test ('import w/o errors', () => {
        expect(newYear).toBeDefined();
    });

    test ('is function', () => {
        expect(typeof newYear).toBe('function');
    });

    test ('wrong', () => {
        const result = "Wrong character";
        expect(newYear(Math.random().toString(36).replace(/[^a-z]+/g, ''))).toBe(result);
    });
    
    test ('Snegurochka', () => {
        const result = "Snegurochka";
        expect(newYear("Snegurochka")).toBe(`${result}! ${result}! ${result}!`);
    });

    test ('Ded', () => {
        const result = "Ded Moroz";
        expect(newYear("Ded Moroz")).toBe(`${result}! ${result}! ${result}!`);
    });
});
