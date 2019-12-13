module.exports.asyncController = (controller) => {
    return async function(req, res, next) {
        try {
            await controller(req, res, next);
        } catch (err) {
            return next(err);
        }
    };
};