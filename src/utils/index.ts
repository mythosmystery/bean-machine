export * from './stores';

export function mapFormData<T>(data: HTMLFormElement): T {
    const formData = new FormData(data);
    const result: any = {};
    formData.forEach((value, key) => {
        result[key] = value;
    });
    return result;
}
