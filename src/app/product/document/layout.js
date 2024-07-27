export const metadata = {
    title: 'Document',
    description: 'Library',
    openGraph: {
      title: "Document",
      description: "Library",
      type: "website",
      author: ["Trương Hoài Linh", "Anikey"],
      // images: ['/some-specific-page-image.jpg', ...previousImages],
      images: ["https://i.pinimg.com/originals/ff/f7/8b/fff78bb663fc3ab1e1554c336eee4efc.jpg",]
    }
  }
  
  export default function DocumentLayout({ children }) {
    return (
      <>
          {children}
      </>
    )
  }
  