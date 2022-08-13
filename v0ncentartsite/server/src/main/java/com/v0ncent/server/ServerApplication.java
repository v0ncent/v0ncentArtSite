/*
* --------------------------------------------------------------------------
*                   Server Application Main Class
* This class contains the main method which just runs the Spring application
* --------------------------------------------------------------------------
*/
package com.v0ncent.server;
//
import com.v0ncent.server.Mongo.GalleryTool;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
@SpringBootApplication
public class ServerApplication {
    @Autowired
    private GalleryTool galleryTool;
    //
    private static final Logger LOGGER = LoggerFactory.getLogger(ServerApplication.class);
    private static void onReady(){ //method for logging when application is ready
        LOGGER.info("Application Started and Ready");
    }
    @Autowired
    private void runTest(){
        this.galleryTool.createListing();
        this.galleryTool.getAll();
        this.galleryTool.getOne("JAVA SPRING TEST SUBMISSION","this is uploaded from spring app");
    }
    //
    public static void main(String[] args) {
        try{
            SpringApplication.run(ServerApplication.class, args);
            ServerApplication app = new ServerApplication();
            onReady();
            app.runTest();
        }catch (Exception e){
            C.EXCEPTION_MANAGER.handle(e,ServerApplication.class);
        }
    }
}
