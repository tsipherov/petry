import React from 'react'
import PostItem from '../postItem/PostItem'
import './post-list.css'

const PostList = ({ data, deleteTodoHandler }) => {
    return (
        <ul className='list-group app-list'>
            {data.map(item => { 
                return (   
                    <li className="list-group-item" key={item.id }>
                        <PostItem {...item}
                            deleteTodoHandler={() => deleteTodoHandler(item.id)}
                            
                        />
                    </li>
                )
            })}
        </ul>
    )
}

export default PostList