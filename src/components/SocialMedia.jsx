import { Facebook, Instagram, Twitter } from "lucide-react";

function SocialMedia() {
  return (
    <div className="mt-10 mb-20 py-10 font-bold text-2xl bg-[#FAFAFA] flex flex-col items-center">
      <div className="px-10 pb-6 text-[#252B42]">
        <h1>HarcaGitsin</h1>
      </div>
      <div className="flex px-10 gap-8 text-[#23A6F0]">
        <a href="" className="border-2 rounded-full p-2">
          <Facebook />
        </a>
        <a href="" className="border-2 rounded-full p-2">
          <Instagram />
        </a>
        <a href="" className="border-2 rounded-full p-2">
          <Twitter />
        </a>
      </div>
    </div>
  );
}

export default SocialMedia;
