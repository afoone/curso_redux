import React from 'react';
export default function FlashMessage(props) {

    const { message } = props;

    return (
        <div className="flash-error" style={{ width: "100%", textAlign: "center", height: "2em",
            border: "1px solid red", padding: "0.5em", backgroundColor: "pink", marginBottom: "1em" }}>
            {message ? message : "Ha ocurrido un error"}
        </div>
    );
}
