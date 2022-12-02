import React from "react";

export const Pacient = ({ pacient, deleteClick }) => {
    return (
        <tr className="bg-white border-b">
            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{pacient.name}</td>
            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{pacient.paterno}</td>
            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{pacient.materno}</td>
            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{pacient.rut}</td>
            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{pacient.regions}</td>
            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{pacient.comun}</td>
            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{pacient.postal}</td>
            <td><button onClick={() => deleteClick(pacient)} className="inline-flex items-center justify-center w-10 h-10 mr-2 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-full focus:shadow-outline hover:bg-red-800">&times;</button></td>
        </tr>
    )
}