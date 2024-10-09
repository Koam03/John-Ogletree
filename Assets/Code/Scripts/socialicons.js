const socialIcons = [
    { href: "https://www.youtube.com/@johnogletree187", src: "Assets/Media/Images/Social Icons/Youtube.png", alt: "YouTube" },
    { href: "https://wa.me/+17064146157", src: "Assets/Media/Images/Social Icons/WhatsApp.png", alt: "WhatsApp" },
    { href: "https://x.com/john_ogletre", src: "Assets/Media/Images/Social Icons/X.png", alt: "Twitter (X)" },
    { href: "https://www.tiktok.com/@therealkoam?lang=en", src: "Assets/Media/Images/Social Icons/Tiktok.png", alt: "TikTok" },
    { href: "https://www.threads.net/@the.real.john.ogletree", src: "Assets/Media/Images/Social Icons/Threads.png", alt: "Threads" },
    { href: "https://open.spotify.com/artist/2zkt79WuEkzY4Pao6GKft5?si=0C1VjaCXQ1KGmxFguac59w", src: "Assets/Media/Images/Social Icons/Spotify.png", alt: "Spotify" },
    { href: "https://www.snapchat.com/add/koam_03?share_id=zMX_9gO_l68&locale=en-US", src: "Assets/Media/Images/Social Icons/Snapchat.png", alt: "Snapchat" },
    { href: "https://www.pinterest.com/jo783750/", src: "Assets/Media/Images/Social Icons/Pinterest.png", alt: "Pinterest" },
    { href: "https://www.behance.net/johnogletree", src: "Assets/Media/Images/Social Icons/Behance.png", alt: "Behance" },
    { href: "https://vimeo.com/user111673083", src: "Assets/Media/Images/Social Icons/Vimeo.png", alt: "Vimeo" },
    { href: "https://www.instagram.com/the.real.john.ogletree/", src: "Assets/Media/Images/Social Icons/Instagram.png", alt: "Instagram" },
    { href: "https://g.dev/koam03", src: "Assets/Media/Images/Social Icons/Google Developers.png", alt: "Google Developers" },
    { href: "https://github.com/Koam03", src: "Assets/Media/Images/Social Icons/Github.png", alt: "GitHub" },
    { href: "https://www.facebook.com/profile.php?id=61554807376438", src: "Assets/Media/Images/Social Icons/Facebook.png", alt: "Facebook" },
    { href: "https://dribbble.com/OGLE2003", src: "Assets/Media/Images/Social Icons/Dribble.png", alt: "Dribbble" },
    { href: "https://discord.gg/CsaU6DgT7P", src: "Assets/Media/Images/Social Icons/Discord.png", alt: "Discord" },
    { href: "https://www.backstage.com/u/yourprofile", src: "Assets/Media/Images/Social Icons/Youtube.png", alt: "Backstage" },
    { href: "https://calendly.com/koam03", src: "Assets/Media/Images/Social Icons/Calendly.png", alt: "Calendly" },
    { href: "https://cash.app/$koam03", src: "Assets/Media/Images/Social Icons/CashApp.png", alt: "CashApp" },
    { href: "https://www.paypal.com/paypalme/OgletreeMartinezGA", src: "Assets/Media/Images/Social Icons/Paypal.png", alt: "Paypal" },
    { href: "https://dot.cards/koam", src: "Assets/Media/Images/Social Icons/Dot.png", alt: "Dot" },
    { href: "tel:+7064146157", src: "Assets/Media/Images/Social Icons/Phone.png", alt: "Phone" },
    { href: "mailto:jo783750@gmail.com", src: "Assets/Media/Images/Social Icons/Email.png", alt: "Email" }
  ];  
  
  const socialIconsCarousel = document.getElementById("social-icons-carousel");
  
  // Function to display icons in the carousel
  function displayIcons() {
    // Append each icon twice to create a seamless loop
    for (let i = 0; i < socialIcons.length * 2; i++) {
      const icon = socialIcons[i % socialIcons.length]; // Loop through the icons array
      const a = document.createElement('a');
      a.href = icon.href;
      a.target = "_blank";
      a.title = icon.alt;
  
      const img = document.createElement('img');
      img.src = icon.src;
      img.alt = icon.alt;
  
      a.appendChild(img);
      socialIconsCarousel.appendChild(a);
    }
  }
  
  // Call the function to display icons
  displayIcons();
  