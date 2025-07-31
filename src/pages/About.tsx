export default function About() {
  return (
    <div className="p-4 md:px-8">
      <h1 className="text-3xl mb-4">
        About This Project
      </h1>

      <p className="max-w-2xl">
        This multi-theme switcher app is a demo project built with React, Vite, Tailwind CSS, and TypeScript. It showcases how to implement dynamic theming, responsive layouts, and API integration with clean architecture.
      </p>

        <div className="aspect-video rounded flex items-center justify-center">
            <img src="./about.png" alt="" />
        </div>

      <section>
        <h2 className="text-2xl mb-4">Key Features</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>🔁 Three distinct themes with different layouts, fonts, and styles</li>
          <li>💾 Persistent theme selection using localStorage</li>
          <li>🌐 API integration using [FakeStoreAPI](https://fakestoreapi.com/)</li>
          <li>📱 Fully responsive layout for mobile and desktop</li>
          <li>⚛️ Powered by React, Tailwind CSS, and Vite</li>
        </ul>
      </section>
    </div>
  );
}
