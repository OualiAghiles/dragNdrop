/**
 * @author Ouali Aghiles Massinissa
 *
 */

/**
 * class TodoApp
 * managing simple todolist
 * @class
 * @classdesc test
 * @constructor
 */
class TodoApp {
  /**
   *@constructor
   * @param {HTMLElement} container - main container on the todo
   */
  constructor (container) {
    this.container = container
    this.getDomString()

    this.setupEvents()
  }

  /**
   * store at the same place all html classes
   *@method
   * @memberOf TodoApp
   * @returns {Object} Object of elment html classes
   */
  getDomString () {
    let elems = {
      container: this.container,
      input: '.input',
      parentInput: '.js-todo-input',
      addTodo: '.js-add-todo'
    }
    return elems
  }

  /**
   * simple function get input value
   * @memberOf TodoApp
   * @function
   * @param {string} el - target the input element
   * @returns {string} val - value of the input
   */
  getInputValue (el) {
    let val = document.querySelector(el).value
    console.log(val)
  }

  /**
   * display message notification
   * @method
   * @param {string} cls - class to add
   * @param {string} title - Message Title
   * @param {string} contentMsg - Message bdy
   * @returns {HTMLElement} el - HTML element
   * @fires close() init close btn
   *
   * @example
   * {@lang javascript}
   * showAlert('is-danger','Title', 'Message')
   *
   * // return
   * <article class="message is-danger is-small">
   *  <div class="message-header">
   *     <p>Title</p>
   *     <button class="delete is-small" aria-label="delete"></button>
   *   </div>
   *   <div class="message-body">
   *     Message
   *   </div>
   * </article>
   */
  showAlert (cls, title, contentMsg) {
    let box = document.querySelector('.box') // Todo: change thh class
    let html = `<article class="message ${cls} js-code is-small">
                  <div class="message-header">
                    <p>${title}</p>
                    <button class="delete is-small" aria-label="delete"></button>
                  </div>
                  <div class="message-body">
                  ${contentMsg}
                  </div>
                </article>`

    box.insertAdjacentHTML('beforebegin', html)
    let close = document.querySelector('.delete')
    close.addEventListener('click', (e) =>{
      e.preventDefault()
      this.close('.message')
    })
  }

  /**
   * @member
   * @function
   * @param {string} el - Element to remove
   * @returns {Object} undefined
   */
  close (el) {
    let elToRemove =document.querySelector(el)
    elToRemove.parentNode.removeChild(elToRemove)
  }

  /**
   * @member
   * @function
   * @param {string} val - New todo value
   * @param {string} container - Parent container for todo
   * @tutorial {@link http://localhost:9090/tutorial-todoList.html|todo}
   * @returns {HTMLElement} todo - create html elment with val as content
   */
  addTodo(val, container) {
    let html = `<a class="panel-block">
                  <span class="panel-icon"><i class="fas fa-check" aria-hidden="true"></i></span> 
                  ${val}
                  </a>`
    let content = document.querySelector(container)
   console.log(container)
    content.insertAdjacentHTML('beforeend', html)
  }

  /**
   * Handel events
   * @function
   * @member
   * @fires click addTodo
   * @fire keyup Enter
   */
  setupEvents () {
    let DOM = this.getDomString()
    let addBtnEvent = document.querySelector(DOM.addTodo)
    let enterEvent = document.querySelector(DOM.input)


      addBtnEvent.addEventListener('click', (e) => {
        e.preventDefault()

        if(enterEvent.value !== ""){
          console.log(enterEvent.value)

          this.addTodo(enterEvent.value, DOM.container)
        } else {
          this.showAlert("is-danger","Error", "You can't add an empty todo")
        }

      })
      enterEvent.addEventListener('keyup', (e) => {
        if(e.key === 'Enter' || e.which === 13 || e.keyCode === 13) {

          if(enterEvent.value !== ""){
            console.log(enterEvent.value)

            this.addTodo(enterEvent.value, DOM.container)
          } else {
            this.showAlert("is-danger","Error", "You can't add an empty todo")
          }
        }
      })


  }
}
new TodoApp('.js-todo-container')
