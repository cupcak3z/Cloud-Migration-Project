//add your api here below
var API_ENDPOINT = "https://uoxzxc45s5.execute-api.us-east-1.amazonaws.com/prod"
//AJAX GET REQUEST
document.getElementById("saverecord").onclick = function(){
  var inputData = {
    "firstName":$('#fname').val(),
    "lastName":$('#lname').val(),
    "email":$('#email').val()           
  };
  $.ajax({
        url: API_ENDPOINT,
        type: 'POST',
        data:  JSON.stringify(inputData)  ,
        contentType: 'application/json; charset=utf-8',
        success: function (response) {
          document.getElementById("recordSaved").innerHTML = "Record Saved!";
        },
        error: function () {
            alert("error");
        }
    });
}
//AJAX GET REQUEST
document.getElementById("getrecord").onclick = function(){  
  $.ajax({
        url: API_ENDPOINT,
        type: 'GET',
         contentType: 'application/json; charset=utf-8',
        success: function (response) {
          $('#CustomerDataTable1 tr').slice(1).remove();
          jQuery.each(response, function(i,data) {          
            $("#CustomerDataTable1").append("<tr> \
                <td>" + data['firstName'] + "</td> \
                <td>" + data['lastName'] + "</td> \
                <td>" + data['email'] + "</td> \
                </tr>");
          });
        },
        error: function () {
            alert("error");
        }
    });
}