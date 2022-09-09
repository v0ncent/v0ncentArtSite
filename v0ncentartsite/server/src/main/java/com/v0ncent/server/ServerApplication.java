/*
MIT License

Copyright (c) 2022 Vincent Banks

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/
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
    public static void main(String[] args) {
        try{
            SpringApplication.run(ServerApplication.class, args);
            onReady();
        }catch (Exception e){
            C.EXCEPTION_MANAGER.handle(e,ServerApplication.class);
        }
    }
}
