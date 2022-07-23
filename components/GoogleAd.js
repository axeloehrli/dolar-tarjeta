import react, { useEffect } from "react";

export function GoogleAd() {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error(err);
    }
  }, []);

  return (
    <div
      style={{
        overflow: "hidden"
      }}
    >
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-7866516229172545"
        data-ad-slot="9033093666"
        data-ad-format="auto"
        data-full-width-responsive="true"
      > </ins>
    </div>
  );
}