export function getRandomElement<T>(array: T[]): T | undefined {
    return array.length ? array[Math.floor(Math.random() * array.length)] : undefined;
}