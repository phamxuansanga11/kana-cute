import React, { useState } from "react";
import Media from "~/components/media";
import DefaultLayout from "~/layout/defaultLayout";
import { Input } from "antd";
import { Select, Space } from "antd";
// import "antd/dist/antd.css";

const { Search } = Input;

const Home = () => {
  const [category, setCategory] = useState<string>("");

  const handleChange = (value: string) => {
    setCategory(value);
  };

  const onSearch = (value: string) => {
    console.log(value);
  };

  return (
    <DefaultLayout>
      <div className="">
        <div className="flex justify-start gap-[30px] mb-5">
          <Search
            placeholder="Tìm thứ bạn muốn tìm"
            enterButton="Tìm"
            size="large"
            onSearch={onSearch}
            className="text-black flex max-w-[300px]"
            //   loading
          />
          <Select
            style={{ width: 180 }}
            placeholder="Chọn thể loại"
            onChange={handleChange}
            value={category || undefined}
            options={[
              { value: "Category 1", label: "Category 1" },
              { value: "Category 2", label: "Category 2" },
              { value: "Category 3", label: "Category 3" },
            ]}
            className="h-[40px]"
          />
        </div>

        <Media />
      </div>
    </DefaultLayout>
  );
};

export default Home;
