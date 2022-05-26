const ctx = document.getElementById('canvas').getContext('2d')
const W = 1000
const H = 1000
const triangle = [
  { x: W / 2, y: 10 },
  { x: W - 10, y: H - 10 },
  { x: 10, y: H - 10 }
]

const drawPoint = (p) => {
  ctx.fillStyle = "#FF0"
  ctx.beginPath()
  ctx.arc(p.x, p.y, 0.05, 0, 2 * Math.PI)
  ctx.fill()
}

const getMidPoint = ({ x: x1, y: y1 }, { x: x2, y: y2 }) => {
  return { x: (x1 + x2) / 2, y: (y1 + y2) / 2 }
}

const drawPoints = (last) => {
  const randomPoint = triangle[rando(2)]
  // const randomPoint = triangle[Math.round(Math.random() * 2)]
  const midPoint = getMidPoint(last, randomPoint)
  drawPoint(midPoint)
  setTimeout(() => {
    drawPoints(midPoint)
  }, 1)
}

drawPoints(triangle[rando(2)])
// drawPoints(triangle[0])
