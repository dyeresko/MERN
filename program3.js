function toPromise(foo, args){
    return new Promise(function(resolve) {
        resolve(foo(...args, console.log));
    })
}

function asyncPlus(x, y, cb){
  setTimeout(() => cb(x + y), 1000)
}
toPromise(asyncPlus, [1,2]).then(console.log);