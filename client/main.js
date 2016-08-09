import { Template } from 'meteor/templating';

import './main.html';


Template.hello.events({
    'click [data-start]'(event, instance) {
      Meteor.call('startLoop', function (error, result) {
          console.log('startLoop',error,result);
      });
    },
    'click [data-end]'(event, instance) {
        Meteor.call('endLoop', function (error, result) {
            console.log('endLoop',error,result);
        });
    }
});
