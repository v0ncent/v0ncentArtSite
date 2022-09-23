/*
 * --------------------------------------------------------------------------
 *                   Server Application Gallery Class
 * This class is the POJO for the gallery page, here the Gallery record is created
 * Whenever an instance of this OBJ is created and if none have been submitted to mongo it will
 * create a new db of object name (because I messed up the names ;D)
 * @author v0ncent
 * --------------------------------------------------------------------------
 */
package com.v0ncent.server.POJOMODELS;
import com.v0ncent.server.C;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;
@Document("gallery")
public class Gallery extends Model { //DO NOT CONVERT THIS TO A RECORD IT WILL FUCK THE APP!!!!!
    @Id
    private long id;
    //
    String title,imageURL,description,datePosted;
    @Transient
    public static final String SEQUENCE_NAME= C.getSeq(C.Sequences.GALLERY_SEQUENCE); // to auto increment documents we need to define this documents specific sequence
    public Gallery(long id, String title, String imageURL, String datePosted,String description){
        super();
        this.id = id;
        this.title = title;
        this.imageURL = imageURL;
        this.datePosted = datePosted;
        this.description = description;
    }
    //getters for object
    public long getId(){
        return id;
    }
    public String getTitle(){
        return title;
    }
    public String getImageURL(){
        return imageURL;
    }
    public String getDatePosted(){
        return datePosted;
    }
    public String getDescription(){
        return description;
    }
    //setters for object
    public void setId(int id){
        this.id = id;
    }
    public void setTitle(String title) {
        this.title = title;
    }
    public void setImageURL(String imageURL){
        this.imageURL = imageURL;
    }
    public void setDatePosted(String datePosted){
        this.datePosted = datePosted;
    }
    public void setDescription(String description){
        this.description = description;
    }
}