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
    /**
     * Handles exceptions and logs them for specified class
     * @param e Exception to be handled
     * @param clazz Specified class to log exception for
     * */
    public void handle(Exception e, Class<?> clazz){ //handle exception method
        final Logger logger = LoggerFactory.getLogger(clazz);
        logger.info(String.format("UH OH: there was an error @ %s\n%s",clazz.getName(),e));
        e.printStackTrace();
    }
}
