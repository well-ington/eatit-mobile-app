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

type TinitialState = {
    categories: string[];
    places: Tplaces
}


const fullCategories = [...'pizza,burger,italian,thai,chinese,japonese,brazilian,martian'.split(',')]
const randomGen = (type: string) => {
    switch (type) {
        case 'name':
            const nameArray: string[] = [...'Loko,Burger,Potato,Batata,Zeca,Malu,Big,Bug,Pig,Pollo,Frito,Refritos,Fried,Chicken,Frango'.split(',')];
            return `${nameArray[Math.random() * nameArray.length]} ${nameArray[Math.random() * nameArray.length]} ${Math.random() > 0.7 && nameArray[Math.random() * nameArray.length]}`;
        case 'description':
            const descriptionStarter: string[] = [...'Nadam fur 50g,Inkam biner,Anka manuq,100g porc desc,Vine dine,Spucial Kloen,Froideau 55ml,Onclu omno'.split(',')];
            const descriptionBody: string[] = [...'manoc bune,avec induvian,anderan invic,borem ipsan dir,vanec amenuc aeu,oiseau fir vande,indava amenoc'.split(',')];
            return `${descriptionStarter[Math.random() * descriptionStarter.length]} ${descriptionBody[Math.random() * descriptionBody.length] + (Math.random() > 0.6 ? descriptionBody[Math.random() * descriptionBody.length] : '')}.`
        case 'categories':
            const catNumber = (Math.random() * 4) + 1;
            let array = [];
            for (let i = 0; i < catNumber; i++) {
                array.push(fullCategories[Math.random() * fullCategories.length])
            }
            return array;
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
            return hoursArray;
        case 'menu':
            
        default:
            return null;
    }
}

const placesGenerated: Tplaces = [];

for (let i = 0; i < 50; i++) {
     
}

const initialState: TinitialState = {
    categories: [''],
    places: []
}


export const places: Reducer<TinitialState, any> = (state = initialState) => {
    return state;
}