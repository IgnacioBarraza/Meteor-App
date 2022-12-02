import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { App } from '/imports/ui/App';
import { Pacientform } from '../imports/ui/PacientForm';

Meteor.startup(() => {
  render(<App />, document.getElementById('react-target'));
});

Meteor.startup(() => {
  render(<Pacientform />, document.getElementById('react-form'))
})

// Meteor.startup(() => {
//   render(<Region />, document.getElementById('react-select'))
// })