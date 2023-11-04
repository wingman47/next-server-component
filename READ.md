# React Server Side and React Client Side Components
By default all the pages in NextJS are server components (React Server Component) which provides all the benefits of SSR like:
    - all the data is pre fetched
    - better SEO
    - high performance
    - no computations on client side
    - complete component is created on the server side
    - lesser JS code to client side

disadvantages:
    - not allowed to use react hooks (solution below)

An example of server side component in NextJS
```js
export default async function Home() {
    const someAPI = async () => {
        // fetch some API and return it as json
    }

    return (
        // render the data recieved from API
    )
}
```

BUT a major drawback of React Server Component is that we cannot use client side hooks of react like useState etc. Therefore if we want to create something, say a count increment button using useState hook it won't be possible.

To fix this we can specify "use client" on top but then we will loose all the benefits of SSR.

Now to fix this issue we can create a separate components directory where we create client side React component and simply import that component in our server component. This gives the best of both the worlds.

This whole approach breaks parts of webpage in CSR and SSR which increases the performance of the website.

# Server Actions:
It allow you to run functions on the server, but that you can call from the client, just like a normal function. It allows us to run code on the
server. Server Actions can help to reduce the amount of JavaScript that needs to be executed on the client, which can improve performance and make your application more responsive. Server actions are useful for performing operations that require access to databases, file systems, or APIs that are not exposed to the client.

# Options you can provide inside the fetch method in Next.js:
# cache:
This option configures how the request should interact with Next.js Data Cache. You can use one of the following values:
    - force-cache (default): Next.js looks for a matching request in its Data Cache and returns it if it is fresh. If not, it
    fetches the resource from the remote server and updates the cache.
    - no-store: Next.js fetches the resource from the remote server on every request without looking in the cache, and it does
    not update the cache with the downloaded resource.

# next: 
This option is a custom object that contains some Next.js specific options. You can use the following properties:
    - revalidate: This property sets the cache lifetime of a resource (in seconds). You can use one of the following values:
    - false: Cache the resource indefinitely.
    - 0: Prevent the resource from being cached.
    - A positive number: Specify the resource should have a cache lifetime of at most n seconds.

# tags: 
This property is an array of strings that specify some metadata for the data fetching. You can use tags to perform conditional fetching based on the tags.
For example, you can use the useSWR hook to fetch data with tags and revalidate them on demand.
