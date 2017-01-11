import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Router.route('/(.*)', function(){
  this.render('');
});

var camID;

Template.home.onRendered(function(){

  document.getElementById("cta").onclick = function () {

    // the code you're looking for
    camID = document.getElementById('serial').value;

    // iterate over each element in the array
    for (var i = 0; i < leica.length; i++){
      // look for the entry with a matching `code` value
      if (leica[i].start <= camID && leica[i].end >= camID){
        FlowRouter.go('/cam/' + camID);
      } else {
        document.getElementById("error").innerHTML = 'Nothing found. Seems that "'  + camID + '"' + ' is not in our database.';
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

Template.suggestions.onRendered(function(){
  var random1 = parseInt(Math.random() * (2882100 - 100) + 100);
  var random2 = parseInt(Math.random() * (2882100 - 100) + 100);
  var random3 = parseInt(Math.random() * (2882100 - 100) + 100);
  var random4 = parseInt(Math.random() * (2882100 - 100) + 100);
  var random5 = parseInt(Math.random() * (2882100 - 100) + 100);
  var random6 = parseInt(Math.random() * (2882100 - 100) + 100);
  var random7 = parseInt(Math.random() * (2882100 - 100) + 100);
  var random8 = parseInt(Math.random() * (2882100 - 100) + 100);
  for (var i = 0; i < leica.length; i++){
    if (leica[i].start <= random1 && leica[i].end >= random1){
      document.getElementById("random1_serial").innerHTML = '#' + random1;
      document.getElementById("random1_name").innerHTML = leica[i].name;
      document.getElementById("random1_link").setAttribute("href", '/cam/' + random1);
    }
    if (leica[i].start <= random2 && leica[i].end >= random2){
      document.getElementById("random2_serial").innerHTML = '#' + random2;
      document.getElementById("random2_name").innerHTML = leica[i].name;
      document.getElementById("random2_link").setAttribute("href", '/cam/' + random2);
    }
    if (leica[i].start <= random3 && leica[i].end >= random3){
      document.getElementById("random3_serial").innerHTML = '#' + random3;
      document.getElementById("random3_name").innerHTML = leica[i].name;
      document.getElementById("random3_link").setAttribute("href", '/cam/' + random3);
    }
    if (leica[i].start <= random4 && leica[i].end >= random4){
      document.getElementById("random4_serial").innerHTML = '#' + random4;
      document.getElementById("random4_name").innerHTML = leica[i].name;
      document.getElementById("random4_link").setAttribute("href", '/cam/' + random4);
    }
    if (leica[i].start <= random5 && leica[i].end >= random5){
      document.getElementById("random5_serial").innerHTML = '#' + random5;
      document.getElementById("random5_name").innerHTML = leica[i].name;
      document.getElementById("random5_link").setAttribute("href", '/cam/' + random5);
    }
    if (leica[i].start <= random6 && leica[i].end >= random6){
      document.getElementById("random6_serial").innerHTML = '#' + random6;
      document.getElementById("random6_name").innerHTML = leica[i].name;
      document.getElementById("random6_link").setAttribute("href", '/cam/' + random6);
    }
    if (leica[i].start <= random7 && leica[i].end >= random7){
      document.getElementById("random7_serial").innerHTML = '#' + random7;
      document.getElementById("random7_name").innerHTML = leica[i].name;
      document.getElementById("random7_link").setAttribute("href", '/cam/' + random7);
    }
    if (leica[i].start <= random8 && leica[i].end >= random8){
      document.getElementById("random8_serial").innerHTML = '#' + random8;
      document.getElementById("random8_name").innerHTML = leica[i].name;
      document.getElementById("random8_link").setAttribute("href", '/cam/' + random8);
    }
  }
});

Template.results.onRendered(function(){
  camID = FlowRouter.getParam("camid");
  if (camID) {
  for (var i = 0; i < leica.length; i++){
    // look for the entry with a matching `code` value
    if (leica[i].start <= camID && leica[i].end >= camID){
      var name = leica[i].name;
      name = name.replace(/ /g," ");
      var batch = leica[i].end - leica[i].start;
      var year = leica[i].date;
      document.getElementById("results").style.display = "block";
      document.getElementById("serial").innerHTML = camID;
      document.getElementById("model").innerHTML = name;
      document.getElementById("date").innerHTML = year;
      document.getElementById("units").innerHTML = batch +1;
      document.getElementById("start").innerHTML = leica[i].start;
      document.getElementById("end").innerHTML = leica[i].end;
      year = year.substr(year.length - 4);
      var cbLink_url = "http://collectiblend.com/Cameras/search.php?param=" + name + "+" +  year + "&page=1&desc";
      document.getElementById("cbLink").setAttribute("href", cbLink_url);
      if (leica[i].wiki) {
        var lcfLink_url = leica[i].wiki;
        document.getElementById("lcf").innerHTML =  "<dd class='f4 fw4 ml0 ttu'>wiki</dd><dd class='f1 fw7 ml0 tw'><a href='" + lcfLink_url + "' target='_blank' id='lcfLink' class='white underline-hover'>LCF➔</a></dd>"
      } else {}
    }
  }
  } else {
  console.log('failed')
  }

});

var leica = 
[
  {
   "start": 100,
   "end": 130,
   "name": "Leica I",
   "date": "1923"
 },
 {
   "start": 100,
   "end": 130,
   "name": "Leica I",
   "date": "1923"
 },
 {
   "start": 131,
   "end": 1000,
   "name": "Leica I",
   "wiki": "http://www.l-camera-forum.com/leica-wiki.en/index.php/Leica_I_(model_A)",
   "date": "1925"
 },
 {
   "start": 1001,
   "end": 2445,
   "name": "Leica I",
   "wiki": "http://www.l-camera-forum.com/leica-wiki.en/index.php/Leica_I_(model_A)",
   "date": "1926"
 },
 {
   "start": 2446,
   "end": 5433,
   "name": "Leica I",
   "wiki": "http://www.l-camera-forum.com/leica-wiki.en/index.php/Leica_I_(model_A)",
   "date": "1926-27"
 },
 {
   "start": 5434,
   "end": 5700,
   "name": "Leica I",
   "wiki": "http://www.l-camera-forum.com/leica-wiki.en/index.php/Leica_I_(model_A)",
   "date": "1928"
 },
 {
   "start": 5701,
   "end": 6300,
   "name": "Leica Compur",
   "date": "1926-29"
 },
 {
   "start": 6301,
   "end": 13100,
   "name": "Leica I",
   "wiki": "http://www.l-camera-forum.com/leica-wiki.en/index.php/Leica_I_(model_A)",
   "date": "1928"
 },
 {
   "start": 13101,
   "end": 13300,
   "name": "Leica Compur",
   "date": "1929"
 },
 {
   "start": 13301,
   "end": 21478,
   "name": "Leica I",
   "wiki": "http://www.l-camera-forum.com/leica-wiki.en/index.php/Leica_I_(model_A)",
   "date": "1929"
 },
 {
   "start": 21479,
   "end": 21810,
   "name": "Leica Compur",
   "date": "1930"
 },
 {
   "start": 21811,
   "end": 34450,
   "name": "Leica I",
   "wiki": "http://www.l-camera-forum.com/leica-wiki.en/index.php/Leica_I_(model_A)",
   "date": "1930"
 },
 {
   "start": 34451,
   "end": 34802,
   "name": "Leica Compur",
   "date": "1930"
 },
 {
   "start": 34803,
   "end": 34817,
   "name": "Leica I (Luxus)",
   "wiki": "http://www.l-camera-forum.com/leica-wiki.en/index.php/Leica_I_(model_A)",
   "date": "1930"
 },
 {
   "start": 34818,
   "end": 60000,
   "name": "Leica I",
   "wiki": "http://www.l-camera-forum.com/leica-wiki.en/index.php/Leica_I_(model_A)",
   "date": "1930"
 },
 {
   "start": 60001,
   "end": 71199,
   "name": "Leica I",
   "date": "1931"
 },
 {
   "start": 71200,
   "end": 101000,
   "name": "Leica II",
   "date": "1932"
 },
 {
   "start": 101001,
   "end": 106000,
   "name": "Leica Standard",
   "date": "1932"
 },
 {
   "start": 106001,
   "end": 107600,
   "name": "Leica II",
   "date": "1933"
 },
 {
   "start": 107601,
   "end": 107757,
   "name": "Leica III",
   "date": "1934"
 },
 {
   "start": 107758,
   "end": 108650,
   "name": "Leica II",
   "date": "1934"
 },
 {
   "start": 108651,
   "end": 108700,
   "name": "Leica III",
   "date": "1933"
 },
 {
   "start": 108701,
   "end": 109000,
   "name": "Leica II",
   "date": "1933"
 },
 {
   "start": 109001,
   "end": 111550,
   "name": "Leica III",
   "date": "1933"
 },
 {
   "start": 111551,
   "end": 111580,
   "name": "Leica II C69",
   "date": "1933"
 },
 {
   "start": 111581,
   "end": 112000,
   "name": "Leica III",
   "date": "1933"
 },
 {
   "start": 112001,
   "end": 112500,
   "name": "Leica II Chrom",
   "date": "1933"
 },
 {
   "start": 112501,
   "end": 114000,
   "name": "Leica III",
   "date": "1933"
 },
 {
   "start": 114051,
   "end": 114052,
   "name": "Leica Reporter",
   "date": "1933"
 },
 {
   "start": 114053,
   "end": 114400,
   "name": "Leica III",
   "date": "1934"
 },
 {
   "start": 114401,
   "end": 114050,
   "name": "Leica III",
   "date": "1933"
 },
 {
   "start": 114401,
   "end": 115300,
   "name": "Leica II Chrom",
   "date": "1933"
 },
 {
   "start": 115301,
   "end": 115650,
   "name": "Leica III",
   "date": "1934"
 },
 {
   "start": 115651,
   "end": 115900,
   "name": "Leica II Chrom",
   "date": "1934"
 },
 {
   "start": 115901,
   "end": 116000,
   "name": "Leica Standard Chrom",
   "date": "1934"
 },
 {
   "start": 116001,
   "end": 123000,
   "name": "Leica III Chrom",
   "date": "1933"
 },
 {
   "start": 123001,
   "end": 123580,
   "name": "Leica Standard",
   "date": "1934"
 },
 {
   "start": 123581,
   "end": 124800,
   "name": "Leica III Chrom",
   "date": "1933"
 },
 {
   "start": 124801,
   "end": 126200,
   "name": "Leica III Chrom",
   "date": "1933"
 },
 {
   "start": 126201,
   "end": 126800,
   "name": "Leica III",
   "date": "1934"
 },
 {
   "start": 126801,
   "end": 137400,
   "name": "Leica III",
   "date": "1934"
 },
 {
   "start": 137401,
   "end": 137625,
   "name": "Leica Standard",
   "date": "1934"
 },
 {
   "start": 137626,
   "end": 138700,
   "name": "Leica III Chrom",
   "date": "1934"
 },
 {
   "start": 138701,
   "end": 138950,
   "name": "Leica Standard Chrom",
   "date": "1934"
 },
 {
   "start": 138951,
   "end": 139900,
   "name": "Leica III Chrom",
   "date": "1934"
 },
 {
   "start": 139901,
   "end": 139950,
   "name": "Leica Standard",
   "date": "1934"
 },
 {
   "start": 139951,
   "end": 140000,
   "name": "Leica II",
   "date": "1934"
 },
 {
   "start": 140001,
   "end": 141500,
   "name": "Leica III Chrom",
   "date": "1934"
 },
 {
   "start": 141501,
   "end": 141850,
   "name": "Leica Standard",
   "date": "1934"
 },
 {
   "start": 141851,
   "end": 141900,
   "name": "Leica II",
   "date": "1934"
 },
 {
   "start": 141901,
   "end": 142250,
   "name": "Leica III Chrom",
   "date": "1934"
 },
 {
   "start": 142501,
   "end": 142700,
   "name": "Leica Standard",
   "date": "1934"
 },
 {
   "start": 142251,
   "end": 142350,
   "name": "Leica II",
   "date": "1934"
 },
 {
   "start": 142351,
   "end": 142500,
   "name": "Leica III",
   "date": "1934"
 },
 {
   "start": 142501,
   "end": 142700,
   "name": "Leica I Standard",
   "date": "1934"
 },
 {
   "start": 142701,
   "end": 143425,
   "name": "Leica III",
   "date": "1934"
 },
 {
   "start": 143426,
   "end": 143750,
   "name": "Leica II Chrom",
   "date": "1934"
 },
 {
   "start": 143751,
   "end": 143900,
   "name": "Leica Standard",
   "date": "1934"
 },
 {
   "start": 143901,
   "end": 144200,
   "name": "Leica III",
   "date": "1934"
 },
 {
   "start": 144201,
   "end": 144400,
   "name": "Leica II",
   "date": "1934"
 },
 {
   "start": 144401,
   "end": 144500,
   "name": "Leica Standard",
   "date": "1934"
 },
 {
   "start": 144501,
   "end": 145600,
   "name": "Leica III",
   "date": "1934"
 },
 {
   "start": 145601,
   "end": 145800,
   "name": "Leica Standard",
   "date": "1934"
 },
 {
   "start": 145801,
   "end": 146200,
   "name": "Leica III",
   "date": "1934"
 },
 {
   "start": 146201,
   "end": 146375,
   "name": "Leica II",
   "date": "1934"
 },
 {
   "start": 146376,
   "end": 146675,
   "name": "Leica III",
   "date": "1934"
 },
 {
   "start": 146676,
   "end": 146775,
   "name": "Leica II",
   "date": "1934"
 },
 {
   "start": 146776,
   "end": 147000,
   "name": "Leica III",
   "date": "1934"
 },
 {
   "start": 147001,
   "end": 147075,
   "name": "Leica Standard",
   "date": "1934"
 },
 {
   "start": 147076,
   "end": 147175,
   "name": "Leica II",
   "date": "1934"
 },
 {
   "start": 147176,
   "end": 147875,
   "name": "Leica Standard Chrom",
   "date": "1934"
 },
 {
   "start": 147876,
   "end": 148025,
   "name": "Leica II Chrom",
   "date": "1934"
 },
 {
   "start": 148026,
   "end": 148850,
   "name": "Leica III Chrom",
   "date": "1934"
 },
 {
   "start": 148851,
   "end": 148950,
   "name": "Leica II Chrom",
   "date": "1934"
 },
 {
   "start": 148951,
   "end": 149350,
   "name": "Leica III Chrom",
   "date": "1935"
 },
 {
   "start": 149351,
   "end": 149450,
   "name": "Leica Standard Chrom",
   "date": "1934-35"
 },
 {
   "start": 149451,
   "end": 149550,
   "name": "Leica II Chrom",
   "date": "1934-35"
 },
 {
   "start": 149551,
   "end": 150000,
   "name": "Leica III Chrom",
   "date": "1935"
 },
 {
   "start": 150001,
   "end": 150124,
   "name": "Leica Reporter",
   "date": "1934-36"
 },
 {
   "start": 150125,
   "end": 150200,
   "name": "Leica Second",
   "date": ""
 },
 {
   "start": 150201,
   "end": 150850,
   "name": "Leica III Chrom",
   "date": "1934-35"
 },
 {
   "start": 150851,
   "end": 151100,
   "name": "Leica Standard",
   "date": "1935"
 },
 {
   "start": 151101,
   "end": 151225,
   "name": "Leica III",
   "date": "1935"
 },
 {
   "start": 151226,
   "end": 151300,
   "name": "Leica II",
   "date": "1935"
 },
 {
   "start": 151301,
   "end": 152500,
   "name": "Leica III",
   "date": "1935"
 },
 {
   "start": 152501,
   "end": 152600,
   "name": "Leica Standard Chrom",
   "date": "1935"
 },
 {
   "start": 152601,
   "end": 153175,
   "name": "Leica III Chrom",
   "date": "1935"
 },
 {
   "start": 153176,
   "end": 153225,
   "name": "Leica II",
   "date": "1935"
 },
 {
   "start": 153226,
   "end": 153550,
   "name": "Leica III",
   "date": "1935"
 },
 {
   "start": 153551,
   "end": 153700,
   "name": "Leica II",
   "date": "1935"
 },
 {
   "start": 153701,
   "end": 154150,
   "name": "Leica III",
   "date": "1935"
 },
 {
   "start": 154151,
   "end": 154200,
   "name": "Leica II",
   "date": "1935"
 },
 {
   "start": 154201,
   "end": 154800,
   "name": "Leica III",
   "date": "1935"
 },
 {
   "start": 154801,
   "end": 154900,
   "name": "Leica Standard Chrom",
   "date": "1935"
 },
 {
   "start": 154901,
   "end": 156200,
   "name": "Leica III",
   "date": "1935"
 },
 {
   "start": 156201,
   "end": 156850,
   "name": "Leica IIIa 1/1000",
   "date": "1935"
 },
 {
   "start": 156851,
   "end": 157250,
   "name": "Leica III",
   "date": "1935"
 },
 {
   "start": 157251,
   "end": 157400,
   "name": "Leica II",
   "date": "1935"
 },
 {
   "start": 157401,
   "end": 158300,
   "name": "Leica IIIa",
   "date": "1935"
 },
 {
   "start": 158301,
   "end": 158350,
   "name": "Leica Standard",
   "date": "1935"
 },
 {
   "start": 158351,
   "end": 158400,
   "name": "Leica II",
   "date": "1935"
 },
 {
   "start": 158401,
   "end": 158650,
   "name": "Leica IIIa",
   "date": "1935"
 },
 {
   "start": 158651,
   "end": 159000,
   "name": "Leica III",
   "date": "1935"
 },
 {
   "start": 159001,
   "end": 159200,
   "name": "Leica IIIa",
   "date": "1935"
 },
 {
   "start": 159201,
   "end": 159350,
   "name": "Leica Standard",
   "date": "1935"
 },
 {
   "start": 159351,
   "end": 159550,
   "name": "Leica III",
   "date": "1935"
 },
 {
   "start": 159551,
   "end": 159625,
   "name": "Leica IIIa",
   "date": "1935"
 },
 {
   "start": 159626,
   "end": 159675,
   "name": "Leica III",
   "date": "1935"
 },
 {
   "start": 159676,
   "end": 160325,
   "name": "Leica IIIa",
   "date": "1935"
 },
 {
   "start": 160326,
   "end": 160375,
   "name": "Leica III",
   "date": "1935"
 },
 {
   "start": 160376,
   "end": 160450,
   "name": "Leica I",
   "date": "1935"
 },
 {
   "start": 160451,
   "end": 160700,
   "name": "Leica II",
   "date": "1935"
 },
 {
   "start": 160701,
   "end": 161150,
   "name": "Leica I",
   "date": "1935"
 },
 {
   "start": 161151,
   "end": 161450,
   "name": "Leica Standard",
   "date": "1935"
 },
 {
   "start": 161451,
   "end": 161550,
   "name": "Leica IIa",
   "date": "1935"
 },
 {
   "start": 161551,
   "end": 161600,
   "name": "Leica III",
   "date": "1935"
 },
 {
   "start": 161601,
   "end": 161800,
   "name": "Leica IIIa",
   "date": "1935"
 },
 {
   "start": 161801,
   "end": 161950,
   "name": "Leica III Chrom",
   "date": "1935"
 },
 {
   "start": 161951,
   "end": 162100,
   "name": "Leica IIIa",
   "date": "1935"
 },
 {
   "start": 162101,
   "end": 162175,
   "name": "Leica III",
   "date": "1935"
 },
 {
   "start": 162176,
   "end": 162350,
   "name": "Leica IIIa",
   "date": "1935"
 },
 {
   "start": 162351,
   "end": 162400,
   "name": "Leica III",
   "date": "1935"
 },
 {
   "start": 162401,
   "end": 162500,
   "name": "Leica IIIa",
   "date": "1935"
 },
 {
   "start": 162501,
   "end": 162625,
   "name": "Leica III",
   "date": "1935"
 },
 {
   "start": 162626,
   "end": 162675,
   "name": "Leica IIIa",
   "date": "1935"
 },
 {
   "start": 162676,
   "end": 162750,
   "name": "Leica III",
   "date": "1935"
 },
 {
   "start": 162751,
   "end": 162800,
   "name": "Leica IIIa",
   "date": "1935"
 },
 {
   "start": 162801,
   "end": 162825,
   "name": "Leica III",
   "date": "1935"
 },
 {
   "start": 162826,
   "end": 162925,
   "name": "Leica IIIa",
   "date": "1935"
 },
 {
   "start": 162926,
   "end": 162975,
   "name": "Leica III",
   "date": "1935"
 },
 {
   "start": 162976,
   "end": 163050,
   "name": "Leica IIIa",
   "date": "1935"
 },
 {
   "start": 163051,
   "end": 163100,
   "name": "Leica III",
   "date": "1935"
 },
 {
   "start": 163101,
   "end": 163225,
   "name": "Leica IIIa",
   "date": "1935"
 },
 {
   "start": 163226,
   "end": 163250,
   "name": "Leica III",
   "date": "1935"
 },
 {
   "start": 163251,
   "end": 163400,
   "name": "Leica IIIa",
   "date": "1935"
 },
 {
   "start": 163401,
   "end": 163450,
   "name": "Leica Standard",
   "date": "1935"
 },
 {
   "start": 163451,
   "end": 163550,
   "name": "Leica IIIa",
   "date": "1935"
 },
 {
   "start": 163551,
   "end": 163775,
   "name": "Leica III",
   "date": "1935"
 },
 {
   "start": 163776,
   "end": 163950,
   "name": "Leica IIIa",
   "date": "1935"
 },
 {
   "start": 163951,
   "end": 164150,
   "name": "Leica Standard",
   "date": "1935"
 },
 {
   "start": 164151,
   "end": 164275,
   "name": "Leica IIIa",
   "date": "1935"
 },
 {
   "start": 164276,
   "end": 164675,
   "name": "Leica III",
   "date": "1935"
 },
 {
   "start": 164676,
   "end": 164900,
   "name": "Leica IIIa",
   "date": "1935"
 },
 {
   "start": 164901,
   "end": 165000,
   "name": "Leica II",
   "date": "1935"
 },
 {
   "start": 165001,
   "end": 165100,
   "name": "Leica III",
   "date": "1935"
 },
 {
   "start": 165101,
   "end": 165300,
   "name": "Leica II",
   "date": "1935"
 },
 {
   "start": 165301,
   "end": 165500,
   "name": "Leica Standard",
   "date": "1935"
 },
 {
   "start": 165501,
   "end": 165975,
   "name": "Leica III",
   "date": "1935"
 },
 {
   "start": 165976,
   "end": 166075,
   "name": "Leica IIIa",
   "date": "1935"
 },
 {
   "start": 166076,
   "end": 166600,
   "name": "Leica III",
   "date": "1935"
 },
 {
   "start": 166601,
   "end": 166750,
   "name": "Leica IIIa",
   "date": "1935"
 },
 {
   "start": 166751,
   "end": 166900,
   "name": "Leica III",
   "date": "1935"
 },
 {
   "start": 166901,
   "end": 167050,
   "name": "Leica IIIa",
   "date": "1935"
 },
 {
   "start": 167051,
   "end": 167175,
   "name": "Leica III",
   "date": "1935"
 },
 {
   "start": 167176,
   "end": 167200,
   "name": "Leica IIIa",
   "date": "1935"
 },
 {
   "start": 167201,
   "end": 167225,
   "name": "Leica III",
   "date": "1935"
 },
 {
   "start": 167226,
   "end": 167700,
   "name": "Leica IIIa",
   "date": "1935"
 },
 {
   "start": 167701,
   "end": 167705,
   "name": "Leica III",
   "date": "1935"
 },
 {
   "start": 167751,
   "end": 168000,
   "name": "Leica Standard",
   "date": "1935"
 },
 {
   "start": 168001,
   "end": 168200,
   "name": "Leica II",
   "date": "1935"
 },
 {
   "start": 168201,
   "end": 168250,
   "name": "Leica III",
   "date": "1935"
 },
 {
   "start": 168251,
   "end": 168325,
   "name": "Leica IIIa",
   "date": "1935"
 },
 {
   "start": 168326,
   "end": 168400,
   "name": "Leica III",
   "date": "1935"
 },
 {
   "start": 168401,
   "end": 168500,
   "name": "Leica IIIa",
   "date": "1935"
 },
 {
   "start": 168501,
   "end": 168600,
   "name": "Leica III",
   "date": "1935"
 },
 {
   "start": 168601,
   "end": 168725,
   "name": "Leica IIIa",
   "date": "1935"
 },
 {
   "start": 168726,
   "end": 168750,
   "name": "Leica III",
   "date": "1935"
 },
 {
   "start": 168751,
   "end": 168850,
   "name": "Leica IIIa",
   "date": "1935"
 },
 {
   "start": 168851,
   "end": 169000,
   "name": "Leica Standard",
   "date": "1935"
 },
 {
   "start": 169001,
   "end": 169200,
   "name": "Leica III",
   "date": "1935"
 },
 {
   "start": 169201,
   "end": 169350,
   "name": "Leica Standard",
   "date": "1935"
 },
 {
   "start": 169351,
   "end": 169450,
   "name": "Leica II",
   "date": "1935"
 },
 {
   "start": 169451,
   "end": 169550,
   "name": "Leica III",
   "date": "1935"
 },
 {
   "start": 169551,
   "end": 169650,
   "name": "Leica II",
   "date": "1935"
 },
 {
   "start": 169651,
   "end": 170150,
   "name": "Leica IIIa",
   "date": "1935"
 },
 {
   "start": 170151,
   "end": 170500,
   "name": "Leica III",
   "date": "1935"
 },
 {
   "start": 170501,
   "end": 171300,
   "name": "Leica IIIa",
   "date": "1935"
 },
 {
   "start": 171301,
   "end": 171550,
   "name": "Leica II",
   "date": "1935"
 },
 {
   "start": 171551,
   "end": 171900,
   "name": "Leica Standard",
   "date": "1935"
 },
 {
   "start": 171901,
   "end": 172250,
   "name": "Leica IIIa",
   "date": "1935"
 },
 {
   "start": 172251,
   "end": 172300,
   "name": "Leica III",
   "date": "1935"
 },
 {
   "start": 172301,
   "end": 172350,
   "name": "Leica IIIa",
   "date": "1935"
 },
 {
   "start": 172351,
   "end": 172600,
   "name": "Leica III",
   "date": "1935"
 },
 {
   "start": 172601,
   "end": 172800,
   "name": "Leica II",
   "date": "1935"
 },
 {
   "start": 172801,
   "end": 173000,
   "name": "Leica Standard",
   "date": "1935"
 },
 {
   "start": 173001,
   "end": 173125,
   "name": "Leica IIIa",
   "date": "1935"
 },
 {
   "start": 173126,
   "end": 173176,
   "name": "Leica III",
   "date": "1935"
 },
 {
   "start": 173177,
   "end": 173425,
   "name": "Leica IIIa",
   "date": "1935"
 },
 {
   "start": 173426,
   "end": 173475,
   "name": "Leica III",
   "date": "1935"
 },
 {
   "start": 173476,
   "end": 173500,
   "name": "Leica IIIa",
   "date": "1935"
 },
 {
   "start": 173501,
   "end": 173650,
   "name": "Leica Standard",
   "date": "1935"
 },
 {
   "start": 173651,
   "end": 173675,
   "name": "Leica IIIa",
   "date": "1935"
 },
 {
   "start": 173676,
   "end": 173725,
   "name": "Leica III",
   "date": "1935"
 },
 {
   "start": 173726,
   "end": 173825,
   "name": "Leica IIIa",
   "date": "1935"
 },
 {
   "start": 173826,
   "end": 173900,
   "name": "Leica III",
   "date": "1935"
 },
 {
   "start": 173901,
   "end": 174025,
   "name": "Leica IIIa",
   "date": "1935"
 },
 {
   "start": 174026,
   "end": 174075,
   "name": "Leica III",
   "date": "1935"
 },
 {
   "start": 174076,
   "end": 174100,
   "name": "Leica IIIa",
   "date": "1935"
 },
 {
   "start": 174101,
   "end": 174125,
   "name": "Leica III",
   "date": "1935"
 },
 {
   "start": 174126,
   "end": 174150,
   "name": "Leica IIIa",
   "date": "1935"
 },
 {
   "start": 174151,
   "end": 174400,
   "name": "Leica III",
   "date": "1935"
 },
 {
   "start": 174401,
   "end": 174650,
   "name": "Leica II",
   "date": "1935"
 },
 {
   "start": 174651,
   "end": 174675,
   "name": "Leica IIIa",
   "date": "1935"
 },
 {
   "start": 174676,
   "end": 174750,
   "name": "Leica III",
   "date": "1935"
 },
 {
   "start": 174751,
   "end": 174950,
   "name": "Leica IIIa",
   "date": "1935"
 },
 {
   "start": 174951,
   "end": 175125,
   "name": "Leica III",
   "date": "1935"
 },
 {
   "start": 175126,
   "end": 175200,
   "name": "Leica IIIa",
   "date": "1935"
 },
 {
   "start": 175201,
   "end": 175350,
   "name": "Leica III",
   "date": "1935"
 },
 {
   "start": 175351,
   "end": 175450,
   "name": "Leica IIIa",
   "date": "1935"
 },
 {
   "start": 175451,
   "end": 175500,
   "name": "Leica III",
   "date": "1935"
 },
 {
   "start": 175501,
   "end": 175700,
   "name": "Leica Standard",
   "date": "1935"
 },
 {
   "start": 175701,
   "end": 175750,
   "name": "Leica III",
   "date": "1935"
 },
 {
   "start": 175751,
   "end": 175850,
   "name": "Leica IIIa",
   "date": "1935"
 },
 {
   "start": 175851,
   "end": 175900,
   "name": "Leica III",
   "date": "1935"
 },
 {
   "start": 175901,
   "end": 176100,
   "name": "Leica IIIa",
   "date": "1935"
 },
 {
   "start": 176101,
   "end": 176150,
   "name": "Leica III",
   "date": "1935"
 },
 {
   "start": 176151,
   "end": 176250,
   "name": "Leica IIIa",
   "date": "1935"
 },
 {
   "start": 176251,
   "end": 176300,
   "name": "Leica III",
   "date": "1935"
 },
 {
   "start": 176301,
   "end": 176600,
   "name": "Leica IIIa",
   "date": "1935"
 },
 {
   "start": 176601,
   "end": 177000,
   "name": "Leica III",
   "date": "1935"
 },
 {
   "start": 177001,
   "end": 177400,
   "name": "Leica IIIa",
   "date": "1935"
 },
 {
   "start": 177401,
   "end": 177550,
   "name": "Leica III",
   "date": "1935"
 },
 {
   "start": 177551,
   "end": 177600,
   "name": "Leica IIIa",
   "date": "1935"
 },
 {
   "start": 177601,
   "end": 177700,
   "name": "Leica III",
   "date": "1935"
 },
 {
   "start": 177701,
   "end": 177800,
   "name": "Leica Standard",
   "date": "1935"
 },
 {
   "start": 177801,
   "end": 177900,
   "name": "Leica IIIa",
   "date": "1935"
 },
 {
   "start": 177901,
   "end": 178000,
   "name": "Leica III",
   "date": "1935"
 },
 {
   "start": 178001,
   "end": 178100,
   "name": "Leica IIIa",
   "date": "1935"
 },
 {
   "start": 178101,
   "end": 178250,
   "name": "Leica III",
   "date": "1935"
 },
 {
   "start": 178251,
   "end": 178550,
   "name": "Leica IIIa",
   "date": "1935"
 },
 {
   "start": 178551,
   "end": 178600,
   "name": "Leica III",
   "date": "1935"
 },
 {
   "start": 178601,
   "end": 179200,
   "name": "Leica IIIa",
   "date": "1935"
 },
 {
   "start": 179201,
   "end": 179250,
   "name": "Leica III",
   "date": "1935"
 },
 {
   "start": 179251,
   "end": 179500,
   "name": "Leica IIIa",
   "date": "1935"
 },
 {
   "start": 179501,
   "end": 179575,
   "name": "Leica II",
   "date": "1935"
 },
 {
   "start": 179576,
   "end": 179800,
   "name": "Leica Standard",
   "date": "1935"
 },
 {
   "start": 179801,
   "end": 179900,
   "name": "Leica II",
   "date": "1935"
 },
 {
   "start": 179901,
   "end": 180100,
   "name": "Leica IIIa",
   "date": "1935"
 },
 {
   "start": 180101,
   "end": 180400,
   "name": "Leica III",
   "date": "1935"
 },
 {
   "start": 180401,
   "end": 180475,
   "name": "Leica IIIa",
   "date": "1935"
 },
 {
   "start": 180476,
   "end": 180700,
   "name": "Leica III",
   "date": "1935"
 },
 {
   "start": 180701,
   "end": 180800,
   "name": "Leica Standard",
   "date": "1935"
 },
 {
   "start": 180801,
   "end": 181000,
   "name": "Leica II",
   "date": "1935"
 },
 {
   "start": 181001,
   "end": 181450,
   "name": "Leica IIIa",
   "date": "1935"
 },
 {
   "start": 181451,
   "end": 181550,
   "name": "Leica III",
   "date": "1935"
 },
 {
   "start": 181551,
   "end": 181600,
   "name": "Leica IIIa",
   "date": "1935"
 },
 {
   "start": 181601,
   "end": 181700,
   "name": "Leica III",
   "date": "1935"
 },
 {
   "start": 181701,
   "end": 182000,
   "name": "Leica IIIa",
   "date": "1935"
 },
 {
   "start": 182001,
   "end": 182050,
   "name": "Leica III",
   "date": "1935"
 },
 {
   "start": 182051,
   "end": 182300,
   "name": "Leica IIIa",
   "date": "1935"
 },
 {
   "start": 182301,
   "end": 182350,
   "name": "Leica III",
   "date": "1935"
 },
 {
   "start": 182351,
   "end": 182500,
   "name": "Leica IIIa",
   "date": "1935"
 },
 {
   "start": 182501,
   "end": 182700,
   "name": "Leica Standard",
   "date": "1935"
 },
 {
   "start": 182701,
   "end": 182850,
   "name": "Leica II",
   "date": "1935"
 },
 {
   "start": 182851,
   "end": 183500,
   "name": "Leica IIIa",
   "date": "1935"
 },
 {
   "start": 183501,
   "end": 183600,
   "name": "Leica II",
   "date": "1935"
 },
 {
   "start": 183601,
   "end": 183750,
   "name": "Leica Standard",
   "date": "1935-36"
 },
 {
   "start": 183751,
   "end": 184400,
   "name": "Leica IIIa",
   "date": "1936"
 },
 {
   "start": 184401,
   "end": 184450,
   "name": "Leica III",
   "date": "1936"
 },
 {
   "start": 184451,
   "end": 184700,
   "name": "Leica IIIa",
   "date": "1936"
 },
 {
   "start": 184701,
   "end": 184750,
   "name": "Leica III",
   "date": "1936"
 },
 {
   "start": 184751,
   "end": 184800,
   "name": "Leica IIIa",
   "date": "1936"
 },
 {
   "start": 184801,
   "end": 184950,
   "name": "Leica III",
   "date": "1936"
 },
 {
   "start": 184951,
   "end": 185200,
   "name": "Leica IIIa",
   "date": "1936"
 },
 {
   "start": 185201,
   "end": 185350,
   "name": "Leica III",
   "date": "1936"
 },
 {
   "start": 185351,
   "end": 185500,
   "name": "Leica II",
   "date": "1936"
 },
 {
   "start": 185501,
   "end": 185650,
   "name": "Leica Standard",
   "date": "1936"
 },
 {
   "start": 185651,
   "end": 185700,
   "name": "Leica III",
   "date": "1936"
 },
 {
   "start": 185701,
   "end": 185800,
   "name": "Leica Standard",
   "date": "1936"
 },
 {
   "start": 185801,
   "end": 186100,
   "name": "Leica IIIa",
   "date": "1936"
 },
 {
   "start": 186101,
   "end": 186200,
   "name": "Leica III",
   "date": "1936"
 },
 {
   "start": 186201,
   "end": 186500,
   "name": "Leica IIIa",
   "date": "1936"
 },
 {
   "start": 186501,
   "end": 186550,
   "name": "Leica III",
   "date": "1936"
 },
 {
   "start": 186551,
   "end": 186800,
   "name": "Leica IIIa",
   "date": "1936"
 },
 {
   "start": 186801,
   "end": 186900,
   "name": "Leica III",
   "date": "1936"
 },
 {
   "start": 186901,
   "end": 186950,
   "name": "Leica IIIa",
   "date": "1936"
 },
 {
   "start": 186951,
   "end": 187000,
   "name": "Leica III",
   "date": "1936"
 },
 {
   "start": 187001,
   "end": 187100,
   "name": "Leica IIIa",
   "date": "1936"
 },
 {
   "start": 187101,
   "end": 187200,
   "name": "Leica III",
   "date": "1936"
 },
 {
   "start": 187201,
   "end": 187400,
   "name": "Leica IIIa",
   "date": "1936"
 },
 {
   "start": 187401,
   "end": 187500,
   "name": "Leica III",
   "date": "1936"
 },
 {
   "start": 187501,
   "end": 187650,
   "name": "Leica II",
   "date": "1936"
 },
 {
   "start": 187651,
   "end": 187775,
   "name": "Leica III",
   "date": "1936"
 },
 {
   "start": 187776,
   "end": 187785,
   "name": "Leica IIIa",
   "date": "1936"
 },
 {
   "start": 187786,
   "end": 187850,
   "name": "Leica III",
   "date": "1936"
 },
 {
   "start": 187851,
   "end": 188100,
   "name": "Leica IIIa",
   "date": "1936"
 },
 {
   "start": 188101,
   "end": 188300,
   "name": "Leica III",
   "date": "1936"
 },
 {
   "start": 188301,
   "end": 188600,
   "name": "Leica Standard",
   "date": "1936"
 },
 {
   "start": 188601,
   "end": 188750,
   "name": "Leica II",
   "date": "1936"
 },
 {
   "start": 188751,
   "end": 189300,
   "name": "Leica IIIa",
   "date": "1936"
 },
 {
   "start": 189301,
   "end": 189475,
   "name": "Leica III",
   "date": "1936"
 },
 {
   "start": 189476,
   "end": 189800,
   "name": "Leica IIIa",
   "date": "1936"
 },
 {
   "start": 189801,
   "end": 189900,
   "name": "Leica III",
   "date": "1936"
 },
 {
   "start": 189901,
   "end": 190200,
   "name": "Leica IIIa",
   "date": "1936"
 },
 {
   "start": 190201,
   "end": 190500,
   "name": "Leica III",
   "date": "1936"
 },
 {
   "start": 190501,
   "end": 190700,
   "name": "Leica IIIa",
   "date": "1936"
 },
 {
   "start": 190701,
   "end": 190900,
   "name": "Leica III",
   "date": "1936"
 },
 {
   "start": 190901,
   "end": 191100,
   "name": "Leica IIIa",
   "date": "1936"
 },
 {
   "start": 191101,
   "end": 191200,
   "name": "Leica III",
   "date": "1936"
 },
 {
   "start": 191201,
   "end": 191300,
   "name": "Leica II",
   "date": "1936"
 },
 {
   "start": 191301,
   "end": 191350,
   "name": "Leica IIIa",
   "date": "1936"
 },
 {
   "start": 191351,
   "end": 191500,
   "name": "Leica III",
   "date": "1936"
 },
 {
   "start": 191501,
   "end": 191650,
   "name": "Leica II",
   "date": "1936"
 },
 {
   "start": 191651,
   "end": 191750,
   "name": "Leica Standard",
   "date": "1936"
 },
 {
   "start": 191751,
   "end": 191850,
   "name": "Leica III",
   "date": "1936"
 },
 {
   "start": 191851,
   "end": 192100,
   "name": "Leica IIIa",
   "date": "1936"
 },
 {
   "start": 192101,
   "end": 192400,
   "name": "Leica III",
   "date": "1936"
 },
 {
   "start": 192401,
   "end": 192500,
   "name": "Leica IIIa",
   "date": "1936"
 },
 {
   "start": 192501,
   "end": 192800,
   "name": "Leica III",
   "date": "1936"
 },
 {
   "start": 192801,
   "end": 192950,
   "name": "Leica II",
   "date": "1936"
 },
 {
   "start": 192951,
   "end": 193200,
   "name": "Leica IIIa",
   "date": "1936"
 },
 {
   "start": 193201,
   "end": 193450,
   "name": "Leica Standard",
   "date": "1936"
 },
 {
   "start": 193451,
   "end": 193500,
   "name": "Leica IIIa",
   "date": "1936"
 },
 {
   "start": 193501,
   "end": 193600,
   "name": "Leica III",
   "date": "1936"
 },
 {
   "start": 193601,
   "end": 194300,
   "name": "Leica IIIa",
   "date": "1936"
 },
 {
   "start": 194301,
   "end": 194650,
   "name": "Leica III",
   "date": "1936"
 },
 {
   "start": 194651,
   "end": 194851,
   "name": "Leica II",
   "date": "1936"
 },
 {
   "start": 194851,
   "end": 194950,
   "name": "Leica Standard",
   "date": "1936"
 },
 {
   "start": 194951,
   "end": 196200,
   "name": "Leica IIIa",
   "date": "1936"
 },
 {
   "start": 196201,
   "end": 196300,
   "name": "Leica III",
   "date": "1936"
 },
 {
   "start": 196301,
   "end": 196400,
   "name": "Leica IIIa",
   "date": "1936"
 },
 {
   "start": 196401,
   "end": 196550,
   "name": "Leica II",
   "date": "1936"
 },
 {
   "start": 196551,
   "end": 196750,
   "name": "Leica Standard",
   "date": "1936"
 },
 {
   "start": 196751,
   "end": 197400,
   "name": "Leica IIIa",
   "date": "1936"
 },
 {
   "start": 197401,
   "end": 197500,
   "name": "Leica Standard",
   "date": "1936"
 },
 {
   "start": 197501,
   "end": 197550,
   "name": "Leica IIIa",
   "date": "1936"
 },
 {
   "start": 197551,
   "end": 197800,
   "name": "Leica III",
   "date": "1936"
 },
 {
   "start": 197801,
   "end": 198200,
   "name": "Leica IIIa",
   "date": "1936"
 },
 {
   "start": 198201,
   "end": 198400,
   "name": "Leica III",
   "date": "1936"
 },
 {
   "start": 198401,
   "end": 198800,
   "name": "Leica IIIa",
   "date": "1936"
 },
 {
   "start": 198801,
   "end": 198900,
   "name": "Leica III",
   "date": "1936"
 },
 {
   "start": 198901,
   "end": 199200,
   "name": "Leica IIIa",
   "date": "1936"
 },
 {
   "start": 199201,
   "end": 199300,
   "name": "Leica III",
   "date": "1936"
 },
 {
   "start": 199301,
   "end": 199500,
   "name": "Leica IIIa",
   "date": "1936"
 },
 {
   "start": 199501,
   "end": 199600,
   "name": "Leica III",
   "date": "1936"
 },
 {
   "start": 199601,
   "end": 199800,
   "name": "Leica II",
   "date": "1936"
 },
 {
   "start": 199801,
   "end": 200100,
   "name": "Leica IIIa",
   "date": "1936"
 },
 {
   "start": 200101,
   "end": 200200,
   "name": "Leica III",
   "date": "1936"
 },
 {
   "start": 200201,
   "end": 200500,
   "name": "Leica IIIa",
   "date": "1936"
 },
 {
   "start": 200501,
   "end": 200650,
   "name": "Leica II",
   "date": "1936"
 },
 {
   "start": 200651,
   "end": 200750,
   "name": "Leica Standard",
   "date": "1936"
 },
 {
   "start": 200751,
   "end": 201200,
   "name": "Leica III",
   "date": "1936"
 },
 {
   "start": 201201,
   "end": 201300,
   "name": "Leica IIIa",
   "date": "1936"
 },
 {
   "start": 201301,
   "end": 201400,
   "name": "Leica III",
   "date": "1936"
 },
 {
   "start": 201401,
   "end": 201600,
   "name": "Leica IIIa",
   "date": "1936"
 },
 {
   "start": 201601,
   "end": 201700,
   "name": "Leica Standard",
   "date": "1936"
 },
 {
   "start": 201701,
   "end": 202300,
   "name": "Leica IIIa",
   "date": "1936"
 },
 {
   "start": 202301,
   "end": 202450,
   "name": "Leica II",
   "date": "1936"
 },
 {
   "start": 202451,
   "end": 202600,
   "name": "Leica IIIa",
   "date": "1936"
 },
 {
   "start": 202601,
   "end": 202700,
   "name": "Leica III",
   "date": "1936"
 },
 {
   "start": 202701,
   "end": 202800,
   "name": "Leica IIIa",
   "date": "1936"
 },
 {
   "start": 202801,
   "end": 202900,
   "name": "Leica II",
   "date": "1936"
 },
 {
   "start": 202901,
   "end": 203100,
   "name": "Leica IIIa",
   "date": "1936"
 },
 {
   "start": 203101,
   "end": 203300,
   "name": "Leica III",
   "date": "1936"
 },
 {
   "start": 203301,
   "end": 203400,
   "name": "Leica Standard",
   "date": "1936"
 },
 {
   "start": 203401,
   "end": 204100,
   "name": "Leica IIIa",
   "date": "1936"
 },
 {
   "start": 204101,
   "end": 204200,
   "name": "Leica III",
   "date": "1936"
 },
 {
   "start": 204201,
   "end": 204300,
   "name": "Leica IIIa",
   "date": "1936"
 },
 {
   "start": 204301,
   "end": 204500,
   "name": "Leica II",
   "date": "1936"
 },
 {
   "start": 204501,
   "end": 204600,
   "name": "Leica III",
   "date": "1936"
 },
 {
   "start": 204601,
   "end": 204800,
   "name": "Leica IIIa",
   "date": "1936"
 },
 {
   "start": 204801,
   "end": 205000,
   "name": "Leica III",
   "date": "1936"
 },
 {
   "start": 205001,
   "end": 205100,
   "name": "Leica IIIa",
   "date": "1936"
 },
 {
   "start": 205101,
   "end": 205300,
   "name": "Leica III",
   "date": "1936"
 },
 {
   "start": 205301,
   "end": 205400,
   "name": "Leica IIIa",
   "date": "1936"
 },
 {
   "start": 205401,
   "end": 205500,
   "name": "Leica II",
   "date": "1936"
 },
 {
   "start": 205501,
   "end": 205700,
   "name": "Leica Standard",
   "date": "1936"
 },
 {
   "start": 205701,
   "end": 207300,
   "name": "Leica IIIa",
   "date": "1936"
 },
 {
   "start": 207301,
   "end": 207400,
   "name": "Leica II",
   "date": "1936"
 },
 {
   "start": 207401,
   "end": 207600,
   "name": "Leica Standard",
   "date": "1936"
 },
 {
   "start": 207601,
   "end": 207800,
   "name": "Leica III",
   "date": "1936"
 },
 {
   "start": 207801,
   "end": 208000,
   "name": "Leica IIIa",
   "date": "1936"
 },
 {
   "start": 208001,
   "end": 208300,
   "name": "Leica III",
   "date": "1936"
 },
 {
   "start": 208301,
   "end": 208600,
   "name": "Leica IIIa",
   "date": "1936"
 },
 {
   "start": 208601,
   "end": 208800,
   "name": "Leica III",
   "date": "1936"
 },
 {
   "start": 208801,
   "end": 209000,
   "name": "Leica IIIa",
   "date": "1936"
 },
 {
   "start": 209001,
   "end": 209600,
   "name": "Leica III",
   "date": "1936"
 },
 {
   "start": 209601,
   "end": 209900,
   "name": "Leica II",
   "date": "1936"
 },
 {
   "start": 209901,
   "end": 210100,
   "name": "Leica IIIa",
   "date": "1936"
 },
 {
   "start": 210101,
   "end": 210200,
   "name": "Leica III",
   "date": "1936"
 },
 {
   "start": 210201,
   "end": 210400,
   "name": "Leica IIIa",
   "date": "1936"
 },
 {
   "start": 210401,
   "end": 210900,
   "name": "Leica Standard",
   "date": "1936"
 },
 {
   "start": 210901,
   "end": 211000,
   "name": "Leica III",
   "date": "1936"
 },
 {
   "start": 211001,
   "end": 211600,
   "name": "Leica IIIa",
   "date": "1936"
 },
 {
   "start": 211601,
   "end": 211700,
   "name": "Leica III",
   "date": "1936"
 },
 {
   "start": 211701,
   "end": 211801,
   "name": "Leica IIIa",
   "date": "1936"
 },
 {
   "start": 211801,
   "end": 211900,
   "name": "Leica II",
   "date": "1936"
 },
 {
   "start": 211901,
   "end": 212400,
   "name": "Leica IIIa",
   "date": "1936"
 },
 {
   "start": 212401,
   "end": 212700,
   "name": "Leica Standard",
   "date": "1936"
 },
 {
   "start": 212701,
   "end": 212800,
   "name": "Leica IIIa",
   "date": "1936"
 },
 {
   "start": 212801,
   "end": 213200,
   "name": "Leica III",
   "date": "1936"
 },
 {
   "start": 213201,
   "end": 213300,
   "name": "Leica IIIa",
   "date": "1936"
 },
 {
   "start": 213301,
   "end": 213600,
   "name": "Leica Standard",
   "date": "1936"
 },
 {
   "start": 213601,
   "end": 213700,
   "name": "Leica II",
   "date": "1936"
 },
 {
   "start": 213701,
   "end": 214400,
   "name": "Leica IIIa",
   "date": "1936"
 },
 {
   "start": 214401,
   "end": 214800,
   "name": "Leica Standard",
   "date": "1936"
 },
 {
   "start": 214801,
   "end": 215300,
   "name": "Leica IIIa",
   "date": "1936"
 },
 {
   "start": 215301,
   "end": 216000,
   "name": "Leica III",
   "date": "1936"
 },
 {
   "start": 216001,
   "end": 216300,
   "name": "Leica IIIa",
   "date": "1936"
 },
 {
   "start": 216301,
   "end": 216500,
   "name": "Leica II",
   "date": "1936"
 },
 {
   "start": 216501,
   "end": 216800,
   "name": "Leica IIIa",
   "date": "1936"
 },
 {
   "start": 216801,
   "end": 217000,
   "name": "Leica III",
   "date": "1936"
 },
 {
   "start": 217001,
   "end": 217200,
   "name": "Leica IIIa",
   "date": "1936"
 },
 {
   "start": 217201,
   "end": 217300,
   "name": "Leica III",
   "date": "1936"
 },
 {
   "start": 217301,
   "end": 217500,
   "name": "Leica Standard",
   "date": "1936"
 },
 {
   "start": 217501,
   "end": 217700,
   "name": "Leica III",
   "date": "1937"
 },
 {
   "start": 217701,
   "end": 217900,
   "name": "Leica II",
   "date": "1936-37"
 },
 {
   "start": 217901,
   "end": 218300,
   "name": "Leica IIIa",
   "date": "1936-37"
 },
 {
   "start": 218301,
   "end": 218700,
   "name": "Leica II",
   "date": "1936"
 },
 {
   "start": 218701,
   "end": 218800,
   "name": "Leica III",
   "date": "1936"
 },
 {
   "start": 218801,
   "end": 219600,
   "name": "Leica IIIa",
   "date": "1936"
 },
 {
   "start": 219601,
   "end": 219800,
   "name": "Leica II",
   "date": "1936"
 },
 {
   "start": 219801,
   "end": 219900,
   "name": "Leica IIIa",
   "date": "1936"
 },
 {
   "start": 219901,
   "end": 220000,
   "name": "Leica III",
   "date": "1936"
 },
 {
   "start": 220001,
   "end": 220300,
   "name": "Leica IIIa",
   "date": "1936"
 },
 {
   "start": 220301,
   "end": 220500,
   "name": "Leica II",
   "date": "1937"
 },
 {
   "start": 220501,
   "end": 220600,
   "name": "Leica IIIa",
   "date": "1936"
 },
 {
   "start": 220601,
   "end": 220700,
   "name": "Leica III",
   "date": "1936"
 },
 {
   "start": 220701,
   "end": 220900,
   "name": "Leica IIIa",
   "date": "1936"
 },
 {
   "start": 220901,
   "end": 221000,
   "name": "Leica III",
   "date": "1936"
 },
 {
   "start": 221001,
   "end": 221300,
   "name": "Leica IIIa",
   "date": "1936"
 },
 {
   "start": 221301,
   "end": 221400,
   "name": "Leica III",
   "date": "1936"
 },
 {
   "start": 221401,
   "end": 222150,
   "name": "Leica IIIa",
   "date": "1936"
 },
 {
   "start": 222151,
   "end": 222200,
   "name": "Leica III",
   "date": "1936"
 },
 {
   "start": 222201,
   "end": 222300,
   "name": "Leica IIIa",
   "date": "1936"
 },
 {
   "start": 222301,
   "end": 222700,
   "name": "Leica Standard",
   "date": "1937"
 },
 {
   "start": 222701,
   "end": 223000,
   "name": "Leica II",
   "date": "1937"
 },
 {
   "start": 223001,
   "end": 223300,
   "name": "Leica III",
   "date": "1937"
 },
 {
   "start": 223301,
   "end": 223600,
   "name": "Leica IIIa",
   "date": "1936"
 },
 {
   "start": 223601,
   "end": 223700,
   "name": "Leica III",
   "date": "1936"
 },
 {
   "start": 224601,
   "end": 224800,
   "name": "Leica Standard",
   "date": "1936-37"
 },
 {
   "start": 224801,
   "end": 224900,
   "name": "Leica IIIa",
   "date": "1936-37"
 },
 {
   "start": 224901,
   "end": 225000,
   "name": "Leica III",
   "date": "1936-37"
 },
 {
   "start": 225001,
   "end": 225200,
   "name": "Leica IIIa",
   "date": "1936-37"
 },
 {
   "start": 225201,
   "end": 225300,
   "name": "Leica III",
   "date": "1936-37"
 },
 {
   "start": 225301,
   "end": 225400,
   "name": "Leica IIIa",
   "date": "1936-37"
 },
 {
   "start": 225401,
   "end": 225600,
   "name": "Leica III",
   "date": "1936-37"
 },
 {
   "start": 225601,
   "end": 226300,
   "name": "Leica IIIa",
   "date": "1936-37"
 },
 {
   "start": 226301,
   "end": 226400,
   "name": "Leica III",
   "date": "1936-37"
 },
 {
   "start": 226401,
   "end": 227000,
   "name": "Leica IIIa",
   "date": "1936-37"
 },
 {
   "start": 227001,
   "end": 227050,
   "name": "Leica III",
   "date": "1936-37"
 },
 {
   "start": 227051,
   "end": 227600,
   "name": "Leica IIIa",
   "date": "1936-37"
 },
 {
   "start": 227601,
   "end": 227650,
   "name": "Leica III",
   "date": "1936-37"
 },
 {
   "start": 227651,
   "end": 231500,
   "name": "Leica IIIa",
   "date": "1936-37"
 },
 {
   "start": 231501,
   "end": 231600,
   "name": "Leica III",
   "date": "1936-37"
 },
 {
   "start": 231601,
   "end": 231800,
   "name": "Leica IIIa",
   "date": "1936-37"
 },
 {
   "start": 231801,
   "end": 231900,
   "name": "Leica III",
   "date": "1936-37"
 },
 {
   "start": 231901,
   "end": 232200,
   "name": "Leica IIIa",
   "date": "1936-37"
 },
 {
   "start": 232201,
   "end": 232500,
   "name": "Leica III",
   "date": "1936-37"
 },
 {
   "start": 232501,
   "end": 232800,
   "name": "Leica IIIa",
   "date": "1936-37"
 },
 {
   "start": 232801,
   "end": 232900,
   "name": "Leica III",
   "date": "1936-37"
 },
 {
   "start": 232901,
   "end": 233400,
   "name": "Leica IIIa",
   "date": "1936-37"
 },
 {
   "start": 233401,
   "end": 233500,
   "name": "Leica III",
   "date": "1936-37"
 },
 {
   "start": 233501,
   "end": 233700,
   "name": "Leica Standard",
   "date": "1936-37"
 },
 {
   "start": 233701,
   "end": 224600,
   "name": "Leica IIIa",
   "date": "1936-37"
 },
 {
   "start": 233701,
   "end": 233800,
   "name": "Leica III",
   "date": "1936-37"
 },
 {
   "start": 233801,
   "end": 234000,
   "name": "Leica IIIa",
   "date": "1936-37"
 },
 {
   "start": 234001,
   "end": 234100,
   "name": "Leica II",
   "date": "1936-37"
 },
 {
   "start": 234101,
   "end": 234200,
   "name": "Leica III",
   "date": "1936-37"
 },
 {
   "start": 234201,
   "end": 234500,
   "name": "Leica IIIa",
   "date": "1936-37"
 },
 {
   "start": 234501,
   "end": 234600,
   "name": "Leica III",
   "date": "1936-37"
 },
 {
   "start": 234601,
   "end": 235100,
   "name": "Leica IIIa",
   "date": "1937"
 },
 {
   "start": 235101,
   "end": 235200,
   "name": "Leica III",
   "date": "1937"
 },
 {
   "start": 235201,
   "end": 235800,
   "name": "Leica IIIa",
   "date": "1937"
 },
 {
   "start": 235801,
   "end": 235875,
   "name": "Leica III",
   "date": "1937"
 },
 {
   "start": 235876,
   "end": 236200,
   "name": "Leica IIIa",
   "date": "1937"
 },
 {
   "start": 236201,
   "end": 236300,
   "name": "Leica III",
   "date": "1937"
 },
 {
   "start": 236301,
   "end": 236500,
   "name": "Leica IIIa",
   "date": "1937"
 },
 {
   "start": 236501,
   "end": 236700,
   "name": "Leica II",
   "date": "1937"
 },
 {
   "start": 236701,
   "end": 236800,
   "name": "Leica IIIa",
   "date": "1937"
 },
 {
   "start": 236801,
   "end": 236900,
   "name": "Leica III",
   "date": "1937"
 },
 {
   "start": 236901,
   "end": 237000,
   "name": "Leica IIIa",
   "date": "1937"
 },
 {
   "start": 237001,
   "end": 237200,
   "name": "Leica III",
   "date": "1937"
 },
 {
   "start": 237201,
   "end": 237500,
   "name": "Leica IIIa",
   "date": "1937"
 },
 {
   "start": 237501,
   "end": 237600,
   "name": "Leica III",
   "date": "1937"
 },
 {
   "start": 237601,
   "end": 238000,
   "name": "Leica IIIa",
   "date": "1937"
 },
 {
   "start": 238001,
   "end": 238100,
   "name": "Leica III",
   "date": "1937"
 },
 {
   "start": 238101,
   "end": 238500,
   "name": "Leica IIIa",
   "date": "1937"
 },
 {
   "start": 238501,
   "end": 238600,
   "name": "Leica III",
   "date": "1937"
 },
 {
   "start": 238601,
   "end": 238800,
   "name": "Leica IIIa",
   "date": "1937"
 },
 {
   "start": 238801,
   "end": 238825,
   "name": "Leica III",
   "date": "1937"
 },
 {
   "start": 238826,
   "end": 238900,
   "name": "Leica IIIa",
   "date": "1937"
 },
 {
   "start": 238901,
   "end": 239000,
   "name": "Leica III",
   "date": "1937"
 },
 {
   "start": 239001,
   "end": 239100,
   "name": "Leica IIIa",
   "date": "1937"
 },
 {
   "start": 239101,
   "end": 239300,
   "name": "Leica III",
   "date": "1937"
 },
 {
   "start": 239301,
   "end": 239400,
   "name": "Leica IIIa",
   "date": "1937"
 },
 {
   "start": 239401,
   "end": 239600,
   "name": "Leica III",
   "date": "1937"
 },
 {
   "start": 239601,
   "end": 239700,
   "name": "Leica IIIa",
   "date": "1937"
 },
 {
   "start": 239701,
   "end": 239800,
   "name": "Leica III",
   "date": "1937"
 },
 {
   "start": 239801,
   "end": 240000,
   "name": "Leica Standard",
   "date": "1937"
 },
 {
   "start": 240001,
   "end": 241000,
   "name": "Leica IIIb",
   "date": "1937-38"
 },
 {
   "start": 241001,
   "end": 241100,
   "name": "Leica IIIa",
   "date": "1937-38"
 },
 {
   "start": 241101,
   "end": 241300,
   "name": "Leica III",
   "date": "1937-38"
 },
 {
   "start": 241301,
   "end": 241500,
   "name": "Leica IIIa",
   "date": "1937-38"
 },
 {
   "start": 241501,
   "end": 241700,
   "name": "Leica II",
   "date": "1937-38"
 },
 {
   "start": 241701,
   "end": 241900,
   "name": "Leica Standard",
   "date": "1937-38"
 },
 {
   "start": 241901,
   "end": 242000,
   "name": "Leica II",
   "date": "1937-38"
 },
 {
   "start": 242001,
   "end": 243000,
   "name": "Leica IIIb",
   "date": "1937-38"
 },
 {
   "start": 243001,
   "end": 243400,
   "name": "Leica IIIa",
   "date": "1937-38"
 },
 {
   "start": 243401,
   "end": 243500,
   "name": "Leica III",
   "date": "1937-38"
 },
 {
   "start": 243501,
   "end": 243800,
   "name": "Leica II",
   "date": "1937-38"
 },
 {
   "start": 243801,
   "end": 244100,
   "name": "Leica IIIa",
   "date": "1937-38"
 },
 {
   "start": 244101,
   "end": 244200,
   "name": "Leica III",
   "date": "1937-38"
 },
 {
   "start": 244201,
   "end": 244400,
   "name": "Leica Standard",
   "date": "1937-38"
 },
 {
   "start": 244401,
   "end": 244600,
   "name": "Leica III",
   "date": "1937-38"
 },
 {
   "start": 244601,
   "end": 244800,
   "name": "Leica IIIa",
   "date": "1937-38"
 },
 {
   "start": 244801,
   "end": 245000,
   "name": "Leica Standard",
   "date": "1937-38"
 },
 {
   "start": 245001,
   "end": 245100,
   "name": "Leica IIIa",
   "date": "1937-38"
 },
 {
   "start": 245101,
   "end": 245300,
   "name": "Leica III",
   "date": "1937-38"
 },
 {
   "start": 245301,
   "end": 246200,
   "name": "Leica IIIa",
   "date": "1937-38"
 },
 {
   "start": 246201,
   "end": 246300,
   "name": "Leica III",
   "date": "1937-38"
 },
 {
   "start": 246301,
   "end": 246400,
   "name": "Leica IIIa",
   "date": "1937-38"
 },
 {
   "start": 246401,
   "end": 246500,
   "name": "Leica III",
   "date": "1937-38"
 },
 {
   "start": 246501,
   "end": 246700,
   "name": "Leica II",
   "date": "1937-38"
 },
 {
   "start": 246701,
   "end": 247500,
   "name": "Leica IIIa",
   "date": "1937-38"
 },
 {
   "start": 247501,
   "end": 247600,
   "name": "Leica II",
   "date": "1937-38"
 },
 {
   "start": 247601,
   "end": 248300,
   "name": "Leica IIIa",
   "date": "1937-38"
 },
 {
   "start": 248301,
   "end": 248400,
   "name": "Leica II",
   "date": "1937-38"
 },
 {
   "start": 248401,
   "end": 248600,
   "name": "Leica Standard",
   "date": "1937-38"
 },
 {
   "start": 248601,
   "end": 248900,
   "name": "Leica IIIa",
   "date": "1937"
 },
 {
   "start": 248901,
   "end": 249000,
   "name": "Leica III",
   "date": "1937"
 },
 {
   "start": 249001,
   "end": 249200,
   "name": "Leica IIIa",
   "date": "1937"
 },
 {
   "start": 249201,
   "end": 249400,
   "name": "Leica II",
   "date": "1937"
 },
 {
   "start": 249401,
   "end": 249500,
   "name": "Leica III",
   "date": "1937"
 },
 {
   "start": 249501,
   "end": 249700,
   "name": "Leica Standard",
   "date": "1937"
 },
 {
   "start": 249701,
   "end": 249800,
   "name": "Leica IIIa",
   "date": "1937"
 },
 {
   "start": 249801,
   "end": 249900,
   "name": "Leica III",
   "date": "1937"
 },
 {
   "start": 249901,
   "end": 250300,
   "name": "Leica IIIa",
   "date": "1937"
 },
 {
   "start": 250301,
   "end": 250400,
   "name": "Leica III",
   "date": "1937"
 },
 {
   "start": 250401,
   "end": 251200,
   "name": "Leica IIIa",
   "date": "1937"
 },
 {
   "start": 251201,
   "end": 251300,
   "name": "Leica II",
   "date": "1937"
 },
 {
   "start": 251301,
   "end": 251500,
   "name": "Leica Standard",
   "date": "1937"
 },
 {
   "start": 251501,
   "end": 251600,
   "name": "Leica IIIa",
   "date": "1937"
 },
 {
   "start": 251601,
   "end": 251800,
   "name": "Leica II",
   "date": "1937"
 },
 {
   "start": 251801,
   "end": 252000,
   "name": "Leica III",
   "date": "1937"
 },
 {
   "start": 252001,
   "end": 252200,
   "name": "Leica II",
   "date": "1937"
 },
 {
   "start": 252201,
   "end": 252900,
   "name": "Leica IIIa",
   "date": "1937"
 },
 {
   "start": 252901,
   "end": 253000,
   "name": "Leica III",
   "date": "1937"
 },
 {
   "start": 253001,
   "end": 253200,
   "name": "Leica IIIa",
   "date": "1937"
 },
 {
   "start": 253201,
   "end": 253400,
   "name": "Leica III",
   "date": "1937"
 },
 {
   "start": 253401,
   "end": 253500,
   "name": "Leica IIIa",
   "date": "1937"
 },
 {
   "start": 253501,
   "end": 253600,
   "name": "Leica III",
   "date": "1937"
 },
 {
   "start": 253601,
   "end": 253800,
   "name": "Leica Standard",
   "date": "1937"
 },
 {
   "start": 253801,
   "end": 254000,
   "name": "Leica IIIa",
   "date": "1937"
 },
 {
   "start": 254001,
   "end": 254200,
   "name": "Leica III",
   "date": "1937"
 },
 {
   "start": 254201,
   "end": 254600,
   "name": "Leica IIIa",
   "date": "1937"
 },
 {
   "start": 254601,
   "end": 254800,
   "name": "Leica II",
   "date": "1937"
 },
 {
   "start": 254801,
   "end": 254900,
   "name": "Leica III",
   "date": "1937"
 },
 {
   "start": 254901,
   "end": 256400,
   "name": "Leica IIIa",
   "date": "1937"
 },
 {
   "start": 256401,
   "end": 256600,
   "name": "Leica Standard",
   "date": "1937"
 },
 {
   "start": 256601,
   "end": 256800,
   "name": "Leica IIIa",
   "date": "1937"
 },
 {
   "start": 256801,
   "end": 256900,
   "name": "Leica III",
   "date": "1937"
 },
 {
   "start": 256901,
   "end": 257400,
   "name": "Leica IIIa",
   "date": "1937"
 },
 {
   "start": 257401,
   "end": 257525,
   "name": "Leica III",
   "date": "1937"
 },
 {
   "start": 257526,
   "end": 257600,
   "name": "Leica IIIa",
   "date": "1937"
 },
 {
   "start": 257601,
   "end": 257800,
   "name": "Leica Standard",
   "date": "1937"
 },
 {
   "start": 257801,
   "end": 258200,
   "name": "Leica III",
   "date": "1937"
 },
 {
   "start": 258201,
   "end": 259500,
   "name": "Leica IIIa",
   "date": "1937"
 },
 {
   "start": 259501,
   "end": 259800,
   "name": "Leica II",
   "date": "1937"
 },
 {
   "start": 259801,
   "end": 259900,
   "name": "Leica Standard",
   "date": "1937"
 },
 {
   "start": 259901,
   "end": 260000,
   "name": "Leica IIIa",
   "date": "1937"
 },
 {
   "start": 260001,
   "end": 260100,
   "name": "Leica Reporter",
   "date": "1937"
 },
 {
   "start": 260101,
   "end": 260200,
   "name": "Leica IIIa",
   "date": "1937"
 },
 {
   "start": 260201,
   "end": 260600,
   "name": "Leica III",
   "date": "1937"
 },
 {
   "start": 260601,
   "end": 260800,
   "name": "Leica IIIa",
   "date": "1937"
 },
 {
   "start": 260801,
   "end": 260900,
   "name": "Leica III",
   "date": "1937"
 },
 {
   "start": 260901,
   "end": 261200,
   "name": "Leica IIIa",
   "date": "1937"
 },
 {
   "start": 261201,
   "end": 261300,
   "name": "Leica III",
   "date": "1937"
 },
 {
   "start": 261301,
   "end": 261500,
   "name": "Leica IIIa",
   "date": "1937"
 },
 {
   "start": 261501,
   "end": 261600,
   "name": "Leica III",
   "date": "1937"
 },
 {
   "start": 261601,
   "end": 261800,
   "name": "Leica IIIa",
   "date": "1937"
 },
 {
   "start": 261801,
   "end": 262000,
   "name": "Leica Standard",
   "date": "1937"
 },
 {
   "start": 262001,
   "end": 262800,
   "name": "Leica IIIa",
   "date": "1937"
 },
 {
   "start": 262801,
   "end": 263000,
   "name": "Leica III",
   "date": "1937"
 },
 {
   "start": 263001,
   "end": 263600,
   "name": "Leica IIIa",
   "date": "1937"
 },
 {
   "start": 263601,
   "end": 263900,
   "name": "Leica II",
   "date": "1937"
 },
 {
   "start": 263901,
   "end": 264000,
   "name": "Leica III",
   "date": "1937"
 },
 {
   "start": 264001,
   "end": 264800,
   "name": "Leica IIIa",
   "date": "1937"
 },
 {
   "start": 264801,
   "end": 265000,
   "name": "Leica Standard",
   "date": "1937"
 },
 {
   "start": 265001,
   "end": 266000,
   "name": "Leica IIIb",
   "date": "1937"
 },
 {
   "start": 266001,
   "end": 266100,
   "name": "Leica IIIa",
   "date": "1937"
 },
 {
   "start": 266101,
   "end": 266200,
   "name": "Leica III",
   "date": "1937"
 },
 {
   "start": 266201,
   "end": 266400,
   "name": "Leica IIIa",
   "date": "1937"
 },
 {
   "start": 266401,
   "end": 266500,
   "name": "Leica III",
   "date": "1937"
 },
 {
   "start": 266501,
   "end": 266800,
   "name": "Leica II",
   "date": "1937"
 },
 {
   "start": 266801,
   "end": 266900,
   "name": "Leica IIIa",
   "date": "1937"
 },
 {
   "start": 266901,
   "end": 267000,
   "name": "Leica III",
   "date": "1937"
 },
 {
   "start": 267001,
   "end": 267700,
   "name": "Leica IIIa",
   "date": "1937"
 },
 {
   "start": 267701,
   "end": 267800,
   "name": "Leica III",
   "date": "1937"
 },
 {
   "start": 267801,
   "end": 267900,
   "name": "Leica IIIa",
   "date": "1937"
 },
 {
   "start": 267901,
   "end": 268000,
   "name": "Leica Standard",
   "date": "1937"
 },
 {
   "start": 268001,
   "end": 268100,
   "name": "Leica IIIa",
   "date": "1937-38"
 },
 {
   "start": 268101,
   "end": 268200,
   "name": "Leica III",
   "date": "1938"
 },
 {
   "start": 268201,
   "end": 268400,
   "name": "Leica IIIa",
   "date": "1937"
 },
 {
   "start": 268401,
   "end": 268500,
   "name": "Leica III",
   "date": "1938"
 },
 {
   "start": 268501,
   "end": 268700,
   "name": "Leica IIIa",
   "date": "1938"
 },
 {
   "start": 268701,
   "end": 268800,
   "name": "Leica III",
   "date": "1938"
 },
 {
   "start": 268801,
   "end": 269300,
   "name": "Leica IIIa",
   "date": "1938"
 },
 {
   "start": 269301,
   "end": 269400,
   "name": "Leica III",
   "date": "1938"
 },
 {
   "start": 269401,
   "end": 269600,
   "name": "Leica IIIa",
   "date": "1938"
 },
 {
   "start": 269601,
   "end": 269700,
   "name": "Leica III",
   "date": "1938"
 },
 {
   "start": 269701,
   "end": 270100,
   "name": "Leica IIIa",
   "date": "1938"
 },
 {
   "start": 270101,
   "end": 270200,
   "name": "Leica III",
   "date": "1938"
 },
 {
   "start": 270201,
   "end": 270300,
   "name": "Leica IIIa",
   "date": "1938"
 },
 {
   "start": 270301,
   "end": 270400,
   "name": "Leica III",
   "date": "1938"
 },
 {
   "start": 270401,
   "end": 271000,
   "name": "Leica IIIa",
   "date": "1938"
 },
 {
   "start": 271001,
   "end": 271100,
   "name": "Leica II",
   "date": "1938"
 },
 {
   "start": 271101,
   "end": 271600,
   "name": "Leica Standard",
   "date": "1938"
 },
 {
   "start": 271601,
   "end": 271700,
   "name": "Leica II",
   "date": "1938"
 },
 {
   "start": 271701,
   "end": 271800,
   "name": "Leica III",
   "date": "1938"
 },
 {
   "start": 271801,
   "end": 272300,
   "name": "Leica IIIa",
   "date": "1938"
 },
 {
   "start": 272301,
   "end": 272400,
   "name": "Leica II",
   "date": "1938"
 },
 {
   "start": 272401,
   "end": 274800,
   "name": "Leica IIIa",
   "date": "1938"
 },
 {
   "start": 274801,
   "end": 275200,
   "name": "Leica III",
   "date": "1938"
 },
 {
   "start": 275201,
   "end": 275350,
   "name": "Leica IIIa",
   "date": "1938"
 },
 {
   "start": 275351,
   "end": 275650,
   "name": "Leica II",
   "date": "1938"
 },
 {
   "start": 275651,
   "end": 275675,
   "name": "Leica IIIa",
   "date": "1938"
 },
 {
   "start": 275676,
   "end": 275700,
   "name": "Leica II",
   "date": "1938"
 },
 {
   "start": 275701,
   "end": 275800,
   "name": "Leica IIIa",
   "date": "1938"
 },
 {
   "start": 275801,
   "end": 276400,
   "name": "Leica III",
   "date": "1938"
 },
 {
   "start": 276401,
   "end": 277000,
   "name": "Leica IIIa",
   "date": "1938"
 },
 {
   "start": 277001,
   "end": 277100,
   "name": "Leica III",
   "date": "1938"
 },
 {
   "start": 277101,
   "end": 277500,
   "name": "Leica IIIa",
   "date": "1938"
 },
 {
   "start": 277505,
   "end": 277900,
   "name": "Leica Standard",
   "date": "1938"
 },
 {
   "start": 277901,
   "end": 278100,
   "name": "Leica II",
   "date": "1938"
 },
 {
   "start": 278101,
   "end": 278200,
   "name": "Leica III",
   "date": "1938"
 },
 {
   "start": 278201,
   "end": 278500,
   "name": "Leica IIIa",
   "date": "1938"
 },
 {
   "start": 278501,
   "end": 278525,
   "name": "Leica III",
   "date": "1938"
 },
 {
   "start": 278526,
   "end": 278550,
   "name": "Leica IIIa",
   "date": "1938"
 },
 {
   "start": 278551,
   "end": 278600,
   "name": "Leica III",
   "date": "1938"
 },
 {
   "start": 278601,
   "end": 278800,
   "name": "Leica Standard",
   "date": "1938"
 },
 {
   "start": 278801,
   "end": 279000,
   "name": "Leica IIIa",
   "date": "1938"
 },
 {
   "start": 279001,
   "end": 279200,
   "name": "Leica III",
   "date": "1938"
 },
 {
   "start": 279201,
   "end": 279400,
   "name": "Leica II",
   "date": "1938"
 },
 {
   "start": 279401,
   "end": 280000,
   "name": "Leica IIIa",
   "date": "1938"
 },
 {
   "start": 280001,
   "end": 286500,
   "name": "Leica IIIb",
   "date": "1938"
 },
 {
   "start": 286501,
   "end": 286800,
   "name": "Leica Standard",
   "date": "1938"
 },
 {
   "start": 286801,
   "end": 287000,
   "name": "Leica III",
   "date": "1938"
 },
 {
   "start": 287001,
   "end": 287200,
   "name": "Leica IIIa",
   "date": "1938"
 },
 {
   "start": 287201,
   "end": 287300,
   "name": "Leica III",
   "date": "1938"
 },
 {
   "start": 287301,
   "end": 287400,
   "name": "Leica IIIa",
   "date": "1938"
 },
 {
   "start": 287401,
   "end": 287600,
   "name": "Leica II",
   "date": "1938"
 },
 {
   "start": 287601,
   "end": 288000,
   "name": "Leica IIIa",
   "date": "1938"
 },
 {
   "start": 288001,
   "end": 290200,
   "name": "Leica IIIb",
   "date": "1938-39"
 },
 {
   "start": 290201,
   "end": 290500,
   "name": "Leica IIIa",
   "date": "1938"
 },
 {
   "start": 290501,
   "end": 290800,
   "name": "Leica III",
   "date": "1938"
 },
 {
   "start": 290801,
   "end": 291000,
   "name": "Leica IIIa",
   "date": "1938"
 },
 {
   "start": 291001,
   "end": 291200,
   "name": "Leica Standard",
   "date": "1938"
 },
 {
   "start": 291201,
   "end": 291500,
   "name": "Leica IIIa",
   "date": "1938"
 },
 {
   "start": 291501,
   "end": 291600,
   "name": "Leica III",
   "date": "1938"
 },
 {
   "start": 291601,
   "end": 291800,
   "name": "Leica IIIa",
   "date": "1938"
 },
 {
   "start": 291801,
   "end": 292000,
   "name": "Leica Standard",
   "date": "1938"
 },
 {
   "start": 292001,
   "end": 292200,
   "name": "Leica II",
   "date": "1938"
 },
 {
   "start": 292201,
   "end": 292400,
   "name": "Leica Standard",
   "date": "1938"
 },
 {
   "start": 292401,
   "end": 292600,
   "name": "Leica IIIa",
   "date": "1938"
 },
 {
   "start": 292601,
   "end": 292700,
   "name": "Leica III",
   "date": "1938"
 },
 {
   "start": 292701,
   "end": 293000,
   "name": "Leica IIIa",
   "date": "1938"
 },
 {
   "start": 293001,
   "end": 293100,
   "name": "Leica III",
   "date": "1938"
 },
 {
   "start": 293101,
   "end": 293200,
   "name": "Leica IIIa",
   "date": "1938"
 },
 {
   "start": 293201,
   "end": 293400,
   "name": "Leica III",
   "date": "1938"
 },
 {
   "start": 293401,
   "end": 293500,
   "name": "Leica II",
   "date": "1938"
 },
 {
   "start": 293501,
   "end": 293900,
   "name": "Leica IIIa",
   "date": "1938"
 },
 {
   "start": 293901,
   "end": 294000,
   "name": "Leica Standard",
   "date": "1938"
 },
 {
   "start": 294001,
   "end": 294600,
   "name": "Leica IIIb",
   "date": "1938"
 },
 {
   "start": 294601,
   "end": 294800,
   "name": "Leica II",
   "date": "1938"
 },
 {
   "start": 294801,
   "end": 294900,
   "name": "Leica III",
   "date": "1938"
 },
 {
   "start": 294901,
   "end": 295100,
   "name": "Leica IIIa",
   "date": "1938"
 },
 {
   "start": 295101,
   "end": 295200,
   "name": "Leica III",
   "date": "1938"
 },
 {
   "start": 295201,
   "end": 295300,
   "name": "Leica IIIa",
   "date": "1938"
 },
 {
   "start": 295301,
   "end": 295400,
   "name": "Leica Standard",
   "date": "1938"
 },
 {
   "start": 295401,
   "end": 295500,
   "name": "Leica III",
   "date": "1938"
 },
 {
   "start": 295501,
   "end": 296000,
   "name": "Leica IIIa",
   "date": "1938"
 },
 {
   "start": 296001,
   "end": 296200,
   "name": "Leica II",
   "date": "1938"
 },
 {
   "start": 296201,
   "end": 296500,
   "name": "Leica IIIa",
   "date": "1938"
 },
 {
   "start": 296501,
   "end": 296600,
   "name": "Leica III",
   "date": "1938"
 },
 {
   "start": 296601,
   "end": 296900,
   "name": "Leica Standard",
   "date": "1938"
 },
 {
   "start": 297101,
   "end": 297200,
   "name": "Leica IIIa",
   "date": "1938"
 },
 {
   "start": 297201,
   "end": 297400,
   "name": "Leica III",
   "date": "1938"
 },
 {
   "start": 297401,
   "end": 297900,
   "name": "Leica IIIa",
   "date": "1938"
 },
 {
   "start": 297901,
   "end": 298000,
   "name": "Leica III",
   "date": "1938"
 },
 {
   "start": 298001,
   "end": 299000,
   "name": "Leica IIIa",
   "date": "1938"
 },
 {
   "start": 299001,
   "end": 299200,
   "name": "Leica III",
   "date": "1938"
 },
 {
   "start": 299201,
   "end": 299500,
   "name": "Leica IIIa",
   "date": "1938"
 },
 {
   "start": 299501,
   "end": 299600,
   "name": "Leica III",
   "date": "1938"
 },
 {
   "start": 299601,
   "end": 299800,
   "name": "Leica IIIa",
   "date": "1938"
 },
 {
   "start": 299801,
   "end": 299900,
   "name": "Leica III",
   "date": "1938"
 },
 {
   "start": 299901,
   "end": 300000,
   "name": "Leica Standard",
   "date": "1938"
 },
 {
   "start": 300001,
   "end": 300100,
   "name": "Leica Reporter",
   "date": "1938"
 },
 {
   "start": 300101,
   "end": 300200,
   "name": "Leica Standard",
   "date": "1938"
 },
 {
   "start": 300201,
   "end": 300300,
   "name": "Leica II",
   "date": "1938"
 },
 {
   "start": 300301,
   "end": 300400,
   "name": "Leica Standard",
   "date": "1938"
 },
 {
   "start": 300401,
   "end": 300700,
   "name": "Leica IIIa",
   "date": "1938"
 },
 {
   "start": 300701,
   "end": 300800,
   "name": "Leica III",
   "date": "1938"
 },
 {
   "start": 300801,
   "end": 301000,
   "name": "Leica IIIa",
   "date": "1938"
 },
 {
   "start": 301001,
   "end": 301100,
   "name": "Leica III",
   "date": "1938"
 },
 {
   "start": 301101,
   "end": 301400,
   "name": "Leica IIIa",
   "date": "1938"
 },
 {
   "start": 301401,
   "end": 301500,
   "name": "Leica III",
   "date": "1938"
 },
 {
   "start": 301501,
   "end": 301600,
   "name": "Leica III",
   "date": "1938"
 },
 {
   "start": 301601,
   "end": 301700,
   "name": "Leica Standard",
   "date": "1938"
 },
 {
   "start": 301701,
   "end": 301800,
   "name": "Leica III",
   "date": "1938"
 },
 {
   "start": 301801,
   "end": 301900,
   "name": "Leica IIIa",
   "date": "1938"
 },
 {
   "start": 301901,
   "end": 302000,
   "name": "Leica III",
   "date": "1938"
 },
 {
   "start": 302001,
   "end": 302500,
   "name": "Leica IIIa",
   "date": "1938"
 },
 {
   "start": 302501,
   "end": 302800,
   "name": "Leica II",
   "date": "1938"
 },
 {
   "start": 302801,
   "end": 302900,
   "name": "Leica III",
   "date": "1938"
 },
 {
   "start": 302901,
   "end": 303200,
   "name": "Leica IIIa",
   "date": "1938"
 },
 {
   "start": 303201,
   "end": 303300,
   "name": "Leica III",
   "date": "1938"
 },
 {
   "start": 303301,
   "end": 303700,
   "name": "Leica IIIa",
   "date": "1938"
 },
 {
   "start": 303701,
   "end": 303800,
   "name": "Leica II",
   "date": "1938"
 },
 {
   "start": 303801,
   "end": 303900,
   "name": "Leica Standard",
   "date": "1938"
 },
 {
   "start": 303901,
   "end": 304400,
   "name": "Leica IIIa",
   "date": "1938"
 },
 {
   "start": 304401,
   "end": 304500,
   "name": "Leica III",
   "date": "1938"
 },
 {
   "start": 304501,
   "end": 304700,
   "name": "Leica IIIa",
   "date": "1938"
 },
 {
   "start": 304701,
   "end": 304800,
   "name": "Leica III",
   "date": "1938"
 },
 {
   "start": 304801,
   "end": 304900,
   "name": "Leica IIIa",
   "date": "1938"
 },
 {
   "start": 304901,
   "end": 305000,
   "name": "Leica III",
   "date": "1938"
 },
 {
   "start": 305001,
   "end": 305600,
   "name": "Leica IIIa",
   "date": "1938"
 },
 {
   "start": 305601,
   "end": 305700,
   "name": "Leica III",
   "date": "1938"
 },
 {
   "start": 305701,
   "end": 305800,
   "name": "Leica Standard",
   "date": "1938"
 },
 {
   "start": 305801,
   "end": 306200,
   "name": "Leica IIIa",
   "date": "1938"
 },
 {
   "start": 306201,
   "end": 306300,
   "name": "Leica III",
   "date": "1938"
 },
 {
   "start": 306301,
   "end": 306500,
   "name": "Leica II",
   "date": "1938"
 },
 {
   "start": 306501,
   "end": 306600,
   "name": "Leica III",
   "date": "1938"
 },
 {
   "start": 306601,
   "end": 306800,
   "name": "Leica IIIa",
   "date": "1938"
 },
 {
   "start": 306801,
   "end": 307000,
   "name": "Leica III",
   "date": "1938"
 },
 {
   "start": 307001,
   "end": 307500,
   "name": "Leica IIIa",
   "date": "1938"
 },
 {
   "start": 307501,
   "end": 308000,
   "name": "Leica Standard",
   "date": "1938"
 },
 {
   "start": 308001,
   "end": 308100,
   "name": "Leica IIIa",
   "date": "1938"
 },
 {
   "start": 308101,
   "end": 308200,
   "name": "Leica III",
   "date": "1938"
 },
 {
   "start": 308201,
   "end": 308300,
   "name": "Leica II",
   "date": "1938"
 },
 {
   "start": 308301,
   "end": 308500,
   "name": "Leica Standard",
   "date": "1938"
 },
 {
   "start": 308501,
   "end": 308600,
   "name": "Leica III",
   "date": "1938"
 },
 {
   "start": 308601,
   "end": 308700,
   "name": "Leica IIIa",
   "date": "1938"
 },
 {
   "start": 308701,
   "end": 308800,
   "name": "Leica III",
   "date": "1938"
 },
 {
   "start": 308801,
   "end": 309000,
   "name": "Leica IIIa",
   "date": "1938"
 },
 {
   "start": 309001,
   "end": 309200,
   "name": "Leica Standard",
   "date": "1938"
 },
 {
   "start": 309201,
   "end": 309300,
   "name": "Leica IIIa",
   "date": "1938"
 },
 {
   "start": 309301,
   "end": 309400,
   "name": "Leica III",
   "date": "1938"
 },
 {
   "start": 309401,
   "end": 309500,
   "name": "Leica IIIa",
   "date": "1938"
 },
 {
   "start": 309501,
   "end": 309700,
   "name": "Leica II",
   "date": "1938"
 },
 {
   "start": 309701,
   "end": 310000,
   "name": "Leica IIIa",
   "date": "1938-39"
 },
 {
   "start": 310001,
   "end": 310200,
   "name": "Leica III",
   "date": "1938-39"
 },
 {
   "start": 310201,
   "end": 310400,
   "name": "Leica IIIa",
   "date": "1938-39"
 },
 {
   "start": 310401,
   "end": 310500,
   "name": "Leica III",
   "date": "1938-39"
 },
 {
   "start": 310501,
   "end": 310600,
   "name": "Leica IIIa",
   "date": "1939"
 },
 {
   "start": 310601,
   "end": 311000,
   "name": "Leica III",
   "date": "1938-39"
 },
 {
   "start": 311001,
   "end": 311200,
   "name": "Leica II",
   "date": "1939"
 },
 {
   "start": 311201,
   "end": 311400,
   "name": "Leica IIIa",
   "date": "1939"
 },
 {
   "start": 311401,
   "end": 311700,
   "name": "Leica III",
   "date": "1939"
 },
 {
   "start": 311701,
   "end": 311800,
   "name": "Leica IIIa",
   "date": "1939"
 },
 {
   "start": 311801,
   "end": 311900,
   "name": "Leica III",
   "date": "1939"
 },
 {
   "start": 311901,
   "end": 312000,
   "name": "Leica IIIa",
   "date": "1939"
 },
 {
   "start": 312001,
   "end": 312200,
   "name": "Leica Standard",
   "date": "1939"
 },
 {
   "start": 312201,
   "end": 312400,
   "name": "Leica IIIa",
   "date": "1939"
 },
 {
   "start": 312401,
   "end": 312500,
   "name": "Leica III",
   "date": "1939"
 },
 {
   "start": 312501,
   "end": 312800,
   "name": "Leica Standard",
   "date": "1939"
 },
 {
   "start": 312801,
   "end": 313000,
   "name": "Leica IIIa",
   "date": "1939"
 },
 {
   "start": 313001,
   "end": 313100,
   "name": "Leica III",
   "date": "1939"
 },
 {
   "start": 313101,
   "end": 313200,
   "name": "Leica IIIa",
   "date": "1939"
 },
 {
   "start": 313201,
   "end": 313300,
   "name": "Leica III",
   "date": "1939"
 },
 {
   "start": 313301,
   "end": 313400,
   "name": "Leica IIIa",
   "date": "1939"
 },
 {
   "start": 313401,
   "end": 313500,
   "name": "Leica Standard",
   "date": "1939"
 },
 {
   "start": 313501,
   "end": 313600,
   "name": "Leica III",
   "date": "1939"
 },
 {
   "start": 313601,
   "end": 314000,
   "name": "Leica III",
   "date": "1939"
 },
 {
   "start": 314001,
   "end": 314100,
   "name": "Leica III",
   "date": "1939"
 },
 {
   "start": 314101,
   "end": 314300,
   "name": "Leica II",
   "date": "1939"
 },
 {
   "start": 314301,
   "end": 314500,
   "name": "Leica Standard",
   "date": "1939"
 },
 {
   "start": 314501,
   "end": 314600,
   "name": "Leica II",
   "date": "1939"
 },
 {
   "start": 314601,
   "end": 314700,
   "name": "Leica III",
   "date": "1939"
 },
 {
   "start": 314701,
   "end": 314800,
   "name": "Leica IIIa",
   "date": "1939"
 },
 {
   "start": 314801,
   "end": 314900,
   "name": "Leica III",
   "date": "1939"
 },
 {
   "start": 314901,
   "end": 315000,
   "name": "Leica IIIa",
   "date": "1939"
 },
 {
   "start": 315001,
   "end": 315100,
   "name": "Leica II",
   "date": "1939"
 },
 {
   "start": 315101,
   "end": 315400,
   "name": "Leica IIIa",
   "date": "1939"
 },
 {
   "start": 315401,
   "end": 315500,
   "name": "Leica II",
   "date": "1939"
 },
 {
   "start": 315501,
   "end": 315700,
   "name": "Leica IIIa",
   "date": "1939"
 },
 {
   "start": 315701,
   "end": 315800,
   "name": "Leica III",
   "date": "1939"
 },
 {
   "start": 315801,
   "end": 316100,
   "name": "Leica IIIa",
   "date": "1939"
 },
 {
   "start": 316101,
   "end": 316400,
   "name": "Leica III",
   "date": "1939"
 },
 {
   "start": 316401,
   "end": 316700,
   "name": "Leica IIIa",
   "date": "1939"
 },
 {
   "start": 316701,
   "end": 316900,
   "name": "Leica Standard",
   "date": "1939"
 },
 {
   "start": 316901,
   "end": 317000,
   "name": "Leica II",
   "date": "1939"
 },
 {
   "start": 317001,
   "end": 318000,
   "name": "Leica IIIb",
   "date": "1939"
 },
 {
   "start": 318001,
   "end": 318200,
   "name": "Leica IIIa",
   "date": "1939"
 },
 {
   "start": 318201,
   "end": 318300,
   "name": "Leica II",
   "date": "1939"
 },
 {
   "start": 318301,
   "end": 318500,
   "name": "Leica Standard",
   "date": "1939"
 },
 {
   "start": 318501,
   "end": 318800,
   "name": "Leica II",
   "date": "1939"
 },
 {
   "start": 318801,
   "end": 318900,
   "name": "Leica IIIa",
   "date": "1939"
 },
 {
   "start": 318901,
   "end": 319000,
   "name": "Leica III",
   "date": "1939"
 },
 {
   "start": 319001,
   "end": 320000,
   "name": "Leica IIIb",
   "date": "1939"
 },
 {
   "start": 320001,
   "end": 320200,
   "name": "Leica II",
   "date": "1939"
 },
 {
   "start": 320201,
   "end": 320400,
   "name": "Leica III",
   "date": "1939"
 },
 {
   "start": 320401,
   "end": 320600,
   "name": "Leica IIIa",
   "date": "1939"
 },
 {
   "start": 320601,
   "end": 320700,
   "name": "Leica II",
   "date": "1939"
 },
 {
   "start": 320701,
   "end": 321000,
   "name": "Leica Standard",
   "date": "1939"
 },
 {
   "start": 321001,
   "end": 322000,
   "name": "Leica IIIb",
   "date": "1939"
 },
 {
   "start": 322001,
   "end": 322200,
   "name": "Leica II",
   "date": "1939"
 },
 {
   "start": 322201,
   "end": 322700,
   "name": "Leica Standard",
   "date": "1939"
 },
 {
   "start": 322701,
   "end": 322800,
   "name": "Leica IIIa",
   "date": "1939"
 },
 {
   "start": 322801,
   "end": 323000,
   "name": "Leica III",
   "date": "1939"
 },
 {
   "start": 323001,
   "end": 324000,
   "name": "Leica IIIb",
   "date": "1939"
 },
 {
   "start": 324001,
   "end": 324100,
   "name": "Leica Reporter",
   "date": "1939"
 },
 {
   "start": 324101,
   "end": 324700,
   "name": "Leica IIIa",
   "date": "1939"
 },
 {
   "start": 324701,
   "end": 324800,
   "name": "Leica III",
   "date": "1939"
 },
 {
   "start": 324801,
   "end": 325000,
   "name": "Leica II",
   "date": "1939"
 },
 {
   "start": 325001,
   "end": 325200,
   "name": "Leica IIIa",
   "date": "1939"
 },
 {
   "start": 325201,
   "end": 325275,
   "name": "Leica III",
   "date": "1939"
 },
 {
   "start": 325276,
   "end": 325300,
   "name": "Leica IIIa",
   "date": "1939"
 },
 {
   "start": 325301,
   "end": 325400,
   "name": "Leica I",
   "date": "1939"
 },
 {
   "start": 325401,
   "end": 325600,
   "name": "Leica IIIa",
   "date": "1939"
 },
 {
   "start": 325601,
   "end": 325800,
   "name": "Leica III",
   "date": "1939"
 },
 {
   "start": 325801,
   "end": 325900,
   "name": "Leica IIIa",
   "date": "1939"
 },
 {
   "start": 325901,
   "end": 326000,
   "name": "Leica II",
   "date": "1939"
 },
 {
   "start": 326001,
   "end": 327000,
   "name": "Leica IIIb",
   "date": "1939"
 },
 {
   "start": 327001,
   "end": 327200,
   "name": "Leica II",
   "date": "1939"
 },
 {
   "start": 327201,
   "end": 327400,
   "name": "Leica III",
   "date": "1939"
 },
 {
   "start": 327401,
   "end": 327500,
   "name": "Leica IIIa",
   "date": "1939"
 },
 {
   "start": 327501,
   "end": 327600,
   "name": "Leica III",
   "date": "1939"
 },
 {
   "start": 327601,
   "end": 327800,
   "name": "Leica IIIa",
   "date": "1939"
 },
 {
   "start": 327801,
   "end": 328000,
   "name": "Leica Standard",
   "date": "1939"
 },
 {
   "start": 328001,
   "end": 329000,
   "name": "Leica IIIb",
   "date": "1939"
 },
 {
   "start": 329001,
   "end": 329400,
   "name": "Leica Standard",
   "date": "1939"
 },
 {
   "start": 329401,
   "end": 329600,
   "name": "Leica II",
   "date": "1939"
 },
 {
   "start": 329601,
   "end": 329800,
   "name": "Leica IIIa",
   "date": "1939"
 },
 {
   "start": 329801,
   "end": 329900,
   "name": "Leica III",
   "date": "1939"
 },
 {
   "start": 329901,
   "end": 330000,
   "name": "Leica IIIa",
   "date": "1939"
 },
 {
   "start": 330001,
   "end": 330200,
   "name": "Leica III",
   "date": "1939"
 },
 {
   "start": 330201,
   "end": 330300,
   "name": "Leica II",
   "date": "1939"
 },
 {
   "start": 330301,
   "end": 330500,
   "name": "Leica Standard",
   "date": "1939"
 },
 {
   "start": 330501,
   "end": 330700,
   "name": "Leica III",
   "date": "1939"
 },
 {
   "start": 330701,
   "end": 330800,
   "name": "Leica IIIa",
   "date": "1939"
 },
 {
   "start": 330801,
   "end": 331000,
   "name": "Leica Standard",
   "date": "1939"
 },
 {
   "start": 331001,
   "end": 332000,
   "name": "Leica IIIb",
   "date": "1939"
 },
 {
   "start": 332001,
   "end": 332500,
   "name": "Leica IIIa",
   "date": "1939"
 },
 {
   "start": 332501,
   "end": 332600,
   "name": "Leica III",
   "date": "1939"
 },
 {
   "start": 332601,
   "end": 333000,
   "name": "Leica IIIa",
   "date": "1939"
 },
 {
   "start": 333001,
   "end": 333100,
   "name": "Leica III",
   "date": "1939"
 },
 {
   "start": 333101,
   "end": 333300,
   "name": "Leica IIIa",
   "date": "1939"
 },
 {
   "start": 333301,
   "end": 333600,
   "name": "Leica Standard",
   "date": "1939"
 },
 {
   "start": 333601,
   "end": 334000,
   "name": "Leica IIIb",
   "date": "1939"
 },
 {
   "start": 334001,
   "end": 334200,
   "name": "Leica III",
   "date": "1939"
 },
 {
   "start": 334201,
   "end": 334400,
   "name": "Leica IIIa",
   "date": "1939"
 },
 {
   "start": 334401,
   "end": 334600,
   "name": "Leica III",
   "date": "1939"
 },
 {
   "start": 334601,
   "end": 335000,
   "name": "Leica IIIa",
   "date": "1939"
 },
 {
   "start": 335001,
   "end": 337000,
   "name": "Leica IIIb",
   "date": "1939-40"
 },
 {
   "start": 337001,
   "end": 337200,
   "name": "Leica II",
   "date": "1939"
 },
 {
   "start": 337201,
   "end": 337400,
   "name": "Leica IIIa",
   "date": "1939"
 },
 {
   "start": 337401,
   "end": 337500,
   "name": "Leica III",
   "date": "1939"
 },
 {
   "start": 337501,
   "end": 337900,
   "name": "Leica IIIa",
   "date": "1939"
 },
 {
   "start": 337901,
   "end": 338100,
   "name": "Leica II",
   "date": "1939"
 },
 {
   "start": 338101,
   "end": 338200,
   "name": "Leica IIIa",
   "date": "1939"
 },
 {
   "start": 338201,
   "end": 338600,
   "name": "Leica III",
   "date": "1939"
 },
 {
   "start": 338601,
   "end": 338900,
   "name": "Leica IIIa",
   "date": "1939"
 },
 {
   "start": 338901,
   "end": 339000,
   "name": "Leica III",
   "date": "1939"
 },
 {
   "start": 339001,
   "end": 340000,
   "name": "Leica IIIb",
   "date": "1939-40"
 },
 {
   "start": 340001,
   "end": 340200,
   "name": "Leica IIIa",
   "date": "1939"
 },
 {
   "start": 340201,
   "end": 340400,
   "name": "Leica III",
   "date": "1939"
 },
 {
   "start": 340401,
   "end": 340600,
   "name": "Leica IIIa",
   "date": "1939"
 },
 {
   "start": 340601,
   "end": 340700,
   "name": "Leica III",
   "date": "1939"
 },
 {
   "start": 340701,
   "end": 341000,
   "name": "Leica IIIa",
   "date": "1939"
 },
 {
   "start": 341001,
   "end": 341300,
   "name": "Leica II",
   "date": "1939-40"
 },
 {
   "start": 341301,
   "end": 341500,
   "name": "Leica Standard",
   "date": "1939"
 },
 {
   "start": 341501,
   "end": 341700,
   "name": "Leica III",
   "date": "1939"
 },
 {
   "start": 341701,
   "end": 341900,
   "name": "Leica IIIa",
   "date": "1939"
 },
 {
   "start": 341901,
   "end": 342000,
   "name": "Leica III",
   "date": "1939"
 },
 {
   "start": 342001,
   "end": 342200,
   "name": "Leica Standard",
   "date": "1939"
 },
 {
   "start": 342201,
   "end": 342300,
   "name": "Leica III",
   "date": "1939"
 },
 {
   "start": 342301,
   "end": 342900,
   "name": "Leica IIIa",
   "date": "1939"
 },
 {
   "start": 342901,
   "end": 343100,
   "name": "Leica III",
   "date": "1939"
 },
 {
   "start": 343101,
   "end": 344000,
   "name": "Leica IIIa",
   "date": "1939"
 },
 {
   "start": 344001,
   "end": 348500,
   "name": "Leica IIIb",
   "date": "1939-40"
 },
 {
   "start": 348501,
   "end": 348600,
   "name": "Leica Standard",
   "date": "1939-40"
 },
 {
   "start": 348601,
   "end": 349000,
   "name": "Leica IIIb",
   "date": "1940"
 },
 {
   "start": 349001,
   "end": 349050,
   "name": "Leica Reporter",
   "date": "1940"
 },
 {
   "start": 349051,
   "end": 349300,
   "name": "Leica Standard",
   "date": "1940"
 },
 {
   "start": 349301,
   "end": 351100,
   "name": "Leica IIIb",
   "date": "1940"
 },
 {
   "start": 351101,
   "end": 351150,
   "name": "Leica II",
   "date": "1940"
 },
 {
   "start": 351151,
   "end": 352000,
   "name": "Leica IIIb",
   "date": "1940"
 },
 {
   "start": 352001,
   "end": 352100,
   "name": "Leica II",
   "date": "1940"
 },
 {
   "start": 352101,
   "end": 352150,
   "name": "Leica Standard",
   "date": "1940"
 },
 {
   "start": 352151,
   "end": 352300,
   "name": "Leica II",
   "date": "1940"
 },
 {
   "start": 352301,
   "end": 352500,
   "name": "Leica Reporter",
   "date": "1940-42"
 },
 {
   "start": 352501,
   "end": 352900,
   "name": "Leica II",
   "date": "1940-42"
 },
 {
   "start": 352901,
   "end": 353600,
   "name": "Leica Standard",
   "date": "1940-42"
 },
 {
   "start": 353601,
   "end": 353800,
   "name": "Leica Reporter",
   "date": "1942-43"
 },
 {
   "start": 353801,
   "end": 354000,
   "name": "Leica Standard",
   "date": "1942-47"
 },
 {
   "start": 354001,
   "end": 354050,
   "name": "Leica IIIa",
   "date": "1941-47"
 },
 {
   "start": 354051,
   "end": 354075,
   "name": "Leica IIIa",
   "date": "1941-46"
 },
 {
   "start": 354076,
   "end": 354100,
   "name": "Leica II",
   "date": "1947"
 },
 {
   "start": 354101,
   "end": 354200,
   "name": "Leica IIIa",
   "date": "1947"
 },
 {
   "start": 354201,
   "end": 354400,
   "name": "Leica II",
   "date": "1942-44"
 },
 {
   "start": 354401,
   "end": 355000,
   "name": "Leica IIIb",
   "date": "1946"
 },
 {
   "start": 355001,
   "end": 355650,
   "name": "Leica Standard",
   "date": "1947-48"
 },
 {
   "start": 356501,
   "end": 356550,
   "name": "Leica IIIa",
   "date": "1947-48"
 },
 {
   "start": 356651,
   "end": 356700,
   "name": "Leica II",
   "date": "1947-48"
 },
 {
   "start": 356701,
   "end": 357200,
   "name": "Leica IIIa",
   "date": "1948-50"
 },
 {
   "start": 358501,
   "end": 358650,
   "name": "Leica II",
   "date": "1948"
 },
 {
   "start": 360001,
   "end": 360100,
   "name": "Leica IIIa",
   "date": "1940-42"
 },
 {
   "start": 360101,
   "end": 367000,
   "name": "Leica IIIc",
   "date": "1940"
 },
 {
   "start": 367001,
   "end": 367325,
   "name": "Leica IIIc",
   "date": "1941-44"
 },
 {
   "start": 367326,
   "end": 367500,
   "name": "Leica IIIc",
   "date": "1945"
 },
 {
   "start": 367501,
   "end": 368800,
   "name": "Leica IIIc",
   "date": "1940-41"
 },
 {
   "start": 368801,
   "end": 368950,
   "name": "Leica IIIc",
   "date": "1941"
 },
 {
   "start": 368951,
   "end": 369000,
   "name": "Leica IIIc",
   "date": "1941"
 },
 {
   "start": 369001,
   "end": 369050,
   "name": "Leica IIIc",
   "date": "1941"
 },
 {
   "start": 369051,
   "end": 369450,
   "name": "Leica IIIc",
   "date": "1941"
 },
 {
   "start": 369451,
   "end": 390000,
   "name": "Leica IIIc",
   "date": "1941-42"
 },
 {
   "start": 390001,
   "end": 397650,
   "name": "Leica IIIc",
   "date": "1943-46"
 },
 {
   "start": 400000,
   "end": 440000,
   "name": "Leica IIIc",
   "date": "1946-47"
 },
 {
   "start": 440001,
   "end": 449999,
   "name": "Leica IIc",
   "date": "1948-51"
 },
 {
   "start": 450000,
   "end": 450000,
   "name": "Leica IIIc",
   "date": "1949"
 },
 {
   "start": 450001,
   "end": 451000,
   "name": "Leica IIc",
   "date": "1951"
 },
 {
   "start": 451001,
   "end": 455000,
   "name": "Leica IIf",
   "date": "1951"
 },
 {
   "start": 455001,
   "end": 460000,
   "name": "Leica Ic",
   "date": "1949-50"
 },
 {
   "start": 460001,
   "end": 465000,
   "name": "Leica IIIc",
   "date": "1948-49"
 },
 {
   "start": 465001,
   "end": 480000,
   "name": "Leica IIIc",
   "date": "1949"
 },
 {
   "start": 480001,
   "end": 495000,
   "name": "Leica IIIc",
   "date": "1949-50"
 },
 {
   "start": 495001,
   "end": 520000,
   "name": "Leica IIIc",
   "date": "1950"
 },
 {
   "start": 520001,
   "end": 524000,
   "name": "Leica Ic",
   "date": "1950-51"
 },
 {
   "start": 524001,
   "end": 525000,
   "name": "Leica IIIc",
   "date": "1950-51"
 },
 {
   "start": 525001,
   "end": 540000,
   "name": "Leica IIIf",
   "date": "1950-51"
 },
 {
   "start": 540001,
   "end": 560000,
   "name": "Leica IIIf",
   "date": "1951"
 },
 {
   "start": 560001,
   "end": 562800,
   "name": "Leica Ic",
   "date": "1951"
 },
 {
   "start": 562801,
   "end": 565000,
   "name": "Leica If",
   "date": "1951"
 },
 {
   "start": 565001,
   "end": 570000,
   "name": "Leica IIIf",
   "date": "1951"
 },
 {
   "start": 570001,
   "end": 575000,
   "name": "Leica IIf",
   "date": "1951-52"
 },
 {
   "start": 575001,
   "end": 580000,
   "name": "Leica If",
   "date": "1952-53"
 },
 {
   "start": 580001,
   "end": 610000,
   "name": "Leica IIIf",
   "date": "1951-52"
 },
 {
   "start": 610001,
   "end": 611000,
   "name": "Leica IIIf",
   "date": "1952"
 },
 {
   "start": 611001,
   "end": 615000,
   "name": "Leica IIf",
   "date": "1952-53"
 },
 {
   "start": 615001,
   "end": 650000,
   "name": "Leica IIIf",
   "date": "1952-53"
 },
 {
   "start": 650001,
   "end": 655000,
   "name": "Leica IIf",
   "date": "1953"
 },
 {
   "start": 655001,
   "end": 673000,
   "name": "Leica IIIf",
   "date": "1953"
 },
 {
   "start": 673001,
   "end": 674999,
   "name": "Leica If",
   "date": "1953-54"
 },
 {
   "start": 675000,
   "end": 675000,
   "name": "Leica IIIf",
   "date": "1953"
 },
 {
   "start": 675001,
   "end": 680000,
   "name": "Leica IIf",
   "date": "1953-54"
 },
 {
   "start": 680001,
   "end": 682000,
   "name": "Leica IIf",
   "date": "1954"
 },
 {
   "start": 682001,
   "end": 684000,
   "name": "Leica If",
   "date": "1955"
 },
 {
   "start": 684001,
   "end": 685000,
   "name": "Leica IIIf",
   "date": "1953"
 },
 {
   "start": 685001,
   "end": 699999,
   "name": "Leica IIIf",
   "date": "1954"
 },
 {
   "start": 700000,
   "end": 700000,
   "name": "Leica M3",
   "date": "1954"
 },
 {
   "start": 700001,
   "end": 710000,
   "name": "Leica M3",
   "date": "1954"
 },
 {
   "start": 710001,
   "end": 711000,
   "name": "Leica IIIf",
   "date": "1954"
 },
 {
   "start": 711001,
   "end": 713000,
   "name": "Leica IIf",
   "date": "1954"
 },
 {
   "start": 713001,
   "end": 729000,
   "name": "Leica IIIf",
   "date": "1954"
 },
 {
   "start": 729001,
   "end": 730000,
   "name": "Leica IIIf",
   "date": "1954"
 },
 {
   "start": 730001,
   "end": 746450,
   "name": "Leica M3",
   "date": "1955"
 },
 {
   "start": 746451,
   "end": 746500,
   "name": "Leica M3 ELC",
   "date": "1955"
 },
 {
   "start": 746501,
   "end": 750000,
   "name": "Leica M3",
   "date": "1955"
 },
 {
   "start": 750001,
   "end": 759700,
   "name": "Leica M3",
   "date": "1955"
 },
 {
   "start": 759701,
   "end": 760000,
   "name": "Leica M3 ELC",
   "date": "1955"
 },
 {
   "start": 760001,
   "end": 762000,
   "name": "Leica If",
   "date": "1955"
 },
 {
   "start": 762001,
   "end": 765000,
   "name": "Leica IIf",
   "date": "1955"
 },
 {
   "start": 765001,
   "end": 773000,
   "name": "Leica IIIf",
   "date": "1955"
 },
 {
   "start": 773001,
   "end": 774000,
   "name": "Leica IIIf",
   "date": "1955"
 },
 {
   "start": 774001,
   "end": 775000,
   "name": "Leica IIIf",
   "date": "1955"
 },
 {
   "start": 775001,
   "end": 780000,
   "name": "Leica M3",
   "date": "1955"
 },
 {
   "start": 780001,
   "end": 780090,
   "name": "Leica M3 ELC",
   "date": "1955"
 },
 {
   "start": 780091,
   "end": 780100,
   "name": "Leica If",
   "date": "1957"
 },
 {
   "start": 780101,
   "end": 787000,
   "name": "Leica M3",
   "date": "1955"
 },
 {
   "start": 787001,
   "end": 789000,
   "name": "Leica IIf",
   "date": "1955"
 },
 {
   "start": 789001,
   "end": 790000,
   "name": "Leica If",
   "date": "1955"
 },
 {
   "start": 790001,
   "end": 799000,
   "name": "Leica IIIf",
   "date": "1955"
 },
 {
   "start": 799001,
   "end": 799999,
   "name": "Leica IIf",
   "date": "1956"
 },
 {
   "start": 800000,
   "end": 805000,
   "name": "Leica M3",
   "date": "1955"
 },
 {
   "start": 805001,
   "end": 805100,
   "name": "Leica M3 ELC",
   "date": "1955"
 },
 {
   "start": 805101,
   "end": 807500,
   "name": "Leica M3",
   "date": "1955"
 },
 {
   "start": 807501,
   "end": 808500,
   "name": "Leica If",
   "date": "1956"
 },
 {
   "start": 808501,
   "end": 810000,
   "name": "Leica IIf",
   "date": "1956"
 },
 {
   "start": 810001,
   "end": 815000,
   "name": "Leica IIIf",
   "date": "1956"
 },
 {
   "start": 815001,
   "end": 816000,
   "name": "Leica If",
   "date": "1956"
 },
 {
   "start": 816001,
   "end": 816900,
   "name": "Leica M3",
   "date": "1956"
 },
 {
   "start": 816901,
   "end": 817000,
   "name": "Leica M3 ELC",
   "date": "1956"
 },
 {
   "start": 817001,
   "end": 820500,
   "name": "Leica M3",
   "date": "1956"
 },
 {
   "start": 820501,
   "end": 821500,
   "name": "Leica IIf",
   "date": "1956"
 },
 {
   "start": 821501,
   "end": 822000,
   "name": "Leica IIf",
   "date": "1956"
 },
 {
   "start": 822001,
   "end": 822900,
   "name": "Leica If",
   "date": "1956"
 },
 {
   "start": 822901,
   "end": 823000,
   "name": "Leica IIIf",
   "date": "1956"
 },
 {
   "start": 823001,
   "end": 823500,
   "name": "Leica IIIf",
   "date": "1956"
 },
 {
   "start": 823501,
   "end": 823867,
   "name": "Leica IIIf",
   "date": "1956"
 },
 {
   "start": 823868,
   "end": 825000,
   "name": "Leica IIIf",
   "date": "1956"
 },
 {
   "start": 825001,
   "end": 826000,
   "name": "Leica IIIg",
   "date": "1956"
 },
 {
   "start": 826001,
   "end": 829750,
   "name": "Leica IIIg",
   "date": "1956"
 },
 {
   "start": 829751,
   "end": 829850,
   "name": "Leica IIIf",
   "date": "1956"
 },
 {
   "start": 829851,
   "end": 830000,
   "name": "Leica M3 ELC",
   "date": "1956"
 },
 {
   "start": 830001,
   "end": 837500,
   "name": "Leica M3",
   "date": "1956"
 },
 {
   "start": 837501,
   "end": 837620,
   "name": "Leica M3 ELC",
   "date": "1956"
 },
 {
   "start": 837621,
   "end": 837720,
   "name": "Leica IIIf",
   "date": "1956"
 },
 {
   "start": 837721,
   "end": 839620,
   "name": "Leica M3",
   "date": "1956"
 },
 {
   "start": 839621,
   "end": 839700,
   "name": "Leica M3 ELC",
   "date": "1956"
 },
 {
   "start": 839701,
   "end": 840500,
   "name": "Leica M3",
   "date": "1956"
 },
 {
   "start": 840501,
   "end": 840820,
   "name": "Leica M3 ELC",
   "date": "1956"
 },
 {
   "start": 840821,
   "end": 844780,
   "name": "Leica M3",
   "date": "1956"
 },
 {
   "start": 844781,
   "end": 845000,
   "name": "Leica M3 ELC",
   "date": "1956"
 },
 {
   "start": 845001,
   "end": 845380,
   "name": "Leica IIIg ELC",
   "date": "1956"
 },
 {
   "start": 845381,
   "end": 850900,
   "name": "Leica IIIg",
   "date": "1956"
 },
 {
   "start": 850901,
   "end": 851000,
   "name": "Leica If",
   "date": "1956"
 },
 {
   "start": 851001,
   "end": 854000,
   "name": "Leica M3",
   "date": "1956"
 },
 {
   "start": 854001,
   "end": 858000,
   "name": "Leica M3",
   "date": "1957"
 },
 {
   "start": 858001,
   "end": 861600,
   "name": "Leica IIIg",
   "date": "1957"
 },
 {
   "start": 861601,
   "end": 862000,
   "name": "Leica IIIg ELC",
   "date": "1957"
 },
 {
   "start": 862001,
   "end": 866620,
   "name": "Leica M3",
   "date": "1957"
 },
 {
   "start": 866621,
   "end": 867000,
   "name": "Leica M3 ELC",
   "date": "1957"
 },
 {
   "start": 867001,
   "end": 871200,
   "name": "Leica IIIg",
   "date": "1957"
 },
 {
   "start": 871201,
   "end": 872000,
   "name": "Leica IIIg ELC",
   "date": "1957"
 },
 {
   "start": 872001,
   "end": 877000,
   "name": "Leica M3",
   "date": "1957"
 },
 {
   "start": 877001,
   "end": 882000,
   "name": "Leica IIIg",
   "date": "1957"
 },
 {
   "start": 882001,
   "end": 886700,
   "name": "Leica M3",
   "date": "1957"
 },
 {
   "start": 886701,
   "end": 887000,
   "name": "Leica M3 ELC",
   "date": "1957"
 },
 {
   "start": 887001,
   "end": 888000,
   "name": "Leica Ig",
   "date": "1957"
 },
 {
   "start": 888001,
   "end": 893000,
   "name": "Leica IIIg",
   "date": "1957"
 },
 {
   "start": 893001,
   "end": 894000,
   "name": "Leica M3",
   "date": "1957"
 },
 {
   "start": 894001,
   "end": 894570,
   "name": "Leica M3 ELC",
   "date": "1957"
 },
 {
   "start": 894571,
   "end": 898000,
   "name": "Leica M3",
   "date": "1957"
 },
 {
   "start": 898001,
   "end": 903000,
   "name": "Leica M3",
   "date": "1957"
 },
 {
   "start": 903001,
   "end": 903300,
   "name": "Leica M3 ELC",
   "date": "1957"
 },
 {
   "start": 903301,
   "end": 907000,
   "name": "Leica IIIg",
   "date": "1957"
 },
 {
   "start": 907001,
   "end": 910000,
   "name": "Leica Ig",
   "date": "1957"
 },
 {
   "start": 910001,
   "end": 910500,
   "name": "Leica M3",
   "date": "1957"
 },
 {
   "start": 910501,
   "end": 910600,
   "name": "Leica M3 Olive Lackiert",
   "date": "1957"
 },
 {
   "start": 910601,
   "end": 915000,
   "name": "Leica M3",
   "date": "1957"
 },
 {
   "start": 915001,
   "end": 915200,
   "name": "Leica M3",
   "date": "1957"
 },
 {
   "start": 915201,
   "end": 916000,
   "name": "Leica M3",
   "date": "1957"
 },
 {
   "start": 916001,
   "end": 919250,
   "name": "Leica M3",
   "date": "1958"
 },
 {
   "start": 919251,
   "end": 920500,
   "name": "Leica M3",
   "date": "1958"
 },
 {
   "start": 920501,
   "end": 920520,
   "name": "Leica M3",
   "date": "1958"
 },
 {
   "start": 920521,
   "end": 924400,
   "name": "Leica M3",
   "date": "1958"
 },
 {
   "start": 924401,
   "end": 924500,
   "name": "Leica M3 ELC",
   "date": "1958"
 },
 {
   "start": 924501,
   "end": 924568,
   "name": "Leica Ig",
   "date": "1958"
 },
 {
   "start": 924569,
   "end": 924588,
   "name": "Leica Ig",
   "date": "1958"
 },
 {
   "start": 924589,
   "end": 926000,
   "name": "Leica Ig",
   "date": "1958"
 },
 {
   "start": 926001,
   "end": 926200,
   "name": "Leica M2",
   "date": "1957"
 },
 {
   "start": 926201,
   "end": 926700,
   "name": "Leica Ig",
   "date": "1958"
 },
 {
   "start": 926701,
   "end": 928922,
   "name": "Leica M3",
   "date": "1959"
 },
 {
   "start": 928923,
   "end": 929000,
   "name": "Leica Postkamera",
   "date": "1958"
 },
 {
   "start": 929001,
   "end": 931000,
   "name": "Leica M2",
   "date": "1958"
 },
 {
   "start": 931001,
   "end": 933000,
   "name": "Leica M2",
   "date": "1958"
 },
 {
   "start": 933001,
   "end": 934000,
   "name": "Leica IIIg",
   "date": "1958"
 },
 {
   "start": 934001,
   "end": 934200,
   "name": "Leica IIIg ELC",
   "date": "1958"
 },
 {
   "start": 934201,
   "end": 935000,
   "name": "Leica IIIg",
   "date": "1958"
 },
 {
   "start": 935001,
   "end": 935512,
   "name": "Leica MP2",
   "date": "1958"
 },
 {
   "start": 935513,
   "end": 937500,
   "name": "Leica M2",
   "date": "1958"
 },
 {
   "start": 937501,
   "end": 937620,
   "name": "Leica M2",
   "date": "1958"
 },
 {
   "start": 937621,
   "end": 937650,
   "name": "Leica M2 ELC",
   "date": "1958"
 },
 {
   "start": 937651,
   "end": 940000,
   "name": "Leica M2",
   "date": "1958"
 },
 {
   "start": 940001,
   "end": 942900,
   "name": "Leica M2",
   "date": "1958"
 },
 {
   "start": 942901,
   "end": 943000,
   "name": "Leica M2 ELC",
   "date": "1958"
 },
 {
   "start": 943001,
   "end": 944000,
   "name": "Leica IIIg",
   "date": "1958"
 },
 {
   "start": 944001,
   "end": 946000,
   "name": "Leica M2",
   "date": "1958"
 },
 {
   "start": 946001,
   "end": 946300,
   "name": "Leica M2",
   "date": "1958"
 },
 {
   "start": 946301,
   "end": 946400,
   "name": "Leica M2 ELC",
   "date": "1958"
 },
 {
   "start": 946401,
   "end": 946900,
   "name": "Leica M2",
   "date": "1958"
 },
 {
   "start": 946901,
   "end": 947000,
   "name": "Leica M2 ELC",
   "date": "1958"
 },
 {
   "start": 947001,
   "end": 948000,
   "name": "Leica M2",
   "date": "1958"
 },
 {
   "start": 948001,
   "end": 948500,
   "name": "Leica IIIg",
   "date": "1958"
 },
 {
   "start": 948501,
   "end": 948600,
   "name": "Leica M2 ELC",
   "date": "1958"
 },
 {
   "start": 948601,
   "end": 949100,
   "name": "Leica M2 Schwz Lackiert",
   "date": "1958"
 },
 {
   "start": 949101,
   "end": 949400,
   "name": "Leica M2 Vorlaufwerk",
   "date": "1958"
 },
 {
   "start": 949401,
   "end": 950000,
   "name": "Leica M2",
   "date": "1959"
 },
 {
   "start": 950001,
   "end": 950300,
   "name": "Leica M1",
   "date": "1959"
 },
 {
   "start": 950301,
   "end": 951900,
   "name": "Leica M3",
   "date": "1959"
 },
 {
   "start": 951901,
   "end": 952000,
   "name": "Leica M3 ELC",
   "date": "1959"
 },
 {
   "start": 952001,
   "end": 952015,
   "name": "Leica MP2",
   "date": "1959"
 },
 {
   "start": 952016,
   "end": 952500,
   "name": "Leica M1",
   "date": "1959"
 },
 {
   "start": 952501,
   "end": 954800,
   "name": "Leica M3",
   "date": "1959"
 },
 {
   "start": 954801,
   "end": 954900,
   "name": "Leica M3 ELC",
   "date": "1959"
 },
 {
   "start": 954901,
   "end": 955000,
   "name": "Leica M3 ELC",
   "date": "1959"
 },
 {
   "start": 955001,
   "end": 956500,
   "name": "Leica IIIg",
   "date": "1959"
 },
 {
   "start": 956501,
   "end": 957000,
   "name": "Leica M1",
   "date": "1959"
 },
 {
   "start": 957001,
   "end": 959400,
   "name": "Leica M3",
   "date": "1959"
 },
 {
   "start": 959401,
   "end": 959500,
   "name": "Leica M3 Schwz Lackiert",
   "date": "1959"
 },
 {
   "start": 959501,
   "end": 960200,
   "name": "Leica M2 Vorlaufwerk",
   "date": "1959"
 },
 {
   "start": 960201,
   "end": 960500,
   "name": "Leica M2",
   "date": "1960"
 },
 {
   "start": 960501,
   "end": 961500,
   "name": "Leica M2",
   "date": "1959"
 },
 {
   "start": 961501,
   "end": 961700,
   "name": "Leica M3 ELC",
   "date": "1959"
 },
 {
   "start": 961701,
   "end": 966500,
   "name": "Leica M3",
   "date": "1959"
 },
 {
   "start": 966501,
   "end": 967500,
   "name": "Leica M1",
   "date": "1959"
 },
 {
   "start": 967501,
   "end": 968350,
   "name": "Leica M2",
   "date": "1959"
 },
 {
   "start": 968351,
   "end": 968500,
   "name": "Leica M3 ELC",
   "date": "1959"
 },
 {
   "start": 968501,
   "end": 970000,
   "name": "Leica IIIg",
   "date": "1959"
 },
 {
   "start": 970001,
   "end": 971500,
   "name": "Leica M2",
   "date": "1959"
 },
 {
   "start": 971501,
   "end": 972000,
   "name": "Leica IIIg",
   "date": "1959"
 },
 {
   "start": 972001,
   "end": 974700,
   "name": "Leica M3",
   "date": "1959"
 },
 {
   "start": 974701,
   "end": 975000,
   "name": "Leica M3 ELC",
   "date": "1959"
 },
 {
   "start": 975001,
   "end": 975800,
   "name": "Leica M2",
   "date": "1959"
 },
 {
   "start": 975801,
   "end": 976100,
   "name": "Leica M2 Vorlaufwerk",
   "date": "1960"
 },
 {
   "start": 976101,
   "end": 976500,
   "name": "Leica M2",
   "date": "1959"
 },
 {
   "start": 976501,
   "end": 979500,
   "name": "Leica M3",
   "date": "1959"
 },
 {
   "start": 979501,
   "end": 980450,
   "name": "Leica M1",
   "date": "1959"
 },
 {
   "start": 980451,
   "end": 980500,
   "name": "Leica M1 Olive Lackiert",
   "date": "1960"
 },
 {
   "start": 980501,
   "end": 982000,
   "name": "Leica IIIg",
   "date": "1959"
 },
 {
   "start": 982001,
   "end": 982150,
   "name": "Leica M2 Vorlaufwerk",
   "date": "1960"
 },
 {
   "start": 982151,
   "end": 982900,
   "name": "Leica M2",
   "date": "1959"
 },
 {
   "start": 982901,
   "end": 983500,
   "name": "Leica M2 Vorlaufwerk",
   "date": "1959"
 },
 {
   "start": 983501,
   "end": 984000,
   "name": "Leica M2",
   "date": "1959"
 },
 {
   "start": 984001,
   "end": 984200,
   "name": "Leica M3 ELC",
   "date": "1959"
 },
 {
   "start": 984201,
   "end": 987000,
   "name": "Leica M3",
   "date": "1959"
 },
 {
   "start": 987001,
   "end": 987200,
   "name": "Leica M3 ELC",
   "date": "1960"
 },
 {
   "start": 987201,
   "end": 987300,
   "name": "Leica M2 ELC",
   "date": "1960"
 },
 {
   "start": 987301,
   "end": 987600,
   "name": "Leica Ig",
   "date": "1960"
 },
 {
   "start": 987601,
   "end": 987900,
   "name": "Leica IIIg",
   "date": "1960"
 },
 {
   "start": 987901,
   "end": 988025,
   "name": "Leica IIIg Schwz Lackiert",
   "date": "1960"
 },
 {
   "start": 988026,
   "end": 988350,
   "name": "Leica IIIg",
   "date": "1960"
 },
 {
   "start": 988351,
   "end": 988650,
   "name": "Leica M2",
   "date": "1960"
 },
 {
   "start": 988651,
   "end": 989250,
   "name": "Leica M2 Vorlaufwerk",
   "date": "1960"
 },
 {
   "start": 989251,
   "end": 989650,
   "name": "Leica M2 Vorlaufwerk",
   "date": "1960"
 },
 {
   "start": 989651,
   "end": 989800,
   "name": "Leica M2",
   "date": "1960"
 },
 {
   "start": 989801,
   "end": 990500,
   "name": "Leica M2 Vorlaufwerk",
   "date": "1960"
 },
 {
   "start": 990501,
   "end": 990750,
   "name": "Leica M2 Schwz Lackiert",
   "date": "1960"
 },
 {
   "start": 990751,
   "end": 993500,
   "name": "Leica M3",
   "date": "1960"
 },
 {
   "start": 993501,
   "end": 993750,
   "name": "Leica M3 Schwz Lackiert",
   "date": "1960"
 },
 {
   "start": 993751,
   "end": 995000,
   "name": "Leica M2",
   "date": "1960"
 },
 {
   "start": 995001,
   "end": 995100,
   "name": "Leica M2 ELC",
   "date": "1960"
 },
 {
   "start": 995101,
   "end": 995400,
   "name": "Leica M2 Vorlaufwerk",
   "date": "1960"
 },
 {
   "start": 995401,
   "end": 996000,
   "name": "Leica M2",
   "date": "1960"
 },
 {
   "start": 996001,
   "end": 998000,
   "name": "Leica M3",
   "date": "1960"
 },
 {
   "start": 998001,
   "end": 998300,
   "name": "Leica M3 ELC",
   "date": "1960"
 },
 {
   "start": 998301,
   "end": 1000000,
   "name": "Leica M3",
   "date": "1960"
 },
 {
   "start": 1000001,
   "end": 1003700,
   "name": "Leica M3",
   "date": "1960"
 },
 {
   "start": 1003701,
   "end": 1004000,
   "name": "Leica M3 ELC",
   "date": "1960"
 },
 {
   "start": 1004001,
   "end": 1005100,
   "name": "Leica M2 Vorlaufwerk",
   "date": "1960"
 },
 {
   "start": 1005101,
   "end": 1005350,
   "name": "Leica M2 Vorlaufwerk",
   "date": "1960"
 },
 {
   "start": 1005351,
   "end": 1005450,
   "name": "Leica M2 ELC",
   "date": "1960"
 },
 {
   "start": 1005451,
   "end": 1005750,
   "name": "Leica M2",
   "date": "1960"
 },
 {
   "start": 1005771,
   "end": 1007000,
   "name": "Leica M2",
   "date": "1960"
 },
 {
   "start": 1007001,
   "end": 1011000,
   "name": "Leica M3",
   "date": "1960"
 },
 {
   "start": 1011001,
   "end": 1014000,
   "name": "Leica M2",
   "date": "1960"
 },
 {
   "start": 1014001,
   "end": 1014300,
   "name": "Leica M3 ELC",
   "date": "1960"
 },
 {
   "start": 1014301,
   "end": 1017000,
   "name": "Leica M3",
   "date": "1960"
 },
 {
   "start": 1017001,
   "end": 1017500,
   "name": "Leica M1",
   "date": "1961"
 },
 {
   "start": 1017501,
   "end": 1017900,
   "name": "Leica M2",
   "date": "1961"
 },
 {
   "start": 1017901,
   "end": 1018000,
   "name": "Leica M2 ELC",
   "date": "1961"
 },
 {
   "start": 1018001,
   "end": 1020100,
   "name": "Leica M2",
   "date": "1961"
 },
 {
   "start": 1020101,
   "end": 1020200,
   "name": "Leica M2 ELC",
   "date": "1961"
 },
 {
   "start": 1020201,
   "end": 1022000,
   "name": "Leica M2",
   "date": "1961"
 },
 {
   "start": 1022001,
   "end": 1022700,
   "name": "Leica M3",
   "date": "1961"
 },
 {
   "start": 1022701,
   "end": 1023000,
   "name": "Leica M3 ELC",
   "date": "1961"
 },
 {
   "start": 1023001,
   "end": 1027800,
   "name": "Leica M3",
   "date": "1961"
 },
 {
   "start": 1027801,
   "end": 1028000,
   "name": "Leica M3 ELC",
   "date": "1961"
 },
 {
   "start": 1028001,
   "end": 1028600,
   "name": "Leica M1",
   "date": "1961"
 },
 {
   "start": 1028601,
   "end": 1031800,
   "name": "Leica M2",
   "date": "1961"
 },
 {
   "start": 1031801,
   "end": 1032000,
   "name": "Leica M2 Schwz Lackiert",
   "date": "1961"
 },
 {
   "start": 1032001,
   "end": 1035400,
   "name": "Leica M3",
   "date": "1961"
 },
 {
   "start": 1035401,
   "end": 1035925,
   "name": "Leica M1",
   "date": "1961"
 },
 {
   "start": 1036001,
   "end": 1036050,
   "name": "Leica M2 ELC",
   "date": "1961"
 },
 {
   "start": 1036051,
   "end": 1036350,
   "name": "Leica M3 ELC",
   "date": "1961"
 },
 {
   "start": 1036351,
   "end": 1037950,
   "name": "Leica M2",
   "date": "1961"
 },
 {
   "start": 1037951,
   "end": 1038000,
   "name": "Leica M2 ELC",
   "date": "1962"
 },
 {
   "start": 1038001,
   "end": 1038800,
   "name": "Leica M3",
   "date": "1961"
 },
 {
   "start": 1038801,
   "end": 1039000,
   "name": "Leica M3 Schwz Lackiert",
   "date": "1961"
 },
 {
   "start": 1039001,
   "end": 1040000,
   "name": "Leica M3",
   "date": "1961"
 },
 {
   "start": 1040001,
   "end": 1040066,
   "name": "Leica M1",
   "date": "1962"
 },
 {
   "start": 1040067,
   "end": 1040068,
   "name": "Leica M3",
   "date": "1962"
 },
 {
   "start": 1040069,
   "end": 1040070,
   "name": "Leica M1",
   "date": "1961"
 },
 {
   "start": 1040071,
   "end": 1040071,
   "name": "Leica M3",
   "date": "1961"
 },
 {
   "start": 1040072,
   "end": 1040094,
   "name": "Leica M1",
   "date": "1961"
 },
 {
   "start": 1040095,
   "end": 1040096,
   "name": "Leica M3",
   "date": "1962"
 },
 {
   "start": 1040097,
   "end": 1040600,
   "name": "Leica M1",
   "date": "1961"
 },
 {
   "start": 1040601,
   "end": 1043000,
   "name": "Leica M3",
   "date": "1961"
 },
 {
   "start": 1043001,
   "end": 1043800,
   "name": "Leica M2",
   "date": "1962"
 },
 {
   "start": 1043801,
   "end": 1044000,
   "name": "Leica M2 Schwz Lackiert",
   "date": "1962"
 },
 {
   "start": 1044001,
   "end": 1046000,
   "name": "Leica M3 Schwz Lackiert",
   "date": "1962"
 },
 {
   "start": 1046001,
   "end": 1046500,
   "name": "Leica M1",
   "date": "1962"
 },
 {
   "start": 1046501,
   "end": 1047800,
   "name": "Leica M3",
   "date": "1962"
 },
 {
   "start": 1047801,
   "end": 1048000,
   "name": "Leica M3 ELC",
   "date": "1962"
 },
 {
   "start": 1048001,
   "end": 1050000,
   "name": "Leica M2",
   "date": "1962"
 },
 {
   "start": 1050001,
   "end": 1050500,
   "name": "Leica M1",
   "date": "1962"
 },
 {
   "start": 1050501,
   "end": 1053100,
   "name": "Leica M2",
   "date": "1962"
 },
 {
   "start": 1053101,
   "end": 1053250,
   "name": "Leica M2 Schwz Lackiert",
   "date": "1962"
 },
 {
   "start": 1053251,
   "end": 1054900,
   "name": "Leica M2",
   "date": "1962"
 },
 {
   "start": 1054901,
   "end": 1055000,
   "name": "Leica M2 ELC",
   "date": "1962"
 },
 {
   "start": 1055001,
   "end": 1059849,
   "name": "Leica M3",
   "date": "1962"
 },
 {
   "start": 1059850,
   "end": 1059999,
   "name": "Leica M3 Schwz Lackiert",
   "date": "1962"
 },
 {
   "start": 1060000,
   "end": 1060000,
   "name": "Leica M3",
   "date": "1962"
 },
 {
   "start": 1060001,
   "end": 1060500,
   "name": "Leica M1",
   "date": "1962"
 },
 {
   "start": 1060501,
   "end": 1061700,
   "name": "Leica M2",
   "date": "1962"
 },
 {
   "start": 1061701,
   "end": 1061800,
   "name": "Leica M2 ELC",
   "date": "1962"
 },
 {
   "start": 1061801,
   "end": 1063000,
   "name": "Leica M2",
   "date": "1962"
 },
 {
   "start": 1063001,
   "end": 1065000,
   "name": "Leica M3",
   "date": "1962"
 },
 {
   "start": 1065001,
   "end": 1065200,
   "name": "Leica M3 ELC",
   "date": "1962"
 },
 {
   "start": 1065201,
   "end": 1067500,
   "name": "Leica M3",
   "date": "1962"
 },
 {
   "start": 1067501,
   "end": 1067870,
   "name": "Leica M1",
   "date": "1963"
 },
 {
   "start": 1067871,
   "end": 1068000,
   "name": "Leica Postkamera",
   "date": "1963"
 },
 {
   "start": 1068001,
   "end": 1070000,
   "name": "Leica M2",
   "date": "1963"
 },
 {
   "start": 1070001,
   "end": 1074000,
   "name": "Leica M3",
   "date": "1963"
 },
 {
   "start": 1074001,
   "end": 1074500,
   "name": "Leica M1",
   "date": "1963"
 },
 {
   "start": 1074501,
   "end": 1077000,
   "name": "Leica M2",
   "date": "1963"
 },
 {
   "start": 1077001,
   "end": 1080000,
   "name": "Leica M3",
   "date": "1963"
 },
 {
   "start": 1080001,
   "end": 1085000,
   "name": "Leica Leicaflex",
   "date": "1964-5"
 },
 {
   "start": 1085001,
   "end": 1085450,
   "name": "Leica M1",
   "date": "1963"
 },
 {
   "start": 1085451,
   "end": 1085500,
   "name": "Leica M1",
   "date": "1963"
 },
 {
   "start": 1085501,
   "end": 1088000,
   "name": "Leica M2",
   "date": "1963"
 },
 {
   "start": 1088001,
   "end": 1091000,
   "name": "Leica M3",
   "date": "1963"
 },
 {
   "start": 1091001,
   "end": 1091300,
   "name": "Leica M1",
   "date": "1964"
 },
 {
   "start": 1093501,
   "end": 1093750,
   "name": "Leica M2 Schwz Lackiert",
   "date": "1964"
 },
 {
   "start": 1093751,
   "end": 1093800,
   "name": "Leica M2 ELC",
   "date": "1964"
 },
 {
   "start": 1093801,
   "end": 1097700,
   "name": "Leica M3",
   "date": "1964"
 },
 {
   "start": 1097701,
   "end": 1097850,
   "name": "Leica M3 Schwz Lackiert",
   "date": "1964"
 },
 {
   "start": 1097851,
   "end": 1098000,
   "name": "Leica M3 ELC",
   "date": "1964"
 },
 {
   "start": 1098001,
   "end": 1098100,
   "name": "Leica M1",
   "date": "1964"
 },
 {
   "start": 1098184,
   "end": 1098300,
   "name": "Leica M1",
   "date": "1964"
 },
 {
   "start": 1098301,
   "end": 1099800,
   "name": "Leica M2",
   "date": "1964"
 },
 {
   "start": 1099801,
   "end": 1099900,
   "name": "Leica M2 ELC",
   "date": "1964"
 },
 {
   "start": 1099901,
   "end": 1100000,
   "name": "Leica M2",
   "date": "1964"
 },
 {
   "start": 1100001,
   "end": 1102000,
   "name": "Leica M3",
   "date": "1964"
 },
 {
   "start": 1102001,
   "end": 1102500,
   "name": "Leica M1",
   "date": "1964"
 },
 {
   "start": 1102501,
   "end": 1102800,
   "name": "Leica MD",
   "date": "1964"
 },
 {
   "start": 1102801,
   "end": 1102900,
   "name": "Leica M1",
   "date": "1964"
 },
 {
   "start": 1102901,
   "end": 1103000,
   "name": "Leica M3",
   "date": "1965"
 },
 {
   "start": 1103001,
   "end": 1104900,
   "name": "Leica M2",
   "date": "1965"
 },
 {
   "start": 1104901,
   "end": 1105000,
   "name": "Leica M2 ELC",
   "date": "1965"
 },
 {
   "start": 1105001,
   "end": 1106900,
   "name": "Leica M3",
   "date": "1965"
 },
 {
   "start": 1106901,
   "end": 1107000,
   "name": "Leica M3 ELC",
   "date": "1965"
 },
 {
   "start": 1107001,
   "end": 1109000,
   "name": "Leica M2",
   "date": "1965"
 },
 {
   "start": 1109001,
   "end": 1110500,
   "name": "Leica M3",
   "date": "1965"
 },
 {
   "start": 1110501,
   "end": 1112000,
   "name": "Leica M3",
   "date": "1965"
 },
 {
   "start": 1112001,
   "end": 1114975,
   "name": "Leica M2",
   "date": "1965"
 },
 {
   "start": 1114976,
   "end": 1115000,
   "name": "Leica Postkamera",
   "date": "1965"
 },
 {
   "start": 1115001,
   "end": 1128000,
   "name": "Leica Leicaflex",
   "date": "1965"
 },
 {
   "start": 1128001,
   "end": 1128400,
   "name": "Leica MD",
   "date": "1965"
 },
 {
   "start": 1128401,
   "end": 1130000,
   "name": "Leica M3",
   "date": "1965"
 },
 {
   "start": 1130001,
   "end": 1130300,
   "name": "Leica M2 Schwz Lackiert",
   "date": "1965"
 },
 {
   "start": 1130301,
   "end": 1132900,
   "name": "Leica M2",
   "date": "1965"
 },
 {
   "start": 1132901,
   "end": 1133000,
   "name": "Leica M2 ELC",
   "date": "1965"
 },
 {
   "start": 1133001,
   "end": 1134000,
   "name": "Leica M3",
   "date": "1965"
 },
 {
   "start": 1134001,
   "end": 1134150,
   "name": "Leica M3 Schwz Lackiert",
   "date": "1965"
 },
 {
   "start": 1134151,
   "end": 1135000,
   "name": "Leica M3",
   "date": "1965"
 },
 {
   "start": 1135001,
   "end": 1135100,
   "name": "Leica M3 ELC",
   "date": "1965"
 },
 {
   "start": 1135101,
   "end": 1136000,
   "name": "Leica M3",
   "date": "1965"
 },
 {
   "start": 1136001,
   "end": 1136500,
   "name": "Leica MD",
   "date": "1965"
 },
 {
   "start": 1136501,
   "end": 1137000,
   "name": "Leica MD",
   "date": "1966"
 },
 {
   "start": 1138901,
   "end": 1139000,
   "name": "Leica M2 ELC",
   "date": "1966"
 },
 {
   "start": 1139001,
   "end": 1140900,
   "name": "Leica M3",
   "date": "1966"
 },
 {
   "start": 1140901,
   "end": 1141000,
   "name": "Leica M3 ELC",
   "date": "1966"
 },
 {
   "start": 1141001,
   "end": 1141896,
   "name": "Leica MD",
   "date": "1966"
 },
 {
   "start": 1141897,
   "end": 1141968,
   "name": "Leica Postkamera",
   "date": "1966"
 },
 {
   "start": 1141969,
   "end": 1142000,
   "name": "Leica Postkamera 24x27",
   "date": "1966"
 },
 {
   "start": 1142001,
   "end": 1145000,
   "name": "Leica M2",
   "date": "1966"
 },
 {
   "start": 1145001,
   "end": 1155000,
   "name": "Leica Leicaflex",
   "date": "1966"
 },
 {
   "start": 1155001,
   "end": 1157590,
   "name": "Leica M3",
   "date": "1966"
 },
 {
   "start": 1157591,
   "end": 1157600,
   "name": "Leica M3 Schwz Lackiert",
   "date": "1966"
 },
 {
   "start": 1157601,
   "end": 1158995,
   "name": "Leica M3",
   "date": "1966"
 },
 {
   "start": 1159001,
   "end": 1160200,
   "name": "Leica MDa",
   "date": "1966"
 },
 {
   "start": 1160201,
   "end": 1160820,
   "name": "Leica MD",
   "date": "1966"
 },
 {
   "start": 1160821,
   "end": 1161420,
   "name": "Leica MDa",
   "date": "1966"
 },
 {
   "start": 1161421,
   "end": 1163770,
   "name": "Leica M2",
   "date": "1966"
 },
 {
   "start": 1163771,
   "end": 1164046,
   "name": "Leica M2 mot",
   "date": "1966"
 },
 {
   "start": 1164047,
   "end": 1164845,
   "name": "Leica M2",
   "date": "1966"
 },
 {
   "start": 1164846,
   "end": 1164865,
   "name": "Leica M3",
   "date": "1966"
 },
 {
   "start": 1164866,
   "end": 1164940,
   "name": "Leica Postkamera 24x36",
   "date": "1967"
 },
 {
   "start": 1164941,
   "end": 1165000,
   "name": "Leica M2",
   "date": "1967"
 },
 {
   "start": 1165001,
   "end": 1173000,
   "name": "Leica Leicaflex",
   "date": "1967"
 },
 {
   "start": 1173001,
   "end": 1173250,
   "name": "Leica Leicaflex SL",
   "date": "1968"
 },
 {
   "start": 1173251,
   "end": 1174700,
   "name": "Leica Leicaflex",
   "date": "1968"
 },
 {
   "start": 1174701,
   "end": 1175000,
   "name": "Leica Leicaflex SL",
   "date": "1968"
 },
 {
   "start": 1175001,
   "end": 1178000,
   "name": "Leica M4",
   "date": "1967"
 },
 {
   "start": 1178001,
   "end": 1178100,
   "name": "Leica M4 ELC",
   "date": "1967"
 },
 {
   "start": 1178101,
   "end": 1185000,
   "name": "Leica M4",
   "date": "1967"
 },
 {
   "start": 1185001,
   "end": 1185150,
   "name": "Leica M4 mot",
   "date": "1968"
 },
 {
   "start": 1185151,
   "end": 1185290,
   "name": "Leica M4 Schwz Lackiert",
   "date": "1968"
 },
 {
   "start": 1185291,
   "end": 1185300,
   "name": "Leica Postkamera 24x27",
   "date": "1968"
 },
 {
   "start": 1185301,
   "end": 1195000,
   "name": "Leica M4",
   "date": "1968-69"
 },
 {
   "start": 1195001,
   "end": 1205000,
   "name": "Leica Leicaflex SL",
   "date": "1968"
 },
 {
   "start": 1205001,
   "end": 1206736,
   "name": "Leica MDa",
   "date": "1968-69"
 },
 {
   "start": 1206737,
   "end": 1206891,
   "name": "Leica M4 mot",
   "date": "1969"
 },
 {
   "start": 1206892,
   "end": 1206941,
   "name": "Leica Postkamera 24x36",
   "date": "1969"
 },
 {
   "start": 1206942,
   "end": 1206961,
   "name": "Leica Postkamera 24x27",
   "date": "1969"
 },
 {
   "start": 1207000,
   "end": 1207000,
   "name": "Leica M2 Schwz Lackiert",
   "date": "1968"
 },
 {
   "start": 1207001,
   "end": 1207480,
   "name": "Leica M4 Schwz Lackiert",
   "date": "1968-69"
 },
 {
   "start": 1207481,
   "end": 1215000,
   "name": "Leica M4",
   "date": "1968-69"
 },
 {
   "start": 1215001,
   "end": 1225000,
   "name": "Leica Leicaflex SL",
   "date": "1969"
 },
 {
   "start": 1225001,
   "end": 1225800,
   "name": "Leica M4 Schwz Lackiert",
   "date": "1969"
 },
 {
   "start": 1225801,
   "end": 1235000,
   "name": "Leica M4",
   "date": "1969"
 },
 {
   "start": 1235001,
   "end": 1245000,
   "name": "Leica Leicaflex SL",
   "date": "1969-70"
 },
 {
   "start": 1245001,
   "end": 1246200,
   "name": "Leica MDa",
   "date": "1969"
 },
 {
   "start": 1246201,
   "end": 1248100,
   "name": "Leica M4 Schwz Lackiert",
   "date": "1969-70"
 },
 {
   "start": 1248101,
   "end": 1248200,
   "name": "Leica M4 mot",
   "date": "1969"
 },
 {
   "start": 1248201,
   "end": 1250200,
   "name": "Leica M2R",
   "date": "1969-70"
 },
 {
   "start": 1250201,
   "end": 1254650,
   "name": "Leica M4",
   "date": "1970"
 },
 {
   "start": 1254651,
   "end": 1255000,
   "name": "Leica MDa",
   "date": "1970"
 },
 {
   "start": 1255001,
   "end": 1265000,
   "name": "Leica Leicaflex SL",
   "date": "1970"
 },
 {
   "start": 1265001,
   "end": 1266000,
   "name": "Leica MDa",
   "date": "1970"
 },
 {
   "start": 1266001,
   "end": 1266100,
   "name": "Leica M4 Schwz Lackiert",
   "date": "1970-71"
 },
 {
   "start": 1266101,
   "end": 1266131,
   "name": "Leica M4 Olive",
   "date": "1970"
 },
 {
   "start": 1266132,
   "end": 1267100,
   "name": "Leica M4 Schwz Lackiert",
   "date": "1970"
 },
 {
   "start": 1267101,
   "end": 1267500,
   "name": "Leica M4 mot",
   "date": "1970"
 },
 {
   "start": 1267501,
   "end": 1273921,
   "name": "Leica M4",
   "date": "1970-71"
 },
 {
   "start": 1273922,
   "end": 1273925,
   "name": "Leica Postkamera 24x27",
   "date": "1971"
 },
 {
   "start": 1273926,
   "end": 1274000,
   "name": "Leica Postkamera 24x36",
   "date": "1971"
 },
 {
   "start": 1274001,
   "end": 1274100,
   "name": "Leica M4 mot",
   "date": "1971"
 },
 {
   "start": 1274101,
   "end": 1275000,
   "name": "Leica MDa",
   "date": "1971"
 },
 {
   "start": 1275001,
   "end": 1285000,
   "name": "Leica Leicaflex SL",
   "date": "1971"
 },
 {
   "start": 1285001,
   "end": 1286200,
   "name": "Leica MDa",
   "date": "1971"
 },
 {
   "start": 1286201,
   "end": 1286700,
   "name": "Leica M4 Schwz Lackiert",
   "date": "1971"
 },
 {
   "start": 1286701,
   "end": 1286760,
   "name": "Leica Postkamera 24x27",
   "date": "1972"
 },
 {
   "start": 1286761,
   "end": 1287000,
   "name": "Leica Postkamera/Mda",
   "date": ""
 },
 {
   "start": 1287001,
   "end": 1287050,
   "name": "Leica M5",
   "date": ""
 },
 {
   "start": 1287051,
   "end": 1287250,
   "name": "Leica M5 Hell",
   "date": "1971"
 },
 {
   "start": 1287251,
   "end": 1288000,
   "name": "Leica M5 Schwz",
   "date": "1971"
 },
 {
   "start": 1288001,
   "end": 1289000,
   "name": "Leica M5 Hell",
   "date": "1971"
 },
 {
   "start": 1289001,
   "end": 1291400,
   "name": "Leica M5 Schwz",
   "date": "1971-72"
 },
 {
   "start": 1291401,
   "end": 1293000,
   "name": "Leica M5 Hell",
   "date": "1971-72"
 },
 {
   "start": 1293001,
   "end": 1293672,
   "name": "Leica MDa",
   "date": "1971-72"
 },
 {
   "start": 1293673,
   "end": 1293770,
   "name": "Leica MDa Blitzsperre",
   "date": "1972"
 },
 {
   "start": 1293771,
   "end": 1293775,
   "name": "Leica M4-KE7",
   "date": "1972"
 },
 {
   "start": 1293776,
   "end": 1293877,
   "name": "Leica MDa Blitzsperre",
   "date": "1972"
 },
 {
   "start": 1293878,
   "end": 1294000,
   "name": "Leica Postkamera 24x27",
   "date": "1972"
 },
 {
   "start": 1294001,
   "end": 1294500,
   "name": "Leica M5 Hell",
   "date": "1972"
 },
 {
   "start": 1294501,
   "end": 1295000,
   "name": "Leica M4-KE7",
   "date": "1972"
 },
 {
   "start": 1295001,
   "end": 1296500,
   "name": "Leica Leicaflex SL",
   "date": "1972"
 },
 {
   "start": 1296501,
   "end": 1300000,
   "name": "Leica M5 Schwz",
   "date": "1972"
 },
 {
   "start": 1300001,
   "end": 1335000,
   "name": "Leica CL",
   "date": "1973-74"
 },
 {
   "start": 1335001,
   "end": 1336990,
   "name": "Leica Leicaflex SL",
   "date": "1972"
 },
 {
   "start": 1336991,
   "end": 1337110,
   "name": "Leica Leicaflex SL mot",
   "date": "1972"
 },
 {
   "start": 1337111,
   "end": 1338220,
   "name": "Leica Leicaflex SL",
   "date": "1972"
 },
 {
   "start": 1338221,
   "end": 1338300,
   "name": "Leica Leicaflex SL mot",
   "date": "1972"
 },
 {
   "start": 1338301,
   "end": 1339870,
   "name": "Leica Leicaflex SL",
   "date": "1972"
 },
 {
   "start": 1339871,
   "end": 1339900,
   "name": "Leica Leicaflex SL mot",
   "date": "1972"
 },
 {
   "start": 1339901,
   "end": 1341450,
   "name": "Leica Leicaflex SL",
   "date": "1972"
 },
 {
   "start": 1341451,
   "end": 1341470,
   "name": "Leica Leicaflex SL mot",
   "date": "1972"
 },
 {
   "start": 1341471,
   "end": 1342020,
   "name": "Leica Leicaflex SL",
   "date": "1973"
 },
 {
   "start": 1342021,
   "end": 1342050,
   "name": "Leica Leicaflex SL mot",
   "date": "1973"
 },
 {
   "start": 1342051,
   "end": 1342900,
   "name": "Leica Leicaflex SL",
   "date": "1973"
 },
 {
   "start": 1342901,
   "end": 1343000,
   "name": "Leica Leicaflex SL mot",
   "date": "1973"
 },
 {
   "start": 1343001,
   "end": 1344400,
   "name": "Leica Leicaflex SL",
   "date": ""
 },
 {
   "start": 1344401,
   "end": 1344500,
   "name": "Leica Leicaflex SL mot",
   "date": "1973"
 },
 {
   "start": 1344501,
   "end": 1345000,
   "name": "Leica Leicaflex SL",
   "date": "1973"
 },
 {
   "start": 1345001,
   "end": 1347000,
   "name": "Leica M5 Hell",
   "date": "1972"
 },
 {
   "start": 1347001,
   "end": 1354000,
   "name": "Leica M5 Schwz",
   "date": "1972"
 },
 {
   "start": 1354001,
   "end": 1355000,
   "name": "Leica M5 Hell",
   "date": "1972"
 },
 {
   "start": 1355001,
   "end": 1356500,
   "name": "Leica M5 Hell",
   "date": "1973"
 },
 {
   "start": 1356501,
   "end": 1360000,
   "name": "Leica M5 Schwz",
   "date": "1973"
 },
 {
   "start": 1360001,
   "end": 1361500,
   "name": "Leica MDa",
   "date": "1973-74"
 },
 {
   "start": 1361501,
   "end": 1363000,
   "name": "Leica M5 Hell",
   "date": "1973-74"
 },
 {
   "start": 1363001,
   "end": 1365000,
   "name": "Leica M5 Schwz",
   "date": "1973"
 },
 {
   "start": 1365001,
   "end": 1365380,
   "name": "Leica Leicaflex SL",
   "date": "1973"
 },
 {
   "start": 1365381,
   "end": 1365470,
   "name": "Leica Leicaflex SL mot",
   "date": "1973"
 },
 {
   "start": 1365471,
   "end": 1366990,
   "name": "Leica Leicaflex SL",
   "date": "1973"
 },
 {
   "start": 1366991,
   "end": 1367090,
   "name": "Leica Leicaflex SL mot",
   "date": "1973"
 },
 {
   "start": 1367091,
   "end": 1367950,
   "name": "Leica Leicaflex SL",
   "date": "1973"
 },
 {
   "start": 1367951,
   "end": 1368020,
   "name": "Leica Leicaflex SL mot",
   "date": "1973"
 },
 {
   "start": 1368021,
   "end": 1368850,
   "name": "Leica Leicaflex SL",
   "date": "1973"
 },
 {
   "start": 1368851,
   "end": 1368900,
   "name": "Leica Leicaflex SL mot",
   "date": "1973"
 },
 {
   "start": 1368901,
   "end": 1369800,
   "name": "Leica Leicaflex SL",
   "date": "1973"
 },
 {
   "start": 1369801,
   "end": 1369875,
   "name": "Leica Leicaflex SL2",
   "date": ""
 },
 {
   "start": 1369876,
   "end": 1370700,
   "name": "Leica Leicaflex SL",
   "date": "1973"
 },
 {
   "start": 1370701,
   "end": 1372440,
   "name": "Leica Leicaflex SL",
   "date": "1974"
 },
 {
   "start": 1372441,
   "end": 1372630,
   "name": "Leica Leicaflex SL mot",
   "date": "1974"
 },
 {
   "start": 1372631,
   "end": 1374000,
   "name": "Leica Leicaflex SL",
   "date": "1974"
 },
 {
   "start": 1374001,
   "end": 1375000,
   "name": "Leica Leicaflex SL",
   "date": "1974"
 },
 {
   "start": 1375001,
   "end": 1378000,
   "name": "Leica M5 Schwz",
   "date": "1973-74"
 },
 {
   "start": 1378001,
   "end": 1379000,
   "name": "Leica M5 Hell",
   "date": "1973-74"
 },
 {
   "start": 1379001,
   "end": 1380000,
   "name": "Leica MDa",
   "date": "1974"
 },
 {
   "start": 1380001,
   "end": 1381650,
   "name": "Leica M4 Schwz",
   "date": "1974"
 },
 {
   "start": 1381651,
   "end": 1382600,
   "name": "Leica M4 Schwz",
   "date": ""
 },
 {
   "start": 1382601,
   "end": 1383000,
   "name": "Leica M5 Hell",
   "date": "1974-75"
 },
 {
   "start": 1383001,
   "end": 1384000,
   "name": "Leica M5 Schwz",
   "date": "1974-75"
 },
 {
   "start": 1384001,
   "end": 1384600,
   "name": "Leica M4 Schwz",
   "date": "1974"
 },
 {
   "start": 1384601,
   "end": 1385000,
   "name": "Leica MDa",
   "date": "1974-75"
 },
 {
   "start": 1385001,
   "end": 1386000,
   "name": "Leica Leicaflex SL2",
   "date": "1974-75"
 },
 {
   "start": 1386001,
   "end": 1386100,
   "name": "Leica Leicaflex SL2",
   "date": "1975"
 },
 {
   "start": 1386101,
   "end": 1386600,
   "name": "Leica Leicaflex SL2",
   "date": "1974-75"
 },
 {
   "start": 1386601,
   "end": 1386700,
   "name": "Leica Leicaflex SL2 mot",
   "date": "1975"
 },
 {
   "start": 1386701,
   "end": 1387450,
   "name": "Leica Leicaflex SL2",
   "date": "1974-75"
 },
 {
   "start": 1387451,
   "end": 1387500,
   "name": "Leica Leicaflex SL2 mot",
   "date": "1975"
 },
 {
   "start": 1387501,
   "end": 1391760,
   "name": "Leica Leicaflex SL2",
   "date": "1974-75"
 },
 {
   "start": 1391761,
   "end": 1392000,
   "name": "Leica Leicaflex SL2 mot",
   "date": "1975"
 },
 {
   "start": 1392001,
   "end": 1393420,
   "name": "Leica Leicaflex SL2",
   "date": "1975"
 },
 {
   "start": 1393421,
   "end": 1393510,
   "name": "Leica Leicaflex SL2 mot",
   "date": "1975"
 },
 {
   "start": 1393511,
   "end": 1394300,
   "name": "Leica Leicaflex SL2",
   "date": "1975"
 },
 {
   "start": 1394301,
   "end": 1394600,
   "name": "Leica Leicaflex SL2 mot",
   "date": "1975"
 },
 {
   "start": 1394601,
   "end": 1395000,
   "name": "Leica Leicaflex SL2",
   "date": "1975"
 },
 {
   "start": 1395001,
   "end": 1410000,
   "name": "Leica CL",
   "date": "1974-75"
 },
 {
   "start": 1410001,
   "end": 1412550,
   "name": "Leica MDa",
   "date": "1975-76"
 },
 {
   "start": 1412551,
   "end": 1413350,
   "name": "Leica M4 Schwz",
   "date": ""
 },
 {
   "start": 1413351,
   "end": 1415000,
   "name": "Leica M4 Schwz",
   "date": "1975"
 },
 {
   "start": 1415001,
   "end": 1415140,
   "name": "Leica Leicaflex SL2",
   "date": "1975"
 },
 {
   "start": 1415141,
   "end": 1415230,
   "name": "Leica Leicaflex SL2 mot",
   "date": "1975"
 },
 {
   "start": 1415231,
   "end": 1421000,
   "name": "Leica Leicaflex SL2",
   "date": "1975"
 },
 {
   "start": 1421001,
   "end": 1421150,
   "name": "Leica Leicaflex SL2 mot",
   "date": "1975"
 },
 {
   "start": 1421151,
   "end": 1425000,
   "name": "Leica Leicaflex SL2",
   "date": "1975"
 },
 {
   "start": 1425001,
   "end": 1440000,
   "name": "Leica CL",
   "date": "1975-76"
 },
 {
   "start": 1440001,
   "end": 1443000,
   "name": "Leica Leicaflex SL2",
   "date": "1975-76"
 },
 {
   "start": 1443001,
   "end": 1443170,
   "name": "Leica M4 Schwz",
   "date": "1975"
 },
 {
   "start": 1443501,
   "end": 1446000,
   "name": "Leica Leicaflex SL2",
   "date": "1976"
 },
 {
   "start": 1446001,
   "end": 1446100,
   "name": "Leica R3 Hell ELW",
   "date": "1976"
 },
 {
   "start": 1446101,
   "end": 1447100,
   "name": "Leica R3 Hell LP",
   "date": "1976"
 },
 {
   "start": 1447101,
   "end": 1449000,
   "name": "Leica R3 Schwz",
   "date": ""
 },
 {
   "start": 1449001,
   "end": 1450500,
   "name": "Leica R3 Schwz ELW",
   "date": "1976"
 },
 {
   "start": 1450501,
   "end": 1450900,
   "name": "Leica R3 Hell ELW",
   "date": "1977"
 },
 {
   "start": 1450901,
   "end": 1468000,
   "name": "Leica R3 Schwz",
   "date": "1977-78"
 },
 {
   "start": 1468001,
   "end": 1468100,
   "name": "Leica M4-2 LP",
   "date": "1977-78"
 },
 {
   "start": 1468101,
   "end": 1470000,
   "name": "Leica R3 Olive LP",
   "date": "1977-78"
 },
 {
   "start": 1470001,
   "end": 1479000,
   "name": "Leica R3 Schwz",
   "date": ""
 },
 {
   "start": 1479001,
   "end": 1480000,
   "name": "Leica R3 Hell LP",
   "date": "1978"
 },
 {
   "start": 1480001,
   "end": 1482000,
   "name": "Leica M4-2",
   "date": "1978"
 },
 {
   "start": 1482001,
   "end": 1485000,
   "name": "Leica R3 Olive LP",
   "date": "1978"
 },
 {
   "start": 1485001,
   "end": 1491000,
   "name": "Leica R3 Schwz LP",
   "date": "1978"
 },
 {
   "start": 1491001,
   "end": 1492250,
   "name": "Leica R3 Hell LP",
   "date": "1978"
 },
 {
   "start": 1492251,
   "end": 1502000,
   "name": "Leica R3 MOT LP",
   "date": "1978"
 },
 {
   "start": 1502001,
   "end": 1508000,
   "name": "Leica M4-2",
   "date": "1978-79"
 },
 {
   "start": 1508001,
   "end": 1523750,
   "name": "Leica R3 MOT LP",
   "date": "1979"
 },
 {
   "start": 1523751,
   "end": 1523850,
   "name": "Leica R3 Schwz LP",
   "date": "1979"
 },
 {
   "start": 1523851,
   "end": 1524850,
   "name": "Leica R3 Gold LP",
   "date": "1979"
 },
 {
   "start": 1524851,
   "end": 1525350,
   "name": "Leica R3 Hell LP",
   "date": "1979"
 },
 {
   "start": 1525351,
   "end": 1527200,
   "name": "Leica M4-2",
   "date": "1979"
 },
 {
   "start": 1527201,
   "end": 1527700,
   "name": "Leica M4-2 Gold",
   "date": "1979-80"
 },
 {
   "start": 1527701,
   "end": 1528150,
   "name": "Leica M4-2",
   "date": "1980"
 },
 {
   "start": 1528151,
   "end": 1528650,
   "name": "Leica M4-2 Gold",
   "date": "1980"
 },
 {
   "start": 1528651,
   "end": 1533350,
   "name": "Leica M4-2",
   "date": "1980"
 },
 {
   "start": 1533351,
   "end": 1543350,
   "name": "Leica R4 Schwz",
   "date": "1980-81"
 },
 {
   "start": 1545351,
   "end": 1546350,
   "name": "Leica MD-2",
   "date": "1980-81"
 },
 {
   "start": 1546351,
   "end": 1552350,
   "name": "Leica M4-P",
   "date": "1981"
 },
 {
   "start": 1552531,
   "end": 1562350,
   "name": "Leica R4 Schwz",
   "date": "1981"
 },
 {
   "start": 1562351,
   "end": 1564350,
   "name": "Leica M4-P",
   "date": "1982"
 },
 {
   "start": 1564351,
   "end": 1574350,
   "name": "Leica R4 Schwz",
   "date": "1981-82"
 },
 {
   "start": 1574351,
   "end": 1576350,
   "name": "Leica R4 Hell",
   "date": "1982"
 },
 {
   "start": 1576351,
   "end": 1586350,
   "name": "Leica R4 Schwz",
   "date": "1982"
 },
 {
   "start": 1586351,
   "end": 1590350,
   "name": "Leica M4-P",
   "date": "1982"
 },
 {
   "start": 1590351,
   "end": 1590550,
   "name": "Leica R4 Schwz",
   "date": "1982"
 },
 {
   "start": 1590551,
   "end": 1592550,
   "name": "Leica R4 Hell",
   "date": "1982"
 },
 {
   "start": 1592551,
   "end": 1602550,
   "name": "Leica R4 Schwz",
   "date": "1982"
 },
 {
   "start": 1602551,
   "end": 1604550,
   "name": "Leica R4 Hell",
   "date": "1982"
 },
 {
   "start": 1604551,
   "end": 1606550,
   "name": "Leica M4-P",
   "date": "1982-83"
 },
 {
   "start": 1606551,
   "end": 1616550,
   "name": "Leica R4 Schwz",
   "date": "1983"
 },
 {
   "start": 1616551,
   "end": 1618550,
   "name": "Leica R4 Hell",
   "date": "1983"
 },
 {
   "start": 1618551,
   "end": 1620550,
   "name": "Leica M4-P Hell",
   "date": "1983"
 },
 {
   "start": 1620551,
   "end": 1622550,
   "name": "Leica M4-P",
   "date": "1983-84"
 },
 {
   "start": 1622551,
   "end": 1632550,
   "name": "Leica R4 Schwz",
   "date": "1983"
 },
 {
   "start": 1632551,
   "end": 1636550,
   "name": "Leica R4s",
   "date": "1983"
 },
 {
   "start": 1636551,
   "end": 1637550,
   "name": "Leica M4-P Hell",
   "date": "1983"
 },
 {
   "start": 1637551,
   "end": 1642550,
   "name": "Leica R4s",
   "date": "1983"
 },
 {
   "start": 1642551,
   "end": 1643750,
   "name": "Leica M4-P",
   "date": "1984"
 },
 {
   "start": 1643751,
   "end": 1648750,
   "name": "Leica R4s",
   "date": "1984"
 },
 {
   "start": 1648751,
   "end": 1649250,
   "name": "Leica MD-2",
   "date": "1985"
 },
 {
   "start": 1649251,
   "end": 1651250,
   "name": "Leica M4-P",
   "date": "1984-85"
 },
 {
   "start": 1651251,
   "end": 1652250,
   "name": "Leica R4 Gold",
   "date": "1984-85"
 },
 {
   "start": 1652251,
   "end": 1657250,
   "name": "Leica R4s",
   "date": "1984-85"
 },
 {
   "start": 1657251,
   "end": 1659250,
   "name": "Leica M6",
   "date": "1984-85"
 },
 {
   "start": 1659251,
   "end": 1664250,
   "name": "Leica R4 Schwz",
   "date": "1984-85"
 },
 {
   "start": 1664251,
   "end": 1664350,
   "name": "Leica MD-2",
   "date": "1984-85"
 },
 {
   "start": 1664351,
   "end": 1665350,
   "name": "Leica R4 Hell",
   "date": "1984-85"
 },
 {
   "start": 1665351,
   "end": 1669350,
   "name": "Leica M6",
   "date": "1985"
 },
 {
   "start": 1669351,
   "end": 1674350,
   "name": "Leica R4",
   "date": "1985-86"
 },
 {
   "start": 1674351,
   "end": 1678350,
   "name": "Leica M6",
   "date": "1985"
 },
 {
   "start": 1678351,
   "end": 1682350,
   "name": "Leica M6",
   "date": "1985"
 },
 {
   "start": 1682351,
   "end": 1682950,
   "name": "Leica M6 Hell",
   "date": "1986"
 },
 {
   "start": 1682951,
   "end": 1687950,
   "name": "Leica R4s-2",
   "date": "1985-86"
 },
 {
   "start": 1687951,
   "end": 1691950,
   "name": "Leica M6",
   "date": "1986"
 },
 {
   "start": 1691951,
   "end": 1692950,
   "name": "Leica M4-P ELW",
   "date": ""
 },
 {
   "start": 1692951,
   "end": 1694950,
   "name": "Leica R4s",
   "date": "1986"
 },
 {
   "start": 1694951,
   "end": 1696450,
   "name": "Leica R4 Schwz",
   "date": "1986"
 },
 {
   "start": 1696451,
   "end": 1701450,
   "name": "Leica R5 Schwz",
   "date": "1986"
 },
 {
   "start": 1701451,
   "end": 1704600,
   "name": "Leica M6",
   "date": "1986"
 },
 {
   "start": 1704601,
   "end": 1704800,
   "name": "Leica MD-2",
   "date": "1986"
 },
 {
   "start": 1704801,
   "end": 1705450,
   "name": "Leica M6",
   "date": "1986"
 },
 {
   "start": 1705451,
   "end": 1707450,
   "name": "Leica M6 Hell",
   "date": "1986"
 },
 {
   "start": 1707451,
   "end": 1711450,
   "name": "Leica M6 Schwz",
   "date": "1986"
 },
 {
   "start": 1711451,
   "end": 1714450,
   "name": "Leica M6 Hell",
   "date": "1987"
 },
 {
   "start": 1714451,
   "end": 1719450,
   "name": "Leica R5 Schwz",
   "date": "1987"
 },
 {
   "start": 1719451,
   "end": 1720450,
   "name": "Leica R5 Hell",
   "date": "1987"
 },
 {
   "start": 1720451,
   "end": 1724450,
   "name": "Leica R5 Schwz",
   "date": "1987"
 },
 {
   "start": 1724451,
   "end": 1728450,
   "name": "Leica M6 Schwz",
   "date": "1987"
 },
 {
   "start": 1728451,
   "end": 1732450,
   "name": "Leica R6 Schwz",
   "date": "1987"
 },
 {
   "start": 1732451,
   "end": 1733450,
   "name": "Leica R5 Hell",
   "date": "1987"
 },
 {
   "start": 1733451,
   "end": 1738450,
   "name": "Leica R5 Schwz",
   "date": "1988"
 },
 {
   "start": 1738451,
   "end": 1741450,
   "name": "Leica M6 Hell",
   "date": "1988"
 },
 {
   "start": 1741451,
   "end": 1745450,
   "name": "Leica M6 Schwz",
   "date": "1988"
 },
 {
   "start": 1745451,
   "end": 1755450,
   "name": "Leica R6 Schwz",
   "date": "1988"
 },
 {
   "start": 1755451,
   "end": 1758450,
   "name": "Leica M6 Hell",
   "date": "1988"
 },
 {
   "start": 1758451,
   "end": 1762450,
   "name": "Leica M6 Schwz",
   "date": "1988"
 },
 {
   "start": 1762451,
   "end": 1765750,
   "name": "Leica R5 Schwz",
   "date": "1988"
 },
 {
   "start": 1765751,
   "end": 1768000,
   "name": "Leica R6 Hell",
   "date": "1989"
 },
 {
   "start": 1768001,
   "end": 1770220,
   "name": "Leica R5 Schwz",
   "date": "1989"
 },
 {
   "start": 1770221,
   "end": 1770485,
   "name": "Leica R5 Schwz",
   "date": "1989"
 },
 {
   "start": 1770486,
   "end": 1772500,
   "name": "Leica R5 & R6 Hell",
   "date": "1989"
 },
 {
   "start": 1772501,
   "end": 1775000,
   "name": "Leica M6 Hell",
   "date": "1989"
 },
 {
   "start": 1775001,
   "end": 1777000,
   "name": "Leica R5 & R6 Hell",
   "date": "1990"
 },
 {
   "start": 1777001,
   "end": 1777500,
   "name": "Leica M6 Hell",
   "date": "1990"
 },
 {
   "start": 1777501,
   "end": 1779000,
   "name": "Leica R6 & R-E",
   "date": ""
 },
 {
   "start": 1779001,
   "end": 1782000,
   "name": "Leica M6 Schwz",
   "date": "1990"
 },
 {
   "start": 1782001,
   "end": 1783000,
   "name": "Leica R5, R6, R-E",
   "date": "1990"
 },
 {
   "start": 1783001,
   "end": 1786000,
   "name": "Leica M6 Schwz",
   "date": "1990"
 },
 {
   "start": 1786001,
   "end": 1788000,
   "name": "Leica R5, R-E",
   "date": ""
 },
 {
   "start": 1788001,
   "end": 1790000,
   "name": "Leica R5, R-E",
   "date": ""
 },
 {
   "start": 1790001,
   "end": 1790500,
   "name": "Leica M6 Hell",
   "date": "1991"
 },
 {
   "start": 1790501,
   "end": 1791000,
   "name": "Leica M6 Hell",
   "date": "1991"
 },
 {
   "start": 1791001,
   "end": 1793000,
   "name": "Leica R5, R-E",
   "date": ""
 },
 {
   "start": 1793001,
   "end": 1794500,
   "name": "Leica M6 Hell",
   "date": "1991"
 },
 {
   "start": 1794501,
   "end": 1797000,
   "name": "Leica M6 Schwz",
   "date": "1991"
 },
 {
   "start": 1797001,
   "end": 1799000,
   "name": "Leica R5, R-E",
   "date": ""
 },
 {
   "start": 1799001,
   "end": 1800000,
   "name": "Leica R5, R-E",
   "date": ""
 },
 {
   "start": 1800001,
   "end": 1850000,
   "name": "Leica Leica Mini",
   "date": "1991"
 },
 {
   "start": 1850001,
   "end": 1900000,
   "name": "Leica Leica Mini II",
   "date": "1993"
 },
 {
   "start": 1900001,
   "end": 1903500,
   "name": "Leica R-E, R6.2",
   "date": ""
 },
 {
   "start": 1903501,
   "end": 1904500,
   "name": "Leica M6 Hell",
   "date": "1991"
 },
 {
   "start": 1904501,
   "end": 1906500,
   "name": "Leica M6 Schwz",
   "date": "1991"
 },
 {
   "start": 1906501,
   "end": 1907500,
   "name": "Leica M6 Hell",
   "date": "1991"
 },
 {
   "start": 1907501,
   "end": 1908500,
   "name": "Leica R-E, R6.2",
   "date": ""
 },
 {
   "start": 1908501,
   "end": 1912000,
   "name": "Leica R7 Schwz",
   "date": "1991"
 },
 {
   "start": 1912001,
   "end": 1914000,
   "name": "Leica R6.2 Schwz",
   "date": "1991"
 },
 {
   "start": 1914001,
   "end": 1915000,
   "name": "Leica M6 Hell",
   "date": "1992"
 },
 {
   "start": 1915001,
   "end": 1918000,
   "name": "Leica M6 Schwz",
   "date": "1992"
 },
 {
   "start": 1918001,
   "end": 1918020,
   "name": "Leica M5 Hell",
   "date": "1992"
 },
 {
   "start": 1918021,
   "end": 1919020,
   "name": "Leica M6 Hell",
   "date": "1992"
 },
 {
   "start": 1919021,
   "end": 1920000,
   "name": "Leica R7 Hell",
   "date": "1992"
 },
 {
   "start": 1920001,
   "end": 1923000,
   "name": "Leica R7 Schwz",
   "date": "1992"
 },
 {
   "start": 1923001,
   "end": 1924000,
   "name": "Leica R6.2 Hell",
   "date": "1992"
 },
 {
   "start": 1924001,
   "end": 1926000,
   "name": "Leica R7 Hell",
   "date": "1992"
 },
 {
   "start": 1926001,
   "end": 1928000,
   "name": "Leica M6 Hell",
   "date": "1992"
 },
 {
   "start": 1928001,
   "end": 1931000,
   "name": "Leica M6 Hell",
   "date": "1992"
 },
 {
   "start": 1931001,
   "end": 1932000,
   "name": "Leica M6 Hell",
   "date": "1992"
 },
 {
   "start": 1932001,
   "end": 1932002,
   "name": "Leica M4.2 Gold",
   "date": "1993"
 },
 {
   "start": 1932003,
   "end": 1933000,
   "name": "Leica R6.2 Hell",
   "date": "1993"
 },
 {
   "start": 1933001,
   "end": 1934000,
   "name": "Leica R7 Schwz",
   "date": "1993"
 },
 {
   "start": 1934001,
   "end": 1935000,
   "name": "Leica R7 Schwz",
   "date": "1993"
 },
 {
   "start": 1935001,
   "end": 1936000,
   "name": "Leica M6 Hell",
   "date": "1993"
 },
 {
   "start": 1936001,
   "end": 1937000,
   "name": "Leica M6 Hell",
   "date": "1993"
 },
 {
   "start": 1937001,
   "end": 1937999,
   "name": "Leica R6.2 Schwz",
   "date": "1993"
 },
 {
   "start": 1938000,
   "end": 1938150,
   "name": "Leica M6",
   "date": "1993"
 },
 {
   "start": 1938151,
   "end": 1940000,
   "name": "Leica R7 Schwz",
   "date": "1993"
 },
 {
   "start": 1940001,
   "end": 1941000,
   "name": "Leica R7 Schwz",
   "date": "1993"
 },
 {
   "start": 1941001,
   "end": 1991000,
   "name": "Leica Mini Zoom",
   "date": "1993"
 },
 {
   "start": 1991001,
   "end": 1993000,
   "name": "Leica M6 Hell",
   "date": "1993"
 },
 {
   "start": 1993001,
   "end": 1995000,
   "name": "Leica R6.2 Schwz",
   "date": "1993"
 },
 {
   "start": 1995001,
   "end": 1997000,
   "name": "Leica M6 Schwz",
   "date": "1993"
 },
 {
   "start": 1997001,
   "end": 1998000,
   "name": "Leica R6.2 Hell",
   "date": "1993"
 },
 {
   "start": 1998001,
   "end": 1999000,
   "name": "Leica R7 Schwz",
   "date": "1993"
 },
 {
   "start": 1999001,
   "end": 1999998,
   "name": "Leica R7 Hell",
   "date": "1994"
 },
 {
   "start": 2000000,
   "end": 2000000,
   "name": "Leica R7 for WWF",
   "date": "1994"
 },
 {
   "start": 2000011,
   "end": 2000999,
   "name": "Leica M6 Hell",
   "date": "1994"
 },
 {
   "start": 2001000,
   "end": 2001353,
   "name": "Leica M6",
   "date": ""
 },
 {
   "start": 2001354,
   "end": 2001999,
   "name": "Leica M6 Hell",
   "date": "1994"
 },
 {
   "start": 2002000,
   "end": 2002100,
   "name": "Leica M6",
   "date": ""
 },
 {
   "start": 2002101,
   "end": 2003000,
   "name": "Leica M6 Hell",
   "date": "1994"
 },
 {
   "start": 2003001,
   "end": 2004000,
   "name": "Leica M6 Schwz",
   "date": "1994"
 },
 {
   "start": 2004001,
   "end": 2005000,
   "name": "Leica M6 Hell",
   "date": "1994"
 },
 {
   "start": 2005001,
   "end": 2005941,
   "name": "Leica M6 Hell",
   "date": "1994"
 },
 {
   "start": 2005942,
   "end": 2007000,
   "name": "Leica M6 Schwz",
   "date": "1994"
 },
 {
   "start": 2007001,
   "end": 2008000,
   "name": "Leica M6.2 Hell",
   "date": "1994"
 },
 {
   "start": 2008001,
   "end": 2009000,
   "name": "Leica R7 Hell",
   "date": "1994"
 },
 {
   "start": 2009001,
   "end": 2011000,
   "name": "Leica M6 Hell",
   "date": "1994"
 },
 {
   "start": 2011001,
   "end": 2013000,
   "name": "Leica R7 Schwz",
   "date": "1994"
 },
 {
   "start": 2013001,
   "end": 2063000,
   "name": "Leica Mini Zoom",
   "date": "1994"
 },
 {
   "start": 2063001,
   "end": 2065000,
   "name": "Leica M6 Schwz",
   "date": "1995"
 },
 {
   "start": 2065001,
   "end": 2066000,
   "name": "Leica R7 Hell",
   "date": "1995"
 },
 {
   "start": 2066001,
   "end": 2166000,
   "name": "Leica Minilux",
   "date": "1995"
 },
 {
   "start": 2166001,
   "end": 2167000,
   "name": "Leica R7 Schwz",
   "date": "1995"
 },
 {
   "start": 2167001,
   "end": 2168000,
   "name": "Leica R6.2 Hell",
   "date": "1995"
 },
 {
   "start": 2168001,
   "end": 2170000,
   "name": "Leica M6 Hell",
   "date": "1995"
 },
 {
   "start": 2170001,
   "end": 2170500,
   "name": "Leica R6.2 Schwz",
   "date": "1995"
 },
 {
   "start": 2170501,
   "end": 2171000,
   "name": "Leica R6.2 Hell",
   "date": "1995"
 },
 {
   "start": 2171001,
   "end": 2171200,
   "name": "Leica R7",
   "date": "1995"
 },
 {
   "start": 2171201,
   "end": 2173000,
   "name": "Leica M6 Schwz",
   "date": "1995"
 },
 {
   "start": 2173001,
   "end": 2174000,
   "name": "Leica R7 Schwz",
   "date": "1995"
 },
 {
   "start": 2174001,
   "end": 2176000,
   "name": "Leica M6 Hell",
   "date": "1995"
 },
 {
   "start": 2176001,
   "end": 2176700,
   "name": "Leica M6",
   "date": "1995"
 },
 {
   "start": 2176701,
   "end": 2177000,
   "name": "Leica R6.2 Schwz",
   "date": "1995"
 },
 {
   "start": 2177001,
   "end": 2177250,
   "name": "Leica M6",
   "date": "1995"
 },
 {
   "start": 2177251,
   "end": 2177750,
   "name": "Leica R7 Schwz",
   "date": "1995"
 },
 {
   "start": 2177757,
   "end": 2178000,
   "name": "Leica R6.2 Schwz",
   "date": "1995"
 },
 {
   "start": 2178001,
   "end": 2179000,
   "name": "Leica R6.2 Hell",
   "date": "1995"
 },
 {
   "start": 2179001,
   "end": 2181000,
   "name": "Leica M6 Schwz",
   "date": "1995"
 },
 {
   "start": 2181001,
   "end": 2181575,
   "name": "Leica R7 Schwz",
   "date": "1995"
 },
 {
   "start": 2181576,
   "end": 2182000,
   "name": "Leica R7 Schwz",
   "date": "1995"
 },
 {
   "start": 2182001,
   "end": 2183000,
   "name": "Leica R7 Schwz",
   "date": "1995"
 },
 {
   "start": 2183001,
   "end": 2184000,
   "name": "Leica R7 Schwz",
   "date": "1995"
 },
 {
   "start": 2184001,
   "end": 2185000,
   "name": "Leica M6 Hell",
   "date": "1995"
 },
 {
   "start": 2185001,
   "end": 2235000,
   "name": "Leica Mini Zoom",
   "date": "1995"
 },
 {
   "start": 2235001,
   "end": 2236000,
   "name": "Leica M6 Hell",
   "date": "1995"
 },
 {
   "start": 2236001,
   "end": 2236500,
   "name": "Leica R6.2 Schwz",
   "date": "1996"
 },
 {
   "start": 2236501,
   "end": 2237500,
   "name": "Leica R7 Hell",
   "date": "1996"
 },
 {
   "start": 2237501,
   "end": 2238500,
   "name": "Leica R6.2 Schwz",
   "date": "1996"
 },
 {
   "start": 2238501,
   "end": 2239000,
   "name": "Leica R7 Schwz",
   "date": "1996"
 },
 {
   "start": 2239001,
   "end": 2240000,
   "name": "Leica M6 Schwz",
   "date": "1996"
 },
 {
   "start": 2240001,
   "end": 2241000,
   "name": "Leica R7 Schwz",
   "date": "1996"
 },
 {
   "start": 2241001,
   "end": 2265000,
   "name": "Leica Mini 3",
   "date": "1996"
 },
 {
   "start": 2265001,
   "end": 2277000,
   "name": "Leica Mini 3 DB",
   "date": "1996"
 },
 {
   "start": 2277001,
   "end": 2278000,
   "name": "Leica R6.2 Schwz",
   "date": "1996"
 },
 {
   "start": 2278001,
   "end": 2278211,
   "name": "Leica M6",
   "date": "1996"
 },
 {
   "start": 2278301,
   "end": 2278588,
   "name": "Leica M6",
   "date": "1996"
 },
 {
   "start": 2279001,
   "end": 2280500,
   "name": "Leica M6 Schwz",
   "date": "1996"
 },
 {
   "start": 2280501,
   "end": 2281000,
   "name": "Leica R6.2 Schwz",
   "date": "1996"
 },
 {
   "start": 2281001,
   "end": 2281400,
   "name": "Leica M6",
   "date": "1996"
 },
 {
   "start": 2281401,
   "end": 2282400,
   "name": "Leica R7 Schwz",
   "date": "1996"
 },
 {
   "start": 2283001,
   "end": 2283125,
   "name": "Leica M6",
   "date": "1996"
 },
 {
   "start": 2283201,
   "end": 2283325,
   "name": "Leica M6",
   "date": "1996"
 },
 {
   "start": 2283401,
   "end": 2283525,
   "name": "Leica M6",
   "date": "1996"
 },
 {
   "start": 2283601,
   "end": 2283625,
   "name": "Leica M6",
   "date": "1996"
 },
 {
   "start": 2283626,
   "end": 2284125,
   "name": "Leica R6.2 Schwz",
   "date": "1996"
 },
 {
   "start": 2284126,
   "end": 2284999,
   "name": "Leica M6 Schwz",
   "date": "1996"
 },
 {
   "start": 2285000,
   "end": 2285000,
   "name": "Leica R8",
   "date": "1996"
 },
 {
   "start": 2285001,
   "end": 2286000,
   "name": "Leica R8",
   "date": "1996"
 },
 {
   "start": 2286001,
   "end": 2287500,
   "name": "Leica S1 (Scanners)",
   "date": "1996"
 },
 {
   "start": 2287501,
   "end": 2288500,
   "name": "Leica M6 Hell",
   "date": "1996"
 },
 {
   "start": 2288501,
   "end": 2289500,
   "name": "Leica M6 Schwz",
   "date": "1996"
 },
 {
   "start": 2289501,
   "end": 2290500,
   "name": "Leica M6 Hell",
   "date": "1996"
 },
 {
   "start": 2290501,
   "end": 2291500,
   "name": "Leica R8",
   "date": "1996"
 },
 {
   "start": 2291501,
   "end": 2293500,
   "name": "Leica R8",
   "date": "1996"
 },
 {
   "start": 2293501,
   "end": 2295000,
   "name": "Leica R8",
   "date": "1997"
 },
 {
   "start": 2295001,
   "end": 2297000,
   "name": "Leica M6 Schwz",
   "date": "1997"
 },
 {
   "start": 2297001,
   "end": 2299000,
   "name": "Leica R8",
   "date": "1997"
 },
 {
   "start": 2300000,
   "end": 2300000,
   "name": "Leica M6 for Museum",
   "date": "1997"
 },
 {
   "start": 2300001,
   "end": 2300996,
   "name": "Leica M6",
   "date": "1997"
 },
 {
   "start": 2301001,
   "end": 2321000,
   "name": "Leica Mini 3",
   "date": "1997"
 },
 {
   "start": 2321001,
   "end": 2331000,
   "name": "Leica Mini 3 DB",
   "date": "1997"
 },
 {
   "start": 2331001,
   "end": 2332000,
   "name": "Leica M6 Hell",
   "date": "1997"
 },
 {
   "start": 2332001,
   "end": 2382000,
   "name": "Leica Z2X",
   "date": "1997"
 },
 {
   "start": 2382001,
   "end": 2412000,
   "name": "Leica Z2X",
   "date": ""
 },
 {
   "start": 2412001,
   "end": 2414000,
   "name": "Leica R8",
   "date": "1997"
 },
 {
   "start": 2414001,
   "end": 2416000,
   "name": "Leica M6 Schwz",
   "date": "1997"
 },
 {
   "start": 2416001,
   "end": 2418000,
   "name": "Leica R8",
   "date": "1997"
 },
 {
   "start": 2418001,
   "end": 2419000,
   "name": "Leica M6 Hell",
   "date": "1997"
 },
 {
   "start": 2419001,
   "end": 2420000,
   "name": "Leica M6 Hell",
   "date": "1997"
 },
 {
   "start": 2420001,
   "end": 2422000,
   "name": "Leica R8",
   "date": "1997"
 },
 {
   "start": 2422001,
   "end": 2423000,
   "name": "Leica M6 Hell",
   "date": "1997"
 },
 {
   "start": 2423001,
   "end": 2425000,
   "name": "Leica M6 Schwz",
   "date": "1997"
 },
 {
   "start": 2425001,
   "end": 2427000,
   "name": "Leica M6 Hell",
   "date": "1997"
 },
 {
   "start": 2427001,
   "end": 2429000,
   "name": "Leica R8",
   "date": "1997"
 },
 {
   "start": 2429001,
   "end": 2429500,
   "name": "Leica R6.2 Hell",
   "date": "1997"
 },
 {
   "start": 2429501,
   "end": 2431500,
   "name": "Leica R8",
   "date": "1997"
 },
 {
   "start": 2431501,
   "end": 2431600,
   "name": "Leica M6 Hell",
   "date": "1998"
 },
 {
   "start": 2431601,
   "end": 2431800,
   "name": "Leica M6 Schwz",
   "date": "1998"
 },
 {
   "start": 2431801,
   "end": 2433800,
   "name": "Leica M6 Schwz",
   "date": "1998"
 },
 {
   "start": 2433801,
   "end": 2435800,
   "name": "Leica R8",
   "date": "1998"
 },
 {
   "start": 2435801,
   "end": 2455800,
   "name": "Leica Minilux",
   "date": ""
 },
 {
   "start": 2455801,
   "end": 2457800,
   "name": "Leica M6 Schwz",
   "date": "1998"
 },
 {
   "start": 2457801,
   "end": 2463800,
   "name": "Leica Digilux",
   "date": "1998"
 },
 {
   "start": 2463801,
   "end": 2463850,
   "name": "Leica M6 Hell",
   "date": "1998"
 },
 {
   "start": 2463851,
   "end": 2464100,
   "name": "Leica M6 Schwz",
   "date": "1998"
 },
 {
   "start": 2464101,
   "end": 2466100,
   "name": "Leica R8",
   "date": "1998"
 },
 {
   "start": 2466101,
   "end": 2470100,
   "name": "Leica M6 TTL",
   "date": "1998"
 },
 {
   "start": 2470101,
   "end": 2470300,
   "name": "Leica M6 Schwz",
   "date": "1998"
 },
 {
   "start": 2470301,
   "end": 2475300,
   "name": "Leica M6 TTL",
   "date": "1998"
 },
 {
   "start": 2475301,
   "end": 2477300,
   "name": "Leica R8",
   "date": "1998"
 },
 {
   "start": 2477301,
   "end": 2482300,
   "name": "Leica M6 TTL",
   "date": "1999"
 },
 {
   "start": 2482301,
   "end": 2482800,
   "name": "Leica R6.2 Hell",
   "date": "1999"
 },
 {
   "start": 2482801,
   "end": 2487800,
   "name": "Leica Z2X DB",
   "date": "1999"
 },
 {
   "start": 2490000,
   "end": 2490150,
   "name": "Leica M6 150 Jahre",
   "date": ""
 },
 {
   "start": 2490157,
   "end": 2495150,
   "name": "Leica Z2X DB",
   "date": "1999"
 },
 {
   "start": 2495151,
   "end": 2499999,
   "name": "Leica M6 TTL",
   "date": "1999"
 },
 {
   "start": 2500000,
   "end": 2500000,
   "name": "Leica M6 TTL",
   "date": ""
 },
 {
   "start": 2500001,
   "end": 2502000,
   "name": "Leica M6 Schwz Lackiert",
   "date": "1999"
 },
 {
   "start": 2502001,
   "end": 2517000,
   "name": "Leica Z2X DB",
   "date": "1999"
 },
 {
   "start": 2517001,
   "end": 2527000,
   "name": "Leica Z2X",
   "date": "1999"
 },
 {
   "start": 2527001,
   "end": 2547000,
   "name": "Leica Digilux Zoom",
   "date": "1999"
 },
 {
   "start": 2547001,
   "end": 2552000,
   "name": "Leica M6 TTL",
   "date": "1999"
 },
 {
   "start": 2552001,
   "end": 2552500,
   "name": "Leica R6.2 Hell",
   "date": "1999"
 },
 {
   "start": 2552501,
   "end": 2554500,
   "name": "Leica R8",
   "date": "1999"
 },
 {
   "start": 2554501,
   "end": 2554650,
   "name": "Leica M6 TTL 0.85",
   "date": "2000"
 },
 {
   "start": 2555001,
   "end": 2555200,
   "name": "Leica M6 TTL",
   "date": "1999"
 },
 {
   "start": 2555201,
   "end": 2555300,
   "name": "Leica M6 TTL",
   "date": "2000"
 },
 {
   "start": 2556001,
   "end": 2571000,
   "name": "Leica C1",
   "date": "1999"
 },
 {
   "start": 2571001,
   "end": 2581000,
   "name": "Leica Z2X DB",
   "date": "1999"
 },
 {
   "start": 2581001,
   "end": 2591000,
   "name": "Leica Z2X",
   "date": "1999"
 },
 {
   "start": 2591001,
   "end": 2591500,
   "name": "Leica R6.2 Hell",
   "date": "2000"
 },
 {
   "start": 2591501,
   "end": 2596500,
   "name": "Leica M6 TTL",
   "date": "2000"
 },
 {
   "start": 2596501,
   "end": 2626500,
   "name": "Leica Digilux 4.3",
   "date": "2000"
 },
 {
   "start": 2626501,
   "end": 2676500,
   "name": "Leica C11",
   "date": "2000"
 },
 {
   "start": 2676501,
   "end": 2680500,
   "name": "Leica O Serie",
   "date": "2000"
 },
 {
   "start": 2680501,
   "end": 2680900,
   "name": "Leica NSH",
   "date": "2000"
 },
 {
   "start": 2681201,
   "end": 2681400,
   "name": "Leica M6 TTL",
   "date": "2000"
 },
 {
   "start": 2681401,
   "end": 2683400,
   "name": "Leica M6 TTL",
   "date": "2000"
 },
 {
   "start": 2688001,
   "end": 2688500,
   "name": "Leica M6 TTL 0.85",
   "date": "2000"
 },
 {
   "start": 2688501,
   "end": 2688500,
   "name": "Leica M6 TTL 0.85",
   "date": "2000"
 },
 {
   "start": 2688501,
   "end": 2688500,
   "name": "Leica M6 TTL 0.85",
   "date": "2000"
 },
 {
   "start": 2688501,
   "end": 2703800,
   "name": "Leica Z2X",
   "date": "2000"
 },
 {
   "start": 2703801,
   "end": 2704300,
   "name": "Leica R6.2 Hell",
   "date": "2000"
 },
 {
   "start": 2704301,
   "end": 2705300,
   "name": "Leica Digilux 4.3",
   "date": "2000"
 },
 {
   "start": 2705301,
   "end": 2720300,
   "name": "Leica C1",
   "date": "2000"
 },
 {
   "start": 2720301,
   "end": 2720385,
   "name": "Leica R6.2 Hell",
   "date": "2000"
 },
 {
   "start": 2720401,
   "end": 2725400,
   "name": "Leica M6 TTL",
   "date": "2000"
 },
 {
   "start": 2725401,
   "end": 2726400,
   "name": "Leica R8",
   "date": "2000"
 },
 {
   "start": 2726401,
   "end": 2731400,
   "name": "Leica Z2X mit DB",
   "date": "2000"
 },
 {
   "start": 2731401,
   "end": 2736400,
   "name": "Leica M6 TTL",
   "date": "2001"
 },
 {
   "start": 2736401,
   "end": 2751400,
   "name": "Leica C1",
   "date": "2001"
 },
 {
   "start": 2751401,
   "end": 2752400,
   "name": "Leica R8",
   "date": "2001"
 },
 {
   "start": 2752401,
   "end": 2752422,
   "name": "Leica M6 TTL",
   "date": "2001"
 },
 {
   "start": 2753001,
   "end": 2753100,
   "name": "Leica M6 TTL 0.72 Hansa",
   "date": "2001"
 },
 {
   "start": 2753951,
   "end": 2755000,
   "name": "Leica M6 TTL 0.72 Titan",
   "date": "2001"
 },
 {
   "start": 2755001,
   "end": 2760000,
   "name": "Leica M6 TTL",
   "date": "2001"
 },
 {
   "start": 2760001,
   "end": 2775000,
   "name": "Leica C1",
   "date": "2001"
 },
 {
   "start": 2775001,
   "end": 2776000,
   "name": "Leica R8",
   "date": "2001"
 },
 {
   "start": 2777001,
   "end": 2777001,
   "name": "Leica M7",
   "date": "2001"
 },
 {
   "start": 2777002,
   "end": 2782000,
   "name": "Leica M7",
   "date": "2001"
 },
 {
   "start": 2782001,
   "end": 2782010,
   "name": "Leica R6.2 Hell",
   "date": "2001"
 },
 {
   "start": 2782011,
   "end": 2782020,
   "name": "Leica R6.2 Schwz",
   "date": "2001"
 },
 {
   "start": 2782021,
   "end": 2787000,
   "name": "Leica M7",
   "date": "2002"
 },
 {
   "start": 2787001,
   "end": 2817000,
   "name": "Leica DIGILUX1",
   "date": "2002"
 },
 {
   "start": 2817001,
   "end": 2847000,
   "name": "Leica C2",
   "date": "2002"
 },
 {
   "start": 2847001,
   "end": 2847200,
   "name": "Leica R8",
   "date": "2002"
 },
 {
   "start": 2847201,
   "end": 2847450,
   "name": "Leica R8",
   "date": "2002"
 },
 {
   "start": 2847451,
   "end": 2847750,
   "name": "Leica R8",
   "date": "2002"
 },
 {
   "start": 2847751,
   "end": 2849750,
   "name": "Leica Z2X",
   "date": "2002"
 },
 {
   "start": 2849751,
   "end": 2854750,
   "name": "Leica M7",
   "date": "2002"
 },
 {
   "start": 2854751,
   "end": 2855050,
   "name": "Leica R8",
   "date": "2002"
 },
 {
   "start": 2855051,
   "end": 2855100,
   "name": "Leica R9",
   "date": "2002"
 },
 {
   "start": 2855101,
   "end": 2880100,
   "name": "Leica C3",
   "date": "2002"
 },
 {
   "start": 2881101,
   "end": 2882100,
   "name": "Leica R9",
   "date": "2002"
 }
];