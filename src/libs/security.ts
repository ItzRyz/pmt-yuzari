import { genSalt, hash } from "bcrypt-ts"

const encrypt = async (text: string): Promise<string> => {
    const salt = await genSalt(12);
    return await hash(text, salt);
}

const comparecrypt = async (text: string): Promise<string> => {

}