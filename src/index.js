function runCode() {
    const resultDiv = document.getElementById("result");

    const randomArray = generateRandomArray(100, 1, 50);
    const { evenArray, oddArray } = splitArrayByIndex(randomArray);

    let result = "Array dengan jumlah index 100:\n" + randomArray.join(", ") + "\n\n";

    result += "Min, Max, Total, dan Rata-rata untuk Array Genap:\n";
    result += `- Min: ${getMin(evenArray)}\n`;
    result += `- Max: ${getMax(evenArray)}\n`;
    result += `- Total: ${getTotal(evenArray)}\n`;
    result += `- Rata-rata: ${getAverage(evenArray)}\n\n`;
    result += "Min, Max, Total, dan Rata-rata untuk Array Ganjil:\n";
    result += `- Min: ${getMin(oddArray)}\n`;
    result += `- Max: ${getMax(oddArray)}\n`;
    result += `- Total: ${getTotal(oddArray)}\n`;
    result += `- Rata-rata: ${getAverage(oddArray)}\n\n`;

    const comparison = compareArrays(evenArray, oddArray);
    result += comparison;

    resultDiv.innerHTML = `<pre>${result}</pre>`;
}

function generateRandomArray(size, minValue, maxValue) {
    const array = [];
    for (let i = 0; i < size; i++) {
        array.push(Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue);
    }
    return array;
}

function splitArrayByIndex(arr) {
    const evenArray = [];
    const oddArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            evenArray.push(arr[i]);
        } else {
            oddArray.push(arr[i]);
        }
    }
    return { evenArray, oddArray };
}

function getMin(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

function getMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

function getTotal(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}

function getAverage(arr) {
    return getTotal(arr) / arr.length;
}

function compareArrays(arrEven, arrOdd) {
    const evenMin = getMin(arrEven);
    const oddMin = getMin(arrOdd);
    const evenMax = getMax(arrEven);
    const oddMax = getMax(arrOdd);
    const evenTotal = getTotal(arrEven);
    const oddTotal = getTotal(arrOdd);
    const evenAvg = getAverage(arrEven);
    const oddAvg = getAverage(arrOdd);

    let comparison = "Perbandingan Nilai:\n";
    comparison += `- Min lebih besar: ${evenMin > oddMin ? 'Array Genap' : 'Array Ganjil'}\n`;
    comparison += `- Max lebih besar: ${evenMax > oddMax ? 'Array Genap' : 'Array Ganjil'}\n`;
    comparison += `- Total lebih besar: ${evenTotal > oddTotal ? 'Array Genap' : 'Array Ganjil'}\n`;
    comparison += `- Rata-rata lebih besar: ${evenAvg > oddAvg ? 'Array Genap' : 'Array Ganjil'}\n`;

    return comparison;
}