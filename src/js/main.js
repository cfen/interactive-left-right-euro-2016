import reqwest from 'reqwest'
import _ from 'lodash'
import Mustache from 'mustache'
import iframeMessenger from './lib/iframeMessenger'
import mainHTML from './text/main.html!text'
import listHTML from './text/list.html!text'


import share from './lib/share'

import dataBase from './data/countries.json!json'

var shareFn = share('Interactive title', 'http://gu.com/p/URL', '#Interactive');
var electionsArr;

export function init(el, context, config, mediator) {

    iframeMessenger.enableAutoResize();
    
    el.innerHTML = mainHTML.replace(/%assetPath%/g, config.assetPath);

    var tgt = el.querySelector('.test-msg')


    buildFramework(dataBase, tgt)
 
}


function buildFramework(dataBase, tgt){
    electionsArr = [];

    _.each(dataBase, function(item){
        var election = {}
        election.Country = (item.Country)
        election.Year = (item.Year)
        election.Party = (item.Party)
        electionsArr.push(election)
    }) 

    console.log(electionsArr)

   // el.innerHTML = mainHTML.replace(/%assetPath%/g, config.assetPath);

    var person = {
        firstName: "Christophe",
        lastName: "Coenraets",
        blogURL: "http://coenraets.org"
    };

    var data = {
    elections: electionsArr 
    };

    var template = listHTML;
    var tplOp = Mustache.to_html(template, data);
   


    tgt.innerHTML = tplOp

}


// electionsArr = [];




//     _.each(dataBase, function(item){
//         var election = {}
//         election.Country = (item.Country)
//         election.Year = (item.Year)
//         election.Party = (item.Party)
//         electionsArr.push(election)
//     }) 

//     console.log(electionsArr)

//    // el.innerHTML = mainHTML.replace(/%assetPath%/g, config.assetPath);

//     var person = {
//         firstName: "Christophe",
//         lastName: "Coenraets",
//         blogURL: "http://coenraets.org"
//     };

//     var data = {
//     elections: electionsArr 
//     };

//     var template = "Employees:<ul>{{#elections}}" +
//                                 "<li>{{Year}} {{Country}}</li>" +
//                                 "{{/elections}}</ul>";
//     var tplOp = Mustache.to_html(template, data);
   


//     el.innerHTML = tplOp
