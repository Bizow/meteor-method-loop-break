import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';


export const Data = {};

Data.collection = new Mongo.Collection('data');

Data.canRun = true;

Meteor.methods({
    startLoop: function () {
        this.unblock();
        Data.canRun = true;
        var datas = Data.collection.find({}).fetch();
        while(Data.canRun && datas.length > 0){
            //DO SOMETHING WITH data
            var data = datas.shift();
            if(datas.length % 1000 === 0){
                Meteor._sleepForMs(2000);
                console.log(data, Data.canRun);
            }
        }
        return `remaining items is ${datas.length}`;
    },
    endLoop: function () {
        Data.canRun = false;
    }
});