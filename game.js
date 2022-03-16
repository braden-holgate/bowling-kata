// Score 64 (simple game):
// const frames = [
//   [2, 0], [4, 2], [6, 0], [2, 4], [1, 5], [7, 0], [5, 2], [7, 0], [2, 6], [8, 1]
// ]
// Score 71 (with spares):
// const frames = [
//   [6, 1], [4, 0], [6, 4], [2, 7], [3, 5], [5, 0], [5, 5], [0, 0], [1, 6], [7, 2]
// // ]
// Score 104 (with spares and strikes):
const frames = [
  [6, 4],
  [8, 0],
  [10, 0],
  [2, 7],
  [5, 5],
  [4, 0],
  [10, 0],
  [2, 1],
  [2, 6],
  [4, 4],
]

// Score 119 (with spares, strikes and a double strike):
// const frames = [
//   [1, 2],
//   [6, 4],
//   [5, 4],
//   [10, 0],
//   [7, 2],
//   [10, 0],
//   [10, 0],
//   [5, 2],
//   [7, 0],
//   [4, 4],
// ]
//
// Score 141 (includes a strike on the last frame):
// const frames = [
//   [1, 2], [6, 4], [5, 4], [10, 0], [7, 2], [10, 0], [10, 0], [5, 2], [7, 0], [10, 10, 10]
// ]
//
// Score 300 (perfect game):
// const frames = [
//   [10, 0]ls [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 10, 10]
// ]

// loop through calculating the score for each frame
// if frame total != 10 {add simple total and push to totals array}
// if frame total == 10 {check if frame[0] == 10}
// if frame[0] != 10 { add the total from the current frame and the score from the first ball in the next frame and push to the totals array}
// if frame[0] == 10 { check if the next frame[x+1][0] is a 10}
// if that next frame is not a strike then add the totals of both frames together and push it to the totals array
// if that next frame is a strike then add the totals of the first two frames together with the score of the first ball in the
// third frame and push it to the totals array

let totals = []
let total = 0

function add(frame) {
  return frame[0] + frame[1]
}
function calcTotal(totals) {
  total = totals.reduce((acc, current) => acc + current, 0)
  return total
}

function calcFrame(frames) {
  for (let i = 0; i < frames.length; ++i) {
    // check if frame totals to 10 if it does not the push total to totals array
    add(frames[i]) < 10
      ? totals.push(add(frames[i]))
      : // if frame totals to 10, check if is a strike, if it is not then add the total from the current frame and the score from
      // the first ball in the next frame
      frames[i][0] != 10
      ? totals.push(add(frames[i]) + frames[i + 1][0])
      : // if that next frame is not a strike then add the totals of the two frames together and push it to the totals array
      frames[i + 1][0] != 10
      ? totals.push(add(frames[i]) + add(frames[i + 1]))
      : // if that next frame is a strike then add the totals from the first two frames and the first ball from the third frame and push to totals arr
        totals.push(add(frames[i]) + add(frames[i + 1]) + frames[i + 2][0])
  }
}

calcFrame(frames)
calcTotal(totals)
console.log(totals)
console.log(total)
