import React from "react";
import { Link } from 'react-router-dom'
import './Registered.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPen } from '@fortawesome/free-solid-svg-icons'

function TableRow(props) {

    return (
        <tr className='table-row'>
            <td>{props?.car?.model}</td>
            <td>{props?.car?.year}</td>
            <td>{props?.car?.hp}</td>
            <td>
                <Link to={{
                    pathname: '/',
                    state: {...props.car}
                }} ><button className="update btn btn-update"><FontAwesomeIcon icon={faPen} /></button>
                </Link>
                <button onClick={() => props.handleDelete(props.car.id)} className="delete btn btn-delete"><FontAwesomeIcon icon={faTrash} /></button>
            </td>
        </tr>
    )
}

export default TableRow