import { Sagan } from './sagansDot';
import $ from 'jquery';
import './styles.css';

// Initial front end UI input field
$(document).ready(function() {
  $('#galactic-form').submit(function(event) {
    event.preventDefault();
    var goal = $('#goal').val();
    var output = pingPong(goal);
    output.forEach(function(element) {
      $('#solution').append("<li>" + element + "</li>");
    });
  });
});