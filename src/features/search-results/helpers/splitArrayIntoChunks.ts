import {ArticleType} from "@shared/types/Article.type.ts";

const splitArrayIntoChunks = (array:ArticleType[]|number[], chunkSize:number) => {
    const result = [];
    for (let i = 0; i < array.length; i += chunkSize) {
        result.push(array.slice(i, i + chunkSize));
    }
    return result;
}

export default splitArrayIntoChunks;
