import PubSub from "./pubSub"

class Connected extends PubSub {
  constructor() {
    super()
    console.log(this)
  }
}

new Connected()
