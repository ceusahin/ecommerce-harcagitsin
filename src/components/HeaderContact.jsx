import {
  Phone,
  Mail,
  Instagram,
  Youtube,
  Facebook,
  Twitter,
} from "lucide-react";

function HeaderContact() {
  return (
    <div className="bg-[#252B42] text-[14px] text-white flex flex-row justify-between items-center px-8 py-4">
      {/* LEFT PART */}
      <div className="flex gap-2">
        <Phone />
        <a href="tel:+90 123 456 7890" className="mr-6">
          +90 123 456 7890
        </a>
        <Mail />
        <a href="mailto:harcagitsin@mail.com">harcagitsin@mail.com</a>
      </div>
      {/* MIDDLE PART */}
      <div>
        <span>Follow us and get a chance to win %80 off!</span>
      </div>
      {/* RIGHT PART */}
      <div className="flex gap-3">
        <span>Follow Us : </span>
        <div className="flex gap-3">
          <a href="https://www.youtube.com/@hako5371">
            <Youtube />
          </a>
          <a href="https://www.facebook.com">
            <Facebook />
          </a>
          <a href="https://www.x.com">
            <Twitter />
          </a>
          <a href="https://www.instagram.com">
            <Instagram />
          </a>
        </div>
      </div>
    </div>
  );
}

export default HeaderContact;
