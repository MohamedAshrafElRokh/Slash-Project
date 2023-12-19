import React from "react";

const Items = ({ label, icon: Icon, text }) => {
  return (
    <div className="flex flex-col justify-center items-center w-96 rounded-md duration-300 hover:shadow-xl p-5">
      <div className="text-[#463610]">
        <Icon size={40} />
      </div>
      <div className="text-2xl mt-1 font-semibold font-sans">{label}</div>
      <div className="mt-1 text-xl  text-center">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla quas
        facilis ex autem eos similique voluptatum quaerat, ducimus quod vel nam
      </div>
    </div>
  );
};

export default Items;
