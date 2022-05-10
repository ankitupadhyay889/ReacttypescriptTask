import React from 'react';

const Blog = () => {
    return (
        <div>
            <ul>
                <li key="angular" className='lic'> Angular </li>
                <li key="node" className='lic'> Node </li>
                <li key="react" className='lic'> React </li>
            </ul>
            <div>
                <span> one </span>
                <span> two </span>
            </div>
            <div>
                <button> Submit </button>
            </div>
        </div>
    );
};

export default Blog;