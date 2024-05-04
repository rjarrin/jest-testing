function analyzeArray(array) {
    const sum = array.reduce((acc, val) => acc + val, 0);
    const average = sum / array.length;
    const min = Math.min(...array);
    const max = Math.max(...array);
    return { average, min, max, length: array.length };
}

export default analyzeArray;
