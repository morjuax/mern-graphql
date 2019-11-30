const controller = {};
import GotRepository from '../repositories/GotRepository';

controller.save = async () => {

    try {
        await GotRepository.saveCharacters();
        return {status: 1, message: 'Data saved or updated'};
    } catch (e) {
        return {state: 0, message: e.message};
    }
};

controller.getCharacters = async () => {

    try {
        let data = await GotRepository.getCharacters();
        return {status: 1, message: 'Success data', data};
    } catch (e) {
        console.log("error exception", e.message);
        return {state: 0, message: e.message};
    }
};

controller.getCharacter = async (_id) => {

    try {
        let data = await GotRepository.getCharacter(_id);
        return {status: 1, message: 'Success data', data};
    } catch (e) {
        console.log("Error exception", e.message);
        return {state: 0, message: e.message};
    }
};


export default controller;