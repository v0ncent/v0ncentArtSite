/*
 * --------------------------------------------------------------------------
 *                   Server Application GalleryTool SubClass
 * This class is responsible for all posts and query to the gallery db
 * @author v0ncent
 * --------------------------------------------------------------------------
 */
package com.v0ncent.server.Mongo;
import com.mongodb.lang.NonNull;
import com.v0ncent.server.C;
import com.v0ncent.server.POJOMODELS.Gallery;
import com.v0ncent.server.Repository.GalleryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.Collection;
import java.util.Optional;
@Service
public class GalleryTool{
    //TODO: ADD UPDATE AND DELETE TO THIS TOOL
    @Autowired
    private GalleryRepository galleryRepository;
    //
    public Collection<Gallery> getAll() {
        try {
            return this.galleryRepository.findAll();
        } catch (Exception e){
            C.EXCEPTION_MANAGER.handle(e,GalleryTool.class);
        }
        return null;
    }
    //
    public Gallery createListing(@NonNull long id,
                                 @NonNull String name,
                                 @NonNull String title,
                                 @NonNull String imageURL,
                                 @NonNull String datePosted) {
        try{
            this.galleryRepository.save(
                    new Gallery(
                            id,
                            name,
                            title,   //this makes a nice pyramid
                            imageURL,
                            datePosted));
            return new Gallery(
                    id,
                    name,
                    title,   //this makes a nice pyramid x2
                    imageURL,
                    datePosted);
        }catch (Exception e){
            C.EXCEPTION_MANAGER.handle(e,GalleryTool.class);
        }
        return null;
    }
    public Optional<Gallery> getOne(@NonNull long id) {
        try {
            return Optional.ofNullable(galleryRepository.findOne(id));
        }catch (Exception e){
            C.EXCEPTION_MANAGER.handle(e,GalleryTool.class);
        }
        return Optional.empty();
    }
}
