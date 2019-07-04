
export interface Goodsdata{
    _id: string;
    product_id: string;
    name: string;
    price: string;
    number: number;
}
export interface Goods{
    err: number;
    msg?: string;
    data?:Goodsdata[]
}
