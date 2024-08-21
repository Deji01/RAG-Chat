import { Redis } from '@upstash/redis'

const redis = Redis.fromEnv();
 
// Redis({
//     url: process.env.UPSTASH_VECTOR_REST_URL,
//     token: process.env.UPSTASH_VECTOR_REST_TOKEN,
//   });

export default redis;