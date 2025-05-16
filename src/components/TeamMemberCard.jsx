import { Facebook, Instagram, Twitter } from "lucide-react";

function TeamMemberCard({ members }) {
  return (
    <div className="grid w-full grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-40 p-4 mt-10">
      {members.map((member) => (
        <div
          key={member.id}
          className="bg-white py-10 shadow-md rounded-xl flex flex-col items-center space-y-4 hover:shadow-xl transition"
        >
          <img
            src={member.img || "https://via.placeholder.com/150"}
            alt={member.fullName || "Üye"}
            className="w-28 h-28 rounded-full object-cover border-4 border-gray-200"
          />
          <h3 className="text-lg font-semibold text-[#252B42]">
            {member.fullName || "İsim Yok"}
          </h3>
          <p className="text-sm text-[#737373]">
            {member.title || "Ünvan Yok"}
          </p>
          <div className="flex space-x-4 mt-2">
            {member.facebook && (
              <a
                href={member.facebook}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="text-blue-600 hover:text-blue-800 text-xl" />
              </a>
            )}
            {member.inst && (
              <a href={member.inst} target="_blank" rel="noopener noreferrer">
                <Instagram className="text-pink-500 hover:text-pink-600 text-xl" />
              </a>
            )}
            {member.twitter && (
              <a
                href={member.twitter}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="text-sky-500 hover:text-sky-700 text-xl" />
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default TeamMemberCard;
