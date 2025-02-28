'use client';

import Script from 'next/script';
import PageContainer from '@/components/PageContainer';
import { useEffect } from 'react';

export default function Tweets() {
  useEffect(() => {
    // Clean up any existing Twitter widgets
    if (window.twttr) {
      window.twttr.widgets.load();
    }
  }, []);

  return (
    <PageContainer>
      <h1 className="text-3xl font-bold mb-8">My Tweets</h1>
      <div className="w-full max-w-2xl mx-auto">
        <div id="twitter-timeline" className="min-h-[600px]">
          <a
            className="twitter-timeline"
            data-theme="dark"
            data-chrome="noheader nofooter noborders transparent"
            data-height="600"
            data-dnt="true"
            data-tweet-limit="5"
            href="https://twitter.com/minarizkoffical"
          >
            Loading tweets...
          </a>
        </div>
        <Script
          src="https://platform.twitter.com/widgets.js"
          strategy="afterInteractive"
        />
      </div>
    </PageContainer>
  );
}
