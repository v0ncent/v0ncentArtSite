/*
* --------------------------------------------------------------------------
*                   Server Application Main Class
* This class contains the main method which just runs the Spring application
* --------------------------------------------------------------------------
*/
package com.v0ncent.server;
//
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
@SpringBootApplication
public class ServerApplication {
    //
    private static final Logger LOGGER = LoggerFactory.getLogger(ServerApplication.class);
    private static void onReady(){ //method for logging when application is ready
        LOGGER.info("Application Started and Ready");
    }
    //
    public static void main(String[] args) {
        try{
            SpringApplication.run(ServerApplication.class, args);
            onReady();
        }catch (Exception e){
            C.EXCEPTION_MANAGER.handle(e,ServerApplication.class);
        }
    }
}
