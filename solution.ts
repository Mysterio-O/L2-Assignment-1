type FormatValues = string | number | boolean;

type ComplexValues = {
    1: string,
    2: number,
    3: boolean
}

function formatValue(value: ComplexValues[keyof ComplexValues]): FormatValues | undefined {

    if (typeof value === 'string') return value.toUpperCase();
    else if (typeof value === 'number') return value * 10;
    else if (typeof value === 'boolean') return !value;
}









type GetLength<T> = string | Array<T>

function getLength<T>(input: GetLength<T>): number | undefined {
    if (typeof input === 'string') return input.length;
    if (Array.isArray(input)) return input.length;
}










class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    getDetails() {
        return `'Name: ${this.name}, Age: ${this.age}'`
    }

}









interface FilterRatingProps {
    title: string;
    rating: number;
}

function filterByRating(input: FilterRatingProps[]): FilterRatingProps[] {

    return input.filter(i => i.rating >= 4)

}










interface FilterActiveUsersProps {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
}

function filterActiveUsers(input: FilterActiveUsersProps[]): FilterActiveUsersProps[] {
    return input.filter(i => (typeof i.isActive === 'boolean' && i.isActive));
}












interface Book {
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean;
}

function printBookDetails(input: Book): void {
    return console.log(`Title: ${input.title}, Author: ${input.author}, Published: ${input.publishedYear}, Available: ${input.isAvailable}`)
}










type UniqueValuesProp = (string | number)[];

function getUniqueValues(arr1: UniqueValuesProp, arr2: UniqueValuesProp): UniqueValuesProp {
    const mutualArray = [...arr1, ...arr2];
    const alreadySeen: { [key: string]: boolean } = {};
    const newArr: UniqueValuesProp = [];

    for (const a of mutualArray) {
        const typeOptions = typeof a === 'number' ? 'num:' : 'str:';
        const key = typeOptions + a;
        if (!alreadySeen[key]) {
            alreadySeen[key] = true;
            newArr.push(a)
        }
    }

    return newArr;
}











interface CalculateTotalPriceProps {
    name: string;
    price: number;
    quantity: number;
    discount?: number;
}


function calculateTotalPrice(input: CalculateTotalPriceProps[]): number {
    return input.reduce((acc, current) => {
        const currentTotal = current.price * current.quantity;
        let effectiveTotal = currentTotal;

        if (current.discount && current.discount > 0 && current.discount <= 100) {
            effectiveTotal = currentTotal * (100 - current.discount) / 100;
        }

        return acc + effectiveTotal;
    }, 0);
}

