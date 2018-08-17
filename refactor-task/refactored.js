function func(s, a, b) {

  if (s.match(/^$/)) {
    return -1;
  }

  var i = s.length -1;
  var aIndex =     -1;
  var bIndex =     -1;

  while ((aIndex == -1) && (bIndex == -1) && (i > 0)) {
    if (s.substring(i, i +1) == a) {
      aIndex = i;
    }
    if (s.substring(i, i +1) == b) {
      bIndex = i;
    }
    i = i - 1;
  }

  if (aIndex != -1) {
    if (bIndex == -1) {
      return aIndex;
    }
    else {
      return Math.max(aIndex, bIndex);
    }
  }

  if (bIndex != -1) {
    return bIndex;
  }
  else {
    return -1;
  }
}

// Рефактор

//
// Функция возвращает индекс последнего вхождения переданных символов в строку,
// если первая строка пустая или не является строкой, или если один из искомых символов пустой - функция вернет "-1"
//
function getCharsLastIndex(string, charA, charB) {
  if (!string || typeof string !== 'string' || !charA || !charB) {
    return -1;
  }

  const indexA = string.lastIndexOf(charA);
  const indexB = string.lastIndexOf(charB);

  return Math.max(indexA, indexB);
}

//
// Можно доработать функцию так, чтобы она принимала не только два символа
//
function getCharsLastIndexModified(string, ...chars) {
  if (!string || typeof string !== 'string' || !chars.length || chars.some(char => !char)) {
    return -1;
  }

  const indexes = chars.map(char => string.lastIndexOf(char));

  return Math.max(...indexes);
}
