"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    daum: {
      roughmap: {
        Lander: new (config: { timestamp: string; key: string; mapHeight: string }) => { render: () => void };
      };
    };
  }
}

export default function KakaoMap() {
  useEffect(() => {
    const loadScript = (src: string): Promise<void> =>
      new Promise((resolve, reject) => {
        if (document.querySelector(`script[src="${src}"]`)) { resolve(); return; }
        const script = document.createElement("script");
        script.src = src;
        script.onload = () => resolve();
        script.onerror = reject;
        document.body.appendChild(script);
      });

    const init = async () => {
      await loadScript("https://ssl.daumcdn.net/dmaps/map_js_init/roughmapLoader.js");
      await loadScript("https://t1.kakaocdn.net/kakaomapweb/roughmap/place/prod/207038f2_1774248312945/roughmapLander.js");
      new window.daum.roughmap.Lander({
        timestamp: "1735964821472",
        key: "2moxv",
        mapHeight: "360",
      }).render();
    };

    init();
  }, []);

  return (
    <div className="w-full rounded-xl overflow-hidden">
      <div
        id="daumRoughmapContainer1735964821472"
        className="root_daum_roughmap root_daum_roughmap_landing"
        style={{ width: "100%" }}
      />
    </div>
  );
}
