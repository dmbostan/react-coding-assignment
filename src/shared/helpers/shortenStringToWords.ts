const shortenStringToWords = (input:string, maxWords: number) => {
    const words =  input.split(/\s+/);

    if (maxWords >= words.length) {
        return input;
    }

    const shortenedString = words.slice(0, maxWords).join(' ');

    return shortenedString + '...'; // Add ellipsis for indication that the string is shortened
}

export default shortenStringToWords;
