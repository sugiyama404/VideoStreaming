export interface Videolist {
    id: number;
    title: string;
    category: string;
    tags: string[];
    explain: string;
}

export interface VideoHomelist {
    uuid: string;
    size: string;
    title: string;
    explain: string;
    imguuid: string;
    imgext: string;
}
