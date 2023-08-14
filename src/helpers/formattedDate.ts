export const formateDate = (date: any) => {
    const dateString = date?.format('dd LLLL');
    let newDate = new Date(dateString);
    let options: object = {day: 'numeric', month: 'long'};
    let formattedDate = newDate.toLocaleDateString('ru-RU', options);

    return formattedDate
}
