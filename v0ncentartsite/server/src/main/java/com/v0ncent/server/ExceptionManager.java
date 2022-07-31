/*
 * --------------------------------------------------------------------------
 *                   Server Application ExceptionHandler Class
 * This handles all exceptions and Errors
 * @author v0ncent
 * --------------------------------------------------------------------------
 */
package com.v0ncent.server;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
public class ExceptionManager {
    private static final Logger LOGGER = LoggerFactory.getLogger(ExceptionManager.class);
    /**
     * Handles exceptions and logs them for specified class
     * @param e Exception to be handled
     * @param clazz Specified class to log exception for
     * */
    public void handle(Exception e, Class<?> clazz){ //handle exception method
        LOGGER.info(String.format("UH OH: there was an error @ %s\n%s",clazz.getName(),e));
        e.printStackTrace();
    }
}
