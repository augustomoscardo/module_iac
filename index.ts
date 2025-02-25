import * as aws from "@pulumi/aws";

// Create an AWS resource (S3 Bucket)
const bucket = new aws.s3.BucketV2("primeiro-teste-bucket-pos-rocketseat", {
  bucket: "primeiro-teste-bucket-pos-rocketseat",
  tags: {
    IAC: 'true'
  }
});

// Export the name of the bucket
export const bucketName = bucket.id;
export const bucketInfo = bucket.bucket;
export const bucketArn = bucket.arn;
