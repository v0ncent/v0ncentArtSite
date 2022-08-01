/*
 * --------------------------------------------------------------------------
 *                   Server Application Gallery Class
 * This class is the POJO for the gallery page, here the Gallery record is created
 * @author v0ncent
 * --------------------------------------------------------------------------
 */
package com.v0ncent.server.POJO;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
@Document("gallery")
public class Gallery {
    @Id
    private final String id;
    //
    final String name;
    final String title;
    final String imageURL;
    final String datePosted;
    public Gallery(String id,String name, String title, String imageURL, String datePosted){
        super();
        this.id = id;
        this.name = name;
        this.title = title;
        this.imageURL = imageURL;
        this.datePosted = datePosted;
    }
}
