// Helper function to inject meta tags
function injectMeta(name, content) {
    const meta = document.createElement('meta');
    meta.name = name;
    meta.content = content;
    document.head.appendChild(meta);
  }
  
  // Inject common meta tags
  document.charset = commonData.meta.charset;
  injectMeta('viewport', commonData.meta.viewport);
  injectMeta('theme-color', commonData.meta.themeColor);
  
  // Inject page-specific meta tags
  document.title = pageSpecificData.title;
  injectMeta('description', pageSpecificData.meta.description);
  injectMeta('keywords', pageSpecificData.meta.keywords);
  injectMeta('author', pageSpecificData.meta.author);
  
  // Inject Open Graph tags
  Object.keys(pageSpecificData.openGraph).forEach(key => {
    const ogMeta = document.createElement('meta');
    ogMeta.setAttribute('property', `og:${key}`);
    ogMeta.content = pageSpecificData.openGraph[key];
    document.head.appendChild(ogMeta);
  });
  
  // Inject common Open Graph tags
  const ogSiteName = document.createElement('meta');
  ogSiteName.setAttribute('property', 'og:site_name');
  ogSiteName.content = commonData.openGraph.siteName;
  document.head.appendChild(ogSiteName);
  
  const ogLocale = document.createElement('meta');
  ogLocale.setAttribute('property', 'og:locale');
  ogLocale.content = commonData.openGraph.locale;
  document.head.appendChild(ogLocale);
  
  // Inject favicons
  commonData.favicon.forEach(fav => {
    const link = document.createElement('link');
    link.rel = fav.rel;
    link.href = fav.href;
    if (fav.sizes) link.sizes = fav.sizes;
    if (fav.type) link.type = fav.type;
    document.head.appendChild(link);
  });
  
  // Inject stylesheets
  commonData.stylesheets.forEach(stylesheet => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = stylesheet;
    document.head.appendChild(link);
  });
  
  // Inject page-specific stylesheets
  pageSpecificData.stylesheets.forEach(stylesheet => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = stylesheet;
    document.head.appendChild(link);
  });
  
  // Inject scripts
  const gaScript = document.createElement('script');
  gaScript.async = true;
  gaScript.src = commonData.scripts.googleAnalytics.script;
  document.head.appendChild(gaScript);
  
  const customGAScript = document.createElement('script');
  customGAScript.defer = true;
  customGAScript.src = commonData.scripts.googleAnalytics.src;
  document.head.appendChild(customGAScript);
  
  // Common scripts
  commonData.scripts.commonScripts.forEach(script => {
    const scriptTag = document.createElement('script');
    scriptTag.src = script;
    document.body.appendChild(scriptTag);
  });
  