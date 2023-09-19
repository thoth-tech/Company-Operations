# Hosting Thoth Tech Documentation

## A comprehensive Guide by Quinn Curtis

Company operations has made great strides in developing the documentation website this trimester,
which means that it is time for deploying the website is our main priority before we can launch.

## The options

currently, the best options for hosting the starlight-based documentation website are as follows:

- Github Pages
- CloudFlare Pages
- Netlify
- Vercel

while each of these tools is great in their own way, it is important to consider the context of our
website.

- The documentation website is a static website. We will not need dynamic web hosting.
- It is a very simple Astro application, meaning that there is no real need for SSR, but it would be
  nice to have the option for it, should we want to expand the UI or functionality in the future.
- Being a website specific to Thoth Tech, it is unlikely the website will need a ton of bandwidth,
  ram, or storage.

Let's look at our options in a bit more depth.

### Github Pages

- Pros
  - Github pages is completely free.
  - It can be quickly and easily be updated from an existing repo.
  - Reliable. Github has an excellent reputation for uptime and stability.
- Cons
  - Limited to Github URLs
  - Cap on bandwidth per month: 100GB
  - Does not support SSR

### Cloudflare Pages

- Pros

  - An extremely secure platform backed by one of the most recognizable names in networking.
  - It comes with a very strong and compelling free tier. for free you can build a site 500 times
    per month, and there is unlimited static requests and bandwidth.

- Cons
  - The most expensive paid option of the bunch. While it is $20/mo at its most basic paid tier, and
    that's if you bill it annually. When billed monthly, it comes out to a whopping $25 per month.
  - It is also the newest of the bunch, meaning that there is a little less documentation and
    support available.

### Netlify

- Pros
  - Netlify has free (and automated) SSL configuration out of the box.
  - It has its own form submission system and user authentication system should we need it down the
    line
  - Cheapest paid tier.
- Cons
  - Paid. There is a free option but it is very limited in scope. The next tier costs 19$ USD per
    month to keep running.
  - Deployment times are based on payment tier.

### Vercel

- Pros
  - Also has SSL configuration, but it is a bit more involved.
  - Very reliable, and has the quickest deployment time at a free level.
- Cons
  - Pushes Next.js integration, not that that's a bad thing, but our project does not use it, so
    it's a bit of a waste.
  - No form submission or user control built in.

## Comparing the bunch

Okay, so now that we have a basic idea of each product, how do they hold up against each other?

|                               | Github Pages | Cloudflare Pages | Netlify | Vercel |
| ----------------------------- | ------------ | ---------------- | ------- | ------ |
| Github integration            | ✔️           | ✔️               | ✔️      | ✔️     |
| Free tier                     | ✔️           | ✔️               | ✔️      | ✔️     |
| Viable Paid Tier              | N/A          |                  | ✔️      | ✔️     |
| Custom URLs                   |              | ✔️               | ✔️      | ✔️     |
| SSR Support                   |              | ✔️               | ✔️      | ✔️     |
| Forms and User Authentication |              |                  | ✔️      |        |

## Conclusions

While all of these deployment options would fit our needs in one way or another, Netlify stands out
as the winner. Allowing for custom URLs and being able to deploy straight from the company Github
are things that are invaluable to the operations team. The other options just do not keep up when
comparing price to features. Netlify has a great inbuilt system for forms and user control if the
company ever needed them in the future. Given the comparison above and the pros and cons listed, the
operations team will be going with Netlify.
