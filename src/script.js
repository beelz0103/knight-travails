function isEmpty(emptyArray) {
  if (Array.isArray(emptyArray) && emptyArray.length) return true;
  return false;
}

function isEqual(firstArray, secondArray) {
  return JSON.stringify(firstArray) === JSON.stringify(secondArray);
}

function possibleMoves(position) {
  let nextMoveList = [
    [position[0] + 2, position[1] + 1],
    [position[0] + 2, position[1] - 1],
    [position[0] - 2, position[1] + 1],
    [position[0] - 2, position[1] - 1],
    [position[0] + 1, position[1] + 2],
    [position[0] + 1, position[1] - 2],
    [position[0] - 1, position[1] - 2],
    [position[0] - 1, position[1] + 2],
  ];

  nextMoveList = nextMoveList.filter(
    (value) => value[0] >= 0 && value[0] < 8 && value[1] >= 0 && value[1] < 8
  );

  return nextMoveList;
}

function checkHasTravelled(position, array) {
  for (let i = 0; i < array.length; i += 1) {
    if (isEqual(array[i], position)) {
      return true;
    }
  }
  return false;
}

function knightMoves(starPos = [0, 0], endPos = [7, 7]) {
  const Queue = [];
  const travelled = [];
  const moves = {};
  moves[starPos] = null;
  travelled.push(starPos);
  Queue.push(starPos);
  while (isEmpty(Queue)) {
    const nextMoveList = possibleMoves(Queue[0]);

    for (let i = 0; i < nextMoveList.length; i += 1) {
      if (!checkHasTravelled(nextMoveList[i], travelled)) {
        if (isEqual(nextMoveList[i], endPos)) {
          [moves[nextMoveList[i]]] = Queue;
          return moves;
        }
        [moves[nextMoveList[i]]] = Queue;
        travelled.push(nextMoveList[i]);
        Queue.push(nextMoveList[i]);
      }
    }
    Queue.shift();
  }

  return moves;
}

function getShortestRoute(start, end) {
  const moves = knightMoves(start, end);
  const routeArray = [];
  let endPos = end;
  routeArray.push(endPos);

  while (!isEqual(endPos, start)) {
    const key = endPos;
    const newKey = moves[key];
    endPos = newKey;
    routeArray.push(endPos);
  }
  console.log("SOLUTION FROM FUNCTION BELOW");
  routeArray.reverse();
  routeArray.forEach((val) => console.log(val));
  return routeArray;
}

getShortestRoute([0, 0], [1, 1]);
