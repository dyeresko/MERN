function removeDuplicate(array)
{
    return [...new Set(array.split(""))].join("")
}


let x = "Int32 Int32 Int32 Int32 Int32 Int32 Int32 Int32 Int32 Double Double Double";
console.log(removeDuplicate(x));