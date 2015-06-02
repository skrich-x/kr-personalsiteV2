(function(){
  'use strict';

alert('hello');


  $(document).ready(function(){
    $('body').prepend(JST['application']());
  });
})();
