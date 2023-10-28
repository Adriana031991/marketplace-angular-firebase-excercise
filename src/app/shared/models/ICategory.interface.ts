
export interface ICategory {
    icon: string;
    image: string;
    name: string;
    title_list: string;
    url: string;
    view: number;
}

export interface ICategoryAndSubcategory {
    titleList?: string;
    subCategory?: string;
    url?: string;
    category?: string;

}