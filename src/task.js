const allTasks = []

class Task {

  constructor(description) {
    this.description = description

    allTasks.push(this)
  }

  static all() {
    return allTasks
  }
}
