// const value: unknown = getValue();
// const name = (value as string).toUpperCase();

function assertIsString(value: unknown): asserts value is string {
    if (typeof value !== 'string') throw new Error('not a string');
}

const value: unknown = 'john doe';
assertIsString(value);
const fullname = value.toUpperCase();
console.log(fullname);