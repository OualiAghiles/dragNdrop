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
   * @param icons
   * @param {string} cls - class to add
   * @param color
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
  showAlert (icons,cls, color, contentMsg) {
    let styleAlert = {
      templates: [
        {
          name: "default",
            content: {
               container: 'vce-message-box',
              inner: 'vce-message-box-inner',
              icon: 'vce-message-box-icon',
              message: 'vce-message-box-text',
              colors:{
              success: "vce-message-box-style--success",
                information: "vce-message-box-style--information",
                warning: "vce-message-box-style--warning",
                error: "vce-message-box-style--error"
            }
          }
        },
        {
          name: "outline",
          content: {
            container: 'vce-outline-message-box',
            inner: 'vce-outline-message-box-inner',
            icon: 'vce-outline-message-box-icon',
            message: 'vce-outline-message-box-text',
            colors:{
              success: "vce-outline-message-box-style--success",
              information: "vce-outline-message-box-style--information",
              warning: "vce-outline-message-box-style--warning",
              error: "vce-outline-message-box-style--error"
            }
          }
        },
        {
          name: 'semiFilled',
          content: {
            container: 'vce-semi-filled-message-box',
            inner: 'vce-semi-filled-message-box-inner',
            icon: 'vce-semi-filled-message-box-icon',
            message: 'vce-semi-filled-message-box-text',
            colors:{
              success: "vce-semi-filled-message-box-style--success",
              information: "vce-semi-filled-message-box-style--information",
              warning: "vce-semi-filled-message-box-style--warning",
              error: "vce-semi-filled-message-box-style--error"
            }
          }
        },
        {
          name: "simple",
          content: {
            container: 'vce-simple-message-box',
            inner: 'vce-simple-message-box-inner',
            icon: 'vce-simple-message-box-icon',
            message: 'vce-simple-message-box-text',
            colors:{
              success: "vce-simple-message-box-style--success",
              information: "vce-simple-message-box-style--information",
              warning: "vce-simple-message-box-style--warning",
              error: "vce-simple-message-box-style--error"
            }
          }
        }
      ]
    }
    let t = cls
    let result = styleAlert.templates.filter(el => el.name == t)
    const style = result[0]
    /**
     * style alerts
     * @function
     * @memberOf showAlert
     * @returns {Object[]} Arr - classes
     */
    let coloring = function () {
      //let el = Object.keys(style.content.colors)
      for (let value of Object.entries(style.content.colors)) {
        if(value[0] === color) {
          return value[1]
        }
      }
    }
    let box = document.querySelector('.box') // Todo: change thh class
    let html = `<div class="vcv-container">
                  <div class="js-code ${style.content.container} ${coloring()} vce ">
                    <div class="${style.content.inner}">
                      <span class="${style.content.icon} material-icons">${icons}</span>
                      <span class="${style.content.message} ">
                        <p>${contentMsg}
                        <i class="material-icons delete">close</i>
                        </p>
                      </span>
                    </div>
                  </div>
                </div>`
    // inject html to the DOM
    box.insertAdjacentHTML('beforebegin', html)
    let close = document.querySelector('.delete')
    /**
     * @event close()
     * */
    close.addEventListener('click', (e) =>{
      e.preventDefault()
      this.close('.vcv-container')
    })
    setTimeout(()=> {
      this.close('.vcv-container')
    },1800)
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
        this.todoEvent(enterEvent, DOM)
    })
    enterEvent.addEventListener('keyup', (e) => {
      if(e.key === 'Enter' || e.which === 13 || e.keyCode === 13) {
        this.todoEvent(enterEvent, DOM)
      }
    })
}

  /**
   *
   * @param enterEvent
   * @param dom
   */
  todoEvent (enterEvent, dom) {
    if(enterEvent.value !== ""){
      this.addTodo(enterEvent.value, dom.container)
      this.showAlert('check', "simple",'success',"Bravo! Votre Tache a bien etais ajouter")
    } else {
      this.showAlert('close', "outline",'error',"Erreur !! Vous ne pouver pas ajouter une tache vide")
    }
  }
  }
new TodoApp('.js-todo-container')
