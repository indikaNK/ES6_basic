let map = new Map();

map.set("fname",'indika');
map.set("age",'28');

console.log(map.get('fname'));

let obj1 = {}

let names = {
    "America":"captain",
    "France":"soldire"
}


map.set(obj1,names.America);
let size = map.size
console.log(size);

// map.delete('fname')
console.log(map.size);
console.log(map.get(obj1));

map.set("other names","NK");

//iterate over a map - get keys
for(let k of map.keys()){
    console.log(k)
}

//iterate over a map - get values
for(let v of map.values()){
    console.log(v)
}

//iterate over a map - get keys and values
for(let entry of map.entries()){
    console.log(`${entry[0]} -> ${entry[1]}`)
}

//iterate over a map - get keys and values
for(let [key ,value] of map.entries()){
    console.log(`${key} -> ${value}`)
}
