const commonData = {
    meta: {
      charset: "UTF-8",
      viewport: "width=device-width, initial-scale=1.0",
      themeColor: "#212121"
    },
    favicon: [
      { rel: "apple-touch-icon", href: "/Assets/Favicon/apple-touch-icon.png", sizes: "180x180" },
      { rel: "icon", href: "/Assets/Favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { rel: "icon", href: "/Assets/Favicon/favicon-194x194.png", sizes: "194x194", type: "image/png" },
      { rel: "icon", href: "/Assets/Favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" }
    ],
    msapplication: {
      tileColor: "#ffc40d",
      tileImage: "/Assets/Favicon/mstile-144x144.png",
      config: "/Assets/Favicon/browserconfig.xml"
    },
    stylesheets: [
      "/Assets/Code/Stylesheets/Common/reset.css",
      "/Assets/Code/Stylesheets/Common/variables.css",
      "/Assets/Code/Stylesheets/Common/base.css",
      "/Assets/Code/Stylesheets/Common/sidebar.css",
      "/Assets/Code/Stylesheets/Common/buttons.css",
      "/Assets/Code/Stylesheets/Common/animations.css"
    ],
    openGraph: {
      siteName: "John Ogletree",
      locale: "en_US"
    },
    scripts: {
      googleAnalytics: {
        script: "https://www.googletagmanager.com/gtag/js?id=G-MWBBDTBW9Y",
        src: "/Assets/Code/Javascript/google-analytics.js"
      },
      commonScripts: [
        "/Assets/Code/Javascript/nav-toggle.js",
        "/Assets/Code/Javascript/footer.js"
      ]
    }
  };
  