const generatePassword = (useSymbols: boolean, useNumbers: boolean, length: number): string => {
    let password: string = "";
    const loop = (chars: string, passwordLength: number) => {
        for (let i = 0; i < passwordLength; i++) {
            const randomNumber: number = Math.floor(Math.random() * chars.length);
            password += chars[randomNumber];
        }
    };
    const chars = {
        letters: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
        numbers: "0123456789",
        symbols: "-_!£"
    }
    const {letters, numbers, symbols} = chars;
    const allChars = `${letters}${numbers}${symbols}`;
    const characters = (chars: string, length: number) => {
        loop(chars, length);
    }
    characters(letters, length - 4)
    useNumbers ? characters(numbers, 2) : characters(letters, 2)
    useSymbols ? characters(symbols, 2) : characters(letters, 2)

    password.length < length ? characters(allChars, length - password.length) : password = password.slice(0, length)
    return password
        .split("")
        .sort(function () {
            return 0.5 - Math.random();
        })
        .join("");
};

export default generatePassword