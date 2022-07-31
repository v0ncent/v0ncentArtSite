/*
 * --------------------------------------------------------------------------
 *                   Server Application Config Class
 * This class loads all information from .env config file
 * @author v0ncent
 * --------------------------------------------------------------------------
 */
package com.v0ncent.server;
import io.github.cdimascio.dotenv.Dotenv;
import java.util.Locale;
public final class Config {
    private static final Dotenv dotenv = Dotenv.load(); //load .env
    /**
     * Gets specified field from .env config file
     * @param key .env field to be loaded
     * @return returns .env field content as String
     * */
    public static String get(String key){
        return dotenv.get(key.toUpperCase(Locale.ROOT));
    }
}
