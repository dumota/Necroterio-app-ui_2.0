export interface IResponseApi<T> {
    data: T | null;
    message: string;
    status: number;
}