export default function Contact() {
    return (
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-4">Contact Us</h1>
        <form className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="name" className="mb-1">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              required
              className="p-2 border border-gray-300 rounded"
            />
          </div>
  
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-1">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              required
              className="p-2 border border-gray-300 rounded"
            />
          </div>
  
          <div className="flex flex-col">
            <label htmlFor="message" className="mb-1">Your Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
              required
              className="p-2 border border-gray-300 rounded"
              rows="5"
            ></textarea>
          </div>
  
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded mt-4 hover:bg-blue-600"
          >
            Send
          </button>
        </form>
      </div>
    );
  }
  