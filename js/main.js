$(document).ready(function() {
  'use strict';

  // $.ajax(`https://api.github.com/users/zforre?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`)
  // .done((resp) => {
  //   // updateRepos(resp);
  // })
  // .fail((err) => {
  //   console.log(err);
  // })
  // .always(() => {
  //   console.log('always fires');
  // });

  //userName





  $.ajax({
    url: `https://api.github.com/users/zforre?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`,
    datatype: "jsonp",
    method: "GET",
    success: function(response) {
      console.log("SUCCESS", response);
      user(response);
    }
  });

  function user(response) {
    console.log("hello user")
    var source = $('#side-user-script').html();
    var template = Handlebars.compile(source);
    var context = response;
    var html = template(context);
    $('#side-user').html(html);
  }

  $.ajax({
    url: `https://api.github.com/users/zforre/repos?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`,
    datatype: "jsonp",
    method: "GET",
    success: function(response) {
    console.log("SUCCESS", response);
    add(response);
    }
  });

  function add(response) {
    console.log("hello repos")
    let source = $('#repos-script').html();
    let template = Handlebars.compile(source);
    let context = response;
    let html = template(context);
    $('#repos').html(html);
  }

  // $.ajax({
  //   url: `https://api.github.com/users/zforre/orgs?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`,
  //   datatype: "jsonp",
  //   method: "GET",
  //   success: function(response) {
  //   console.log("SUCCESS", response);
  //   add(response);
  //   }
  // });
  //
  // function add(response) {
  //   console.log("hello orgs")
  //   let source = $('#orgs-script').html();
  //   let template = Handlebars.compile(source);
  //   let context = response;
  //   let html = template(context);
  //   $('#orgs').html(html);
  // }






});
