var AWS = require('aws-sdk'), 
  mydocumentClient = new AWS.DynamoDB.DocumentClient();  
exports.adddynamodb = function(event, context, callback){ 
  var params = { 
    Item : { 
      "Email" :event.Email, 
      "FirstName" : event.FirstName, 
      "LastName" : event.LastName 
    }, 
    TableName : process.env.TABLE_NAME 
  }; 
  mydocumentClient.put(params, function(err, data){ 
    callback(err, data); 
  }); 
} 