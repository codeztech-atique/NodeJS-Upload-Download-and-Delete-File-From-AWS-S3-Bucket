Deploy to S3 Bucket

Upload and Download file into S3 - 

Download from s3 bucket  - aws s3 cp s3://codeztech ./ --recursive
UploadFile to AWS s3     - aws s3 sync ./ s3://codeztech --metadata-directive REPLACE --cache-control max-age=86400
DeleteFile from AWS s3   - aws s3api delete-objects --bucket codeztech --delete '{"Objects":[{"Key":"bb.txt"},{"Key":"data.csv"}]}'



Bucket Configuration - 

Permission -> Block all public access -> Off

Bucket Policy - 

{
    "Version": "2012-10-17",
    "Id": "Policy1591447049104",
    "Statement": [
        {
            "Sid": "Stmt1591447042925",
            "Effect": "Allow",
            "Principal": {
                "AWS": "*"
            },
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::codeztech/*"
        }
    ]
}

Cors Cofiguration - 

<?xml version="1.0" encoding="UTF-8"?>
<CORSConfiguration xmlns="http://s3.amazonaws.com/doc/2006-03-01/">
<CORSRule>
    <AllowedOrigin>*</AllowedOrigin>
    <AllowedMethod>GET</AllowedMethod>
    <AllowedMethod>POST</AllowedMethod>
    <AllowedMethod>PUT</AllowedMethod>
    <AllowedHeader>*</AllowedHeader>
</CORSRule>
</CORSConfiguration>

