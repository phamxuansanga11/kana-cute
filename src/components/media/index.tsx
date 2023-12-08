import React from "react";

const data = [
  {
    id: 1,
    thumbnail:
      "https://nhanvietluanvan.com/wp-content/uploads/2023/05/ac616eac8a162481a2bcf42b78c198ac.jpg",
    name: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
  },
  {
    id: 2,
    thumbnail:
      "https://kiemtientuweb.com/ckfinder/userfiles/images/anh-gai-xinh/anh-gai-xinh-2.jpg",
    name: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
  },
  {
    id: 3,
    thumbnail:
      "https://i.pinimg.com/originals/30/31/1e/30311e920a4939fed09036528bf8c955.jpg",
    name: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
  },
  {
    id: 4,
    thumbnail:
      "https://hinhnen4k.com/wp-content/uploads/2023/02/anh-gai-xinh-vn-2.jpg",
    name: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
  },
  {
    id: 5,
    thumbnail:
      "https://itcafe.vn/wp-content/uploads/2021/01/anh-gai-xinh-1.jpg",
    name: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
  },
];

const Media = () => {
  return (
    <div className="grid grid-cols-3 gap-[30px]">
      {data.map((item) => (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img
              className="rounded-t-lg w-full max-h-[200px] object-cover"
              src={item.thumbnail}
              alt=""
            />
          </a>
          <div className="p-5">
            <p className="text-left mb-3 font-normal text-gray-700 dark:text-gray-400">
              {item.name}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Media;
