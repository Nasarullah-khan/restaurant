import prisma from "@/app/lib/connect"
import { NextResponse } from "next/server"

export const GET = async () => {
  try{
    const categories = await prisma.category.findMany({
      select: {
        title: true,
        slug: true,
        img: true, 
        id: true
      }
    })
    return NextResponse.json(categories, {status: 200})
    
  } catch(error){
    console.log(error)
    return NextResponse.json({message: "Something went wrong"}, {status: 500})
  }
}

export const POST = async (req) => {
  try {
    const body = await req.json()

    console.log(body)

    const cat = await prisma.category.create({data:{
      title: body.title,
      desc: body.desc,
      img: body.img,
      color: body.color,
      slug: body.slug,
    }})
    return NextResponse.json(cat, {status: 200})
    
  } catch (error) {
    console.log(error)
    return NextResponse.json({message: "Category not created"}, {status: 200})
  }
}