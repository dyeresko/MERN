function firstUnique(array)
{
    return result = array.find(x => array.indexOf(x) === array.lastIndexOf(x));
}
console.log(firstUnique([1,2,3,2,1,3,4,5,5])); 