import { useState, useEffect } from 'react'
import './Registered.css'
import TableRow from './TableRow'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const apiURL = 'https://crud-express-nodejs.herokuapp.com/cars'

function Registered() {

    const [cars, setCars] = useState([{ id: "", model: "", year: "", hp: "" }])
    const [deleteMessage, setDeleteMessage] = useState("")

    const fetchCars = () => {
        fetch(apiURL)
            .then(response => response.json())
            .then(data => setCars(data))
    }

    async function deleteCar(id) {
        fetch(`https://crud-express-nodejs.herokuapp.com/cars/${id}`, { method: 'DELETE' })
            .then(response => response.text())
            .then(data => {
                setDeleteMessage(`${id} was ${data}`)
            })
    }

    useEffect(() => {
        fetchCars()
        if (deleteMessage) {
            toast.error(deleteMessage, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }, [deleteMessage])

    return (
        <div className="main-container-registered">
            <h1>Registered vehicles</h1>
            <table className='table-cars'>
                <thead className='table-cars-head'>
                    <tr>
                        <th>Model</th>
                        <th>Year</th>
                        <th>HP</th>
                        <th colSpan='2'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {cars.map((e) => <TableRow
                        handleDelete={deleteCar}
                        car={e}
                        key={e.id}
                    />)}
                </tbody>
            </table>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    )
}

export default Registered