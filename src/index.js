// 削除する処理
const deleteTodo = (e)=>{
  document.getElementById('incomplete-list').removeChild(e.target.parentNode.parentNode);
};

// 追加する処理
const addTodo = (text)=> {
  const completeTodo = `
    <li>
      <div class="list-row">
        <p>${text}</p>
        <button class="backIncompleteTodo">戻る</button>
      </div>
    </li>
  `;
  document.getElementById('complete-list').insertAdjacentHTML('afterbegin',completeTodo);
  // 完了したToDoから未完了のToDoに戻す処理
  document.querySelector('.backIncompleteTodo').addEventListener('click',(e)=>{
    addIncompleteTodos(text);
    document.getElementById('complete-list').removeChild(e.target.parentNode.parentNode);
  })
}

// 未完了のToDoに追加する処理
const addIncompleteTodos = (text)=>{
  const IncompleteTodo = `
    <li>
      <div class="list-row">
        <p>${text}</p>
        <button class="completeTodo">完了</button>
        <button class="deleteTodo">削除</button>
      </div>
    </li>
  `;
  document.getElementById('incomplete-list').insertAdjacentHTML('afterbegin',IncompleteTodo);

  // 完了したToDoに追加する処理
  document.querySelector('.completeTodo').addEventListener('click',(e)=>{
    addTodo(text);
    deleteTodo(e);
  })

  // 未完了のToDoから削除する処理
  document.querySelector('.deleteTodo').addEventListener('click',(e)=>{
    deleteTodo(e);
  })
}

// onClickAddButtonの処理内容
const onClickAddButton = ()=>{
  const inputText = document.getElementById('add-text');
  const text = inputText.value;
  addIncompleteTodos(text);
  inputText.value = '';
}

// 追加ボタンを押した際の処理
const addButton = document.getElementById('add-button');
addButton.addEventListener('click',onClickAddButton);