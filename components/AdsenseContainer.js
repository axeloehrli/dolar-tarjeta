import React, { useEffect } from "react";

export default function Adsense() {
  const loadAds = () => {
    try {
      if (typeof window !== "undefined") {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (error) {
      console.log("adsense error", error.message);
    }
  };

  useEffect(() => {
    loadAds();
  }, []);

  return (
    <div 
      style={{
        margin:"12px"
      }}
    >
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-4127654850827260"
        data-ad-slot="9767327506"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
}