import React from 'react';
import './Article.css';

const Article = () => {
    return (
        <div className='article'>
            <h1>Question and Answer</h1>
            <div>

                <h2>How React.js Works?</h2>
                <p>React is a single page library of JavaScript. It work like water-fall method. It create virtual DOM of the real DOM. Basically react devide all parts of an web page as a single component. Then step by step load every component one by one. React have a special functionality called 'HOT reload'. It load virtual DOM without page reload if you change data.</p>
            </div>
            <br /><br />


            <div>
                <h2>Difference between props and state?</h2>
                <h4>Props:</h4>
                <p>Props is a immutable and read-only property. It used for pass data from parent component to child component. We can pass object, function, array through the attribute.</p>

                <h4>State:</h4>
                <p>State is a mutable property. It can use only current component. We can not pass state from a component to another component but we can pass state data via props. State has a method called useState() and it is modify property.</p>
            </div>


        </div>
    );
};

export default Article;