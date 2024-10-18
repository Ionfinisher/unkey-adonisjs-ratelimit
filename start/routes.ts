import router from '@adonisjs/core/services/router'
import { Ratelimit } from '@unkey/ratelimit'


// Get the root key from the environment variable
const rootKey = process.env.UNKEY_ROOT_KEY!;

// Configure rate limiting with Unkey
const unkey = new Ratelimit({
  rootKey,
  namespace: "my-app",
  limit: 2,
  duration: "30s",
  async: true
})

router.get('/api/v1/public', async () => {
    return 'Heeyaaa!! Touchdown to the public and unlimited endpoint!!'
})

router.get('/api/v1/protected', async ({ request, response }) => {
    const ip = request.ip();

    const res = await unkey.limit(ip);
        if (!res.success) {
        response.status(429).send({ message: "WoW! Try again later" });
    }

    return 'Woohoo!! Touchdown to the protected endpoint!!'
})