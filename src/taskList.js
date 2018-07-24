class TaskList {

  static createTask(e) {
    e.preventDefault()
    const taskDesc = e.target['new-task-description'].value
    e.target['new-task-description'].value = ""
    const newTask = new Task(taskDesc)

    const taskLi = document.createElement('li')
    taskLi.innerHTML = `
      <p>${newTask.description}<button class='dlt-btn'>x</button></p>
    `

    taskLi.querySelector('button').addEventListener('click', TaskList.deleteTask)
    document.querySelector('#tasks').append(taskLi)
  }

  static deleteTask(e) {
    e.target.parentNode.parentNode.remove()
  }
}
