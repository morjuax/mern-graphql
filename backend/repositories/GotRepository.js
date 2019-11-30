const repository = {};
// const urlRestApi = `${process.env.URL_REST_API}`;
import rp from 'request-promise';
import Character from '../models/Character'


repository.saveCharacters = async () => {

    try {
        //TODO: refactoring on file env
        // let urlFull = `${urlRestApi}/book/characters`;
        let response = await rp(`https://api.got.show/api/book/characters`); //request
        response = JSON.parse(response);
        response.forEach(async (item) => {
            const newCharacter = new Character(item);
            await newCharacter.save();
        });

        return {state: 1, message: 'Save Update success'};

    } catch (e) {
        console.log("Error exception", e.message);
        throw Error('An error occurred, request saveCharacters, ' + e.message);
    }
};

repository.getCharacter = async (_id) => {

    try {
        return await Character.findById(_id);
    } catch (e) {
        console.log("Error exception, {request getCharacter}", e.message);
        throw Error('An error occurred, request getCharacter, ' + e.message);
    }
};

repository.getCharacters = async () => {
    try {
        return await Character.find();
    } catch (e) {
        console.log("Error exception", e.message);
        throw Error('An error occurred, request getCharacters, ' + e.message);
    }
};

export default repository;
