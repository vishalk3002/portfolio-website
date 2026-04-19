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

      {/* Project 2 */}
      <div className="border border-gray-600 p-4">
        <h3 className="text-xl font-semibold mb-2">Shoe Store</h3>
        <p className="text-gray-400">
          React UI with API integration and dynamic product listing.
        </p>

        <div className="mt-3 space-x-4">
          <a
            href="https://github.com/vishalk3002/shoe-store-vk"
            className="underline"
          >
            GitHub
          </a>
          <a
            href="https://shoe-store-reactjs.vercel.app/"
            className="underline"
          >
            Live
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
