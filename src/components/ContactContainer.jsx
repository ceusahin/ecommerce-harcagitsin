import {
  Facebook,
  Instagram,
  Twitter,
  Phone,
  MapPin,
  Send,
  CornerRightDown,
} from "lucide-react";
import contactFam from "../images/contact-family.png";

function ContactContainer() {
  return (
    <>
      <div className="lg:flex lg:flex-row lg:justify-around">
        <div className="flex flex-col gap-6 items-center justify-center mx-10 text-center lg:text-left lg:items-start lg:gap-14">
          <h2 className="text-[16px] text-[#252B42] font-semibold">
            CONTACT US
          </h2>
          <h1 className="font-bold text-[#252B42] text-[40px] lg:text-[58px]">
            Get in touch today!
          </h1>
          <p className="text-[#737373] font-semibold text-[20px]">
            We know how large objects will act, but things on a small scale just
            do not act that way.
          </p>
          <a
            href="tel:+90 123 456 7890"
            className="text-[#252B42] text-2xl font-bold"
          >
            Phone ; +90 123 456 7890
          </a>
          <a
            href="tel:+90 123 456 7890"
            className="text-[#252B42] text-2xl font-bold"
          >
            Fax ; +90 123 456 7890
          </a>
          <div className="flex flex-row gap-6 scale-125 lg:mx-18 lg:scale-200 lg:mt-10">
            <Twitter />
            <Facebook />
            <Instagram />
          </div>
        </div>
        <div className="border border-[#FFE9EA] bg-[#FFE9EA] p-40 mx-10 rounded-full my-15 lg:p-100">
          <img
            src={contactFam}
            className="absolute left-0 top-162 object-cover h-[25rem] lg:h-[60rem] lg:w-[60rem] lg:left-250 lg:top-40"
          />
        </div>
      </div>
      <div className="flex flex-col gap-6 items-center justify-center px-10 pt-10 pb-20 text-center bg-[#FAFAFA]">
        <h2 className="text-[16px] text-[#252B42] font-semibold">
          VISIT OUR OFFICE
        </h2>
        <h1 className="font-bold text-[#252B42] text-[40px] lg:mx-160">
          We help small businesses with big ideas!
        </h1>
        <div className="lg:flex lg:flex-row lg:pt-10 flex flex-col justify-center items-center gap-6">
          <section className="bg-white mx-10 mt-10 lg:mt-0 lg:p-10 w-full h-[20rem] flex flex-col justify-center items-center gap-4">
            <Phone className="text-[#23A6F0] h-[5rem] w-[5rem]" />
            <p className="text-[#252B42] font-bold">harcagitsin@mail.com</p>
            <p className="text-[#252B42] font-bold">hakodeveloper@mail.com</p>
            <h2 className="text-[#252B42] font-bold">Get Support</h2>
            <a href="mailto:harcagitsin@mail.com">
              <button className="border text-[#23A6F0] border-[#23A6F0] rounded-sm px-4 py-2 font-bold">
                Submit Request
              </button>
            </a>
          </section>
          <section className="bg-[#252B42] mx-10 lg:p-10 w-full h-[20rem] flex flex-col justify-center items-center gap-4 text-white">
            <MapPin className="text-[#23A6F0] h-[5rem] w-[5rem]" />
            <p className="font-bold">harcagitsin@mail.com</p>
            <p className="font-bold">hakodeveloper@mail.com</p>
            <h2 className="font-bold">Get Support</h2>
            <a href="mailto:harcagitsin@mail.com">
              <button className="border text-[#23A6F0] border-[#23A6F0] rounded-sm px-4 py-2 font-bold">
                Submit Request
              </button>
            </a>
          </section>
          <section className="bg-white mx-10 w-full lg:p-10 h-[20rem] flex flex-col justify-center items-center gap-4">
            <Send className="text-[#23A6F0] h-[5rem] w-[5rem]" />
            <p className="font-bold">harcagitsin@mail.com</p>
            <p className="font-bold">hakodeveloper@mail.com</p>
            <h2 className="font-bold">Get Support</h2>
            <a href="mailto:harcagitsin@mail.com">
              <button className="border text-[#23A6F0] border-[#23A6F0] rounded-sm px-4 py-2 font-bold">
                Submit Request
              </button>
            </a>
          </section>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center px-10 py-14">
        <CornerRightDown className="text-[#23A6F0] w-[6rem] h-[6rem]" />
        <h2 className="text-[16px] font-bold">WE CANT WAIT TO MEET YOU</h2>
        <h1 className="font-bold text-[58px] mt-6 mb-6">Let's Talk</h1>
        <button className="border px-8 py-3 bg-[#23A6F0] text-white rounded-sm">
          Try it free now
        </button>
      </div>
    </>
  );
}

export default ContactContainer;
