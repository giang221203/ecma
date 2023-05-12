import { useEffect, useState } from "../../lib";
import axios from "axios";
const Home = function () {
  const [data, setData] = useState([]);
  useEffect(function () {
    // fetch('http://localhost:3000/books')
    // .then(function(res) {
    //     return res.json()
    // }).then(function(data) {
    //     // console.log(data);
    //     setData(data)
    // })
    axios.get(`http://localhost:3000/products`).then(function (dataAxios) {
      console.log(dataAxios.data);
      setData(dataAxios.data);
    });
  }, []);
  useEffect(() => {
    const btnXoa = document.querySelectorAll(".btn-delete");
    for (let btn of btnXoa) {
      const id = btn.dataset.id;
      btn.addEventListener("click", function () {
        var result = confirm("Ban co muon xoa ko");
        if (result) {
          deleteProduct(id);
        }
      });
    }
  });
  const deleteProduct = (id) => {
    fetch(`http://localhost:3000/products/${id}`, {
      method: "DELETE",
    }).then(() => {
      axios.get(`http://localhost:3000/products`).then(function (dataAxios) {
        setData(dataAxios.data);
      });
    });
  };
  return /*html*/ `
  <!-- component -->
<link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css">
<link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css">


<section class="py-1 bg-blueGray-50">
<div class="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 mx-auto mt-24">
  <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
    <div class="rounded-t mb-0 px-4 py-3 border-0">
      <div class="flex flex-wrap items-center">
        <div class="relative w-full px-4 max-w-full flex-grow flex-1">
          <input type="text" id="search" placeholder="search">
        </div>
        <div class="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
          <button class="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button"><a href="/page/them">them</a></button>
        </div>
      </div>
    </div>

    <div class="block w-full overflow-x-auto">
      <table class="items-center bg-transparent w-full border-collapse ">
        <thead>
          <tr>
            <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          Tên sản phẩm
                        </th>
          <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          Loại
                        </th>
           <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          Mô Tả
                        </th>
          <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          Image
                        </th>
                        <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        Price
                      </th>

                      <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Hành Động
                    </th>
          </tr>
        </thead>

        <tbody>
        ${data.map((item) => {
            return /*html*/ `
            <tr>
            <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
              ${item.name}
            </th>
            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
            ${item.categories}
            </td>
            <td class="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
            ${item.description}
            </td>
            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
            <img src="${item.image}" width="100px" alt="">
            </td>
            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
            ${item.price}
            </td>
            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
            <button data-id="${item.id}" class="p-2 bg-red-400 rounded-sm btn-delete">Xoa</button>
            <button ><a href="/page/sua/${item.id}" class="p-2 bg-blue-400 rounded-sm btn-update"">Sua</a></button>
            </td>
          </tr>
          <tr>
            `;
          })
          .join("")}
        </tbody>
      </table>
    </div>
  </div>
</div>
</section>
  `;
};
export default Home;
