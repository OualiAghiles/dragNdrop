# Getting started

Simple plugin todo list app made with `javascript`

## HTML Structure
Main container, `.js-todo-container` the class targeted in js 
```html
<nav class="panel js-todo-container">
  <!-- main -->
</nav>
```
### Todo list body

```html
  // title : add Todo
  <p class="panel-heading">add Todo</p>
  
  // `js-todo-input` js class to b targeted
  <div class="panel-block is-full js-todo-input">
    <div class="control field has-addons has-addons-right">
      // .js-input js class to get the value
      <p class="control js-input" style="flex:1">
        <input class="input" type="text" placeholder="Amount of money">
      </p>
      <p class="control">
        // .js-add-todo js class to Add New todo
        <a class="button is-primary js-add-todo"><svg class="svg-inline--fa fa-plus fa-w-14" aria-hidden="true" data-prefix="fas" data-icon="plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path></svg><!-- <i class="fas fa-plus"></i> --></a></p>
    </div>
  </div>
```

### Exemple of html TODO

```html
// created after clicek btn
<a class="panel-block">
  <span class="panel-icon">
    <i class="fas fa-trash"></i>   
    content on je value of js-input
  </a>

```
