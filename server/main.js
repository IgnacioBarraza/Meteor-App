import { Meteor } from 'meteor/meteor';
import { PacientCollection } from "/imports/api/Pacientdata.js";

const insertPacient = (pacientName, pacientPaterno, pacientMaterno, pacientRut, pacientRegion, pacientComuna, pacientPostal) => PacientCollection.insert({ name: pacientName, paterno: pacientPaterno, materno: pacientMaterno, rut: pacientRut, regions: pacientRegion, comun: pacientComuna, postal: pacientPostal })

Meteor.startup(() => {
  if (PacientCollection.find().count() === 1) {
    [].forEach(insertPacient)
  }
})

