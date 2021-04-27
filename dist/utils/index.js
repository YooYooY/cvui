export var delay = function (ms) { return new Promise(function (r) { return setTimeout(r, ms); }); };
export var getDelay = function () {
    var cancel = null;
    var delay = function (ms) {
        return new Promise(function (resolve, reject) {
            try {
                cancel = function (msg) {
                    console.log(msg);
                    throw new Error('cancel delay Promise');
                };
                setTimeout(function () { return resolve(cancel); }, ms);
            }
            catch (err) {
                console.log('promise cancel');
                reject(err);
            }
        });
    };
    return {
        cancel: cancel,
        delay: delay,
    };
};
