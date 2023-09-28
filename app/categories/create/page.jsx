"use client"
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form"

const CreateCategory = () => {

  const router = useRouter();

  const {register, formState:{errors}, handleSubmit} = useForm();

  const {mutate, isLoading} = useMutation({
    mutationFn: async (newCat) => {
      return axios.post("/api/categories", newCat)
    },
    onError: (error) => {
      console.log(error)
    },
    onSuccess: () => {
      router.push("/")
      router.refresh();
    }
  })


  const submit = (data) => {
    mutate(data)
  }

  return (
    <div className="mt-10">
      <form onSubmit={handleSubmit(submit)} className="flex flex-col gap-4 w-2/6 mx-auto">


        <div className="flex flex-col gap-3">
          <label>Title</label>
          <input {...register("title", {required: true})}
          type="text" className="py-2 px-4 border rounded-sm bg-slate-300 text-black"/>
          {errors.title?.type === "required" && <div className="text-red-600 text-sm">Title is required</div>}
        </div>


        <div className="flex flex-col gap-3">
          <label>Description</label>
          <textarea {...register("desc", {required: true})}
           type="text" className="py-2 px-4 border rounded-sm bg-slate-300 text-black"></textarea>
           {errors.desc?.type === "required" && <div className="text-red-600 text-sm">Description is required</div>}
        </div>

        <div className="flex flex-col gap-3">
          <label>Color</label>
          <input {...register("color", {required: true})}
          type="text" className="py-2 px-4 border rounded-sm bg-slate-300 text-black"/>
          {errors.color?.type === "required" && <div className="text-red-600 text-sm">Color is required</div>}
        </div>

        

        <div className="flex flex-col gap-3">
          <label>Image</label>
          <input {...register("img", {required: true})}
          type="text" className="py-2 px-4 border rounded-sm bg-slate-300 text-black"/>
          {errors.img?.type === "required" && <div className="text-red-600 text-sm">Image is required</div>}
        </div>

        <div className="flex flex-col gap-3">
          <label>Slug</label>
          <input {...register("slug", {required: true})}
          type="text" className="py-2 px-4 border rounded-sm bg-slate-300 text-black"/>
          {errors.slug?.type === "required" && <div className="text-red-600 text-sm">Slut is required</div>}
        </div>

        <div>
          <button className="px-4 py-2 bg-green-700 text-white rounded-sm" type="submit">Create</button>
          {isLoading && <div>Processing...</div>}
        </div>
        
      </form>
    </div>
  )
}

export default CreateCategory