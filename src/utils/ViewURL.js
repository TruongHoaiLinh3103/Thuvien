import slugify from "slugify"
import Link from "next/link";

function Blog(props){
    return(
        <div>
            <Link style={{textDecoration:"none", color: "black"}} href={`/blogs/${convertSlug(props.title)}-${props.id}.html`}>View</Link>
        </div>
    )
}

export const convertSlug = (string) => {
    if(!string){return ""}
    else{
        string = slugify(string,{
            lower: true,
            locale: 'vi'
        })
        return string;
    }
}

export const printfID = (string) => {
    const str = string;
    const temp = str.split(".html");
    const tempTwo = temp[0].split("-");
    return tempTwo[tempTwo.length-1];
}
export default Blog;