export const sum = (a: number, b: number): number => {
    return a + b;
}

export const subtract = (a: number, b: number): number => {
    return a - b;
}

export const multiply = (a: number, b: number): number => {
    return a * b;
}

export const divide = (a: number, b: number): number | string => {
    if (b === 0) {
        return "Cannot divide by zero";
    }
    return a / b;
}