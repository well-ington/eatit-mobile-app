import { Reducer } from "redux"

type Tplaces = {
    name: string;
    phone: string;
    categories: string[];
    open: boolean;
    hours: string[];
    menu: {
        section: string;
        description: string;
        items: {
            name: string;
            description: string;
            prices: string[]
        };
    }[];        
}[];

export type TplacesInitialState = {
    categories: string[];
    places: Tplaces
}


const fullCategories = [...'pizza,burger,italian,thai,chinese,japonese,brazilian,martian'.split(',')]

const randomFromArray = (array: any[]) => {
    return array[~~(Math.random() * array.length)]
}


const randomGen = (type: string) => {
    switch (type) {
        case 'name':
            const nameArray: string[] = [...'Loko,Burger,Potato,Batata,Zeca,Malu,Big,Bug,Pig,Pollo,Frito,Refritos,Fried,Chicken,Frango'.split(',')];
            return `${randomFromArray(nameArray)} ${randomFromArray(nameArray)} ${Math.random() > 0.7 && randomFromArray(nameArray)}`;
        case 'categories':
            const catNumber = (Math.random() * 4) + 1;
            let array = [];
            for (let i = 0; i < catNumber; i++) {
                array.push(randomFromArray(fullCategories))
            }
            return {...array};
        case 'hours':
            let hoursArray = [];
            let vacationDays = ~~(Math.random() * 3);
            const hourBase = Math.random() > 0.5 ? 12 : 18;
            for (let i = 0; i < 7; i++) {
                // hoursArray.push()
                if (vacationDays > 0) {
                    const isClosed = Math.random() < 0.33;
                    isClosed && --vacationDays;
                    hoursArray.push(isClosed ? 'none' : `${hourBase}:00 PM - ${hourBase + 4}:55 PM`);
                } else {
                    hoursArray.push(`${hourBase}:00 PM - ${hourBase + 4}:55 PM`);
                }
            }
            return {...hoursArray};
        case 'menu':
            const menuArray = [];
            const priceRange = ~~(Math.random() * 3);
            const sectionNames: string[] = [...'Florg,Bvrger,Drinks,Flembs,Blerbarg,Somfi,Viner'.split(',')];
            const sectionDesc: string[] = [...'Daren norb,Dinco oell,Puring ducksun,Abenic auversen,Vindac oiseau,Vandec avine'.split(',')];
            const itemName: string[] = [...'Burg,Flimper,Tako,Polleg,Vinta,Borem,Crispsum,Friedsen,Edenig,Cheeve,Special Teg,Vinarg Induminanta,Inva Pourinda,Kimba Herk'.split(',')];
            const descriptionStarter: string[] = [...'Nadam fur 50g,Inkam biner,Anka manuq,100g porc desc,Vine dine,Spucial Kloen,Froideau 55ml,Onclu omno'.split(',')];
            const descriptionBody: string[] = [...'manoc bune,avec induvian,anderan invic,borem ipsan dir,vanec amenuc aeu,oiseau fir vande,indava amenoc'.split(',')];
            const sectionQuantity = ~~(Math.random() * 3) + 1;
            for (let i = 0; i < sectionQuantity; i++) {
                const itemArray = [];
                const itemQuantity = ~~(Math.random() * 10) + 2;
                const sectionOptions = ~~(Math.random() * 3) + 1;
                for (let o = 0; o < itemQuantity; o++) {
                    const pricesArray = [];
                    const basePrice = (Math.random() * (priceRange * 2.5)) + (priceRange * 1.5);
                    for (let k = 0; k < sectionOptions; k++) {
                        pricesArray.push(basePrice + (basePrice * k * priceRange * 0.075));
                    }
                    itemArray.push({
                        name: randomFromArray(itemName),
                        description: `${randomFromArray(descriptionStarter)} ${randomFromArray(descriptionBody)}.`,
                        prices: pricesArray
                    });
                }
                menuArray.push({
                    section: randomFromArray(sectionNames),
                    description: randomFromArray(sectionDesc),
                    items: itemArray
                })
            }
            return {...menuArray};

        default:
            return null;
    }
}

const generateRestaurants = (placesToGenerate: number) => {
    const placesArray = [];
    for (let i = 0; i < placesToGenerate; i++) {
        placesArray.push({
            name: randomGen('name'),
            phone: 'xxx-xxx-xxx',
            categories: [randomGen('categories')],
            open: Math.random() > 0.3,
            hours: [randomGen('hours')],
            menu: [randomGen('menu')]
        });
    }
    return {...placesArray};
}


const placesGenerated: any = [generateRestaurants(50)];


const initialState: TplacesInitialState = {
    categories: fullCategories,
    places: placesGenerated
}

export const places: Reducer<TplacesInitialState, any> = (state = initialState, action) => {
    return state;
}