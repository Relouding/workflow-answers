// 1.
enum GameGenre {
    Action = "ACTION",
    Adventure = "ADVENTURE",
    Sport = "SPORT",
}

// 2.
interface Game {
    name: string;
    genre: GameGenre;
    onlinePlay?: boolean;
  }

// 3.
function createGame(
  name: string,
  genre: GameGenre,
  onlinePlay: boolean = false
): Game {
  {
    console.log("=============");
    console.log("Game created:");
    console.log("-------------");
    console.log("Name:", name);
    console.log("Genre:", genre);
    console.log("Online play:", onlinePlay);
  }
  return {
    name,
    genre,
    onlinePlay,
  };
}

// 4.
createGame ("Fun action game", GameGenre.Action);
createGame ("Fun adventure game", GameGenre.Adventure, true);