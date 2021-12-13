/**
 * Encryption password.
 * 
 * `IEncryptionPassword` is a type of interface who represents encryption password used by 
 * the {@link Fetcher} with AES-128/256 algorithm. If your encryption password is not fixed 
 * but changes according to the input content, you can utilize the 
 * {@link IEncryptionPassword.Closure} function type.
 * 
 * @author Jeongho Nam - https://github.com/samchon
 */
export interface IEncryptionPassword
{
    /**
     * Secret key.
     */
    key: string;

    /**
     * Initialization vector.
     */
    iv: string;
}
export namespace IEncryptionPassword
{
    /**
     * Type of a closure function returning the {@link IEncryptionPassword} object.
     * 
     * `IEncryptionPassword.Closure` is a type of closure function who are returning the
     * {@link IEncryptionPassword} object. It would be used when your encryption password
     * be changed according to the input content.
     */
    export interface Closure
    {
        /**
         * Encryption password getter.
         * 
         * @param content Text content to be encrypted or decrypted
         * @param encoded Be encoded or to be decoded
         * @returns Encryption password
         */
        (content: string, encoded: boolean): IEncryptionPassword;
    }
}