import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Router.route('/(.*)', function(){
  this.render('default');
});

var camID; 

Template.home.onRendered(function(){

  document.getElementById("cta").onclick = function () {

    // the code you're looking for
    camID = document.getElementById('serial').value;

    // iterate over each element in the array
    for (var i = 0; i < results.length; i++){
      // look for the entry with a matching `code` value
      if (results[i].start <= camID && results[i].end >= camID){
        FlowRouter.go('/cam/' + camID);
      } else {
        document.getElementById("error").innerHTML = 'Nothing found for "'  + camID + '"';
        document.getElementById("error").style.display = "inline-block";
      }
    }
  }

  document.getElementById("serial")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode == 13) {
        document.getElementById("cta").click();
    }
  });
      
});

Template.results.onRendered(function(){
  camID = FlowRouter.getParam("camid");
  if (camID) {
  for (var i = 0; i < results.length; i++){
    // look for the entry with a matching `code` value
    if (results[i].start <= camID && results[i].end >= camID){
      console.log(results[i].start);
      document.getElementById("results").style.display = "block";
      document.getElementById("serial").innerHTML = camID;
      document.getElementById("model").innerHTML = "Leica " + results[i].name;
      document.getElementById("date").innerHTML = results[i].date;
      document.getElementById("units").innerHTML = results[i].batch;
      document.getElementById("start").innerHTML = results[i].start;
      document.getElementById("end").innerHTML = results[i].end;
      var name = "Leica " + results[i].name;
      name = name.replace(/ /g,"+");
      var year = results[i].date;
      year = year.substr(year.length - 4);
      var uri = "http://collectiblend.com/Cameras/search.php?param=" + name + "+" +  year + "&page=1&desc";
      document.getElementById("collectiblendLink").setAttribute("href", uri);
    }
  }
  } else {
  console.log('failed')
  }
});

