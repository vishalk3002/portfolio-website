function Projects() {
  return (
    <div className="p-8 border-b border-gray-700">
      <h2 className="text-2xl font-bold mb-6">Projects</h2>

      {/* Project 1 */}
      <div className="border border-gray-600 p-4 mb-6">
        <h3 className="text-xl font-semibold mb-2">Book Store API</h3>
        <p className="text-gray-400">
          JWT authentication, CRUD APIs, pagination and filtering.
        </p>
        <p className="mt-2 text-sm text-yellow-500">
          Note: If live doesn't load, refresh once (free hosting cold start).
        </p>
        <p className="text-gray-500 mt-2">Tech: Node.js, Express, MongoDB</p>

        <div className="mt-3 space-x-4">
          <a
            href="https://github.com/vishalk3002/API_project"
            className="underline"
          >
            GitHub
          </a>
          <a
            href="https://book-store-api-html-ui.vercel.app/"
            className="underline"
          >
            Live
          </a>
          <a
            href="https://www.youtube.com/watch?v=vxgJHYjpaKc"
            className="underline"
          >
            Demo
          </a>
        </div>
      </div>

      {/* Project 3 */}
      <div className="border border-gray-600 p-4 rounded-lg">
        <h3 className="text-xl font-semibold mb-2">
          ATS Resume Builder | Full Stack Web Application
        </h3>

        <p className="text-gray-400 mb-3">
          Built a modern ATS-optimized Resume Builder that enables users to
          create, edit, and manage professional resumes through a clean and
          responsive interface. Designed with a full-stack architecture using
          Next.js, TypeScript, PostgreSQL, and Supabase for scalable data
          management and real-time updates.
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          <span className="px-2 py-1 text-sm border border-gray-500 rounded">
            Next.js
          </span>
          <span className="px-2 py-1 text-sm border border-gray-500 rounded">
            TypeScript
          </span>
          <span className="px-2 py-1 text-sm border border-gray-500 rounded">
            PostgreSQL
          </span>
          <span className="px-2 py-1 text-sm border border-gray-500 rounded">
            Supabase
          </span>
          <span className="px-2 py-1 text-sm border border-gray-500 rounded">
            Tailwind CSS
          </span>
        </div>

        <ul className="list-disc list-inside text-gray-400 mb-4 space-y-1">
          <li>ATS-friendly resume creation and management.</li>
          <li>PostgreSQL database integration via Supabase.</li>
          <li>Type-safe full-stack development with TypeScript.</li>
          <li>Responsive UI optimized for desktop and mobile.</li>
          <li>Production deployment on Vercel.</li>
        </ul>

        <div className="flex gap-4">
          <a
            href="https://github.com/vishalk3002/ats-resume-builder"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            GitHub
          </a>

          <a
            href="https://vishalk3002-my-ats.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Live Demo
          </a>

          <a
            href="https://www.youtube.com/watch?v=cOQUzKhY648"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Video Demo
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
