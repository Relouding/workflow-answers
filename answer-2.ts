// 1.
enum GameGenre {
    Action,
    Adventure,
    Sport,
}

// 2.
interface Game {
    name: string;
    genre: GameGenre;
    onlinePlay?: boolean;
  }

// 3.
function createGame(name: Game, genre: Game, onlinePlay: boolean = false) {
  return {
    name,
    genre,
    onlinePlay,
  };
    console.log('=============');
    console.log('Game created:');
    console.log('-------------');
    console.log('Name:', name);
    console.log('Genre:', genre);
    console.log('Online play:', onlinePlay);
  }

// 4.
createGame ({name: "Fun action game", genre: GameGenre.Action });
createGame ({name: "Fun adventure game", genre: GameGenre.Adventure, onlinePlay: true });