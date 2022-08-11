const address = {
  'Tapas': 'Bangalore',
  'James': 'Huston',
  'Selva': 'Srilanka'
};
const addressMap = new Map(Object.entries(address));

// const object = Object.fromEntries(map)

const map = new Map();
map.set('milk', 200);
map.set("tea", 300);
map.set('coffee', 500);

console.log(Array.from(map));  
console.log([...map]);

const map2 = new Map();

map2.set("milk", 2)