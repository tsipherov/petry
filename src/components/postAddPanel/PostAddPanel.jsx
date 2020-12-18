import React from 'react'
import './post-add-form.css'

const PostAddPanel = () => {
    return (
        <form className='d-flex bottom-panel'>
            <input
                className='form-control new-post-label'
                type='text'
                placeholder='Добавить новую запись'
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
