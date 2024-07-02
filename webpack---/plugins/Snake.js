class Cell {
    constructor(column = 0, row = 0, width = 16, height = 16) {
        this.width = window.innerWidth >= 768 ? width : 13
        this.height = window.innerWidth >= 768 ? height : 13
        this.column = column
        this.row = row
    }

    get x() {
        return this.column * this.width
    }

    get y() {
        return this.row * this.height
    }

    get key() {
        return this.column + ',' + this.row
    }

    setPosition(column, row) {
        this.column = column
        this.row = row
    }

    resize() {}
}
class WaveCell extends Cell {
    constructor() {
        super()
        this.offset = 2
    }

    get x() {
        return this.column * this.width + this.offset
    }

    get y() {
        return this.row * this.height + this.offset
    }

    get fillWidth() {
        return this.width - this.offset * 2
    }

    get fillHeight() {
        return this.height - this.offset * 2
    }
}

class Canvas {
    constructor(wrapper) {
        this.mouse = {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2,
        }
        this.offsets = {
            1920: 24,
            768: 16,
            320: 8,
        }
        this.parent = wrapper
        this.canvas = document.createElement('canvas')
        this.parent.appendChild(this.canvas)
        this.ctx = this.canvas.getContext('2d')
        this.width = this.parent.getBoundingClientRect().width
        this.height = this.parent.getBoundingClientRect().height
        this.templateCell = new Cell()
        this.sizes = {
            width: Math.floor(
                (this.parent.getBoundingClientRect().width - this.offset * 2) /
                this.templateCell.width
            ) * this.templateCell.width,
            height: Math.floor(
                this.parent.getBoundingClientRect().height / this.templateCell.width
            ) * this.templateCell.width,
        }
        this.canvas.width = this.sizes.width
        this.canvas.height = this.sizes.height
        this.rows = Math.floor(this.sizes.height / this.templateCell.height)
        this.columns = Math.floor(this.sizes.width / this.templateCell.width)

        this._resize()
        // this.startX =
        //   (this.sizes.width - this.columns * this.templateCell.width) / 2
        // this.startY = (this.sizes.height - this.rows * this.templateCell.width) / 2
    }

    get offset() {
        return window.innerWidth >= 1920 ?
            this.offsets['1920'] :
            window.innerWidth >= 768 ?
            this.offsets['768'] :
            this.offsets['320']
    }

    setMousePosition({
        x,
        y
    }) {
        this.mouse.x = x
        this.mouse.y = y
    }

    _resize() {
        this._positionCanvas()
        this.rows = Math.floor(this.sizes.height / this.templateCell.height)
        this.columns = Math.floor(this.sizes.width / this.templateCell.width)
    }

    _positionCanvas() {
        const parentBox = this.parent.getBoundingClientRect()
        this.sizes = {
            width: Math.floor(
                (parentBox.width - this.offset * 2) / this.templateCell.width
            ) * this.templateCell.width,
            height: Math.floor(parentBox.height / this.templateCell.width) *
                this.templateCell.width,
        }

        this.canvas.width = this.sizes.width
        this.canvas.height = this.sizes.height

        this.canvas.style.width = this.sizes.width + 'px'
        this.canvas.style.height = this.sizes.height + 'px'

        const offsetX = (parentBox.width - this.sizes.width) / 2
        const offsetY = (parentBox.height - this.sizes.height) / 2
        this.canvas.style.left = offsetX + 'px'
        this.canvas.style.top = offsetY + 'px'
    }
}

class Grid extends Canvas {
    constructor(canvas) {
        super(canvas)
        this.strokeStyle = '#383838'
        this.lineWidth = 1
        this.drawGrid()
    }

    drawGrid() {
        let width = 0
        let height = 0
        this.ctx.strokeStyle = this.strokeStyle
        while (width < this.sizes.width) {
            this.ctx.moveTo(width, 0)
            this.ctx.lineTo(width, this.sizes.height)
            width += this.templateCell.width
        }
        while (height < this.sizes.height) {
            this.ctx.moveTo(0, height)
            this.ctx.lineTo(this.sizes.width, height)
            height += this.templateCell.height
        }
        this.ctx.stroke()
    }

