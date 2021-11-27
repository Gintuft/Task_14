let data = []
const listElement = document.querySelector('#list')
const formCreateElement = document.querySelector('#formCreate')

class TodoFormCreate{
  constructor (formCreateElement){
    this.formCreateElement = formCreateElement
    this.init()
  }
  init(){
    this.handleSubmit = this.handleSubmit.bind(this)

    this.formCreateElement.addEventListener('submit', this.handleSubmit)
  }

handleSubmit (event) {
  event.preventDefault()

  const toDo = {
    id: new Date().getTime(),
    isChecked: false
  }

  const formData = new FormData(formCreateElement)
  for (let [name, value] of formData.entries()) {
    toDo[name] = value
  }

  data.push(toDo)
  this.formCreateElement.reset()

  render()
}
}

new TodoFormCreate(formCreateElement)
