This is a starter template for [Learn Next.js](https://nextjs.org/learn).

# NEXT-JS

## Create NEXT JS app

```sh
npx create-next-app@latest nextjs-blog --use-npm --example "https://github.com/vercel/next-learn/tree/master/basics/learn-starter"
```

## run NEXT.JS app

```sh
npm run dev

then visit: http://localhost:3000
```

Pages - create pages and contain files with react components

## Link Navigation

```js
import Link from 'next/link';

<Link href="/">home</Link>

or

<Link href="/posts/first-post">First Post</Link>
```

| imlnk→ | import Link |
| --- | --- |
| nlnk→ | Use Link |
| nlnkpath→ | Next Link tag with pathname; |
| nlnkdyn→ | Next Link tag with dynamic route; |

## Images

Save images in an **images** folder in the **Public** directory

| imimg→ | import Image |
| --- | --- |
| nimg→ | Use sized image |

```js
import Image from 'next/image';

const YourComponent = () => (
  <Image
    src="/images/profile.jpg" // Route of the image file
    height={144} // Desired size with correct aspect ratio
    width={144} // Desired size with correct aspect ratio
    alt="Your Name"
  />
);
```

## HEAD and SCRIPT tags

HEAD - Change the text in the tab

SCRIPT - Add in external 3rd party things, facebook, font awesome etc

```js
import Head from "next/head";
import Script from 'next/script';

export default function FirstPost() {
    return (
        <>
        **<Head>
            <title>First Post</title>
        </Head>**

        **<Script
        src="https://kit.fontawesome.com/f09a77e663.js" 
        crossorigin="anonymous"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, FontAwesome has been populated`)
        }
      />**

        <h1>First Post</h1>
        
        <h1>
            Go back <Link href="/" **className="fa-solid fa-house"**></Link>
        </h1>
        

        </>
    )
}
```

![Screenshot 2023-07-21 at 13.57.38.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/9a38b9d2-2c41-4d82-9398-dbd241b9fa36/Screenshot_2023-07-21_at_13.57.38.png)

## CSS Styling

in the Styles directory

- You can have global CSS

```css
html,
body {
  padding: 0;
  margin: 0;
  font-family: Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}

img {
  max-width: 100%;
  height: auto;
}

h1,
h2,
p,
ul {
  margin: 0;
}

ul {
  padding: 0;
  list-style: none;
}

button {
  padding: 0.5rem 1rem;
  font-weight: bold;
}
```

- CSS files liked to each page. Must be named by the component name followed by module.css

```js
Home.module.css

.container {
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

Then pulled in to the component by

import Head from 'next/head';
**import styles from '../styles/Home.module.css';**
import Link from 'next/link';

export default function Home() {
  return (
    <div **className={styles.container}**>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
```

- You can create a components directory with a layout.js and a layout.module.css file and create a styled component that can be reused.

```js

components/layout.js

import styles from './layout.module.css'

export default function Layout({ children }) {
    return <div className={styles.container}>{children}</div>;
  }

components/layout.module.css

.container {
    max-width: 36rem;
    padding: 0 1rem;
    margin: 3rem auto 6rem;
    border: solid black 2px;  
    display: flex; 
    justify-content: space-evenly;
  }

pages/posts/first-post.js

import Link from "next/link"
import Image from 'next/image';
import Head from "next/head";
import Script from 'next/script';
**import Layout from "../../components/layout";**

export default function FirstPost() {
    return (
        <**Layout**>

            <Head>
                <title>First Post</title>
            </Head>

            <Script
            src="https://kit.fontawesome.com/f09a77e663.js" 
            crossorigin="anonymous"
            strategy="lazyOnload"
            onLoad={() =>
            console.log(`script loaded correctly, FontAwesome has been populated`)
            }
             />
            <div>
                <h1>First Post</h1>

                <Image
                src="/images/profile.png" // Route of the image file
                height={144} // Desired size with correct aspect ratio
                width={144} // Desired size with correct aspect ratio
                alt="Your Name"
                />

            <h1>
                Go back <Link href="/" className="fa-solid fa-house"></Link>
            </h1>
                
            </div>

        </**Layout**>
    )
}
```

![Screenshot 2023-07-21 at 14.48.59.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f1092c62-82c2-4e7e-b3f2-d6c172ec24f8/Screenshot_2023-07-21_at_14.48.59.png)

## STATE and GLOBAL CSS

Create a file pages/_app.js

This top-level component will wrap up all the other components, and State can live here. 

You need to restart the dev server after adding _app.js

```js
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />;
  }
```

styles/globals.css

```jsx=
html,
body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,
    Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  line-height: 1.6;
  font-size: 18px;
}

* {
  box-sizing: border-box;
}

a {
  color: #0070f3;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

img {
  max-width: 100%;
  display: block;
}
```

## Structure

pages/_app.js  - TOP LEVEL

components/layout.js  - Like Base HTML, creates a wrapper component - wraps its children

pages/index.js - if this is wrapped in <Layout> then its a child wrapped in the above component

<Layout home> Layout can have a bool prop to use to conditional render things.

![Screenshot 2023-07-22 at 09.04.20.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b6f40ca9-9fbe-4d19-aa83-32521374b8ff/Screenshot_2023-07-22_at_09.04.20.png)

## Conditional CSS

Use this cool library to do this.

### Using `clsx` library to toggle classes

`[clsx](https://www.npmjs.com/package/clsx)` is a simple library that lets you toggle class names easily. You can install it using `npm install clsx` or `yarn add clsx`.

Please take a look at its [documentation](https://github.com/lukeed/clsx) for more details, but here's the basic usage:

- Suppose that you want to create an `Alert` component which accepts `type`, which can be `'success'` or `'error'`.
- If it's `'success'`, you want the text color to be green. If it's `'error'`, you want the text color to be red.

You can first write a CSS module (e.g. `alert.module.css`) like this:

```css
.success {
  color: green;
}
.error {
  color: red;
}

```

And use `clsx` like this:

```js
import styles from './alert.module.css';
import { clsx } from 'clsx';

export default function Alert({ children, type }) {
  return (
    <div
      className={clsx({
        [styles.success]: type === 'success',
        [styles.error]: type === 'error',
      })}>
      {children}
    </div>);
}
```

## Using Tailwind or other CSS libraries (you need to create postcss.config.js

### Customizing PostCSS Config

Out of the box, with no configuration, Next.js compiles CSS using [PostCSS](https://postcss.org/).

To customize PostCSS config, you can create a top-level file called `[postcss.config.js](https://nextjs.org/docs/advanced-features/customizing-postcss-config#customizing-plugins)`. This is useful if you're using libraries like [Tailwind CSS](https://tailwindcss.com/).

Here are the steps to add [Tailwind CSS](https://tailwindcss.com/). First, install the packages:

```sh
npm install -D tailwindcss autoprefixer postcss

```

Then, create a `[postcss.config.js](https://nextjs.org/docs/advanced-features/customizing-postcss-config#customizing-plugins)`:

```js
// postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};

```

We also recommend [configuring content sources](https://tailwindcss.com/docs/content-configuration) by specifying the `content` option on `tailwind.config.js`:

```js
// tailwind.config.js
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    // For the best performance and to avoid false positives,
    // be as specific as possible with your content configuration.
  ],
};

```

> To learn more about custom PostCSS configuration, check out the documentation for PostCSS.
> 

> To easily get started with Tailwind CSS, check out our example.
> 


## 4 **Pre-rendering and Data Fetching**
