interface TwitterWidgets {
  widgets: {
    load: () => void;
    // Add other Twitter widget methods as needed
  };
}

declare interface Window {
  twttr: TwitterWidgets;
}