/**
 * Create a new collapsing
 * @class
 * @classdesc Class to manage Accordion
 * @constructor
 *
 *
 * @see {@link http://localhost:5500/|Accordion} for exemple
 *
 * @example
 * HTML
 * // stucture exemple
 * <div class="js-accordion">
 *
 *   <div class="js-accordion-child panel" data-target="first">
 *
 *      <div class="js-accorion-title panel-heading"><span>First title</span><span class="js-icon"><i class="material-icons">add_box</i></span></div>
 *      <div class="js-accordion-body panel-block">
 *        <p>Lorem ipsum dolor, sit amet consectetur
 *          adipisicing elit. Quam quas commodi soluta corrupti perferendis
 *          dicta dolore quasi autem nobis, minima odio inventore aliquid, animi illo magni obcaecati reprehenderit est. Quo?</p>
 *      </div>
 *    </div>
 *    .....
 *  </div>
 *
 * // target
 * < div class = "js-accordion"></div>
 * // init class
 * // dont forgot the '.' before the CSS class
 * <script>
 * JavaScript
 * let myAccordion = new Accordion('.js-accordion')
 * </script>
 */
class Accordion {
  /** @lends Accordion */

  /**
   * @constructor
   * @param {string} selector
   */

  constructor(selector) {
    this.container = selector
    this.children = this.container.querySelectorAll('.js-accordion-child')
    console.log(this.children);
    this.children.forEach(item => {
      //main function
      this.handleEvents(item)
    })
    // active first element
    this.activeFirstElement()


  }
  /**
   * open first accordion
   * @method
   * @inner
   * @methodof Accordion
   */


  activeFirstElement() {
    this.children[0].querySelector('.js-accordion-body').classList.add('is-active')
    this.children[0].classList.add('is-active')
    this.children[0].querySelector('.js-icon .material-icons').innerText = 'indeterminate_check_box'
    this.children[0].fireEvent(onclick, this.slideDown(this.children[0].querySelector('.js-accordion-body')))

  }

  /**
   * handleEvents
   * @function
   * @param {string} element handle event on click
   */
  handleEvents(element) {
    let actionClick = element.querySelector(".js-accordion-title")
    actionClick.addEventListener('click', () => {
      // vars
      let parent = element.parentNode
      let currentActive = parent.querySelector('.js-accordion-child.is-active')
      let target = element
      let targetChild = target.querySelector('.js-accordion-body')
      let targeticon = target.querySelector('.js-icon .material-icons');

      // if content visible
      if (currentActive && !target.classList.contains('is-active')) {
        let currentActiveChild = currentActive.querySelector('.js-accordion-body')
        let currentIcon = currentActive.querySelector('.js-icon .material-icons')
        // hide visible
        this.slideUp(currentActiveChild)
        currentIcon.innerText = 'add_box'
        currentActive.classList.remove('is-active')
        currentActiveChild.classList.remove('is-active')

        //show target
        this.slideDown(targetChild)
        targetChild.classList.add('is-active')
        target.classList.add('is-active')
        targeticon.innerText = 'indeterminate_check_box'

      } else {

        if (!target.classList.contains('is-active')) {
          this.slideDown(targetChild)
          targetChild.classList.add('is-active')
          target.classList.add('is-active')
          targeticon.innerText = 'indeterminate_check_box'


        } else {
          this.slideUp(targetChild)
          targetChild.classList.remove('is-active')
          target.classList.remove('is-active')
          targeticon.innerText = 'add_box'
        }
      }
    })
  }
  /**
   * @function
   * @methodof Accortion
   * @param {string} element taget to hide sliding up
   * @param {number} duration  duration on the animation
   */
  slideUp(element, duration = 500) {
    //Stuff to do *after* the animation takes place
    element.style.height = element.offsetHeight + "px"
    element.style.transitionProprety = `height, margin, padding`
    element.style.transitionDuration = duration + "ms"
    element.offsetHeight
    element.style.overflow = 'hidden'
    element.style.height = 0
    element.style.paddingTop = 0
    element.style.paddingBottom = 0
    element.style.marginTop = 0
    element.style.marginBottom = 0
    window.setTimeout(function () {
      element.removeAttribute('style')
      element.style.display = "none"

    }, duration)
  }

  /**
   * @function
   * @methodof Accortion
   * @param {string} element taget to show sliding down
   * @param {number} duration  duration on the animation
   */
  slideDown(element, duration = 500) {
    //Stuff to do *after* the animation takes place
    element.removeAttribute('style')
    let elementDisplay = window.getComputedStyle(element).display
    if (elementDisplay === 'none') {
      elementDisplay = 'block'
    }
    element.style.display = elementDisplay
    let elementHeight = element.offsetHeight
    element.style.overflow = 'hidden'
    element.style.height = 0
    element.style.paddingTop = 0
    element.style.paddingBottom = 0
    element.style.marginTop = 0
    element.style.marginBottom = 0
    element.offsetHeight
    element.removeAttribute('style')
    element.style.overflow = 'hidden'
    element.style.display = elementDisplay
    element.style.transitionProprety = `height, margin, padding`
    element.style.transitionDuration = duration + "ms"
    element.style.height = elementHeight + 'px'
    window.setTimeout(function () {
      element.removeAttribute('style')
      element.style.display = elementDisplay

    }, duration)

  }
}



new Accordion(document.querySelector('.js-accordion'));
/**
 * This callback type is called `requestCallback` and is displayed as a global symbol.
 *
 * @callback requestCallback
 * @param {number} responseCode
 * @param {string} responseMessage
 */

/**
 * Does something asynchronously and executes the callback on completion.
 * @param {requestCallback} cb - The callback that handles the response.
 */
