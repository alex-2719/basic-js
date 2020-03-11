class VigenereCipheringMachine {
    constructor(isDirect = true){
        this.isDirect = isDirect;
        this.regEx = /[a-z]/i;
        this.countLet = 26;
        this.beginCharCode = 65;
    }

    validateParams(message, key){
        if (!(message || key)) {
            throw new Error();
        }
    }

    encrypt(message, key) {
        this.validateParams(message, key);
       return this.cryptoFunction (message, key, 'crypt');
    }

    decrypt(cryptMessage, key) {
        this.validateParams(cryptMessage, key);
        return  this.cryptoFunction (cryptMessage, key, 'decrypt');
    }

    cryptoFunction (message, key, operation = 'crypt'){
        message =message.toUpperCase();
        key = key.toUpperCase();
        let result = "";

        for (let i=0,j=0; i < message.length; i++ ){
            let chr = "";
            let miPos,kiPos = "";
            if (this.regEx.test(message[i])){

                miPos = message[i >= (key.length) ? i % (message.length) : i].codePointAt(0) - this.beginCharCode;
                kiPos = key[j >= (key.length) ? j % (key.length) : j].codePointAt(0) - this.beginCharCode;

                kiPos = (typeof operation !== 'undefined' && operation === "decrypt" ) ? (-kiPos) : kiPos;
                chr = String.fromCodePoint((this.beginCharCode + ( (this.countLet + (miPos + kiPos) ) % this.countLet) ));
                result += chr;
                j++;
            }else {
                result += "" + message[i];
            }
        }
        return this.isDirect ? result : result.split('').reverse().join('');
    }
}

module.exports = VigenereCipheringMachine;
