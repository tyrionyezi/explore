function myPermutation(str) {
    if (str.length === 0) {
        console.log('The string you input have No length!');
        return;
    }
    if (str.length === 1) {
        console.log('The result array is: ' + str, '-&- The array length is: ' + str.length);
        return;
    }
    var arrayStr = str.split('');
    var transArray = [];
    transArray.push(arrayStr[0]);
    var resultArray = [];
    for (var i = 1; i < arrayStr.length; i++) {
        resultArray = [];
        var addChar = arrayStr[i];
        for (var j = 0; j < transArray.length; j++) {
            var toBeInsertStr = transArray[j];
            var toBeInsertStrArray = toBeInsertStr.split('');
            for (var k = 0; k <= transArray[j].length; k++) {
                tempArray = toBeInsertStrArray.concat();
                var insertedArray = toBeInsertStrArray.splice(k, 0, addChar);
                var transArrayItem = toBeInsertStrArray.join('');
                resultArray.push(transArrayItem);
                toBeInsertStrArray = tempArray.concat();
            }
        }
        transArray = [];
        transArray = resultArray.concat();
    }
    console.log('The result array is: ' + resultArray, '-&- The array length is: ' + resultArray.length);
}

myPermutation('abcd');

