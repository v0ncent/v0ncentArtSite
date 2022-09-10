/*
 * --------------------------------------------------------------------------
 *                   Server Application GalleryTool Class
 * This class is responsible for all posts and query to the gallery table.
 * @author v0ncent
 * --------------------------------------------------------------------------
 */
package com.v0ncent.server.MongoServices;
import com.mongodb.lang.NonNull;
import com.v0ncent.server.C;
import com.v0ncent.server.POJOMODELS.Gallery;
import com.v0ncent.server.Repositories.GalleryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.Collection;
import java.util.Optional;
@Service
public class GalleryTool{
    @Autowired
    private GalleryRepository galleryRepository; //autowire repository, it malds at field injection, but it works completely fine so ignore.
    /**
     * Method for querying all documents in gallery DB.
     * @return returns all documents in the Gallery as a collection. If error returns null.
     * @see GalleryRepository
     * */
    public Collection<Gallery> getAll() {
        try {
            return this.galleryRepository.findAll();
        } catch (Exception e){
            C.EXCEPTION_MANAGER.handle(e,GalleryTool.class);
        }
        return null;
    }
    /**
     * Saves listing to gallery DB.
     * @param gallery Object to be saved to gallery database. {cannot be null!}
     * @return returns the saved gallery object from request body. If error returns null.
     * */
    public Gallery createListing(@NonNull Gallery gallery) {
        try{
            this.galleryRepository.save(gallery);
            return gallery;
        }catch (Exception e){
            C.EXCEPTION_MANAGER.handle(e,GalleryTool.class);
        }
        return null;
    }
    /**
     * Queries one document from gallery DB. {cannot be null!}
     * @param id id of document to query.
     * @return returns an optional of a Gallery Object if it is listed in gallery DB.
     * */
    public Optional<Gallery> getOne(@NonNull long id) {
        try {
            return galleryRepository.findById(id);
        }catch (Exception e){
            C.EXCEPTION_MANAGER.handle(e,GalleryTool.class);
        }
        return Optional.empty();
    }
    /**
     * Updates one listing in gallery DB. {cannot be null!}
     * @param gallery Gallery object to be updated within gallery DB.
     * @return returns the updated Gallery Object. Returns null if error.
     * */
    public Gallery updateOne(@NonNull Gallery gallery){
        try{
            galleryRepository.save(
                    gallery
            );
            return gallery;
        }catch (Exception e){
            C.EXCEPTION_MANAGER.handle(e,GalleryTool.class);
        }
        return null;
    }
    /**
     * Deletes one listing from gallery DB.
     * @param id id of document to be deleted from gallery DB.
     * */
    public void deleteOne(@NonNull long id){
        galleryRepository.deleteById(id);
    }
}
