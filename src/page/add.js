import { router, useEffect, useState } from "../../lib";
import axios from "axios";
const add = () => {
  const [data, setData] = useState([]);
  const addProducts = () => {
    const name = document.querySelector("#name").value;
    const categories = document.querySelector("#categori").value;
    const description = document.querySelector("#mota").value;
    const image = document.querySelector("#image").value;
    const price = document.querySelector("#price").value;
    axios
      .post(`http://localhost:3000/products/`, {
        ...data,
        name,
        categories,
        description,
        image,
        price,
      })
      .then((response) => {
        router.navigate("page/home");
      });
  };
  useEffect(() => {
    document.querySelector("#add-form").onsubmit = function (e) {
      e.preventDefault();
      addProducts();
    };
  });
  return /*html*/ `
    <!-- component -->
<div class="flex items-center justify-center p-12">
<!-- Author: FormBold Team -->
<!-- Learn More: https://formbold.com -->
<div class="mx-auto w-full max-w-[550px]">
  <form id="add-form">
    <div class="mb-5">
      <label
        for="name"
        class="mb-3 block text-base font-medium text-[#07074D]"
      >
        Full Name
      </label>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Full Name"
        class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
      />
    </div>
    <div class="mb-5">
      <label
        class="mb-3 block text-base font-medium text-[#07074D]"
      >
        Categori
      </label>
      <input
        type="text"
        name="email"
        id="categori"
        placeholder="example@domain.com"
        class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
      />
    </div>
    <div class="mb-5">
      <label
        class="mb-3 block text-base font-medium text-[#07074D]"
      >
        Mô Tả
      </label>
      <input
        type="text"
        name="subject"
        id="mota"
        placeholder="Enter your subject"
        class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
      />
    </div>
    <div class="mb-5">
      <label
        for="subject"
        class="mb-3 block text-base font-medium text-[#07074D]"
      >
        Ảnh
      </label>
      <input
        type="text"
        name="subject"
        id="image"
        placeholder="Enter your subject"
        class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
      />
    </div>
    <div class="mb-5">
      <label
        for="subject"
        class="mb-3 block text-base font-medium text-[#07074D]"
      >
        Giá
      </label>
      <input
        type="text"
        name="subject"
        id="price"
        placeholder="Enter your subject"
        class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
      />
    </div>
    <div>
      <button
        class="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none"
      >
        Submit
      </button>
    </div>
  </form>
</div>
</div>
    `;
};
export default add;
