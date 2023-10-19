const ContactUs = () => {
  return (
    <div
      className="mt-10 py-5 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url(https://i.ibb.co/85VkNgQ/peakpx.jpg)" }}
    >
      <div className="py-10 md:px-6 px-2">
        <h2 className="text-center text-textColors md:text-4xl text-xl font-extrabold">
          Contact Us
        </h2>
        <div className="divider divide-white w-3/4 mx-auto"></div>
        <div className="flex gap-10 md:flex-row flex-col">
          <div className="flex flex-col md:w-2/4 gap-6">
            <div className="h-12 flex rounded-lg bg-[#92919136] ">
              <input
                className="w-full bg-transparent p-4 text-textColors focus:outline-none"
                type="text"
                placeholder="Name"
                name=""
                id=""
              />
            </div>
            <div className="h-12 flex rounded-lg bg-[#92919136] ">
              <input
                className="w-full bg-transparent p-4 text-textColors focus:outline-none"
                type="text"
                placeholder="Email"
                name=""
                id=""
              />
            </div>
            <input
              className="btn bg-btnColors border-none text-[white] w-full text-base font-medium"
              type="submit"
              value="Send messsage"
            />
          </div>
          <div className="md:w-2/4 flex rounded-lg bg-[#92919136]">
            <input
              className="w-full h-full bg-transparent p-4 text-textColors focus:outline-none"
              type="text"
              placeholder="Message"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