    resize() {
        this._resize()
        this.drawGrid()
    }
}

class Snake extends Canvas {
    constructor(canvas, {
        snakeLength = 10,
        infiniteMode = false,
        speedMultiplier = 1
    }) {
        super(canvas)
        this.requestAnimationFrame = null
        this.speedMultiplier = speedMultiplier
        this.lastTime = Date.now()
        this.bgColor = '#101011'
        this.snakeColor = '#32A4C3'
        this.isRun = false
        this.currentCell = new Cell(
            Math.floor(this.columns / 2),
            Math.floor(this.rows / 2)
        )
        this.cells = []
        this.snakeLength = snakeLength
        if (window.innerWidth < 768) {
            this.snakeLength = 0
        }
        this.infiniteMode = infiniteMode

        this.render()
    }

    get speed() {
        return (1 / this.speedMultiplier) * 16.7
    }

    setSpeed(speed) {
        if (speed > 1) {
            this.speedMultiplier = 1
        } else {
            this.speedMultiplier = speed
        }
    }

    setInfiniteMode(flag) {
        this.infiniteMode = flag
    }

    setSnakeLength(length) {
        this.snakeLength = length
    }

    render() {
        if (window.innerWidth < 768) {
            return
        }

        /**
         *  uncomment for reset game on mouse leave canvas
         */
        // this.isOnGame()

        if (this.isRun) {
            this.tick()
        }
        this.requestAnimationFrame = requestAnimationFrame(this.render.bind(this))
    }

    tick() {
        const currentTime = Date.now()
        const elapsedTime = currentTime - this.lastTime
        if (elapsedTime >= this.speed || this.speedMultiplier === 1) {
            this.lastTime = currentTime
            this.calculateNextCell()
            if (this.infiniteMode) {
                this.drawCell(this.currentCell)
            } else {
                this.drawSnake()
            }
        }
    }

    isOnGame() {
        if (
            this.mouse.x < 0 ||
            this.mouse.x > this.sizes.width ||
            this.mouse.y < 0 ||
            this.mouse.y > this.sizes.height
        ) {
            this.stop()
            this.restart()
        } else {
            this.start()
        }
    }

    drawCell(cell) {
        this.ctx.fillStyle = this.snakeColor
        this.ctx.fillRect(cell.x, cell.y, cell.width, cell.height)
    }

    drawSnake() {
        this.ctx.fillStyle = this.snakeColor
        this.ctx.clearRect(0, 0, this.sizes.width, this.sizes.height)
        for (const cell of this.cells) {
            this.ctx.fillRect(cell.x, cell.y, cell.width, cell.height)
        }
    }

    calculateNextCell() {
        const diffX = Math.floor(
            (this.mouse.x - this.currentCell.x) / this.templateCell.width
        )
        const diffY = Math.floor(
            (this.mouse.y - this.currentCell.y) / this.templateCell.height
        )
        let cell
        if (Math.abs(diffX) < Math.abs(diffY) && diffX !== 0) {
            const nextColumn = Math.sign(diffX)
            cell = new Cell(
                this.currentCell.column + nextColumn,
                this.currentCell.row
            )
        } else if (diffY !== 0) {
            const nextRow = Math.sign(diffY)
            cell = new Cell(this.currentCell.column, this.currentCell.row + nextRow)
        } else {
            const nextColumn = Math.sign(diffX)
            cell = new Cell(
                this.currentCell.column + nextColumn,
                this.currentCell.row
            )
        }
        this.cells.push(cell)
        if (this.cells.length >= this.snakeLength) {
            this.cells = this.cells.slice(1, this.snakeLength)
        }

        this.currentCell = cell
    }

    clearCanvas() {
        this.ctx.fillStyle = this.bgColor
        this.ctx.clearRect(0, 0, this.sizes.width, this.sizes.height)
    }



    resize() {
        this._resize()
        this.restart()
    }

    restart() {
        this.clearCanvas()
        this.currentCell = new Cell(
            Math.floor(this.columns / 2),
            Math.floor(this.rows / 2)
        )
        this.cells = []
    }

