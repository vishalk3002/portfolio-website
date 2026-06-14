import IMG from "../assets/me1.jpeg";

function Header() {
  return (
    <div className="border-b border-gray-700 p-8 flex flex-col md:flex-row justify-between items-center">
      {/* Left */}
      <div className="max-w-xl">
        <h1 className="text-3xl font-bold mb-2">Vishal Kumar</h1>

        <p className="text-gray-400 mb-2">
          Full Stack Developer (Next.js • Node.js • PostgreSQL)
        </p>

        <p className="text-gray-300">
          Building modern full-stack web applications with React, Next.js,
          Node.js, PostgreSQL, and Supabase. Focused on scalable backend
          systems, clean user experiences, and production-ready deployments.
        </p>

        {/* Social Links */}
        <div className="mt-4 space-x-4">
          <a
            href="https://www.linkedin.com/in/vishal-kumar-8000aa256/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/vishalk3002"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            GitHub
          </a>
        </div>

        {/* Contact Info */}
        <div className="mt-3 text-gray-400 text-sm">
          <p>Email: vk8352801@gmail.com</p>
          <p>Phone: +91 8197843533</p>
        </div>
      </div>

      {/* Right */}
      <div className="mt-6 md:mt-0">
        <div className="w-32 h-32 overflow-hidden rounded-lg border border-gray-600">
          <img
            src={IMG}
            alt="Vishal Kumar"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
