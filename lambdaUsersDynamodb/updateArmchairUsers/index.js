'use strict';
const AWS = require('aws-sdk');

exports.handler = async (event, context) => {
    const documentClient = new AWS.DynamoDB.DocumentClient();

    let responseBody = "";
    let statusCode = 0;

    const { id, uid, username, firstname, lastname, email, phone, userGroup, dateOfBirth, isActive, photoPath } = JSON.stringify(event.body);

    const params = {
        TableName: "armchair_users",
        Key: {
            id: id // "1" 
        },
        UpdateExpression: "set  id = :i, uid = :u, username = :s,  firstname = :f, lastname = :l, email = :e, phone = :p, userGroup = :g, dateOfBirth = :b, isActive = :a, photoPath = :h",
        ExpressionAttributeValues: {
            ":i": { "S": id },
            ":u": { "S": uid },
            ":s": { "S": username },
            ":f": { "S": firstname },
            ":l": { "S": lastname },
            ":e": { "S": email },
            ":p": { "N": phone },
            ":g": { "S": userGroup },
            ":b": { "S": dateOfBirth },
            ":a": { "B": isActive },
            ":h": { "S": photoPath }
        },
        ReturnValues: "UPDATED_NEW"
    };

    try {
        const data = await documentClient.update(params).promise();
        responseBody = JSON.stringify(data);
        statusCode = 204;
    } catch (err) {
        responseBody = `Unable to update user: ${err}`;
        statusCode = 403;
    }

    const response = {
        statusCode: statusCode,
        headers: {
            "Content-Type": "application/json"
        },
        body: responseBody
    };

    return response;
};