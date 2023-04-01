import React from 'react';
import './Questions.css';

const Questions = () => {
    return (
        <div className='questions'>
            <h1 className='question-div'>All Questions Answer : </h1>

            <div className="question-answer">
            <h2>1. How does React work?</h2>
                <p><strong>Ans: </strong>ReactJS is one of the most popular JavaScript libraries for mobile and web application development. Created by Facebook, React contains a collection of reusable JavaScript code snippets used for user interface (UI) building called components.</p>
                <br /><hr />
            </div>
            <div className="question-answer">
                <h2>2. How does use State work?</h2>
                <p><strong>Ans: </strong>useState is React Hook that allows you to add state to a functional component. It returns an array with two values: the current state and a function to update it. The Hook takes an initial state value as an argument and returns an updated state value whenever the setter function is called.</p>
                <br /><hr />
            </div>
            <div className="question-answer">
                <h2>3. What is the difference between state and props in React?</h2>
                <p><strong>Props: </strong>Props is Immutabale.It has better performance.And it can be passed to child components from parents components.Profs can be modified.And input that describe what we should see.</p>
                <p><strong>State: </strong>State is owned by its components.And its mutable.Its locally scoped. Can only be passed as props.And change to state can be asynchronous.</p>
                <br /><hr />
            </div>
            <div className="question-answer">
                <h2>4. Purpose of use Effect other than fetching data?</h2>
                <p><strong>Ans: </strong>Validating an input while it's receiving characters is another great application for useEffect . Whilst the input is being stored in a state using useState , the validation takes place every time the input changes, giving immediate feedback to the user.</p>
                <br /><hr />
            </div>
        </div>
    );
};

export default Questions;