import UrlShortenerForm from "./components/UrlShortenerForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <section className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">URL Shortener</h1>
        <p className="text-gray-600 mb-8 max-w-md">
          Transform your long URLs into short, shareable links
        </p>
        <UrlShortenerForm />
      </section>
    </main>
  );
}
