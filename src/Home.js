import React from 'react';

function Home(props) {
    return (
        <div>
            <h1>Sign In</h1> 
            <ul>
                <li>
                <label htmlFor="userName">User Name</label>
                <input type="text" id="userName" name="userName" onChange={props.handleChange} />
                </li>
                <li>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" onChange={props.handleChange} />
                </li>
            </ul>
        </div>
    );
}

export default Home;