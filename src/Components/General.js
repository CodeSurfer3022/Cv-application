import React from 'react';

function General(props) {
    return (
        <div className="header flex">
            <form onSubmit={props.onSubmit}>
                <input
                    onChange={props.handleChange}
                    value={props.location}
                    type="name"
                    id="location"
                />
                <p>{props.location}</p>
            </form>
            <form onSubmit={props.onSubmit}>
                <input
                    onChange={props.handleChange}
                    value={props.name}
                    type="name"
                    id="name"
                />
                <h2>{props.name}</h2>
            </form>
            <form onSubmit={props.onSubmit}>
                <input
                    onChange={props.handleChange}
                    value={props.mail}
                    type="name"
                    id="mail"
                />
                <p>{props.mail}</p>
            </form>
        </div>
    )
}

export default General;