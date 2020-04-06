const { check, validationResult } = require('express-validator');


const createValidationFor = (route) => {
    switch (route) {
        case 'login':
            return [
                check('email').isEmail().withMessage('must be an email'),
                check('password').not().isEmpty().withMessage('password required')
            ];
        case 'signup':
            return [
                check('email').isEmail().withMessage('must be an email'),
                check('password').not().isEmpty().withMessage('password required'),
                check('dob').not().isEmpty().withMessage('dob required'),
                check('name').not().isEmpty().withMessage('userName required')
            ];
        case 'getDetail': return [
            check('tripId').not().isEmpty().withMessage('tripId id required'),
            check('vehicleId').not().isEmpty().withMessage('vehicleId required')
           
        ];
        case 'postDetail': return [
            check('tripId').not().isEmpty().withMessage('tripId id required'),
            check('vehicleId').not().isEmpty().withMessage('vehicleId required'),
            check('status').not().isEmpty().withMessage('status required'),
            check('extra').not().isEmpty().withMessage('extra required'),
            check('data').not().isEmpty().withMessage('data required')
            
        ];
        case 'lightStatus': return [
            check('status').not().isEmpty().withMessage('status required')
            
        ];
        default:
            return [];
    }
}

const checkValidationResult = (req, res, next) => {
    const result = validationResult(req);
    if (result.isEmpty()) {
        return next();
    }

    res.status(422).json({ errors: result.array() }); //442 ->chck
}
module.exports = { createValidationFor, checkValidationResult };