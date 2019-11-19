export default class Validator {
    isEmpty = (elements) => {
        let isValid = true;
        for (let element of elements) {
            if (element === '') {            
                isValid = false;
                break;
            }
        }
        return isValid
    }
}