import React from 'react';
import { useAlert } from './alert/AlertContext';

export default function Main() {
    const {show} = useAlert()
    return(
        <>
            <h1> Hello,here is example with Context</h1>
            <button onClick={() => show('danger')} className="btn btn-success">Show alert</button>
        </>
    )
}