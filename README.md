🌩️ Cloud Resume Challenge

This project is my implementation of the Cloud Resume Challenge, showcasing cloud, DevOps, and automation skills by deploying a static resume website on AWS with a CI/CD pipeline.
<br>

Project Overview
Currently, the project includes:

* A static HTML/CSS resume site.
* Hosting on S3 with global distribution via CloudFront.
* HTTPS enabled using AWS Certificate Manager (ACM).
* Custom domain configured via Route 53.
* Automated frontend deployment using GitHub Actions and an IAM user for secure S3 access.
<br>
Planned features to be added in the future:

* Visitor counter backend using Lambda functions, API Gateway, and DynamoDB.
* Infrastructure as Code (IaC) using Terraform or CloudFormation.
* Monitoring/logging via AWS CloudWatch for site and Lambda usage.

<br> 
🏗️ Architecture
<br>
<img width="766" height="272" alt="Screenshot 2025-08-23 at 4 51 17 PM" src="https://github.com/user-attachments/assets/33b33bc9-1d35-4c46-addb-38dd8f38ed8d" />

<br><br>
CI/CD Pipeline (Front end)
<br>
<img width="603" height="484" alt="Screenshot 2025-08-23 at 5 06 36 PM" src="https://github.com/user-attachments/assets/428920e7-3307-44c4-907c-d2fc518ab9b6" />

