// function inc(arr, x, y) {
//   let a = false;
//   arr.forEach((value) => {
//     if (value[0] === x && value[1] === y) {
//       a = true;
//     }
//   });
//   return a;
// }

// function checkTraAlr(position) {
//   return inc(traAlr, position[0], position[1]);
// }

// let counter = 0;

// class Board {
//   constructor() {
//     this.board = [
//       ["x", "x", "x", "x", "x", "x", "x", "x"],
//       ["x", "x", "x", "x", "x", "x", "x", "x"],
//       ["x", "x", "x", "x", "x", "x", "x", "x"],
//       ["x", "x", "x", "x", "x", "x", "x", "x"],
//       ["x", "x", "x", "x", "x", "x", "x", "x"],
//       ["x", "x", "x", "x", "x", "x", "x", "x"],
//       ["x", "x", "x", "x", "x", "x", "x", "x"],
//       ["x", "x", "x", "x", "x", "x", "x", "x"],
//     ];
//   }

//   place(piece, x = 0, y = 0) {
//     this.board[x][y] = piece;

//     piece.position = [x, y];
//   }

//   move(piece, x, y) {
//     const poss = this.possibleMoves(piece);

//     if (x >= 0 && x < 8 && y >= 0 && y < 8 && inc(poss, x, y)) {
//       this.board[piece.position[0]][piece.position[1]] = "x";
//       this.board[x][y] = piece;
//       piece.position = [x, y];
//     } else if (piece.position[0] === x && piece.position[1] === y) {
//       console.log("same pos");
//     } else {
//       console.log("invalid input");
//     }
//   }

//   possibleMoves(position) {
//     const possibleMovesArr = this.board.map((arr) => arr.slice());
//     let poss = [
//       [position[0] + 2, position[1] + 1],
//       [position[0] + 2, position[1] - 1],
//       [position[0] - 2, position[1] + 1],
//       [position[0] - 2, position[1] - 1],
//       [position[0] + 1, position[1] + 2],
//       [position[0] + 1, position[1] - 2],
//       [position[0] - 1, position[1] - 2],
//       [position[0] - 1, position[1] + 2],
//     ];

//     poss = poss.filter(
//       (value) => value[0] >= 0 && value[0] < 8 && value[1] >= 0 && value[1] < 8
//     );

//     possibleMovesArr.forEach((value, ind) => {
//       for (let possCounter = 0; possCounter < poss.length; possCounter += 1) {
//         value.forEach((val, index) => {
//           if (ind === poss[possCounter][0] && index === poss[possCounter][1]) {
//             possibleMovesArr[index][ind] = "moves";
//           }
//         });
//       }
//     });
//     // this.printBoard(possibleMovesArr);
//     // poss.forEach((val) => console.log(val));
//     return poss;
//   }

//   printBoard(arr = this.board) {
//     let leftSide = 0;
//     let right = "    |";
//     for (let i = 0; i < 8; i += 1) {
//       right += `  ${i}  |`;
//     }
//     console.log(right);

//     arr.forEach((val) => {
//       let left = "";
//       left += `${leftSide}   |`;

//       val.forEach((value) => {
//         if (value === "x") {
//           left += `  ${value}  |`;
//         } else if (value === "moves") {
//           left += `${value}|`;
//         } else {
//           left += `${value.name}|`;
//         }
//       });
//       console.log(left);
//       leftSide += 1;
//     });
//   }

//   move2(position, x, y) {}

//   move2old(position, x, y) {
//     if (counter === 1000) return;
//     const newTree = new Tree(position);
//     console.log(newTree);
//     if (
//       !(
//         x >= 0 &&
//         x < 8 &&
//         y >= 0 &&
//         y < 8 &&
//         position[0] >= 0 &&
//         position[0] < 8 &&
//         position[1] >= 0 &&
//         position[1] < 8
//       )
//     ) {
//       console.log("not movable");
//       return;
//     }
//     console.log("movable");

