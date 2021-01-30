// target form 
const form = document.getElementById('newTodoForm'); 
// target input 
const input = document.getElementById('task'); 
// target ul 
const ul = document.getElementById('todoList'); 
// target clearBtn 
const clearBtn = document.querySelector('.clear'); 

// manipulate form 
form.addEventListener('submit', function(e) {
  // check for input value and then do the operation 
  if(input.value === '' && input.value.length === 0) {
    alert('Please enter a valid task'); 
  } else if(input.value.length > 0) {
    // create li 
    const li = document.createElement('li'); 
    // add text to li 
    li.innerText = input.value; 

    // create deleteBtn 
    const deleteBtn = document.createElement('button'); 
    // add text to deleteBtn 
    deleteBtn.innerText = 'X'; 

    // append deleteBtn to li 
    li.append(deleteBtn); 
    // append li to ul 
    ul.append(li); 

    // reset form 
    form.reset(); 

    // prevent default behavior (page refresh) 
    e.preventDefault(); 
  };
}); 

// manipulate ul 
ul.addEventListener('click', function(e) {
  // if tagName.toLowerCase() 
  const tagLowerCase = e.target.tagName.toLowerCase(); 
  if(tagLowerCase === 'li') {
    // const lineThrough = 'line-through'; 
    // e.target.style.textDecoration = lineThrough; 
    // li.target.toggle(lineThrough); 
    // toggle class 'completed'
    e.target.classList.toggle('completed'); 
  } else if(tagLowerCase === 'button') {
    e.target.parentNode.remove(); 
  }
})

clearBtn.addEventListener('click', function() {
  // console.log('clicked'); 
  const lis = document.querySelectorAll('li'); 
  for(li of lis) {
    li.remove(); 
  }
})