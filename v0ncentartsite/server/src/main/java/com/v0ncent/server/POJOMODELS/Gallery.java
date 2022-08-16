/*
 * --------------------------------------------------------------------------
 *                   Server Application Gallery Class
 * This class is the POJO for the gallery page, here the Gallery record is created
 * Whenever an instance of this OBJ is created and none have been submitted to mongo it will
 * create a new db of object name
 * @author v0ncent
 * --------------------------------------------------------------------------
 */
package com.v0ncent.server.POJOMODELS;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
@Document("gallery")
public class Gallery { //DO NOT CONVERT THIS TO A RECORD IT WILL FUCK THE APP!!!!!
    @Id
    private final long id;
    //
    final String name,title,imageURL,datePosted;
    public Gallery(long id,String name, String title, String imageURL, String datePosted){
        super();
        this.id = id;
        this.name = name;
        this.title = title;
        this.imageURL = imageURL;
        this.datePosted = datePosted;
    }
    //getters for object
    public long getId(){
        return id;
    }
    public String getName() {
        return name;
    }
    public String getDatePosted() {
        return datePosted;
    }
    public String getImageURL() {
        return imageURL;
    }
    public String getTitle() {
        return title;
    }
}
