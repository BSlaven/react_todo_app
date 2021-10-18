import React from 'react';

const Form = () => {
  return (
    <form>
      <label htmlFor="input-todo" className="todo-label">
        <input type="text" className="input-todo" id="input-todo" />
      </label>
    </form>
  )
}

export default Form;