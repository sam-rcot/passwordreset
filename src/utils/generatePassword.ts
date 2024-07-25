const generatePassword = (useSymbols: boolean, useNumbers: boolean): string => {
    let password: string = "";
    const loop = (chars: string, passwordLength: number) => {
        for (let i = 0; i < passwordLength; i++) {
            const randomNumber: number = Math.floor(Math.random() * chars.length);
            password += chars[randomNumber];
        }
    };
    // const letters = () => {
    //     const chars: string =
    //         "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    //     loop(chars, useNumbers ? 10 : 12);
    // };
    // const numbers = () => {
    //     const chars: string = "0123456789";
    //     loop(chars, 3);
    // };
    // const symbols = () => {
    //     const chars: string = "-_!£";
    //     loop(chars, 2);
    // };
    const letters: string = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers: string = "0123456789";
    const symbols: string = "-_!£";

    const characters = (chars: string, length: number) => {
        loop(chars, length);
    }
    useNumbers ? characters(numbers, 2) : characters(letters, 2)
    useSymbols ? characters(symbols, 2) : characters(letters, 2)
    characters(letters, 10)
    // if (useNumbers) {
    //     characters(numbers, 2)
    // }
    // if (useSymbols) {
    //     characters(symbols, 2)
    // }
    // letters();
    // numbers();
    // symbols();

    return password
        .split("")
        .sort(function () {
            return 0.5 - Math.random();
        })
        .join("");
};

export default generatePassword