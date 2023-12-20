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

export const convertSearch = (string) => {
    if(!string){return ""}
    else{
        string = slugify(string,{
            locale: 'vi'
        })
        return string;
    }
}

export const resultSearch = (string) => {
    if(!string){return ""}
    else{
        const paragraph = string.replaceAll('-', ' ')
        return paragraph;
    }
}

export const printfID = (string) => {
    const str = string;
    const temp = str.split(".html");
    const tempTwo = temp[0].split("-");
    return tempTwo[tempTwo.length-1];
}