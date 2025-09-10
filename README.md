## Cloud Resume Challenge

This project is my implementation of the Cloud Resume Challenge, showcasing cloud, DevOps, and automation skills by deploying a static resume website on AWS with a CI/CD pipeline.

I’m still early in my coding journey, but this project focuses on designing, deploying, and securing AWS resources to deliver a working cloud-based resume site.

<br>

<a href="https://resume.itinteang-cloud.co.nz" target="_blank">Checkout my Resume on the AWS Cloud here!</a>

<br>

## Project Overview

# Currently implemented:

* Frontend: Static HTML/CSS resume site hosted on S3.
* Global Distribution: Served worldwide via CloudFront.

* Security: HTTPS with AWS Certificate Manager (ACM).

* Custom Domain: Managed through Route 53.

* CI/CD Pipeline: Automated deployments with GitHub Actions, pushing updates securely to S3 and invalidating CloudFront cache.

* Dynamic Backend: Visitor counter powered by AWS Lambda, exposed via API Gateway, with persistent storage in DynamoDB.

# Planned improvements:

* Infrastructure as Code (IaC): Migrate to Terraform for repeatable deployments.
* Monitoring & Logging: Use CloudWatch dashboards, metrics, and alarms to track performance and usage.
* Security Enhancements: Apply least-privilege IAM policies and explore adding AWS WAF for protection.

<br> 
<img width="580" height="398" alt="Screenshot 2025-09-10 at 9 03 09 PM" src="https://github.com/user-attachments/assets/92b8b5c9-28f6-4a57-8753-1a27323564b2" />

<br><br>
## Tech Stack

- Frontend: HTML, CSS (custom design)
- Cloud Provider: AWS (S3, CloudFront, Route 53, ACM, IAM, Lambda, API Gateway, DynamoDB)
- CI/CD: GitHub Actions
