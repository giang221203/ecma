import { router, useEffect,useState } from "../../lib";
import axios from "axios";
const Sua = (id) =>{
    const [data,setData] = useState([]);
    useEffect(()=>{
        axios.get(`http://localhost:3000/products/${id}`)
            .then((dataAxios)=>{
                setData(dataAxios.data)
            })
    },[])

    const updateProducts = () =>{
        const name = document.querySelector("#name").value;
        const categories = document.querySelector("#categori").value;
        const description = document.querySelector("#mota").value;
        const image = document.querySelector("#image").value;
        const price = document.querySelector("#price").value;
        axios.put(`http://localhost:3000/products/${id}`,{
            ...data,
            name,
            categories,
            description,
            image,
            price,
        })
        .then((res)=>{
            router.navigate("/page/home")
        })
        }
        useEffect(()=>{
            document.querySelector("#update-form").onsubmit=(e)=>{
                e.preventDefault();
                updateProducts()
            }
        })
        return /*html*/ `
         <!-- component -->
<div class="flex items-center justify-center p-12">
<!-- Author: FormBold Team -->
<!-- Learn More: https://formbold.com -->
<div class="mx-auto w-full max-w-[550px]">
  <form id="update-form">
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
        value="${data.name}"
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
        value="${data.categories}"
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
        value="${data.description}"
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
        value="${data.image}"
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
        value="${data.price}"
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
        `
}
export default Sua