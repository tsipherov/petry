import React, { useState} from 'react'
import './post-add-form.css'

const PostAddPanel = ({ addTodoHandler }) => {
    
    const [value, setValue] = useState('')

    return (
        <form className='d-flex bottom-panel'
            onSubmit={(e) => {
                e.preventDefault()
                console.log(value)
                addTodoHandler(value)
                setValue("")
            }}
        >
            <input
                className='form-control new-post-label'
                type='text'
                placeholder='Добавить новую запись'
                value={ value }
                onChange={ (e)=>setValue(e.target.value)
                }
            />
            <button
                type='submit'
                className='btn btn-outline-secondary'
            >
                Добавить
            </button>
        </form>
    )
}

export default PostAddPanel
