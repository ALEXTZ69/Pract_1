import { User, user } from '../interfaces/datausers';

export function printWithForEach(): void {
    user.forEach((user) => {
        console.log(user);
    });
}

export function printWithForIn(): void {
    for (let key in user) {
        if (user.hasOwnProperty(key)) {
            console.log(user[key]);
        }
    }
}

export function printWithForOf(): void {
    for (let individualUser of user) {
        console.log(individualUser);
    }
}