//     const pos1 = this.possibleMoves(position);
//     console.log(pos1);
//     pos1.forEach((value, index) => {
//       newTree.root[index] = value;
//     });
//     console.log(newTree);
//     // console.log(inc(pos1, x, y));
//     if (inc(pos1, x, y)) {
//       console.log("YOU DID IT");
//       return;
//     }
//     counter += 1;
//     // pos1.forEach((val) => {
//     //   this.move2(val, x, y);
//     // });
//   }
// }

// class Knight {
//   constructor() {
//     this.name = "Knite";
//     this.position = null;
//   }
// }

// class Tree {
//   constructor(val) {
//     this.root = new Node(val);
//   }

//   isEmpty(emptyArray) {
//     if (Array.isArray(emptyArray) && emptyArray.length) return true;
//     return false;
//   }

//   levelOrder() {
//     const Q = [];
//     const levelOrderList = [];
//     if (this.root === null) return levelOrderList;
//     Q.push(this.root);
//     while (this.isEmpty(Q)) {
//       console.log(Q[0].data);
//       if (Q[0].left !== null) {
//         Q.push(Q[0].left);
//       }
//       if (Q[0].right !== null) {
//         Q.push(Q[0].right);
//       }
//       Q.shift();
//     }
//     if (levelOrderList.length > 0) return levelOrderList;
//   }

//   helper(position) {
//     const arr = gameBoard.possibleMoves(position);

//     const [a, b, c, d, e, f, g, h] = [
//       new Node(arr[0]),
//       new Node(arr[1]),
//       new Node(arr[2]),
//       new Node(arr[3]),
//       new Node(arr[4]),
//       new Node(arr[5]),
//       new Node(arr[6]),
//       new Node(arr[7]),
//     ];
//     const root = new Node(position, a, b, c, d, e, f, g, h);
//     return root;
//   }

