import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import './Register.css'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const addVehicle = async (vehicle) => {
    if (!vehicle.model) return
    if (!vehicle.year || vehicle.year.length !== 4) return
    if (!vehicle.hp || vehicle.hp > 30000) return
    let apiURL = ''
    let fetchMethod = ''

    if (vehicle.id) {
        fetchMethod = 'PUT'
        apiURL = `https://crud-express-nodejs.herokuapp.com/cars/${vehicle.id}`
        delete vehicle.id
    } else {
        fetchMethod = 'POST'
        apiURL = `https://crud-express-nodejs.herokuapp.com/cars`
        delete vehicle.id
    }

    try {
        const response = await fetch(apiURL,
            {
                headers: { 'Content-Type': 'application/json' },
                method: fetchMethod,
                body: JSON.stringify(vehicle)
            })
        const data = await response.text()

        toast.success(data, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }
    catch (e) { console.log("An error has ocurred while inserting or updating the data") }
}

function Register() {
    const [vehicle, setVehicle] = useState({ id: "", model: "", year: "", hp: "" })
    const location = useLocation()

    useEffect(() => {
        if (location.state?.id) {
            setVehicle({ ...location.state })
        }
    }, [location.state])

    return (
        <div className='main-container' >
            <h1>Add a new vehicle</h1>
            <form className="form" onSubmit={(e) => e.preventDefault()}>
                <input
                    required
                    className="model"
                    placeholder="Vehicle's Model"
                    value={vehicle.model}
                    onChange={(e) => setVehicle({ ...vehicle, model: e.target.value })}
                />
                <input
                    required
                    className="year"
                    placeholder="Vehicle's Production Year"
                    value={vehicle.year}
                    onChange={(e) => setVehicle({ ...vehicle, year: e.target.value })}
                    pattern="[0-9]{4}"
                    maxLength='4'
                    title="4 Digits Year Pattern"
                />
                <input
                    required
                    className="hp"
                    placeholder="Vehicle's Horsepower"
                    value={vehicle.hp}
                    onChange={(e) => setVehicle({ ...vehicle, hp: e.target.value })}
                />
                <button className='btn-add' onClick={() => addVehicle(vehicle)}>
                    {vehicle.id ? 'Update' : 'Add'}
                </button>
            </form>
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

export default Register