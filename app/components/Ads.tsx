"use client";

import { useEffect } from "react";

export default function Ads() {
  useEffect(() => {
    // Propeller Ads
    const script1 = document.createElement("script");
    script1.src = "https://upgulpinon.com/1?z=1234567"; // Replace with your Propeller ID
    script1.async = true;
    document.body.appendChild(script1);

    // PopAds
    const script2 = document.createElement("script");
    script2.innerHTML = `
      var popads_server = "server.popads.net";
      var popads_key = "YOUR_POPADS_KEY";
      var popads_org = "YOUR_POPADS_ORG_ID";
    `;
    document.body.appendChild(script2);

    // Adsterra
    const script3 = document.createElement("script");
    script3.src = "//pl16951877.highrevenuegate.com/7e/85/05/7e8505dca0a4c50d46f8b0e5e26a05f0.js"; 
    script3.async = true;
    document.body.appendChild(script3);

    // Google AdSense Auto Ads
    const script4 = document.createElement("script");
    script4.setAttribute("data-ad-client", "ca-pub-0000000000000000");
    script4.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
    script4.async = true;
    document.body.appendChild(script4);
  }, []);

  return null;
}
