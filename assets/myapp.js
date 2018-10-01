$(document).ready(function(){
    

    var config = {
        apiKey: "AIzaSyBaQXFqOnh-SEdwP3IJ9AfddEDua-pbIUE",
        projectId: "train-scheduler-72c81"
      };
    firebase.initializeApp(config);
    
    var database = firebase.database();
    
    $("#submit").on("click", function() {
    
   
    