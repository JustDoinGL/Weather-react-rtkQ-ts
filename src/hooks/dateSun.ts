export const useDateSun = (data: number) => {
    return new Date(data * 1000).toLocaleTimeString()
}