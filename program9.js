let x = 'test task';
x = x.split(" ");
result = [];
for (let i = 0; i < x.length; i++) {
    result.push(x[i][0].toUpperCase() + x[i].slice(1));    
}
console.log(result.join(" "));
