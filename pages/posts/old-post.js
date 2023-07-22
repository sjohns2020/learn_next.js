import Link from "next/link"
import Image from 'next/image';
import Head from "next/head";
import Script from 'next/script';
import Layout from "../../components/layout";



export default function FirstPost() {
    return (
        <Layout>

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
                Back to home <Link href="/" className="fa-solid fa-house"></Link>
            </h1>
                
            </div>

        </Layout>
    )
}