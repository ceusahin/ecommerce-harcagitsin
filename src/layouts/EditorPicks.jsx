import Men from "../images/editor-picks-men.jpg";
import Women from "../images/editor-picks-women.jpg";
import Accessories from "../images/editor-picks-accessories.jpg";
import Kids from "../images/editor-picks-kids.jpg";

function EditorPicks() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center my-20 text-center mx-24">
        <h2 className="text-[#252B42] font-bold text-2xl mb-4">
          EDITOR'S PICK
        </h2>
        <p className="text-[#737373]">
          Problems trying to resolve the conflict between
        </p>
      </div>
      <div className="flex flex-col items-center justify-center gap-8 mx-10 mb-20">
        <div className="relative">
          <img src={Men} className="" />
          <button className="absolute font-bold bottom-4 left-6 bg-white px-14 py-3">
            MEN
          </button>
        </div>
        <div className="relative">
          <img src={Women} className="" />
          <button className="absolute font-bold bottom-4 left-6 bg-white px-14 py-3">
            WOMEN
          </button>
        </div>
        <div className="relative">
          <img src={Accessories} className="" />
          <button className="absolute font-bold bottom-4 left-6 bg-white px-14 py-3">
            ACCESSORIES
          </button>
        </div>
        <div className="relative">
          <img src={Kids} className="" />
          <button className="absolute font-bold bottom-4 left-6 bg-white px-14 py-3">
            KIDS
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditorPicks;
