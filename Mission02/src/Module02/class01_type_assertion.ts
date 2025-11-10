const convertkgtogm = (input: string | number): string | number | undefined => {
    if (typeof input === 'string') {
        const [value] = input.split('')
        return `kg to gm : ${Number(value) * 1000}`
    }
    if (typeof input === 'number') {
        return input * 1000
    }
    return undefined
}

console.log(convertkgtogm('2kg') as string);

type Error = {
    message: string
}
try {

} catch (err) {
    console.log((err as Error).message);
} finally {

}
