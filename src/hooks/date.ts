import { useEffect, useState } from 'react';

export const useFormattedDate = (dateStr: string) => {
    const [formattedDate, setFormattedDate] = useState('');

    useEffect(() => {
        const date = new Date(dateStr);

        const year = date.getFullYear();
        const month = ('0' + (date.getMonth() + 1)).slice(-2);
        const day = ('0' + date.getDate()).slice(-2);
        const hours = ('0' + date.getHours()).slice(-2);
        const minutes = ('0' + date.getMinutes()).slice(-2);

        const result = `${hours}:${minutes} ${day}.${month}.${year}`;

        setFormattedDate(result);
    }, [dateStr]);

    return formattedDate;
};