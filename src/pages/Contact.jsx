function Contact() {
  return (
    <div className="flex flex-col items-center justify-center flex-1 text-center p-4">
      <div className="flex flex-col space-y-4 text-lg">
        <a href="mailto:panaguzhiyev@gmail.com" className="text-gray-500 hover:text-white transition duration-200">
          Email
        </a>
        <a href="https://t.me/monogonal" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition duration-200">
          Telegram
        </a>
        <a href="https://github.com/l3333t" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition duration-200">
          GitHub
        </a>
      </div>
    </div>
  );
}

export default Contact;
