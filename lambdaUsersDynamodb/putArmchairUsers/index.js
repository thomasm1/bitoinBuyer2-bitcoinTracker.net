'use strict' 
const AWS = require('aws-sdk');
 
exports.handler = async (event, context) => { 
    const documentClient = new AWS.DynamoDB.DocumentClient({ region: "us-east-1" });

    let responseBody = "";
    let statusCode = 0;

    const { id, 
    uid, 
    name, 
    firstname, 
    lastname, 
    email, 
    phone, 
    contactType, 
    userGroup, 
    dateOfBirth, 
    isActive,
    photoPath } = JSON.parse(event.body);

    const params = {
        TableName: "armchair_users",
        Item: {
            id: id, 
            uid: uid, 
            name: name, 
            firstname: firstname, 
            lastname: lastname,  
            email: email,  
            phone: phone, 
            contactType: contactType, 
            userGroup: userGroup, 
            dateOfBirth: dateOfBirth, 
            isActive: isActive, 
            photoPath: photoPath 
        }
    };


    try { 
        const data = await documentClient.put(params).promise();
        responseBody = JSON.stringify(data);
        statusCode = 201;
        // console.log(data);
    } catch (err) {
        responseBody  = `Unable to put user: ${err}`;
        statusCode = 403
        console.log(err);
    }

    const response = {
        statusCode: statusCode, 
        headers: {
            "Content-Type": "application/json"
        },
        body: responseBody
    };
    return response;
}
 