/*

After updateRecords(recordCollection, 5439, "artist", "ABBA"), artist should be the string ABBA
After updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me"), tracks should have the string Take a Chance on Me as the last and only element.
After updateRecords(recordCollection, 2548, "artist", ""), artist should not be set
After updateRecords(recordCollection, 1245, "tracks", "Addicted to Love"), tracks should have the string Addicted to Love as the last element.
After updateRecords(recordCollection, 2468, "tracks", "Free"), tracks should have the string 1999 as the first element.
After updateRecords(recordCollection, 2548, "tracks", ""), tracks should not be set
After updateRecords(recordCollection, 1245, "albumTitle", "Riptide"), albumTitle should be the string Riptide

*/

// Setup
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

function updateRecords(records, id, prop, value) {
  if(value === "") {
      delete records[id][prop];
      return records;
  }

  if(prop === "tracks") {
    if(!records[id].hasOwnProperty(prop)) {
      let arr = [];
      arr.push(value);
      records[id][prop] = arr;
      // console.log(records[id][prop]);
    } else if(records[id][prop].length === 0) {
      records[id][prop].push(value);
    } else {
      records[id][prop] === records[id][prop][0];
    } 
  } else {
    records[id][prop] = value;
  } 

  return records;
}

// 

updateRecords(recordCollection, 5439, 'artist', 'testing');

console.log(recordCollection);