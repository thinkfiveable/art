import Head from 'next/head'

export default function Meta() {
    const title = "Art Showcase | Fiveable";
    const description = "Fiveable Art showcase description";
    const searchBarColor = "#ffffff";
    const darkSearchBarColor = "#000000";
    const keywords = "art, STEM, Fiveable";
    const author = "ThinkFiveable";
    const twitter = "@thinkfiveable";
    const url = "https://art.fiveable.me"; 
    //const image = "/ogimage.png";
    return (
        <Head>
            <meta charSet="utf-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width,initial-scale=1" />
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="author" content={author} />
            <meta name="theme-color" content={searchBarColor} media="(prefers-color-scheme: light)" />
            {darkSearchBarColor ? <meta name="theme-color" content={darkSearchBarColor} media="(prefers-color-scheme: dark)" /> : ''}
            {url ? <meta property="og:url" content={url} /> : ''}
            <meta property="og:type" content="website" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            {/* <meta property="og:image" content={image} /> */}
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content={twitter} />
            <meta name="twitter:creator" content={twitter} />
        </Head>
    )
}