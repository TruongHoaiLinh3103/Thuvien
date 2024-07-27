  export const metadata = {
    title: 'Search',
    description: 'Library',
    openGraph: {
      title: "Search",
      description: "Library",
      type: "website",
      author: ["Trương Hoài Linh", "Anikey"],
      // images: ['/some-specific-page-image.jpg', ...previousImages],
      images: ["https://i.pinimg.com/originals/ff/f7/8b/fff78bb663fc3ab1e1554c336eee4efc.jpg",]
    },
  }
  
  export default function SearchLayout({ children }) {
    return (
      <>
          {children}
      </>
    )
  }
  