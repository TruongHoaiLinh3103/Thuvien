import {printfID} from "@/utils/ViewURL";

export async function generateMetadata({ params, searchParams }, parent) {
    // read route params
    const id = printfID(params.id)
    // fetch data
    const TitleID = await fetch(`https://zfakeapi.vercel.app/product/${id}`).then((res) => res.json())
   
    // optionally access and extend (rather than replace) parent metadata
    // const previousImages = (await parent).openGraph?.images || []
   
    return {
      title: TitleID.name,
      description: TitleID.price,
      openGraph: {
        title: "LisohAnikey",
        description: "Library in Anikey",
        type: "website",
        author: ["Trương Hoài Linh", "Anikey"],
        // images: ['/some-specific-page-image.jpg', ...previousImages],
        images: ["https://i.pinimg.com/originals/9c/5b/16/9c5b16ece475a3257034303b6023c8ee.jpg",]
      },
    }
}
  
export default function IDLayout({ children }) {
return (
    <>
        {children}
    </>
  )
}