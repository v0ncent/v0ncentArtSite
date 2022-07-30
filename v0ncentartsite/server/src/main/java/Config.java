/*
* ------------------------------
*     Server Config Class
* ------------------------------
* This class is responsible for loading .env config file
* and pulling information stored within it.
*/
import io.github.cdimascio.dotenv.Dotenv;
public final class Config {
    private static final Dotenv dotenv = Dotenv.load(); //load config.env
    /**
     * Pulls content from .env based on given key
     * @param key .env field to be gotten
     * @return returns .env content based on key
     * */
    public static String get(String key){ //get contents of env method
        return dotenv.get(key);
    }
}
