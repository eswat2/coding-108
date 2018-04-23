// Traffic Light
// 1. Look somewhat like a traffic light
//       red
//       yellow
//       green
// 2. Behave like a traffic light
//       click = state change
//          red --> green
//          green --> yellow
//          yellow --> red
//
const DELAY = 2000
const app = new Vue({
  el: '#app',
  data: {
    activeIndx: 0,
    states: ['bg-red', 'bg-yellow', 'bg-green'],
    stop: true,
    tick: 0
  },
  methods: {
    active: function(color) {
      const current = this.states[this.activeIndx]
      return color == current ? [current] : ['bg-gray']
    },
    clear: function() {
      this.stop = true
      this.tick = 0
      this.activeIndx = 0
    },
    next: function() {
      const vm = this
      setTimeout(function() { vm.step() }, DELAY)
    },
    run: function() {
      this.stop = false
      this.step()
    },
    step: function() {
      if (!this.stop) {
        this.tick += 1
        this.activeIndx -= 1
        if (this.activeIndx < 0) {
          this.activeIndx = 2
        }
        this.next()
      }
    }
  }
})
