import { FiMail } from "react-icons/fi";

function Contact() {
  return (
    <section
      id='contact'
      className='min-h-screen bg-gray-900 text-white flex items-center justify-center py-20 font-mono'
    >
      <div className='container mx-auto px-4'>
        <h2 className='text-4xl font-bold mb-12 text-center'>
          Get in <span className='text-teal-400'>Touch</span>
        </h2>

        <div className='max-w-4xl mx-auto bg-gray-800 rounded-lg shadow-lg p-8 md:p-12'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
            {/* Contact Info */}
            <div>
              <h3 className='text-2xl font-bold mb-4'>Let's Connect</h3>
              <p className='text-gray-400 mb-6'>
                Have a project in mind or just want to say hi? Feel free to
                reach out. I'm always open to discussing new opportunities.
              </p>
              <div className='space-y-4'>
                <div className='flex items-center gap-4'>
                  <FiMail className='text-teal-400' size={24} />
                  <a
                    href='mailto:niroopvs@gmail.com'
                    className='text-gray-300 hover:text-teal-400'
                  >
                    nife.niroopn@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form
              action='https://formsubmit.co/niroopvs@gmail.com'
              method='POST'
              className='space-y-6'
            >
              <div>
                <label htmlFor='name' className='block text-gray-400 mb-2'>
                  Name
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  required
                  className='w-full bg-gray-700 border border-gray-600 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-teal-400 transition'
                />
              </div>
              <div>
                <label htmlFor='email' className='block text-gray-400 mb-2'>
                  Email
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  required
                  className='w-full bg-gray-700 border border-gray-600 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-teal-400 transition'
                />
              </div>
              <div>
                <label htmlFor='message' className='block text-gray-400 mb-2'>
                  Message
                </label>
                <textarea
                  id='message'
                  name='message'
                  rows={5}
                  required
                  className='w-full bg-gray-700 border border-gray-600 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-teal-400 transition'
                ></textarea>
              </div>
              <button
                type='submit'
                className='w-full bg-gradient-to-r from-teal-500 to-indigo-600 text-white py-3 px-6 rounded-md font-semibold hover:opacity-90 transition-opacity'
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
