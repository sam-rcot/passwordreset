const generatePassword = (): string => {
    let password: string = "";
    const loop = (chars: string, passwordLength: number) => {
        for (let i = 0; i < passwordLength; i++) {
            const randomNumber: number = Math.floor(Math.random() * chars.length);
            password += chars[randomNumber];
        }
    };
    const letters = () => {
        const chars: string =
            "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        loop(chars, 10);
    };
    const numbers = () => {
        const chars: string = "0123456789";
        loop(chars, 3);
    };
    const symbols = () => {
        const chars: string = "-_!£";
        loop(chars, 2);
    };

    letters();
    numbers();
    symbols();

    return password
        .split("")
        .sort(function () {
            return 0.5 - Math.random();
        })
        .join("");
};

export default generatePassword