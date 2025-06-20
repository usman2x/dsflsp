import React from "react";
import { Helmet } from "react-helmet";
import seoData from "../data/seo.json";


const siteUrl = process.env.GATSBY_SITE_URL || "http://localhost:9000/test";

const SEO = ({ title, description, keywords, image, url }) => {
  const {
    title: defaultTitle,
    descriptions: defaultDescription,
    keywords: defaultKeywords
  } = seoData;

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    keywords: keywords || defaultKeywords,
    image: image || `${siteUrl}/images/washing-dryer.jpg`,
    url: url || siteUrl,
  };

  return (
    <Helmet>
      <html lang="ar" dir="rtl" />
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="keywords" content={seo.keywords} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={seo.url} />

      {/* Open Graph */}
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="ar_AR" />
    </Helmet>
  );
};

export default SEO;