//   buidlTree(position, Q = []) {
//     this.root = this.helper(position);
//     traAlr.push(position);
//     Q.push(this.root);
//     while (this.isEmpty(Q)) {
//       console.log(Q[0]);
//       if (
//         Q[0].a !== null &&
//         Q[0].a.data !== undefined &&
//         !checkTraAlr(Q[0].a.data)
//       ) {
//         if (Q[0].a.data[0] === 7 && Q[0].a.data[1] === 7) {
//           alert(Q[0].a.data);
//           return;
//         }
//         traAlr.push(Q[0].a.data);
//         Q[0].a = this.helper(Q[0].a.data);
//         Q.push(Q[0].a);
//       }
//       if (
//         Q[0].b !== null &&
//         Q[0].b.data !== undefined &&
//         !checkTraAlr(Q[0].b.data)
//       ) {
//         if (Q[0].b.data[0] === 7 && Q[0].b.data[1] === 7) {
//           alert(Q[0].b.data);
//           return;
//         }
//         traAlr.push(Q[0].b.data);
//         Q[0].b = this.helper(Q[0].b.data);
//         Q.push(Q[0].b);
//       }
//       if (
//         Q[0].c !== null &&
//         Q[0].c.data !== undefined &&
//         !checkTraAlr(Q[0].c.data)
//       ) {
//         if (Q[0].c.data[0] === 7 && Q[0].c.data[1] === 7) {
//           alert(Q[0].c.data);
//           return;
//         }
//         traAlr.push(Q[0].c.data);
//         Q[0].c = this.helper(Q[0].c.data);
//         Q.push(Q[0].c);
//       }
//       if (
//         Q[0].d !== null &&
//         Q[0].d.data !== undefined &&
//         !checkTraAlr(Q[0].d.data)
//       ) {
//         if (Q[0].d.data[0] === 7 && Q[0].d.data[1] === 7) {
//           alert(Q[0].d.data);
//           return;
//         }
//         traAlr.push(Q[0].d.data);
//         Q[0].d = this.helper(Q[0].d.data);
//         Q.push(Q[0].d);
//       }
//       if (
//         Q[0].e !== null &&
//         Q[0].e.data !== undefined &&
//         !checkTraAlr(Q[0].e.data)
//       ) {
//         if (Q[0].e.data[0] === 7 && Q[0].e.data[1] === 7) {
//           alert(Q[0].e.data);
//           return;
//         }
//         traAlr.push(Q[0].e.data);
//         Q[0].e = this.helper(Q[0].e.data);
//         Q.push(Q[0].e);
//       }
//       if (
//         Q[0].f !== null &&
//         Q[0].f.data !== undefined &&
//         !checkTraAlr(Q[0].f.data)
//       ) {
//         if (Q[0].f.data[0] === 7 && Q[0].f.data[1] === 7) {
//           alert(Q[0].f.data);
//           return;
//         }
//         traAlr.push(Q[0].f.data);
//         Q[0].f = this.helper(Q[0].f.data);
//         Q.push(Q[0].f);
//       }
//       if (
//         Q[0].g !== null &&
//         Q[0].g.data !== undefined &&
//         !checkTraAlr(Q[0].g.data)
//       ) {
//         if (Q[0].g.data[0] === 7 && Q[0].g.data[1] === 7) {
//           alert(Q[0].g.data);
//           return;
//         }
//         traAlr.push(Q[0].g.data);
//         Q[0].g = this.helper(Q[0].g.data);
//         Q.push(Q[0].g);
//       }
//       if (
//         Q[0].h !== null &&
//         Q[0].h.data !== undefined &&
//         !checkTraAlr(Q[0].h.data)
//       ) {
//         if (Q[0].h.data[0] === 7 && Q[0].h.data[1] === 7) {
//           alert(Q[0].h.data);
//           return;
//         }
//         traAlr.push(Q[0].h.data);
//         Q[0].h = this.helper(Q[0].h.data);
//         Q.push(Q[0].h);
//       }
//       Q.shift();
//     }
//   }

//   // buidlTree(position) {
//   //   if (position[0] === 7 && position[1] === 7) {
//   //     return;
//   //   }
//   //   if (position === undefined) return;
//   //   if (checkTraAlr(position)) {
//   //     return;
//   //   }
//   //
//   //   const arr = gameBoard.possibleMoves(position);

//   //   const [a, b, c, d, e, f, g, h] = [
//   //     arr[0],
//   //     arr[1],
//   //     arr[2],
//   //     arr[3],
//   //     arr[4],
//   //     arr[5],
//   //     arr[6],
//   //     arr[7],
//   //   ];

//   //   this.root = new Node(position, a, b, c, d, e, f, g, h);
//   //   const Q = [];
//   //   Q.push(position);

//   //   return this.root;
//   // }
// }
// class Node {
//   constructor(
//     data,
//     a = null,
//     b = null,
//     c = null,
//     d = null,
//     e = null,
//     f = null,
//     g = null,
//     h = null
//   ) {
//     this.data = data;
//     this.a = a;
//     this.b = b;
//     this.c = c;
//     this.d = d;
//     this.e = e;
//     this.f = f;
//     this.g = g;
//     this.h = h;
//   }
// }

// const gameBoard = new Board();
// const knight = new Knight();
// gameBoard.place(knight, 4, 4);
// const newTree = new Tree(knight.position);
// let coun = 0;
// let pla = 0;
// const traAlr = [];
// newTree.buidlTree(knight.position);
// console.log(findPath(newTree.root));
// console.log(newTree.root);

// function findPath(obj) {
//   const Q = [];
//   const levelOrderList = [];
//   Q.push(obj);
//   while (newTree.isEmpty(Q)) {
//     levelOrderList.push(Q[0].data);
//     for (const key in Q[0]) {
//       // console.log(`${key}: ${Q[0][key]}`);
//       if (
//         Q[0][key] !== null &&
//         Q[0][key].data !== undefined &&
//         JSON.stringify(key) !== JSON.stringify("data")
//       ) {
//         Q.push(Q[0][key]);
//       }
//     }

