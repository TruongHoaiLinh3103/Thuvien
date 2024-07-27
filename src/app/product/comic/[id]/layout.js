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
    description: TitleID.menu,
    openGraph: {
      title: TitleID.name,
      description: TitleID.menu,
      type: "website",
      author: ["Trương Hoài Linh", "Anikey"],
      // images: ['/some-specific-page-image.jpg', ...previousImages],
      images: ["https://i.pinimg.com/originals/ff/f7/8b/fff78bb663fc3ab1e1554c336eee4efc.jpg",]
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