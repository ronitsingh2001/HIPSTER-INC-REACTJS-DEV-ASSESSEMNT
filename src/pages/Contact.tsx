export default function Contact() {
  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h1 className="text-3xl md:text-5xl font-bold mb-4">Contact Us</h1>

      <p className="text-lg md:text-xl mb-6">
        We'd love to hear from you! Fill out the form below and we'll get back
        to you as soon as possible.
      </p>

      <form
        className="space-y-6 bg-[var(--text-color)] p-6 rounded border "
        onSubmit={(e) => {
          e.preventDefault();
          alert("Form submitted (demo only)");
        }}
      >
        <div>
          <label
            htmlFor="name"
            className="block text-sm text-[var(--bg-color)]"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            className="mt-1 w-full px-4 py-2 border rounded-md bg-[var(--bg-color)] focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
            required
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm text-[var(--bg-color)]"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="mt-1 w-full px-4 py-2 border rounded-md bg-[var(--bg-color)] focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
            required
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm text-[var(--bg-color)]"
          >
            Message
          </label>
          <textarea
            id="message"
            rows={5}
            className="mt-1 w-full px-4 py-2 border rounded-md bg-[var(--bg-color)] focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
            required
          />
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-[var(--primary-color)] text-[var(--secondary-color)] px-6 py-2 rounded-full hover:bg-[var(--primary-color)]/80 cursor-pointer  transition"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}
