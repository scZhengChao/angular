export interface News {
    err: number;
    data: NewsData;
}
export interface NewsData{
    _id: string;
    id: number;
    title: string;
    img: string;
    text: string;
    time: string;
    source: string;

}
