import {printfID} from "@/utils/ViewURL";

export async function generateMetadata({ params, searchParams }, parent) {
    // read route params
    const id = printfID(params.id)
    // fetch data
    const TitleID = await fetch(`https://zfakeapi.vercel.app/blogs/${id}`).then((res) => res.json())
   
    // optionally access and extend (rather than replace) parent metadata
    // const previousImages = (await parent).openGraph?.images || []
   
    return {
      title: TitleID.title,
      description: TitleID.author,
      openGraph: {
        title: "Trương Hoài Linh",
        description: "Xin chào các bạn nha",
        type: "website",
        author: ["Trương Hoài Linh", "Anikey"],
        // images: ['/some-specific-page-image.jpg', ...previousImages],
        images: ["https://i.pinimg.com/originals/c4/c7/5e/c4c75e49b0c207c9f20721af29757d6c.jpg",]
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
  