import React from 'react'
import './post-status-filter.css'

const PostStatusFilter = () => {
    return (
        <div className='btn-group'>
            <button type='button' className='btn btn-info'>
                All
            </button>
            <button type='button' className='btn btn-outline-secondary'>
                <i className='fa fa-heart text-danger'></i>
            </button>
        </div>
    )
}

export default PostStatusFilter
