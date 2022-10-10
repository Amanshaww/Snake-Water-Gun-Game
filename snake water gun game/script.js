let user = prompt("choose snake,water,gun")
let comp = Math.floor(Math.random() * 3)
let cpu = ['snake', 'water', 'gun'][comp]
const match = (cpu, user) => {
  if (cpu == user) {
    return "tie"
  }
  else if (cpu == 'snake' && user == 'water') {
    return "cpu"
  }
  else if (cpu == 'snake' && user == 'gun') {
    return "user"
  }
  else if (cpu == 'water' && user == 'gun') {
    return "cpu"
  }
  else if (cpu == 'water' && user == 'snake') {
    return "user"
  }
  else if (cpu == 'gun' && user == 'snake') {
    return "cpu"
  }
  else if (cpu == 'gun' && user == 'water') {
    return "user"
  }
}
let result = match(cpu, user)
document.write(`cpu choose ${cpu} and user choose ${user} \n The winner is ${result}`)

