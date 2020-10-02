exports.min = function min (array)
{
  if (! array || !array.length) 
  {
  return 0;
  } else
{ var min = array[0];
for (var i = 0; i < array.length; i++) {
    if (min > array[i]) 
    min = array[i];
}
return min;
}
}

exports.max = function max (array) 
{if (! array || !array.length) 
    {
    return 0;
    } else
{
 var max = array[0]; // берем первый элемент массива
    for (var i = 0; i < array.length; i++) { // переберем весь массив
        // если элемент больше, чем в переменной, то присваиваем его значение переменной
        if (max < array[i]) max = array[i]; 
    }
    // возвращаем максимальное значение
    return max;
}
}

exports.avg = function avg (array) 
{
    if (! array || !array.length) 
    {
    return 0;
    } else
    {
    var total = 0;
    for (var i = 0; i < array.length; i++) 
     {
    total += array[i];
     }
    var avg = total / array.length;
    return avg;
    }
}
