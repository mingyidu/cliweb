
class Queen {
  constructor (option) {
    this.row = option.row
    this.column = option.column
    this.lands = option.lands
    this.r_index = option.r_index
    this.c_index = option.c_index

    this.name = 'queen' + option.r_index
    this.killer = 'killer' + option.r_index
  }

  // 全面开火
  // eslint-disable-next-line camelcase
  all_fire (open) {
    this.kill_45du(open)
    this.kill_row(open)
    this.kill_column(open)
    this.lands[this.r_index][this.c_index] = open ? this.name : undefined
    return this
  }
  // 横向杀敌
  // eslint-disable-next-line camelcase
  kill_row (open) {
    for (let i = 0; i < this.column; i++) {
      let member = this.lands[this.r_index][i]
      let soldier = open ? this.killer : undefined
      if ((open && member === undefined) ||
        (!open && member === this.killer)) {
        this.lands[this.r_index][i] = soldier
      }
    }
  }
  // 竖向杀敌
  // eslint-disable-next-line camelcase
  kill_column (open) {
    for (let i = 0; i < this.row; i++) {
      let member = this.lands[i][this.c_index]
      let soldier = open ? this.killer : undefined
      if ((open && member === undefined) ||
        (!open && member === this.killer)) {
        this.lands[i][this.c_index] = soldier
      }
    }
  }
  // 45°杀敌
  // eslint-disable-next-line camelcase
  kill_45du (open) {
    let soldier = open ? this.killer : undefined
    // 上左45°
    for (let i = this.r_index - 1, c = this.c_index - 1; i >= 0 && c >= 0; i--) {
      let member = this.lands[i][c - 1]
      if ((open && member === undefined) ||
        (!open && member === this.killer)) {
        this.lands[i][c--] = soldier
      }
    }
    // 下左45°
    for (let i = this.r_index + 1, c = this.c_index - 1; i < this.row && c >= 0; i++) {
      let member = this.lands[i][c - 1]
      if ((open && member === undefined) ||
        (!open && member === this.killer)) {
        this.lands[i][c--] = soldier
      }
    }
    // 上右45°
    for (let i = this.r_index - 1, c = this.c_index + 1; i >= 0 && c < this.column; i--) {
      let member = this.lands[i][c + 1]
      if ((open && member === undefined) ||
        (!open && member === this.killer)) {
        this.lands[i][c++] = soldier
      }
    }
    // 下右45°
    for (let i = this.r_index + 1, c = this.c_index + 1; i < this.row && c < this.column; i++) {
      let member = this.lands[i][c + 1]
      if ((open && member === undefined) ||
        (!open && member === this.killer)) {
        this.lands[i][c++] = soldier
      }
    }
  }
}

class War {
  constructor (option) {
    this.pease = []
    this.row = option.row
    this.column = option.column
    this.init_lands = Array.from(Array(this.row), () => Array(this.column))
  }

  // 模拟各种战役 返回和平结果
  // eslint-disable-next-line camelcase
  all_war () {
    this.make_war({
      pease: this.pease,
      queens: {0: 0},
      r_index: 0,
      row: this.row,
      column: this.column,
      lands: this.init_lands
    })

    return this.pease
  }

  // 开战
  // eslint-disable-next-line camelcase
  make_war (option) {
    for (let _c = 0; _c < option.column; _c++) {
      if (Object.is(option.lands[option.r_index][_c], undefined)) {
        option.c_index = _c
        let queen = new Queen(option).all_fire(true)

        option.queens[option.r_index] = _c
        if (option.r_index + 1 < option.row && option.lands[option.r_index + 1].includes(undefined)) {
          let _option = Object.assign({}, option, {r_index: option.r_index + 1})
          this.make_war(_option)
        } else {
          if (option.r_index + 1 === option.row) {
            option.pease.push(Object.assign({}, option.queens))
          }
          queen.all_fire(false)
          delete option.queens[option.r_index]
        }
      }
    }
  }
}

export {Queen: Queen}