    stop() {
        this.isRun = false
        this.clearCanvas()
        this.currentCell = new Cell(
            Math.floor(this.columns / 2),
            Math.floor(this.rows / 2)
        )
    }

    start() {
        this.isRun = true
    }

    destroy() {
        if (this.requestAnimationFrame) {
            cancelAnimationFrame(this.requestAnimationFrame)
        }
    }

}

class Wave extends Canvas {
    constructor(canvas) {
        super(canvas)
        this.bgColor = 'rgba(16,16,17,0.4)'
        this.cellColor = 'white'
        this.raf = null
        this.lastTime = 0
        this.speedMultiplier = 1
        this.isRunning = false
        this.currentColumn = 0
        this.clickHandler = this._clickHandler.bind(this)
        window.addEventListener('click', this.clickHandler)
    }

    destroy() {
        if (this.raf) {
            cancelAnimationFrame(this.raf)
        }
        window.removeEventListener('click', this.clickHandler)
    }

    setSpeed(value) {
        if (value > 1) {
            this.speedMultiplier = 1
        } else {
            this.speedMultiplier = value
        }
    }

    get speed() {
        return (1 / this.speedMultiplier) * 16.7
    }

    _render() {
        // this.currentColumn = 0
        // if(!this.isRunning || this.currentColumn > this.columns * 2) {
        //   this.currentColumn = 0
        //   this.isRunning = false
        //   return
        // }
        this.raf = requestAnimationFrame(this._render.bind(this))
        const currentTime = Date.now()
        const elapsedTime = currentTime - this.lastTime
        if (elapsedTime >= this.speed || this.speedMultiplier === 1) {
            this._tick()
            this.lastTime = currentTime
            this.currentColumn++
        }
    }

    _tick() {
        this._fillCanvas()
        this._animateWaveColumn(this.currentColumn)
    }

    resize() {
        this._resize()
    }

    _fillCanvas() {
        this.ctx.fillStyle = this.bgColor
        this.ctx.fillRect(0, 0, this.sizes.width, this.sizes.height)
    }

    _animateWaveColumn(column) {
        let rows = []
        const center = {
            column: Math.floor(this.columns / 2),
            row: Math.floor(this.rows / 2),
        }

        if (column === center.column - 5) {
            rows = [center.row - 2]
        }
        if (column === center.column - 4) {
            rows = [center.row - 2, center.row - 1, center.row, center.row + 1]
        }
        if (column === center.column - 3) {
            rows = [center.row - 2]
        }
        if (column === center.column - 2) {
            rows = [center.row - 2, center.row - 1, center.row, center.row + 1]
        }
        if (column === center.column - 1) {
            rows = [center.row - 2, center.row]
        }
        if (column === center.column) {
            rows = [center.row - 2]
        }
        if (column === center.column + 1) {
            rows = [center.row - 2, center.row - 1, center.row, center.row + 1]
        }
        if (column === center.column + 2) {
            rows = [center.row - 2]
        }
        if (column === center.column + 3) {
            rows = [center.row - 2, center.row - 1, center.row, center.row + 1]
        }
        if (column === center.column + 4) {
            rows = [center.row + 1]
        }
        for (let i = 0; i < this.rows; i++) {
            if (rows.includes(i)) continue
            const cell = new WaveCell()
            cell.setPosition(column, i)
            this.ctx.fillStyle = this.cellColor
            this.ctx.fillRect(cell.x, cell.y, cell.fillWidth, cell.fillHeight)
        }
    }


    _animateWave() {
        if (!this.isRunning) {
            this._render()
        }
        this.isRunning = true
        this.lastTime = Date.now()
        this.currentColumn = 0

    }

    _clickHandler() {
        const randomCell = {
            column: Math.floor(Math.random() * this.columns),
            row: Math.floor(Math.random() * this.rows)
        }
        const clickTarget = {
            column: Math.floor(this.mouse.x / this.templateCell.width),
            row: Math.floor(this.mouse.y / this.templateCell.height)
        }
        if (clickTarget.column === randomCell.column && clickTarget.row === randomCell.row) {
            this._animateWave()
        }
    }
}

export {
    Grid,
    Snake,
    Wave
}