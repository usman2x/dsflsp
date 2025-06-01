import React from "react";
import { Helmet } from "react-helmet";
import seoData from "../data/seo.json";

const SEO = () => {

  const {
    keywords = "",
    descriptions: description = "",
    title: title = ""
  } = seoData;

  return (
    <Helmet>
      <html lang="ar" dir="rtl" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="ar_AR" />
      <meta property="og:url" content="https://yourwebsite.com/" />
      <meta property="og:image" content="https://yourwebsite.com/images/default-og.jpg" />
    </Helmet>
  );
};

export default SEO;