var results = 
[
 {
   "date": "2/26/1959",
   "name": "M1",
   "start": 950001,
   "end": 950300,
   "batch": 300
 },
 {
   "date": "3/18/1959",
   "name": "M1",
   "start": 952016,
   "end": 952500,
   "batch": 485
 },
 {
   "date": "6/1/1959",
   "name": "M1",
   "start": 956501,
   "end": 957000,
   "batch": 500
 },
 {
   "date": "7/22/1959",
   "name": "M1",
   "start": 966501,
   "end": 967500,
   "batch": 1000
 },
 {
   "date": "10/9/1959",
   "name": "M1",
   "start": 979501,
   "end": 980500,
   "batch": 950
 },
 {
   "date": "1/5/1961",
   "name": "M1",
   "start": 1017001,
   "end": 1017500,
   "batch": 500
 },
 {
   "date": "3/21/1961",
   "name": "M1",
   "start": 1028001,
   "end": 1028600,
   "batch": 600
 },
 {
   "date": "6/9/1961",
   "name": "M1",
   "start": 1035401,
   "end": 1036000,
   "batch": 525
 },
 {
   "date": "9/13/1961",
   "name": "M1 (includes 5 M3)",
   "start": 1040001,
   "end": 1040600,
   "batch": 600
 },
 {
   "date": "3/16/1962",
   "name": "M1",
   "start": 1046001,
   "end": 1046500,
   "batch": 500
 },
 {
   "date": "6/20/1962",
   "name": "M1",
   "start": 1050001,
   "end": 1050500,
   "batch": 500
 },
 {
   "date": "11/5/1962",
   "name": "M1",
   "start": 1060001,
   "end": 1060500,
   "batch": 500
 },
 {
   "date": "3/11/1963",
   "name": "M1",
   "start": 1067501,
   "end": 1068000,
   "batch": 370
 },
 {
   "date": "7/2/1963",
   "name": "M1",
   "start": 1074001,
   "end": 1074500,
   "batch": 500
 },
 {
   "date": "10/11/1963",
   "name": "M1",
   "start": 1085001,
   "end": 1085500,
   "batch": 500
 },
 {
   "date": "1/16/1964",
   "name": "M1",
   "start": 1091001,
   "end": 1091300,
   "batch": 300
 },
 {
   "date": "7/10/1964",
   "name": "M1 (includes 4 Post)",
   "start": 1098001,
   "end": 1098300,
   "batch": 213
 },
 {
   "date": "9/11/1964",
   "name": "M1",
   "start": 1102001,
   "end": 1102500,
   "batch": 500
 },
 {
   "date": "1/26/1965",
   "name": "M1",
   "start": 1102801,
   "end": 1103000,
   "batch": 100
 },
 {
   "date": "3/28/1960",
   "name": "M1 green paint",
   "start": 980451,
   "end": 980500,
   "batch": 50
 },
 {
   "date": "8/31/1961",
   "name": "M1 green paint",
   "start": 1035926,
   "end": 1036000,
   "batch": 75
 },
 {
   "date": "9/10/1964",
   "name": "M1 green paint",
   "start": 1098101,
   "end": 1098183,
   "batch": 83
 },
 {
   "date": "11/25/1957",
   "name": "M2",
   "start": 926001,
   "end": 926200,
   "batch": 200
 },
 {
   "date": "5/8/1958",
   "name": "M2",
   "start": 929001,
   "end": 931000,
   "batch": 2000
 },
 {
   "date": "6/9/1958",
   "name": "M2 with smaller window",
   "start": 931001,
   "end": 933000,
   "batch": 2000
 },
 {
   "date": "8/6/1958",
   "name": "M2",
   "start": 935001,
   "end": 937500,
   "batch": 2500
 },
 {
   "date": "9/8/1958",
   "name": "M2",
   "start": 937501,
   "end": 940000,
   "batch": 2500
 },
 {
   "date": "9/12/1958",
   "name": "M2 ELC",
   "start": 937621,
   "end": 937650,
   "batch": 30
 },
 {
   "date": "9/26/1958",
   "name": "M2",
   "start": 940001,
   "end": 942900,
   "batch": 2900
 },
 {
   "date": "10/31/1958",
   "name": "M2 ELC",
   "start": 942901,
   "end": 943000,
   "batch": 100
 },
 {
   "date": "11/3/1958",
   "name": "M2",
   "start": 944001,
   "end": 946000,
   "batch": 2000
 },
 {
   "date": "12/1/1958",
   "name": "M2",
   "start": 946001,
   "end": 947000,
   "batch": 800
 },
 {
   "date": "12/4/1958",
   "name": "M2 ELC",
   "start": 946301,
   "end": 946400,
   "batch": 100
 },
 {
   "date": "12/9/1958",
   "name": "M2 ELC",
   "start": 946901,
   "end": 947000,
   "batch": 100
 },
 {
   "date": "12/9/1958",
   "name": "M2",
   "start": 947001,
   "end": 947500,
   "batch": 500
 },
 {
   "date": "12/9/1958",
   "name": "M2 with self timer",
   "start": 947501,
   "end": 948000,
   "batch": 500
 },
 {
   "date": "12/17/1958",
   "name": "M2 ELC",
   "start": 948501,
   "end": 948600,
   "batch": 100
 },
 {
   "date": "1/5/1959",
   "name": "M2",
   "start": 949101,
   "end": 950000,
   "batch": 900
 },
 {
   "date": "12/19/1958",
   "name": "M2 with self timer",
   "start": 949101,
   "end": 949400,
   "batch": 300
 },
 {
   "date": "6/22/1959",
   "name": "M2",
   "start": 960501,
   "end": 961500,
   "batch": 1000
 },
 {
   "date": "6/22/1959",
   "name": "M2 with self timer",
   "start": 960501,
   "end": 960500,
   "batch": 1000
 },
 {
   "date": "1/19/1960",
   "name": "M2 without self timer",
   "start": 960501,
   "end": 960801,
   "batch": 300
 },
 {
   "date": "6/22/1959",
   "name": "M2 from 960601 with new light window",
   "start": 960601,
   "end": null,
   "batch": null
 },
 {
   "date": "7/22/1959",
   "name": "M2",
   "start": 967501,
   "end": 968350,
   "batch": 850
 },
 {
   "date": "8/24/1959",
   "name": "M2",
   "start": 970001,
   "end": 971500,
   "batch": 1500
 },
 {
   "date": "10/9/1959",
   "name": "M2",
   "start": 975001,
   "end": 976500,
   "batch": 1200
 },
 {
   "date": "1/19/1960",
   "name": "M2 with self timer",
   "start": 975801,
   "end": 976100,
   "batch": 300
 },
 {
   "date": "12/4/1959",
   "name": "M2",
   "start": 982001,
   "end": 984000,
   "batch": 1850
 },
 {
   "date": "1/19/1960",
   "name": "M2 with self timer",
   "start": 982001,
   "end": 982150,
   "batch": 150
 },
 {
   "date": "12/7/1959",
   "name": "M2 with self timer",
   "start": 982901,
   "end": 983500,
   "batch": 600
 },
 {
   "date": "2/3/1960",
   "name": "M2 ELC",
   "start": 987201,
   "end": 987300,
   "batch": 100
 },
 {
   "date": "6/22/1960",
   "name": "M2",
   "start": 988351,
   "end": 988650,
   "batch": 300
 },
 {
   "date": "6/22/1960",
   "name": "M2 with self timer",
   "start": 988651,
   "end": 989250,
   "batch": 600
 },
 {
   "date": "2/10/1960",
   "name": "M2",
   "start": 989251,
   "end": 990750,
   "batch": 1250
 },
 {
   "date": "2/10/1960",
   "name": "M2 with self timer",
   "start": 989251,
   "end": 989650,
   "batch": 400
 },
 {
   "date": "2/10/1960",
   "name": "M2 with self timer",
   "start": 989801,
   "end": 990500,
   "batch": 700
 },
 {
   "date": "4/13/1960",
   "name": "M2",
   "start": 993751,
   "end": 996000,
   "batch": 1850
 },
 {
   "date": "5/31/1960",
   "name": "M2 ELC",
   "start": 995001,
   "end": 995100,
   "batch": 100
 },
 {
   "date": "5/31/1960",
   "name": "M2 with self timer",
   "start": 995101,
   "end": 995400,
   "batch": 300
 },
 {
   "date": "7/5/1960",
   "name": "M2",
   "start": 1004001,
   "end": 1004150,
   "batch": 150
 },
 {
   "date": "7/5/1960",
   "name": "M2 with self timer",
   "start": 1004150,
   "end": 1007000,
   "batch": 2850
 },
 {
   "date": "8/17/1960",
   "name": "M2 ELC",
   "start": 1005351,
   "end": 1005450,
   "batch": 100
 },
 {
   "date": "9/26/1960",
   "name": "M2",
   "start": 1011001,
   "end": 1014000,
   "batch": 3000
 },
 {
   "date": "1/15/1961",
   "name": "M2 (includes 200 ELC)",
   "start": 1017501,
   "end": 1022000,
   "batch": 4300
 },
 {
   "date": "1/15/1961",
   "name": "M2 ELC",
   "start": 1017901,
   "end": 1018000,
   "batch": 100
 },
 {
   "date": "1/15/1961",
   "name": "M2 ELC",
   "start": 1020101,
   "end": 1020200,
   "batch": 100
 },
 {
   "date": "4/27/1961",
   "name": "M2",
   "start": 1028601,
   "end": 1031800,
   "batch": 3200
 },
 {
   "date": "7/28/1961",
   "name": "M2 ELC",
   "start": 1036001,
   "end": 1036050,
   "batch": 50
 },
 {
   "date": "8/9/1961",
   "name": "M2",
   "start": 1036351,
   "end": 1038000,
   "batch": 1600
 },
 {
   "date": "1/5/1962",
   "name": "M2 ELC",
   "start": 1037951,
   "end": 1038000,
   "batch": 50
 },
 {
   "date": "2/2/1962",
   "name": "M2",
   "start": 1043001,
   "end": 1044000,
   "batch": 800
 },
 {
   "date": "5/17/1962",
   "name": "M2",
   "start": 1048001,
   "end": 1050000,
   "batch": 2000
 },
 {
   "date": "6/20/1962",
   "name": "M2",
   "start": 1050501,
   "end": 1055000,
   "batch": 4250
 },
 {
   "date": "8/27/1962",
   "name": "M2 ELC",
   "start": 1054901,
   "end": 1055000,
   "batch": 100
 },
 {
   "date": "11/5/1962",
   "name": "M2",
   "start": 1060501,
   "end": 1063000,
   "batch": 2400
 },
 {
   "date": "2/20/1963",
   "name": "M2 ELC",
   "start": 1061701,
   "end": 1061800,
   "batch": 100
 },
 {
   "date": "3/11/1963",
   "name": "M2",
   "start": 1068001,
   "end": 1070000,
   "batch": 2000
 },
 {
   "date": "7/2/1963",
   "name": "M2",
   "start": 1074501,
   "end": 1077000,
   "batch": 2500
 },
 {
   "date": "10/10/1963",
   "name": "M2",
   "start": 1085501,
   "end": 1088000,
   "batch": 2500
 },
 {
   "date": "1/16/1964",
   "name": "M2",
   "start": 1091301,
   "end": 1093800,
   "batch": 2150
 },
 {
   "date": "3/16/1964",
   "name": "M2 ELC",
   "start": 1093751,
   "end": 1093800,
   "batch": 50
 },
 {
   "date": "7/10/1964",
   "name": "M2",
   "start": 1098301,
   "end": 1100000,
   "batch": 1600
 },
 {
   "date": "8/19/1964",
   "name": "M2 ELC",
   "start": 1099801,
   "end": 1099900,
   "batch": 100
 },
 {
   "date": "3/17/1965",
   "name": "M2",
   "start": 1102901,
   "end": 1103000,
   "batch": 100
 },
 {
   "date": "11/3/1964",
   "name": "M2",
   "start": 1103001,
   "end": 1105000,
   "batch": 1900
 },
 {
   "date": "1/26/1965",
   "name": "M2 ELC",
   "start": 1104901,
   "end": 1105000,
   "batch": 100
 },
 {
   "date": "1/26/1965",
   "name": "M2",
   "start": 1107001,
   "end": 1109000,
   "batch": 2000
 },
 {
   "date": "4/29/1965",
   "name": "M2",
   "start": 1112001,
   "end": 1115000,
   "batch": 3000
 },
 {
   "date": "8/18/1965",
   "name": "M2",
   "start": 1130301,
   "end": 1133000,
   "batch": 2600
 },
 {
   "date": "11/8/1965",
   "name": "M2 ELC",
   "start": 1132901,
   "end": 1133000,
   "batch": 100
 },
 {
   "date": "1/26/1966",
   "name": "M2",
   "start": 1137001,
   "end": 1139000,
   "batch": 1900
 },
 {
   "date": "4/18/1966",
   "name": "M2 ELC",
   "start": 1138901,
   "end": 1139000,
   "batch": 100
 },
 {
   "date": "5/3/1966",
   "name": "M2",
   "start": 1142001,
   "end": 1145000,
   "batch": 3000
 },
 {
   "date": "9/30/1966",
   "name": "M2",
   "start": 1161421,
   "end": 1162400,
   "batch": 980
 },
 {
   "date": "9/30/1966",
   "name": "M2",
   "start": 1162451,
   "end": 1163770,
   "batch": 1320
 },
 {
   "date": "9/30/1966",
   "name": "M2",
   "start": 1164047,
   "end": 1164550,
   "batch": 504
 },
 {
   "date": "12/28/1966",
   "name": "M2",
   "start": 1164551,
   "end": 1164845,
   "batch": 295
 },
 {
   "date": "4/3/1967",
   "name": "M2",
   "start": 1164941,
   "end": 1165000,
   "batch": 60
 },
{
   "date": "8/28/1969",
   "name": "M2-R   Chrome with M4 Rapid     Loading",
   "start": 1248201,
   "end": 1250200,
   "batch": 2000
 },
 {
   "date": "12/19/1958",
   "name": "M2 Black",
   "start": 948601,
   "end": 949100,
   "batch": 500
 },
 {
   "date": "3/21/1960",
   "name": "M2 Black",
   "start": 990501,
   "end": 990750,
   "batch": 250
 },
 {
   "date": "8/18/1961",
   "name": "M2 Black",
   "start": 1031801,
   "end": 1032000,
   "batch": 200
 },
 {
   "date": "5/11/1962",
   "name": "M2 Black",
   "start": 1043801,
   "end": 1044000,
   "batch": 200
 },
 {
   "date": "7/5/1960",
   "name": "M2 Black with self timer.",
   "start": 1005101,
   "end": 1005350,
   "batch": 250
 },
 {
   "date": "10/24/1962",
   "name": "M2 Black",
   "start": 1053101,
   "end": 1053250,
   "batch": 150
 },
 {
   "date": "8/5/1963",
   "name": "M2 Black",
   "start": 1075001,
   "end": 1075300,
   "batch": 300
 },
 {
   "date": "4/8/1964",
   "name": "M2 Black",
   "start": 1093501,
   "end": 1093750,
   "batch": 250
 },
 {
   "date": "8/18/1965",
   "name": "M2 Black",
   "start": 1130001,
   "end": 1130300,
   "batch": 300
 },
 {
   "date": "11/24/1966",
   "name": "M2 Black",
   "start": 1162401,
   "end": 1162450,
   "batch": 50
 },
 {
   "date": "7/12/1968",
   "name": "M2 Black",
   "start": 1207000,
   "end": 1207000,
   "batch": 1
 },
 {
   "date": "1/30/1967",
   "name": "M2 M Motor",
   "start": 1163771,
   "end": 1164046,
   "batch": 276
 },
 {
   "date": "8/29/1960",
   "name": "M2 Luftwaffe Grey (enamel)",
   "start": 1005751,
   "end": 1005770,
   "batch": 20
 },
  {
   "date": "1/1/1955",
   "name": "M3 (Exact Date Unrecorded)",
   "start": 700000,
   "end": 700000,
   "batch": 1
 },
 {
   "date": "1/1/1954",
   "name": "M3 (Exact Date Unrecorded)",
   "start": 700001,
   "end": 710000,
   "batch": 10000
 },
 {
   "date": "1/1/1955",
   "name": "M3 (Exact Date Unrecorded)",
   "start": 730001,
   "end": 746450,
   "batch": 16449
 },
 {
   "date": "1/1/1955",
   "name": "M3 ELC (Exact Date     Unrecorded)",
   "start": 746451,
   "end": 746500,
   "batch": 50
 },
 {
   "date": "1/1/1955",
   "name": "M3 (Exact Date Unrecorded)",
   "start": 746501,
   "end": 750000,
   "batch": 3500
 },
 {
   "date": "1/1/1955",
   "name": "M3 (Exact Date Unrecorded)",
   "start": 750001,
   "end": 759700,
   "batch": 9700
 },
 {
   "date": "1/1/1955",
   "name": "M3 ELC (Exact Date     Unrecorded)",
   "start": 759701,
   "end": 760000,
   "batch": 300
 },
 {
   "date": "1/1/1955",
   "name": "M3 (Exact Date Unrecorded)",
   "start": 775001,
   "end": 780000,
   "batch": 5000
 },
 {
   "date": "1/1/1955",
   "name": "M3 ELC (Exact Date     Unrecorded)",
   "start": 780001,
   "end": 780100,
   "batch": 100
 },
 {
   "date": "1/1/1955",
   "name": "M3 (Exact Date Unrecorded)",
   "start": 780101,
   "end": 787000,
   "batch": 6900
 },
 {
   "date": "1/1/1955",
   "name": "M3 (Exact Date Unrecorded)",
   "start": 800000,
   "end": 807500,
   "batch": 7500
 },
 {
   "date": "1/1/1955",
   "name": "M3 ELC (Exact Date     Unrecorded)",
   "start": 805001,
   "end": 805100,
   "batch": 100
 },
 {
   "date": "3/21/1956",
   "name": "M3",
   "start": 816001,
   "end": 820500,
   "batch": 4400
 },
 {
   "date": "3/23/1956",
   "name": "M3 ELC",
   "start": 816901,
   "end": 817000,
   "batch": 100
 },
 {
   "date": "6/15/1956",
   "name": "M3 ELC",
   "start": 829851,
   "end": 830000,
   "batch": 150
 },
 {
   "date": "5/4/1956",
   "name": "M3",
   "start": 830001,
   "end": 837500,
   "batch": 7500
 },
 {
   "date": "7/21/1956",
   "name": "M3 ELC",
   "start": 837501,
   "end": 837620,
   "batch": 120
 },
 {
   "date": "1/1/1956",
   "name": "M3 (Exact Date Unrecorded)",
   "start": 837721,
   "end": 839620,
   "batch": 1900
 },
 {
   "date": "1/1/1956",
   "name": "M3 ELC (Exact Date     Unrecorded)",
   "start": 839621,
   "end": 839700,
   "batch": 80
 },
 {
   "date": "1/1/1956",
   "name": "M3 (Exact Date Unrecorded)",
   "start": 839701,
   "end": 840500,
   "batch": 800
 },
 {
   "date": "1/1/1956",
   "name": "M3 ELC (Exact Date     Unrecorded)",
   "start": 840501,
   "end": 840820,
   "batch": 320
 },
 {
   "date": "1/1/1956",
   "name": "M3 (Exact Date Unrecorded)",
   "start": 840821,
   "end": 845000,
   "batch": 4180
 },
 {
   "date": "10/26/1956",
   "name": "M3 ELC",
   "start": 844781,
   "end": 845000,
   "batch": 220
 },
 {
   "date": "11/5/1956",
   "name": "M3",
   "start": 851001,
   "end": 854000,
   "batch": 3000
 },
 {
   "date": "1/5/1957",
   "name": "M3 new shutter speed     sequence",
   "start": 854001,
   "end": 858000,
   "batch": 4000
 },
 {
   "date": "2/14/1957",
   "name": "M3",
   "start": 862001,
   "end": 866620,
   "batch": 4620
 },
 {
   "date": "3/22/1957",
   "name": "M3 ELC",
   "start": 866621,
   "end": 867000,
   "batch": 380
 },
 {
   "date": "3/25/1957",
   "name": "M3",
   "start": 872001,
   "end": 877000,
   "batch": 5000
 },
 {
   "date": "6/5/1957",
   "name": "M3",
   "start": 882001,
   "end": 886700,
   "batch": 4700
 },
 {
   "date": "7/30/1957",
   "name": "M3 ELC",
   "start": 886701,
   "end": 887000,
   "batch": 300
 },
 {
   "date": "8/13/1957",
   "name": "M3",
   "start": 893001,
   "end": 898000,
   "batch": 4430
 },
 {
   "date": "8/26/1957",
   "name": "M3 ELC",
   "start": 894001,
   "end": 894570,
   "batch": 570
 },
 {
   "date": "9/25/1957",
   "name": "M3",
   "start": 898001,
   "end": 903000,
   "batch": 5000
 },
 {
   "date": "11/25/1957",
   "name": "M3 ELC",
   "start": 903001,
   "end": 903300,
   "batch": 300
 },
 {
   "date": "11/28/1957",
   "name": "M3",
   "start": 910001,
   "end": 916000,
   "batch": 5700
 },
 {
   "date": "11/20/1957",
   "name": "M3",
   "start": 915001,
   "end": 915200,
   "batch": 200
 },
 {
   "date": "1/14/1958",
   "name": "M3",
   "start": 916001,
   "end": 919250,
   "batch": 3250
 },
 {
   "date": "3/26/1958",
   "name": "M3 with depth of field mask,     single stroke film advance",
   "start": 919251,
   "end": 924500,
   "batch": 5229
 },
 {
   "date": "4/22/1958",
   "name": "M3 ELC still with double     stroke film advance",
   "start": 924401,
   "end": 924500,
   "batch": 100
 },
 {
   "date": "4/23/1958",
   "name": "M3",
   "start": 926701,
   "end": 929000,
   "batch": 2300
 },
 {
   "date": "2/26/1959",
   "name": "M3",
   "start": 950301,
   "end": 951900,
   "batch": 1600
 },
 {
   "date": "3/19/1959",
   "name": "M3 ELC",
   "start": 951901,
   "end": 952000,
   "batch": 100
 },
 {
   "date": "4/15/1959",
   "name": "M3",
   "start": 952501,
   "end": 955000,
   "batch": 2300
 },
 {
   "date": "4/22/1959",
   "name": "M3 ELC",
   "start": 954801,
   "end": 954900,
   "batch": 100
 },
 {
   "date": "4/29/1959",
   "name": "M3 ELC",
   "start": 954901,
   "end": 955000,
   "batch": 100
 },
 {
   "date": "5/14/1959",
   "name": "M3",
   "start": 957001,
   "end": 959400,
   "batch": 2400
 },
 {
   "date": "6/24/1959",
   "name": "M3 ELC",
   "start": 961501,
   "end": 961700,
   "batch": 200
 },
 {
   "date": "6/24/1959",
   "name": "M3",
   "start": 961701,
   "end": 966500,
   "batch": 4800
 },
 {
   "date": "7/22/1959",
   "name": "M3 ELC",
   "start": 968351,
   "end": 968500,
   "batch": 150
 },
 {
   "date": "8/24/1959",
   "name": "M3",
   "start": 972001,
   "end": 974700,
   "batch": 2700
 },
 {
   "date": "10/2/1959",
   "name": "M3 ELC",
   "start": 974701,
   "end": 975000,
   "batch": 300
 },
 {
   "date": "10/9/1959",
   "name": "M3",
   "start": 976501,
   "end": 979500,
   "batch": 3000
 },
 {
   "date": "12/7/1959",
   "name": "M3 ELC",
   "start": 984001,
   "end": 984200,
   "batch": 200
 },
 {
   "date": "12/7/1959",
   "name": "M3",
   "start": 984201,
   "end": 987000,
   "batch": 2800
 },
 {
   "date": "2/3/1960",
   "name": "M3 ELC",
   "start": 987001,
   "end": 987200,
   "batch": 200
 },
 {
   "date": "2/10/1960",
   "name": "M3",
   "start": 990751,
   "end": 993750,
   "batch": 2750
 },
 {
   "date": "4/13/1960",
   "name": "M3",
   "start": 996001,
   "end": 1000000,
   "batch": 4000
 },
 {
   "date": "5/31/1960",
   "name": "M3 ELC",
   "start": 998001,
   "end": 998300,
   "batch": 300
 },
 {
   "date": "7/5/1960",
   "name": "M3",
   "start": 1000001,
   "end": 1003700,
   "batch": 3700
 },
 {
   "date": "7/5/1960",
   "name": "M3 # 1000070 exists two     times",
   "start": 1000070,
   "end": 1000070,
   "batch": 2
 },
 {
   "date": "8/17/1960",
   "name": "M3 ELC",
   "start": 1003701,
   "end": 1004000,
   "batch": 300
 },
 {
   "date": "9/13/1960",
   "name": "M3",
   "start": 1007001,
   "end": 1011000,
   "batch": 4000
 },
 {
   "date": "11/21/1960",
   "name": "M3 ELC",
   "start": 1014001,
   "end": 1014300,
   "batch": 300
 },
 {
   "date": "11/21/1960",
   "name": "M3",
   "start": 1014301,
   "end": 1017000,
   "batch": 2700
 },
 {
   "date": "1/19/1961",
   "name": "M3",
   "start": 1022001,
   "end": 1028000,
   "batch": 5500
 },
 {
   "date": "1/19/1961",
   "name": "M3 ELC",
   "start": 1022701,
   "end": 1023000,
   "batch": 300
 },
 {
   "date": "4/13/1961",
   "name": "M3 ELC",
   "start": 1027801,
   "end": 1028000,
   "batch": 200
 },
 {
   "date": "6/9/1961",
   "name": "M3",
   "start": 1032001,
   "end": 1035400,
   "batch": 3400
 },
 {
   "date": "7/28/1961",
   "name": "M3 ELC",
   "start": 1036051,
   "end": 1036350,
   "batch": 300
 },
 {
   "date": "8/9/1961",
   "name": "M3",
   "start": 1038001,
   "end": 1040000,
   "batch": 1800
 },
 {
   "date": "9/13/1961",
   "name": "M3 5 made with M1 batch #     1040067 1040068, 1040071, 1040095, 1040096",
   "start": 1040067,
   "end": 1040096,
   "batch": 5
 },
 {
   "date": "10/11/1961",
   "name": "M3",
   "start": 1040601,
   "end": 1043000,
   "batch": 2400
 },
 {
   "date": "2/2/1962",
   "name": "M3",
   "start": 1044001,
   "end": 1046000,
   "batch": 2000
 },
 {
   "date": "3/16/1962",
   "name": "M3",
   "start": 1046501,
   "end": 1048000,
   "batch": 1300
 },
 {
   "date": "6/12/1962",
   "name": "M3 ELC",
   "start": 1047801,
   "end": 1048000,
   "batch": 200
 },
 {
   "date": "6/20/1962",
   "name": "M3",
   "start": 1055001,
   "end": 1060000,
   "batch": 4800
 },
 {
   "date": "11/5/1962",
   "name": "M3",
   "start": 1063001,
   "end": 1067500,
   "batch": 4100
 },
 {
   "date": "11/21/1962",
   "name": "M3 ELC",
   "start": 1065001,
   "end": 1065200,
   "batch": 200
 },
 {
   "date": "3/11/1963",
   "name": "M3",
   "start": 1070001,
   "end": 1074000,
   "batch": 4000
 },
 {
   "date": "7/2/1963",
   "name": "M3",
   "start": 1077001,
   "end": 1080000,
   "batch": 3000
 },
 {
   "date": "10/10/1963",
   "name": "M3",
   "start": 1088001,
   "end": 1091000,
   "batch": 3000
 },
 {
   "date": "1/16/1964",
   "name": "M3",
   "start": 1093801,
   "end": 1098000,
   "batch": 4050
 },
 {
   "date": "3/16/1964",
   "name": "M3 ELC",
   "start": 1097851,
   "end": 1098000,
   "batch": 15
 },
 {
   "date": "7/10/1964",
   "name": "M3",
   "start": 1100001,
   "end": 1102000,
   "batch": 1950
 },
 {
   "date": "11/3/1964",
   "name": "M3",
   "start": 1105001,
   "end": 1107000,
   "batch": 1900
 },
 {
   "date": "1/26/1965",
   "name": "M3 ELC",
   "start": 1106901,
   "end": 1107000,
   "batch": 100
 },
 {
   "date": "1/26/1965",
   "name": "M3",
   "start": 1109001,
   "end": 1110500,
   "batch": 1500
 },
 {
   "date": "4/29/1965",
   "name": "M3",
   "start": 1110501,
   "end": 1112000,
   "batch": 1500
 },
 {
   "date": "6/30/1965",
   "name": "M3",
   "start": 1128401,
   "end": 1130000,
   "batch": 1600
 },
 {
   "date": "9/7/1965",
   "name": "M3",
   "start": 1133001,
   "end": 1136000,
   "batch": 3000
 },
 {
   "date": "11/8/1965",
   "name": "M3 ELC",
   "start": 1135001,
   "end": 1135100,
   "batch": 100
 },
 {
   "date": "2/11/1966",
   "name": "M3 with Star",
   "start": 1135001,
   "end": 1135100,
   "batch": 100
 },
 {
   "date": "1/26/1966",
   "name": "M3",
   "start": 1139001,
   "end": 1141000,
   "batch": 1900
 },
 {
   "date": "4/18/1966",
   "name": "M3 ELC",
   "start": 1140901,
   "end": 1141000,
   "batch": 100
 },
 {
   "date": "5/3/1966",
   "name": "M3",
   "start": 1155001,
   "end": 1158000,
   "batch": 3000
 },
 {
   "date": "9/30/1966",
   "name": "M3",
   "start": 1158001,
   "end": 1158500,
   "batch": 500
 },
 {
   "date": "9/30/1966",
   "name": "M3",
   "start": 1158511,
   "end": 1158995,
   "batch": 485
 },
 {
   "date": "2/2/1967",
   "name": "M3",
   "start": 1164846,
   "end": 1164865,
   "batch": 20
 },
 {
   "date": "6/3/1959",
   "name": "M3 Black",
   "start": 959401,
   "end": 959500,
   "batch": 100
 },
 {
   "date": "3/21/1960",
   "name": "M3 Black",
   "start": 993501,
   "end": 993750,
   "batch": 250
 },
 {
   "date": "8/18/1961",
   "name": "M3 Black",
   "start": 1038801,
   "end": 1039000,
   "batch": 200
 },
 {
   "date": "10/24/1962",
   "name": "M3 Black",
   "start": 1059850,
   "end": 1059999,
   "batch": 150
 },
 {
   "date": "8/5/1963",
   "name": "M3 Black",
   "start": 1078501,
   "end": 1078800,
   "batch": 300
 },
 {
   "date": "4/8/1964",
   "name": "M3 Black",
   "start": 1097701,
   "end": 1097850,
   "batch": 150
 },
 {
   "date": "11/12/1965",
   "name": "M3 Black",
   "start": 1134001,
   "end": 1134150,
   "batch": 150
 },
 {
   "date": "12/2/1966",
   "name": "M3 Black",
   "start": 1157591,
   "end": 1157600,
   "batch": 10
 },
 {
   "date": "1/26/1967",
   "name": "M3 Black",
   "start": 1158501,
   "end": 1158510,
   "batch": 10
 },
  {
   "date": "12/20/1957",
   "name": "M3 Green   (enamel)",
   "start": 910501,
   "end": 910600,
   "batch": 100
 },
 {
   "date": "3/26/1958",
   "name": "M3 Green   (enamel)",
   "start": 920501,
   "end": 920251,
   "batch": 21
 },
 {
   "date": "9/10/1964",
   "name": "M3 Green   (enamel)",
   "start": 1100401,
   "end": 1100450,
   "batch": 50
 },
 {
   "date": "2/6/1967",
   "name": "M3 Green   (enamel)",
   "start": 1158996,
   "end": 1159000,
   "batch": 5
 },
 {
   "date": "7/30/1968",
   "name": "M3 Green   (enamel)",
   "start": 1206962,
   "end": 1205999,
   "batch": 38
 },
  {
   "date": "9/27/1956",
   "name": "MP",
   "start": 1,
   "end": 11,
   "batch": 11
 },
 {
   "date": "2/14/1957",
   "name": "MP",
   "start": 12,
   "end": 500,
   "batch": 489
 },
 {
   "date": "6/24/1957",
   "name": "MP Black",
   "start": 13,
   "end": 150,
   "batch": 137
 },
 {
   "date": "6/24/1957",
   "name": "MP Chrome",
   "start": 151,
   "end": 450,
   "batch": 298
 },
 {
   "date": "6/24/1957",
   "name": "MP Black",
   "start": 213,
   "end": 214,
   "batch": 2
 },
 {
   "date": "8/19/1958",
   "name": "MP2",
   "start": 935501,
   "end": 935512,
   "batch": 12
 },
 {
   "date": "4/3/1959",
   "name": "MP2",
   "start": 952001,
   "end": 952015,
   "batch": 15
 },
 {
   "date": "11/28/1966",
   "name": "M4",
   "start": 1175001,
   "end": 1178000,
   "batch": 3000
 },
 {
   "date": "4/27/1967",
   "name": "M4 ELC",
   "start": 1178001,
   "end": 1178100,
   "batch": 100
 },
 {
   "date": "12/28/1966",
   "name": "M4",
   "start": 1178101,
   "end": 1185000,
   "batch": 6900
 },
 {
   "date": "7/19/1967",
   "name": "M4 ELC",
   "start": 1183001,
   "end": 1183100,
   "batch": 100
 },
 {
   "date": "7/19/1967",
   "name": "M4",
   "start": 1185001,
   "end": 1195000,
   "batch": 10000
 },
 {
   "date": "5/3/1968",
   "name": "M4",
   "start": 1207481,
   "end": 1215000,
   "batch": 7520
 },
 {
   "date": "1/22/1969",
   "name": "M4",
   "start": 1225801,
   "end": 1235000,
   "batch": 9200
 },
 {
   "date": "1/2/1970",
   "name": "M4",
   "start": 1250201,
   "end": 1254650,
   "batch": 4450
 },
 {
   "date": "11/24/1970",
   "name": "M4",
   "start": 1267501,
   "end": 1273921,
   "batch": 6421
 },
 {
   "date": "1/20/1975",
   "name": "M4 Canada",
   "start": 1412551,
   "end": 1413350,
   "batch": 800
 },
 {
   "date": "1/16/1974",
   "name": "M4 Black",
   "start": 1380001,
   "end": 400,
   "batch": 400
 },
 {
   "date": "1/16/1974",
   "name": "M4 Black repro",
   "start": 1380401,
   "end": 1380450,
   "batch": 50
 },
 {
   "date": "1/16/1974",
   "name": "M4 Black",
   "start": 1380451,
   "end": 1382050,
   "batch": 1600
 },
 {
   "date": "1/16/1974",
   "name": "M4 Black  engraved E. Leitz Canada",
   "start": 1382051,
   "end": 1382600,
   "batch": 550
 },
 {
   "date": "6/7/1974",
   "name": "M4 Black",
   "start": 1384001,
   "end": 1384600,
   "batch": 600
 },
 {
   "date": "1/20/1975",
   "name": "M4 Black",
   "start": 1413351,
   "end": 1414150,
   "batch": 1800
 },
 {
   "date": "7/22/1975",
   "name": "M4 Black",
   "start": 1414151,
   "end": 1415000,
   "batch": 850
 },
 {
   "date": "7/22/1975",
   "name": "M4 Black",
   "start": 1443001,
   "end": 1443170,
   "batch": 170
 },
  {
   "date": "6/11/1970",
   "name": "M4 Mot",
   "start": 1267101,
   "end": 1267500,
   "batch": 400
 },
 {
   "date": "12/4/1970",
   "name": "M4 Mot",
   "start": 1274001,
   "end": 1274100,
   "batch": 100
 },
 {
   "date": "10/8/1970",
   "name": "M4 Green (enamel)",
   "start": 1266101,
   "end": 1266131,
   "batch": 31
 },
  {
   "date": "8/20/1971",
   "name": "M4 KE-7  (black chrome)",
   "start": 1294501,
   "end": 1295000,
   "batch": 500
 },
 {
   "date": "8/31/1972",
   "name": "M4 KE-7  (black chrome)",
   "start": 1293771,
   "end": 1293775,
   "batch": 5
 },
 {
   "date": "12/7/1977",
   "name": "M4-2 ELC",
   "start": 1480001,
   "end": 1482000,
   "batch": 2000
 },
 {
   "date": "4/4/1978",
   "name": "M4-2 ELC",
   "start": 1502001,
   "end": 1504000,
   "batch": 2000
 },
 {
   "date": "7/6/1978",
   "name": "M4-2 ELC",
   "start": 1504001,
   "end": 1506000,
   "batch": 2000
 },
 {
   "date": "12/12/1978",
   "name": "M4-2 ELC",
   "start": 1506001,
   "end": 1508000,
   "batch": 2000
 },
 {
   "date": "6/27/1979",
   "name": "M4-2 ELC",
   "start": 1525351,
   "end": 1527350,
   "batch": 2000
 },
 {
   "date": "9/27/1979",
   "name": "M4-2 ELC",
   "start": 1527351,
   "end": 1529350,
   "batch": 2000
 },
 {
   "date": "11/16/1979",
   "name": "M4-2 ELC",
   "start": 1529351,
   "end": 1531350,
   "batch": 2000
 },
 {
   "date": "1/16/1980",
   "name": "M4-2 ELC",
   "start": 1531351,
   "end": 1533350,
   "batch": 2000
 },
 {
   "date": "2/16/1993",
   "name": "M4-2 gold",
   "start": 1932001,
   "end": 1932002,
   "batch": 2
 },
 {
   "date": "7/1/1980",
   "name": "M4-P",
   "start": 1543351,
   "end": 1545350,
   "batch": 2000
 },
 {
   "date": "10/21/1980",
   "name": "M4-P",
   "start": 1546351,
   "end": 1548350,
   "batch": 2000
 },
 {
   "date": "11/26/1980",
   "name": "M4-P",
   "start": 1548351,
   "end": 1550350,
   "batch": 2000
 },
 {
   "date": "2/19/1981",
   "name": "M4-P",
   "start": 1550351,
   "end": 1552350,
   "batch": 2000
 },
 {
   "date": "10/21/1981",
   "name": "M4-P",
   "start": 1562351,
   "end": 1564350,
   "batch": 2000
 },
 {
   "date": "1/7/1982",
   "name": "M4-P",
   "start": 1586351,
   "end": 1588350,
   "batch": 2000
 },
 {
   "date": "1/22/1982",
   "name": "M4-P",
   "start": 1588351,
   "end": 1590350,
   "batch": 2000
 },
 {
   "date": "9/15/1982",
   "name": "M4-P",
   "start": 1604551,
   "end": 1606550,
   "batch": 2000
 },
 {
   "date": "1/12/1983",
   "name": "M4-P",
   "start": 1618551,
   "end": 1620550,
   "batch": 2000
 },
 {
   "date": "4/15/1983",
   "name": "M4-P",
   "start": 1620551,
   "end": 1622550,
   "batch": 2000
 },
 {
   "date": "8/10/1983",
   "name": "M4-P",
   "start": 1636551,
   "end": 1637550,
   "batch": 1000
 },
 {
   "date": "1/17/1984",
   "name": "M4-P",
   "start": 1642551,
   "end": 1643750,
   "batch": 1200
 },
 {
   "date": "3/6/1984",
   "name": "M4-P",
   "start": 1649251,
   "end": 1651250,
   "batch": 2000
 },
 {
   "date": "3/4/1986",
   "name": "M4-P ELW  Assembled  \tin Wetzlar",
   "start": 1691951,
   "end": 1692950,
   "batch": 1000
 },
 {
   "date": "3/4/1986",
   "name": "M4-P ELW, 270 of which are M6, but     numbers not recorded, Canada engraving",
   "start": 1691951,
   "end": 1692950,
   "batch": 1000
 },
 {
   "date": "2/4/1971",
   "name": "M5 0-Series",
   "start": 1287001,
   "end": 1287250,
   "batch": 250
 },
 {
   "date": "8/18/1971",
   "name": "M5 Black",
   "start": 1287251,
   "end": 1288000,
   "batch": 750
 },
 {
   "date": "10/1/1971",
   "name": "M5 Black",
   "start": 1289001,
   "end": 1291400,
   "batch": 2400
 },
 {
   "date": "4/19/1972",
   "name": "M5 Black",
   "start": 1347001,
   "end": 1350000,
   "batch": 3000
 },
 {
   "date": "8/15/1972",
   "name": "M5 Black",
   "start": 1350001,
   "end": 1354000,
   "batch": 4000
 },
 {
   "date": "12/11/1972",
   "name": "M5 Black",
   "start": 1356501,
   "end": 1360000,
   "batch": 3500
 },
 {
   "date": "2/27/1973",
   "name": "M5 Black",
   "start": 1363001,
   "end": 1365000,
   "batch": 2000
 },
 {
   "date": "10/12/1973",
   "name": "M5 Black",
   "start": 1375001,
   "end": 1378000,
   "batch": 3000
 },
 {
   "date": "4/18/1974",
   "name": "M5 Black",
   "start": 1383001,
   "end": 1384000,
   "batch": 1000
 },
 {
   "date": "8/18/1971",
   "name": "M5 Chrome",
   "start": 1288001,
   "end": 1289000,
   "batch": 1000
 },
 {
   "date": "10/1/1971",
   "name": "M5 Chrome",
   "start": 1291401,
   "end": 1293000,
   "batch": 1600
 },
 {
   "date": "1/5/1972",
   "name": "M5 Chrome",
   "start": 1296501,
   "end": 1300000,
   "batch": 3500
 },
 {
   "date": "4/19/1972",
   "name": "M5 Chrome",
   "start": 1345001,
   "end": 1347000,
   "batch": 2000
 },
 {
   "date": "8/15/1972",
   "name": "M5 Chrome",
   "start": 1354001,
   "end": 1355000,
   "batch": 1000
 },
 {
   "date": "12/11/1972",
   "name": "M5 Chrome",
   "start": 1355001,
   "end": 1356500,
   "batch": 1500
 },
 {
   "date": "2/27/1973",
   "name": "M5 Chrome",
   "start": 1361501,
   "end": 1363000,
   "batch": 1500
 },
 {
   "date": "11/8/1973",
   "name": "M5 Chrome",
   "start": 1378001,
   "end": 1379000,
   "batch": 1000
 },
 {
   "date": "4/18/1974",
   "name": "M5 Chrome",
   "start": 1382601,
   "end": 1383000,
   "batch": 400
 },
 {
   "date": "6/1/1992",
   "name": "M5 Chrome",
   "start": 1918001,
   "end": 1918020,
   "batch": 20
 },
 {
   "date": "7/16/1971",
   "name": "CL",
   "start": 1300001,
   "end": 1335000,
   "batch": 35000
 },
 {
   "date": "2/25/1974",
   "name": "CL",
   "start": 1395001,
   "end": 1410000,
   "batch": 15000
 },
 {
   "date": "6/7/1974",
   "name": "CL",
   "start": 1425001,
   "end": 1440000,
   "batch": 15000
 },
 {
   "date": "1/21/1985",
   "name": "M6",
   "start": 1665351,
   "end": 1669350,
   "batch": 4000
 },
 {
   "date": "5/8/1985",
   "name": "M6",
   "start": 1674351,
   "end": 1678350,
   "batch": 4000
 },
 {
   "date": "6/16/1985",
   "name": "M6",
   "start": 1678351,
   "end": 1682350,
   "batch": 4000
 },
 {
   "date": "10/22/1985",
   "name": "M6 Chrome",
   "start": 1682351,
   "end": 1682950,
   "batch": 600
 },
 {
   "date": "2/7/1986",
   "name": "M6",
   "start": 1687951,
   "end": 1691950,
   "batch": 4000
 },
 {
   "date": "8/19/1986",
   "name": "M6",
   "start": 1701451,
   "end": 1704600,
   "batch": 3150
 },
 {
   "date": "8/19/1986",
   "name": "M6",
   "start": 1704800,
   "end": 1705450,
   "batch": 650
 },
 {
   "date": "11/14/1986",
   "name": "M6 chrome",
   "start": 1705451,
   "end": 1707450,
   "batch": 2000
 },
 {
   "date": "11/12/1986",
   "name": "M6 black",
   "start": 1707451,
   "end": 1711450,
   "batch": 4000
 },
 {
   "date": "1/6/1987",
   "name": "M6 chrome",
   "start": 1711451,
   "end": 1714450,
   "batch": 3000
 },
 {
   "date": "7/3/1987",
   "name": "M6 black",
   "start": 1724451,
   "end": 1728450,
   "batch": 4000
 },
 {
   "date": "2/25/1988",
   "name": "M6 chrome",
   "start": 1738451,
   "end": 1741450,
   "batch": 3000
 },
 {
   "date": "2/25/1988",
   "name": "M6 black",
   "start": 1741451,
   "end": 1745450,
   "batch": 4000
 },
 {
   "date": "10/20/1988",
   "name": "M6 chrome",
   "start": 1755451,
   "end": 1758450,
   "batch": 3000
 },
 {
   "date": "10/28/1988",
   "name": "M6 black",
   "start": 1758451,
   "end": 1762450,
   "batch": 4000
 },
 {
   "date": "8/25/1989",
   "name": "M6 chrome",
   "start": 1772501,
   "end": 1775000,
   "batch": 2500
 },
 {
   "date": "4/12/1990",
   "name": "M6 chrome",
   "start": 1777001,
   "end": 1777500,
   "batch": 500
 },
 {
   "date": "6/29/1990",
   "name": "M6 black",
   "start": 1779001,
   "end": 1782000,
   "batch": 3000
 },
 {
   "date": "10/8/1990",
   "name": "M6 black",
   "start": 1783001,
   "end": 1786000,
   "batch": 3000
 },
 {
   "date": "1/28/1991",
   "name": "M6 chrome",
   "start": 1790001,
   "end": 1790500,
   "batch": 500
 },
 {
   "date": "2/1/1991",
   "name": "M6 chrome",
   "start": 1790501,
   "end": 1791000,
   "batch": 500
 },
 {
   "date": "4/16/1991",
   "name": "M6 chrome",
   "start": 1793001,
   "end": 1794500,
   "batch": 1500
 },
 {
   "date": "4/26/1991",
   "name": "M6 black",
   "start": 1794501,
   "end": 1797000,
   "batch": 2500
 },
 {
   "date": "8/22/1991",
   "name": "M6 chrome",
   "start": 1903501,
   "end": 1904500,
   "batch": 1000
 },
 {
   "date": "9/4/1991",
   "name": "M6 black",
   "start": 1904501,
   "end": 1906500,
   "batch": 2000
 },
 {
   "date": "9/4/1991",
   "name": "M6 chrome",
   "start": 1906501,
   "end": 1907500,
   "batch": 1000
 },
 {
   "date": "4/3/1992",
   "name": "M6 chrome",
   "start": 1914001,
   "end": 1915000,
   "batch": 1000
 },
 {
   "date": "4/28/1992",
   "name": "M6 black",
   "start": 1915001,
   "end": 1918000,
   "batch": 3000
 },
 {
   "date": "6/1/1992",
   "name": "M6 chrome",
   "start": 1918021,
   "end": 1919020,
   "batch": 1000
 },
 {
   "date": "9/4/1992",
   "name": "M6 chrome",
   "start": 1926001,
   "end": 1928000,
   "batch": 2000
 },
 {
   "date": "10/27/1992",
   "name": "M6 chrome",
   "start": 1928001,
   "end": 1931000,
   "batch": 3000
 },
 {
   "date": "12/10/1992",
   "name": "M6 chrome",
   "start": 1931001,
   "end": 1932000,
   "batch": 1000
 },
 {
   "date": "5/25/1993",
   "name": "M6 chrome",
   "start": 1935001,
   "end": 1936000,
   "batch": 1000
 },
 {
   "date": "6/17/1993",
   "name": "M6 chrome",
   "start": 1936001,
   "end": 1937000,
   "batch": 1000
 },
 {
   "date": "10/1/1993",
   "name": "M6 chrome",
   "start": 1991001,
   "end": 1993000,
   "batch": 2000
 },
 {
   "date": "11/15/1993",
   "name": "M6 black",
   "start": 1995001,
   "end": 1997000,
   "batch": 2000
 },
 {
   "date": "3/17/1994",
   "name": "M6 chrome",
   "start": 2000011,
   "end": 2000999,
   "batch": 989
 },
 {
   "date": "6/15/1994",
   "name": "M6 chrome",
   "start": 2001354,
   "end": 2001999,
   "batch": 645
 },
 {
   "date": "7/11/1994",
   "name": "M6 chrome",
   "start": 2002101,
   "end": 2003000,
   "batch": 900
 },
 {
   "date": "7/28/1994",
   "name": "M6 black",
   "start": 2003001,
   "end": 2004000,
   "batch": 1000
 },
 {
   "date": "8/15/1994",
   "name": "M6 chrome",
   "start": 2004001,
   "end": 2005000,
   "batch": 1000
 },
 {
   "date": "9/6/1994",
   "name": "M6 chrome",
   "start": 2005001,
   "end": 2005941,
   "batch": 941
 },
 {
   "date": "9/6/1994",
   "name": "M6 black",
   "start": 2005942,
   "end": 2007000,
   "batch": 1059
 },
 {
   "date": "11/7/1994",
   "name": "M6 chrome",
   "start": 2009001,
   "end": 2011000,
   "batch": 2000
 },
 {
   "date": "1/17/1995",
   "name": "M6 black",
   "start": 2063001,
   "end": 2065000,
   "batch": 2000
 },
 {
   "date": "4/10/1995",
   "name": "M6 chrome",
   "start": 2168001,
   "end": 2170000,
   "batch": 2000
 },
 {
   "date": "6/12/1995",
   "name": "M6 black",
   "start": 2171201,
   "end": 2173000,
   "batch": 1800
 },
 {
   "date": "8/10/1995",
   "name": "M6 chrome",
   "start": 2174001,
   "end": 2176000,
   "batch": 2000
 },
 {
   "date": "9/27/1995",
   "name": "M6 black",
   "start": 2179001,
   "end": 2181000,
   "batch": 2000
 },
 {
   "date": "12/1/1995",
   "name": "M6 chrome",
   "start": 2184001,
   "end": 2185000,
   "batch": 1000
 },
 {
   "date": "12/7/1995",
   "name": "M6 chrome",
   "start": 2235001,
   "end": 2236000,
   "batch": 1000
 },
 {
   "date": "5/29/1996",
   "name": "M6 black",
   "start": 2279001,
   "end": 2280500,
   "batch": 1500
 },
 {
   "date": "9/10/1996",
   "name": "M6 black",
   "start": 2284126,
   "end": 2284999,
   "batch": 874
 },
 {
   "date": "10/14/1996",
   "name": "M6 chrome",
   "start": 2287501,
   "end": 2288500,
   "batch": 1000
 },
 {
   "date": "10/17/1996",
   "name": "M6 black",
   "start": 2288501,
   "end": 2289500,
   "batch": 1000
 },
 {
   "date": "10/24/1996",
   "name": "M6 chrome",
   "start": 2289501,
   "end": 2290500,
   "batch": 1000
 },
 {
   "date": "4/16/1997",
   "name": "M6 chrome",
   "start": 2331001,
   "end": 2332000,
   "batch": 1000
 },
 {
   "date": "6/3/1997",
   "name": "M6 black",
   "start": 2414001,
   "end": 2416000,
   "batch": 2000
 },
 {
   "date": "7/15/1997",
   "name": "M6 chrome",
   "start": 2418001,
   "end": 2419000,
   "batch": 1000
 },
 {
   "date": "7/28/1997",
   "name": "M6 chrome",
   "start": 2419001,
   "end": 2420000,
   "batch": 1000
 },
 {
   "date": "10/15/1997",
   "name": "M6 chrome",
   "start": 2422001,
   "end": 2423000,
   "batch": 1000
 },
 {
   "date": "10/17/1997",
   "name": "M6 black",
   "start": 2423001,
   "end": 2425000,
   "batch": 2000
 },
 {
   "date": "10/22/1997",
   "name": "M6 chrome",
   "start": 2425001,
   "end": 2427000,
   "batch": 2000
 },
 {
   "date": "1/23/1998",
   "name": "M6 chrome",
   "start": 2431501,
   "end": 2431600,
   "batch": 100
 },
 {
   "date": "1/23/1998",
   "name": "M6 black",
   "start": 2431601,
   "end": 2431800,
   "batch": 200
 },
 {
   "date": "2/5/1998",
   "name": "M6 black",
   "start": 2431801,
   "end": 2433800,
   "batch": 2000
 },
 {
   "date": "4/24/1998",
   "name": "M6 black",
   "start": 2455801,
   "end": 2457800,
   "batch": 2000
 },
 {
   "date": "6/8/1998",
   "name": "M6 chrome",
   "start": 2463801,
   "end": 2463850,
   "batch": 50
 },
 {
   "date": "6/8/1998",
   "name": "M6 black",
   "start": 2463851,
   "end": 2464100,
   "batch": 250
 },
 {
   "date": "6/26/1998",
   "name": "M6 black",
   "start": 2470101,
   "end": 2470300,
   "batch": 200
 },
 {
   "date": "3/18/1997",
   "name": "M6 stock exchange engr.for     Leica Museum 1",
   "start": 2300000,
   "end": 2300000,
   "batch": 1
 },
 {
   "date": "3/18/1997",
   "name": "M6 stock exchange engr.",
   "start": 2300001,
   "end": 2300996,
   "batch": 996
 },
 {
   "date": "6/19/1998",
   "name": "M6 TTL",
   "start": 2466101,
   "end": 2470100,
   "batch": 4000
 },
 {
   "date": "9/24/1998",
   "name": "M6 TTL",
   "start": 2470301,
   "end": 2475300,
   "batch": 5000
 },
 {
   "date": "1/5/1999",
   "name": "M6 TTL",
   "start": 2477301,
   "end": 2482300,
   "batch": 5000
 },
  {
   "date": "9/11/1964",
   "name": "MD",
   "start": 1102501,
   "end": 1103000,
   "batch": 300
 },
 {
   "date": "6/30/1965",
   "name": "MD",
   "start": 1128001,
   "end": 1128400,
   "batch": 400
 },
 {
   "date": "10/14/1965",
   "name": "MD",
   "start": 1136001,
   "end": 1136500,
   "batch": 500
 },
 {
   "date": "1/26/1966",
   "name": "MD",
   "start": 1136501,
   "end": 1137000,
   "batch": 500
 },
 {
   "date": "5/3/1966",
   "name": "MD",
   "start": 1141001,
   "end": 1142000,
   "batch": 1000
 },
 {
   "date": "9/30/1966",
   "name": "MD",
   "start": 1160201,
   "end": 1160769,
   "batch": 566
 },
 {
   "date": "4/27/1967",
   "name": "MD",
   "start": 1160770,
   "end": 1160820,
   "batch": 51
 },
 {
   "date": "12/28/1966",
   "name": "MDa",
   "start": 1159001,
   "end": 1160200,
   "batch": 1200
 },
 {
   "date": "9/30/1966",
   "name": "MDa",
   "start": 1160247,
   "end": 1160249,
   "batch": 3
 },
 {
   "date": "4/27/1967",
   "name": "MDa",
   "start": 1160821,
   "end": 1160863,
   "batch": 43
 },
 {
   "date": "12/28/1966",
   "name": "MDa",
   "start": 1160864,
   "end": 1161420,
   "batch": 557
 },
 {
   "date": "4/2/1968",
   "name": "MDa",
   "start": 1205001,
   "end": 1207000,
   "batch": 2000
 },
 {
   "date": "8/28/1969",
   "name": "MDa",
   "start": 1245001,
   "end": 1246200,
   "batch": 1200
 },
 {
   "date": "3/9/1970",
   "name": "MDa",
   "start": 1254651,
   "end": 1255000,
   "batch": 350
 },
 {
   "date": "6/11/1970",
   "name": "MDa",
   "start": 1265001,
   "end": 1266000,
   "batch": 1000
 },
 {
   "date": "12/4/1970",
   "name": "MDa",
   "start": 1274101,
   "end": 1275000,
   "batch": 900
 },
 {
   "date": "2/4/1971",
   "name": "MDa",
   "start": 1285001,
   "end": 1286200,
   "batch": 1200
 },
 {
   "date": "8/20/1971",
   "name": "MDa",
   "start": 1293001,
   "end": 1294000,
   "batch": 1000
 },
 {
   "date": "12/5/1972",
   "name": "MDa with flash lock",
   "start": 1293673,
   "end": 1293770,
   "batch": 98
 },
 {
   "date": "5/16/1972",
   "name": "MDa with flash lock",
   "start": 1293776,
   "end": 1293877,
   "batch": 102
 },
 {
   "date": "12/11/1972",
   "name": "MDa",
   "start": 1360001,
   "end": 1361000,
   "batch": 1000
 },
 {
   "date": "2/27/1973",
   "name": "MDa",
   "start": 1361001,
   "end": 1361500,
   "batch": 500
 },
 {
   "date": "11/8/1973",
   "name": "MDa",
   "start": 1379001,
   "end": 1380000,
   "batch": 1000
 },
 {
   "date": "7/3/1974",
   "name": "MDa",
   "start": 1384601,
   "end": 1385000,
   "batch": 400
 },
 {
   "date": "1/20/1975",
   "name": "MDa",
   "start": 1410001,
   "end": 1412550,
   "batch": 2550
 },
  {
   "date": "7/14/1980",
   "name": "MD-2",
   "start": 1545351,
   "end": 1546350,
   "batch": 1000
 },
 {
   "date": "2/10/1984",
   "name": "MD-2",
   "start": 1648751,
   "end": 1649250,
   "batch": 500
 },
 {
   "date": "12/6/1984",
   "name": "MD-2",
   "start": 1664251,
   "end": 1664350,
   "batch": 100
 },
 {
   "date": "8/19/1986",
   "name": "MD2",
   "start": 1704601,
   "end": 1704800,
   "batch": 200
 },
 {
   "date": "12/8/1967",
   "name": "Postcamera 24x27",
   "start": 1185291,
   "end": 1185300,
   "batch": 10
 },
 {
   "date": "10/24/1968",
   "name": "Postcamera 24x36",
   "start": 1206392,
   "end": 1206941,
   "batch": 50
 },
 {
   "date": "10/24/1968",
   "name": "Postcamera 24x27",
   "start": 1206942,
   "end": 1206961,
   "batch": 20
 },
 {
   "date": "2/22/1971",
   "name": "Postcamera 24x27",
   "start": 1273922,
   "end": 1273925,
   "batch": 4
 },
 {
   "date": "2/22/1971",
   "name": "Postcamera 24x36",
   "start": 1273926,
   "end": 127400,
   "batch": 75
 },
 {
   "date": "1/16/1972",
   "name": "Postcamera 24x27",
   "start": 1286701,
   "end": 1286760,
   "batch": 60
 },
 {
   "date": "12/3/1975",
   "name": "Postcamera 24x27",
   "start": 1286761,
   "end": 1286822,
   "batch": 61
 },
 {
   "date": "5/16/1972",
   "name": "Postcamera 24x27",
   "start": 1293878,
   "end": 1294000,
   "batch": 123
 }
];