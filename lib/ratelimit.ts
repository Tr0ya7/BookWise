import redis from "@/database/redis"
import { Ratelimit } from "@upstash/ratelimit"

// create a ratelimit, 5 requests per 1 minute
const ratelimit = new Ratelimit({ redis, limiter: Ratelimit.fixedWindow(5, "1m"), analytics: true, prefix: "@upstash/ratelimit" })

export default ratelimit