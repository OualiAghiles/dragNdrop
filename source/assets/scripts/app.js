/**
 * @namespace TabUIController
 * @classdesc TabUIController singleton.
 * @class
 * @hideconstructor
 * @returns (method)
 */
const TabUIController = (function () {
  const elems = {
    tabContainerLinks: '.tabs',
    tabLink: '.tab-link',
    tabContents: '.tab-content',
  };
  return {
    /**
     * getElems is now TabUIController~changeTab.
     * @function changeTab
     * @memberof TabUIController
     * @inner
     * @tutorial TabsController.changeTab()
     * @example
     *  var tabs = document.querySelectorAll('.tabs')
     * for(var i = 0; i < tabs.length; i++;) {
     *  var el = tabs[i]
     *  el.addEventListener('click', TabsController.changeTab)
     * }
     * @returns Change stats of DOM elements
     */
    changeTab() {
      const self = this;
      const contents = document.querySelectorAll(elems.tabContents);
      this.parentNode.querySelector('.current').classList.remove('current');
      this.classList.add('current');
      // foreach elem toggle class
      contents.forEach((elem) => {
        if (elem.classList.contains('current')) {
          elem.classList.remove('current');
        }
        const target = document.querySelector(`#${self.dataset.tab}`);
        target.classList.add('current');
      });
    },
    /**
     * getElems is now TabUIController~getElems.
     * @function getElems
     * @memberof TabUIController
     * @inner
     * @tutorial TabsController.getElems()
     * @example
     * // DOM elements
     * {
     *  tabContainerLinks: '.tabs',
     *  tabLink: '.tab-link',
     *  tabContents: '.tab-content',
     * }
     * @returns Object of classes
     */
    getElems() {
      return elems;
    },
  };
}());
/**
 * @classdesc TabsController singleton.
 * @class
 * @hideconstructor
 * @param {sting} call other class
 */

const TabsController = (function (TabContrl) {
  const elems = TabContrl.getElems();
  /**
   * @function setupEvent
   * @memberof TabsController
   * @inner
   * @tutorial Setup Events
   * @example
   * // Init Plugin
   * TabsController.setupEvent();
   * @returns EventListeners
   */
  const setupEvent = function () {
    let links;
    links = document.querySelectorAll(elems.tabLink);
    links.forEach((link) => {
      link.addEventListener('click', TabContrl.changeTab);
    });
  };
  return {
    /**
     * @function TabsController.run
     * @memberof TabsController
     * @inner
     * @tutorial this section is to init the plugin
     * @example
     * // Init Plugin
     * TabsController.run();
     * @returns init setupEventListener
     */
    run() {
      return setupEvent();
    },

  };
}(TabUIController));
TabsController.run();
