Deploy to S3 Bucket

Upload and Download file into S3 - 

Download from s3 bucket  - aws s3 cp s3://codeztech ./ --recursive
DeployCode to AWS s3     - aws s3 sync ./ s3://codeztech --metadata-directive REPLACE --cache-control max-age=86400
Delete from AWS s3       - aws s3api delete-objects --bucket codeztech --delete '{"Objects":[{"Key":"index.html"}]}'



