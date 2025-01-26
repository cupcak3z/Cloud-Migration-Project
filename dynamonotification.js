const AWS = require('aws-sdk'); 
const sns = new AWS.SNS({ region: 'us-east-1' }); 
exports.notification = async (event) => { 
    console.log('Received event:', JSON.stringify(event, null, 2)); 
    for (const record of event.Records) { 
        if (record.eventName === 'INSERT') { 
            const newItem = record.dynamodb.NewImage; 
            const email = newItem.Email.S; 
            const firstname = newItem.FirstName.S; 
            const lastname = newItem.LastName.S; 
            const message = ` 

                A new record was added to vpcteam1-CustomerData: 

                 

                Email: ${email} 

                FirstName: ${firstname} 

                LastName: ${lastname} 

            `; 
            const params = { 
                Subject: 'New Record Added to DynamoDB', 
                Message: message, 
                TopicArn: 'arn:aws:sns:us-east-1:241725083265:NotificationSystem' 
            }; 
            try { 
                const result = await sns.publish(params).promise(); 
                console.log('Message published:', result); 
            } catch (error) { 
                console.error('Error publishing message:', error); 
            } 
        } 
    } 
}; 