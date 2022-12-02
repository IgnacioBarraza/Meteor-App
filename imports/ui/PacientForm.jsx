import React, { useState, useEffect } from 'react';
import { PacientCollection } from "../api/Pacientdata";
import { useForm } from "react-hook-form";
import { validateRut } from "rutlib";
import { DATA } from "../api/comunas-regiones"

export const Pacientform = () => {
    const [nombre, setName] = useState("")
    const [paterno, setPaterno] = useState("")
    const [materno, setMaterno] = useState("")
    const [rut, setRut] = useState("")
    const [regions, setRegions] = useState("")
    const [comun, setComunas] = useState("")
    const [postal, setPostal] = useState("")
    const [Region, setRegion] = useState()
    const [comunas, setComuna] = useState()
    const { register, handleSubmit, formState: { errors } } = useForm()

    const selectRegion = (x) => {
        const selectedRegion = DATA.find(
            (entry) => entry.region === x.target.value
        )
        setComuna(undefined)
        setRegion(selectedRegion)
    }

    const selectComuna = (x) => {
        setComunas(x.target.value)
    }

    const onSubmit = (data, event) => {
        event.preventDefault()

        if (validateRut(rut) === false) {
            alert('Ingrese un rut valido')
            setRut("")

        } else {
            if (!nombre && !paterno && !materno && !rut && !regions && !comun && !postal) return

            PacientCollection.insert({
                name: nombre.trim(),
                paterno: paterno.trim(),
                materno: materno.trim(),
                rut: rut.trim(),
                regions: regions.trim(),
                comun: comun.trim(),
                postal: postal.trim(),
                createdAt: new Date()
            })

            setName("")
            setPaterno("")
            setMaterno("")
            setRut("")
            setRegions("")
            setComunas("")
            setPostal("")
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className='w-full max-w-lg'>
                <div className='flex flex-wrap -mx-3 mb-6'>
                    <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
                        <label
                            htmlFor="nombre"
                            className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
                        >Nombre</label>
                        <p className='text-red-500 text-xs italic'>* Campo Obligatorio</p>
                        <input
                            id='nombre'
                            type="text"
                            {...register("Nombre", { required: true, maxLength: 20 })}
                            value={nombre}
                            onChange={(event) => setName(event.target.value)}
                            placeholder='Ingresa tu nombre'
                            className='appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                        />
                    </div>
                    <div className='w-full md:w-1/2 px-3'>
                        <label
                            htmlFor="paterno"
                            className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
                        >Apellido Paterno</label>
                        <p className='text-red-500 text-xs italic'>* Campo Obligatorio</p>
                        <input
                            id='paterno'
                            type="text"
                            {...register("Apellido Paterno", { required: true, maxLength: 20 })}
                            value={paterno}
                            onChange={(event) => setPaterno(event.target.value)}
                            placeholder='Ingresa apellido paterno'
                            className='appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                        />
                    </div>
                    <div className='w-full md:w-1/2 px-3'>
                        <label
                            htmlFor="materno"
                            className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
                        >Apellido Materno</label>
                        <p className='text-red-500 text-xs italic'>* Campo Obligatorio</p>
                        <input
                            id='materno'
                            type="text"
                            {...register("Apellido Materno", { required: true, maxLength: 20 })}
                            value={materno}
                            onChange={(event) => setMaterno(event.target.value)}
                            placeholder='Apellido materno'
                            className='appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                        />
                    </div>
                    <div className='w-full md:w-1/2 px-3'>
                        <label
                            htmlFor="rut"
                            className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
                        >Rut</label>
                        <p className='text-red-500 text-xs italic'>* Campo Obligatorio</p>
                        <input
                            id='rut'
                            type="text"
                            value={rut}
                            onChange={(event) => setRut(event.target.value)}
                            placeholder='Ingresa tu rut'
                            className='appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                        />
                    </div>
                    <div >
                        <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>Region</label>
                        <div value={regions} onChange={(event) => setRegions(event.target.value)}>
                            <select onChange={selectRegion} >
                                {DATA.map((entry, index) => {
                                    return (
                                        <option key={index} value={entry.region}>{entry.region}</option>
                                    )
                                })}
                            </select>
                        </div>
                        <br />
                        <div onChange={(event) => setComunas(event.target.value)} value={comun}>
                            <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>Comuna</label>
                            {!!Region && (
                                <select onChange={selectComuna}>
                                    {Region && Region.comunas.map((comuna, index) => {
                                        return (
                                            <option value={comuna} key={index}>{comuna}</option>
                                        )
                                    })}
                                </select>
                            )}
                        </div>
                    </div>
                    <div className='w-full md:w-1/2 px-3'>
                        <label
                            htmlFor="codigo-postal"
                            className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
                        >Codigo Postal</label>
                        <p className='text-red-500 text-xs italic'>* Campo Obligatorio</p>
                        <input
                            id='codigo-postal'
                            type="number"
                            {...register("Codigo Postal", { required: true, maxLength: 7 })}
                            value={postal}
                            onChange={(event) => setPostal(event.target.value)}
                            placeholder='Ingresa tu codigo postal'
                            className='appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                        />
                    </div>
                    <div className='flex items-center justify-center'>
                        <button
                            type="Submit"
                            value="Agregar"
                            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                        >Agregar</button>
                    </div>


                </div>
            </form>
            <script src='imports\api\regionesycomunas.js'></script>
        </>
    )
}
