
exports.min = function min (array) {
  let minNum = 0;
  
  if (array === undefined) {
    return 0;
  }

  for (i = 0; i < array.length; i++) {
    if (array[i] < minNum) {
      minNum = array[i];
    }
  }
  return array.length === 0 ? 0 : minNum;
}


exports.max = function max (array) {
  let maxNum = 0;
  
  if (array === undefined) {
    return 0;
  }

  for (i = 0; i < array.length; i++) {
    if (array[i] > maxNum) {
      maxNum = array[i];
    }
  }
  return array.length === 0 ? 0 : maxNum;
}


exports.avg = function avg (array) {
  let avgNum = 0;
  
  if (array === undefined) {
    return 0;
  }

  for (i = 0; i < array.length; i++) {
    avgNum = avgNum + array[i];
  }
  return array.length === 0 ? 0 : avgNum / array.length;
}

