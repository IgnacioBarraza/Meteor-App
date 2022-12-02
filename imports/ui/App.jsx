import React from 'react';
import { PacientCollection } from '../api/Pacientdata';
import { Pacient } from "../ui/Pacient";
import { useTracker } from "meteor/react-meteor-data";

const deletePacient = ({ _id }) => PacientCollection.remove(_id)

export const App = () => {

  const pacients = useTracker(() => PacientCollection.find({}).fetch())

  return (
    <>
      <div className='flex flex-col'>
        <div className='overflow-x-auto sm:-mx-6 lg:-mx-8'>
          <div className='py-2 inline-block min-w-full sm:px-6 lg:px-8'>
            <div className='overflow-x-auto'>
              <table className='min-w-full text-center border-separate border-2 border-gray-600'>
                <thead className='border-b'>
                  <tr>
                    <th scope='col' className='text-sm font-medium text-gray-900 px-6 py-4 text-left'>Nombre</th>
                    <th scope='col' className='text-sm font-medium text-gray-900 px-6 py-4 text-left'>Apellido Paterno</th>
                    <th scope='col' className='text-sm font-medium text-gray-900 px-6 py-4 text-left'>Apellido Materno</th>
                    <th scope='col' className='text-sm font-medium text-gray-900 px-6 py-4 text-left'>Rut</th>
                    <th scope='col' className='text-sm font-medium text-gray-900 px-6 py-4 text-left'>Región</th>
                    <th scope='col' className='text-sm font-medium text-gray-900 px-6 py-4 text-left'>Comuna</th>
                    <th scope='col' className='text-sm font-medium text-gray-900 px-6 py-4 text-left'>Código Postal</th>
                    <th scope='col' className='text-sm font-medium text-gray-900 px-6 py-4 text-left'>Acción</th>
                  </tr>
                </thead>
                <tbody>
                  {pacients.map(pacient => <Pacient key={pacient._id}
                    pacient={pacient}
                    deleteClick={deletePacient} />
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
