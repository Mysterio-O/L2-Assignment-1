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
    if (Array.isArray(input)) return input.length;
    if (typeof input === 'string') return input.length;
}










class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}`
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
    const newArr: UniqueValuesProp = [];
    mutualArray.forEach(a => {
        if (!newArr.includes(a)) {
            newArr.push(a)
        }
    });
    return newArr;
}











type DiscountPrice = number | undefined

interface CalculateTotalPriceProps {
    name: string;
    price: number;
    quantity: number;
    discount?: DiscountPrice;
}

function calculateTotalPrice(input: CalculateTotalPriceProps[]): number {
    return input.reduce((acc, current) => {
        return acc + (current.quantity * current.price)
    }, 0)
};
