import React from 'react'
import PostItem from '../postItem/PostItem'
import './post-list.css'

const PostList = ({ data }) => {
    return (
        <ul className='list-group app-list'>
            {data.map(item => { 
                return (   
                    <li className="list-group-item" key={item.id }>
                        <PostItem {...item} />
                    </li>
                )
            })}
        </ul>
    )
}

export default PostList