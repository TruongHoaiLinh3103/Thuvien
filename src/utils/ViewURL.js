import slugify from "slugify"

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