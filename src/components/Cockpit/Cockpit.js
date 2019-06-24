import React from 'react'

const cockpit = (props) => {

    let classes = [];
    if(props.persons.length <= 2){
      classes.push('red');
    }
    if(props.persons.length <= 1){
      classes.push('bold');
    }

    return (
        <div>
            <h1>React app</h1>
            <p className={classes.join(' ')}>This is really working</p>
            <button
                onClick={props.clicked}>Switch name</button>
        </div>
    );
}

export default cockpit;