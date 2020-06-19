'use strict';

require('dotenv').config();

const chalk = require('chalk');


const fs = require('fs');
const AWS = require('aws-sdk');
const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

const fileName = 'index.html';

const uploadFileIntoS3 = () => {
    fs.readFile(fileName, (err, data) => {
       if (err) throw err;
       const params = {
           Bucket: 'codeztech', // pass your bucket name
           Key: fileName, // file will be saved as testBucket/contacts.csv
           ContentType: "text/html",
           Body: data
       };
       s3.upload(params, function(s3Err, data) {
           if (s3Err) throw s3Err
           console.log(chalk.green('File uploaded successfully at -> ', data.Location));
       });
    });
  };
  
  const downloadFileFromS3 = () => {
    const params = {
      Bucket: 'codeztech', // pass your bucket name
      Key: fileName, // file will be saved as testBucket/contacts.csv
    };
    let file = fs.createWriteStream('./download/index.html');
    return new Promise((resolve, reject) => {
      s3.getObject(params).createReadStream()
        .on('end', () => {
            console.log(chalk.green("File successfully downloaded!"));
            return resolve();
        })
        .on('error', (error) => {
            return reject(chalk.red(error));
        }).pipe(file)
    });
  };
 
  const deleteFileFromS3 = () => {
    const params = {
      Bucket: 'codeztech', // pass your bucket name
      Key: fileName, // file will be saved as testBucket/contacts.csv
    };
    s3.deleteObject(params, function(err, data) {
      if (err) 
        console.log(err, err.stack);  // error
      else    
       console.log(chalk.green("File Successfully Deleted!"));
    });
  }; 
  
  uploadFileIntoS3();
  // downloadFileFromS3();
  // deleteFileFromS3();
  
  
  
  