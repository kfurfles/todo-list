export type IRepository = {
    getById(): { 
        id: number;
        name: string;
    }

    getAll(): {
        id: number;
        name: string;
    }[]
}