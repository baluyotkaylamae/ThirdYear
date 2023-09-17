import React from 'react'

const Title = ({ title, user, name }) => {
    return (
        <div>
            <h3>{title}</h3>
            <p>{user}</p>
            <h1>{name}</h1>
        </div>
    )
}

export default Title