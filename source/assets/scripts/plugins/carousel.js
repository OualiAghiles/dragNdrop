/**
 * @class
 * @constructor
 */
class slider {
  /**
   * This callback is displayed as part of the Requester class.
   * @callback moveCallBack
   * @param {number} index
   */
  /**
   * @param {HTMLelement} element
   * @param {object} options
   * @param {object} options.slidesToScroll *** NBR element to scroll  ***
   * @param {object} options.slidesVisible *** NBR elements Visible  ***
   * @param {boolean} options.loop *** doit on bouclé en fin de slide  ***
   */
  constructor (element, options = {}) {
    this.element = element
    this.options = Object.assign({}, {
      slidesToScroll : 1,
      slidesVisible: 1,
      loop: false
    }, options)
    let children = [].slice.call(element.children)

    this.currentItem = 0
    this.moveCallbacks = []
    this.root = slider.createDivWithClass('slider')
    this.container = slider.createDivWithClass('slider__container')
    this.root.appendChild(this.container)
    this.element.appendChild(this.root)
    this.items = children.map((child) => {
      let item = slider.createDivWithClass('slider__item')
      item.appendChild(child)
      this.container.appendChild(item)
      return item
    })
    this.setStyle()
    this.createNavigation()
    this.moveCallbacks.forEach(cd => cd(0))
  }
  /**
   * setStyle - applique les bonne dimmention au elements du carousel
   * @method
   * @return {HTMLelement}  width of elements
   */
  setStyle () {
    let ratio = this.items.length / this.options.slidesVisible
    this.container.style.width = (ratio * 100) + "%"
    this.items.forEach(item =>{
      item.style.width = ((100 / this.options.slidesVisible) / ratio ) + '%'
    })
  }

  /**
   * Create navigation buttons
   * @method
   * @returns {HTMLElement} navigation left and right
   */
  createNavigation () {
    let nextButton = slider.createDivWithClass('slider__next')
    let prevButton = slider.createDivWithClass('slider__prev')
    this.root.appendChild(nextButton)
    this.root.appendChild(prevButton)
    nextButton.addEventListener('click', this.next.bind(this))
    prevButton.addEventListener('click', this.prev.bind(this))
    if (this.options.loop === true) {
      return
    }
    this.onMove(index => {
      if (index === 0) {
        prevButton.classList.add('slider__prev--hidden')
      } else {
        prevButton.classList.remove('slider__prev--hidden')
      }
      if (this.items[this.currentItem + this.options.slidesVisible] === undefined) {
        nextButton.classList.add('slider__next--hidden')
      } else {
        nextButton.classList.remove('slider__next--hidden')
      }
    })
  }
  next () {
    this.goToItem(this.currentItem + this.options.slidesToScroll)
  }
  prev () {
    this.goToItem(this.currentItem - this.options.slidesToScroll)
  }
  /**
   * goToItem - deplace le slider ver l'element cible
   * @method
   * @param  {number} index current index
   * @return {number}       target index
   */
  goToItem (index) {
    if (index < 0) {
      index = this.items.length - this.options.slidesVisible
    } else if (index >= this.items.length  || (this.items[this.currentItem + this.options.slidesVisible] === undefined && index > this.currentItem)) {
      index = 0
    }
    this.currentItem = index
    let translateX = index * (-100 / this.items.length)
    this.container.style.transform = 'translate3d('+ translateX +'%, 0 , 0)'
    this.moveCallbacks.forEach(cd => cd(index))
  }
  /**
   *
   * @param {string} className
   * @memberof carousel
   * @returns {HTMLelement}
   */
  static createDivWithClass (className) {
    let div = document.createElement('div')
    div.classList.add(className)
    return div
  }
  /**
   *
   * @param {moveCallBack} cb
   */
  onMove (cb) {
    this.moveCallbacks.push(cb)
  }
}


