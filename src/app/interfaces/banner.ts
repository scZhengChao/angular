export interface Banner {
    err: number;
    data: BannerData;
}
export interface BannerData{
    _id: string;
    id: number;
    title: string;
    img: string;
}
