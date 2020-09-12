import React, { useState } from 'react';

function Todo({ todo, index }) {


    return (
        <div>

            {index + 1} .{todo.text}


            <button type="button" className="btn btn-primary">Complete</button>
            <button type="button" className="btn btn-primary">X</button>
        </div>
    );

}

export default Todo;