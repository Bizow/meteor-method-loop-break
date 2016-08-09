import { Meteor } from 'meteor/meteor';
import { Data } from '../imports/api/data.js';

Meteor.startup(() => {
    Data.collection.remove({});
    for(var i = 0; i < 10000; i++){
        Data.collection.insert({index: i});
    }
    console.log(`${Data.collection.find().count()} Data inserted`);
});
