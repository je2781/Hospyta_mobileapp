import axios from "axios";

const API_KEY = process.env.EXPO_PUBLIC_API_KEY;

const BASE_URL = 'https://identitytoolkit.googleapis.com/v1/accounts:';

async function authenticate (mode, credentials){
    const response = await axios.post(`${BASE_URL}${mode}?key=${API_KEY}`, {
        email: credentials.email,
        password: credentials.password,
        returnSecureToken: true
    });

    return response.data.idToken;
}

export async function createUser(email, password){
   return authenticate('signUp', {email, password});
}

export async function verifyUser(email, password){
    return authenticate('signInWithPassword', {email, password});
}