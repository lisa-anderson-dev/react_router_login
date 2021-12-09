import React from 'react';

function ComponentA(props) {
    return (
        <div>
            <h1>Component A</h1>
            <p>Welcome back, <span style={{color: "#55ACEE", textTransform: "uppercase", fontWeight: "bold"}}>{props.userName}</span>. You have successfully logged into our site!</p>
        </div>
    );
}

export default ComponentA;