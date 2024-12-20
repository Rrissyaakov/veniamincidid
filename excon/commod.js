let character = 'a';

switch (true) {
    case (character >= 'a' && character <= 'z'):
        console.log(`${character} is a lowercase letter`);
        break;
    default:
        console.log(`${character} is not a lowercase letter`);
}
