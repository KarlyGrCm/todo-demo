document
  .getElementById('addTodo')
  .addEventListener('click', function(e){
      const todoInput = document.getElementById('todoInput')

      let row = document.createElement('li')

      row.textContent = todoInput.value;
      document.getElementById('todolist').appendChild(row);

      todoInput.value = "";
  });