//     // if (Q[0].a !== null && Q[0].a.data !== undefined) {
//     //   Q.push(Q[0].a);
//     // }
//     // if (Q[0].b !== null && Q[0].b.data !== undefined) {
//     //   Q.push(Q[0].b);
//     // }
//     // if (Q[0].c !== null && Q[0].c.data !== undefined) {
//     //   Q.push(Q[0].c);
//     // }
//     // if (Q[0].d !== null && Q[0].d.data !== undefined) {
//     //   Q.push(Q[0].d);
//     // }
//     // if (Q[0].e !== null && Q[0].e.data !== undefined) {
//     //   Q.push(Q[0].e);
//     // }
//     // if (Q[0].f !== null && Q[0].f.data !== undefined) {
//     //   Q.push(Q[0].f);
//     // }
//     // if (Q[0].g !== null && Q[0].g.data !== undefined) {
//     //   Q.push(Q[0].g);
//     // }
//     // if (Q[0].h !== null && Q[0].h.data !== undefined) {
//     //   Q.push(Q[0].h);
//     // }

//     Q.shift();
//   }
//   return levelOrderList;
//   // levelOrder() {
//   //   const Q = [];
//   //
//   //   if (this.root === null) return levelOrderList;
//   //
//   //   while (this.isEmpty(Q)) {
//   //     console.log(Q[0].data);
//   //     if (Q[0].left !== null) {
//   //       Q.push(Q[0].left);
//   //     }
//   //     if (Q[0].right !== null) {
//   //       Q.push(Q[0].right);
//   //     }
//   //     Q.shift();
//   //   }
//   //   if (levelOrderList.length > 0) return levelOrderList;
//   // }
// }

// function hasPath(root, arr) {
//   // If root is NULL
//   // there is no path
//   if (root === null || root.data === undefined) return false;

//   // Push the node's value in 'arr'
//   arr.push(root.data);
//   console.log(root.data);

//   // If it is the required node
//   // return true
//   if (root.data[0] === 7 && root.data[1] === 7) return true;

//   // Else check whether the required node lies
//   // in the left subtree or right subtree of
//   // the current node
//   if (
//     hasPath(root.a, arr) ||
//     hasPath(root.b, arr) ||
//     hasPath(root.c, arr) ||
//     hasPath(root.d, arr) ||
//     hasPath(root.e, arr) ||
//     hasPath(root.f, arr) ||
//     hasPath(root.g, arr) ||
//     hasPath(root.h, arr)
//   )
//     return true;

//   // Required node does not lie either in the
//   // left or right subtree of the current node
//   // Thus, remove current node's value from
//   // 'arr'and then return false
//   arr.pop();
//   return false;
// }

// function printPath(root) {
//   // ArrayList to store the path
//   const arr = [];

//   // If required node 'x' is present
//   // then print the path
//   if (hasPath(root, arr)) {
//     for (let i = 0; i < arr.length - 1; i++) console.log(`${arr[i]}->`);
//     console.log(arr[arr.length - 1]);
//   }

//   // 'x' is not present in the binary tree
//   else document.write("No Path");
// }

// printPath(newTree.root);

// function knightMoves(position) {
//   if (checkTraAlr(position)) {
//     return;
//   }

//   if (position[0] === 7 && position[1] === 7) {
//     pla += 1;
//     return;
//   }
//   newTree.root = new Node(position);
//   coun += 1;
//   const a = gameBoard.possibleMoves(position);
//   traAlr.push(position);
//   a.forEach((position) => knightMoves(position));
// }

// gameBoard.printBoard();

// console.log(traAlr);
// console.log(coun);
