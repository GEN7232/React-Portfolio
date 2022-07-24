import React from 'react';

function ProjectCard ({id, title, img}) {
    return (
        <div className='card'>
            <h2>{title}</h2>
            <img src={img} alt={title}></img>
        </div>
    )
}

export default ProjectCard