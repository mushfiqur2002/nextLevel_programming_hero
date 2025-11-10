"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const convertkgtogm = (input) => {
    if (typeof input === 'string') {
        const [value] = input.split('');
        return `kg to gm : ${Number(value) * 1000}`;
    }
    if (typeof input === 'number') {
        return input * 1000;
    }
    return undefined;
};
console.log(convertkgtogm('2kg'));
try {
}
catch (err) {
    console.log(err.message);
}
finally {
}
//# sourceMappingURL=class01_type_assertion.js.map