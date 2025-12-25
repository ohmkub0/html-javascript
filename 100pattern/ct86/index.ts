type MaybeString = string | null | undefined;

function processString(value: NonNullable<MaybeString>) {
    console.log(value.toUpperCase);
}

const myString = null;

if (myString != null) {
    processString(myString);
}

const myString2 = "hello world";

processString(myString2);
