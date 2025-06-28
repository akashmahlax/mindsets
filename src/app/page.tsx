import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col items-center justify-center px-4 py-12 font-sans text-gray-800">
      {/* Hero Section */}
      <section className="w-full max-w-3xl text-center mb-16">  
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-blue-700">
          Mind Sets
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 mb-6">
          Your trusted platform for mental health support. Connect with
          professional counsellors, book sessions, and access resources—all in
          one secure app.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-6">
          
          <Link
            href="/request-delete"
            className="border border-blue-600 text-blue-700 hover:bg-blue-50 font-semibold px-6 py-3 rounded-full transition"
          >
            Delete your Data
          </Link>
          <Link
            href="/privacy-policy"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full shadow transition"
          >
            Privacy Policy
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
      >
        <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
          <span className="text-blue-600 text-3xl mb-2">💬</span>
          <h2 className="text-xl font-bold mb-2">Chat & Video Sessions</h2>
          <p className="text-gray-600 text-center">
            Securely message or video call with licensed mental health
            professionals. All conversations are encrypted and confidential.
          </p>
        </div>
        <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
          <span className="text-green-600 text-3xl mb-2">🧑‍⚕️</span>
          <h2 className="text-xl font-bold mb-2">Verified Counsellors</h2>
          <p className="text-gray-600 text-center">
            Browse and connect with experienced, verified counsellors
            specializing in anxiety, depression, relationships, and more.
          </p>
        </div>
        <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
          <span className="text-purple-600 text-3xl mb-2">📅</span>
          <h2 className="text-xl font-bold mb-2">Easy Session Booking</h2>
          <p className="text-gray-600 text-center">
            Book, manage, and track your therapy sessions with a simple,
            intuitive interface. Get reminders and never miss an appointment.
          </p>
        </div>
        <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
          <span className="text-yellow-500 text-3xl mb-2">📚</span>
          <h2 className="text-xl font-bold mb-2">Resources & Articles</h2>
          <p className="text-gray-600 text-center">
            Access a library of mental health articles, guides, and self-help
            resources curated by professionals.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full max-w-2xl text-center mt-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-700">
          Start Your Wellness Journey
        </h2>
        <p className="mb-6 text-gray-700">
          Join MindHeal today and take the first step towards better mental
          health. Your privacy and well-being are our top priorities.
        </p>
        <a
          href="https://play.google.com/store/apps/details?id=com.mindheal.app"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full shadow transition"
        >
          Download the App
        </a>
      </section>

      {/* Footer */}
      <footer className="w-full text-center mt-16 text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} MindHeal. All rights reserved.
      </footer>
    </main>
  );
}
