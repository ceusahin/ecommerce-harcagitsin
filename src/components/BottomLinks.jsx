function BottomLinks() {
  return (
    <div className="flex flex-col mx-10">
      <ul>
        <h2 className="font-bold mb-4 text-[#252B42]">Company Info</h2>
        <li className="mb-2 text-[#737373]">
          <a href="">About Us</a>
        </li>
        <li className="mb-2 text-[#737373]">
          <a href="">Carrier</a>
        </li>
        <li className="mb-2 text-[#737373]">
          <a href="">We are hiring</a>
        </li>
        <li className="mb-2 text-[#737373]">
          <a href="">Blog</a>
        </li>
      </ul>
      <ul>
        <h2 className="font-bold mb-4 text-[#252B42] mt-8">Legal</h2>
        <li className="mb-2 text-[#737373]">
          <a href="">About Us</a>
        </li>
        <li className="mb-2 text-[#737373]">
          <a href="">Carrier</a>
        </li>
        <li className="mb-2 text-[#737373]">
          <a href="">We are hiring</a>
        </li>
        <li className="mb-2 text-[#737373]">
          <a href="">Blog</a>
        </li>
      </ul>
      <ul>
        <h2 className="font-bold mb-4 text-[#252B42] mt-8">Features</h2>
        <li className="mb-2 text-[#737373]">
          <a href="">Business Marketing</a>
        </li>
        <li className="mb-2 text-[#737373]">
          <a href="">User Analytic</a>
        </li>
        <li className="mb-2 text-[#737373]">
          <a href="">Live Chat</a>
        </li>
        <li className="mb-2 text-[#737373]">
          <a href="">Unlimited Support</a>
        </li>
      </ul>
      <ul>
        <h2 className="font-bold mb-4 text-[#252B42] mt-8">Resources</h2>
        <li className="mb-2 text-[#737373]">
          <a href="">IOS & Android</a>
        </li>
        <li className="mb-2 text-[#737373]">
          <a href="">Watch a Demo</a>
        </li>
        <li className="mb-2 text-[#737373]">
          <a href="">Customers</a>
        </li>
        <li className="mb-2 text-[#737373]">
          <a href="">API</a>
        </li>
      </ul>
      <div className="mt-8 mb-14">
        <h2 className="font-bold mb-4 text-[#252B42]">Get In Touch</h2>
        <div className="flex rounded overflow-hidden border border-gray-300 mb-2">
          <input
            type="email"
            placeholder="Your Email"
            className="px-4 py-2 w-full focus:outline-none"
          />
          <button className="bg-[#23A6F0] text-white px-4 py-3">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}

export default BottomLinks;
