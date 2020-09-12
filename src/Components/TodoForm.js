import React, { useState } from 'react';

function TodoForm({ addTodo }) {
    const [value, setValue] = useState('');

    const SendTodo = (e) => {
        if (!value) return;
        addTodo(value);
        setValue('');
    }

    return (
        <div>
            <form>
                <div class="form-group row">
                    <div className='col-md-4'>
                        <input type="text" className="form-control" name='name' id="name" value={value} onChange={e => setValue(e.target.value)} ></input>

                    </div>
                    <div className='col-md-2'>
                        <button type="button" onClick={(e) => { SendTodo(e) }} className="btn btn-primary">SEND</button>
                    </div>
                </div>
            </form>
        </div>
    );

}

export default TodoForm;