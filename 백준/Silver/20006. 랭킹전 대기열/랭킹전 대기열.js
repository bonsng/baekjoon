const fs = require("fs");
const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [N, ...input] = fs.readFileSync(filepath).toString().trim().split("\n");

const [p, m] = N.split(" ").map(Number);

class Room {
  constructor(player) {
    this.people = [player];
    this.max = player[0] + 10;
    this.min = player[0] - 10;
  }

  addPlayer(player) {
    this.people.push(player);
  }

  printPlayers() {
    let sentence = [this.people.length === m ? "Started!" : "Waiting!"];
    this.people.sort((a, b) => a[1].localeCompare(b[1]));
    this.people.forEach((player) => {
      let p = `${player[0]} ${player[1]}`;
      sentence.push(p);
    });
    return sentence;
  }
}

const rooms = [];

input.forEach((e) => {
  const line = e.split(" ");
  const [level, nickName] = [+line[0], line[1]];
  let flag = false;

  if (rooms.length === 0) {
    rooms.push(new Room([level, nickName]));
  } else {
    for (let i = 0; i < rooms.length; i++) {
      if (
        rooms[i].people.length < m &&
        rooms[i].max >= level &&
        rooms[i].min <= level
      ) {
        rooms[i].addPlayer([level, nickName]);
        flag = true;
        break;
      }
    }
    if (!flag) {
      rooms.push(new Room([level, nickName]));
    }
  }
});

let answer = [];
rooms.forEach((room) => answer.push(...room.printPlayers()));
console.log(answer.join("\n"));
