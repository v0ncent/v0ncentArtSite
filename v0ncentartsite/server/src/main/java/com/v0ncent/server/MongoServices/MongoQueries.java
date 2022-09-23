/*
 * --------------------------------------------------------------------------
 *                   Server Application MongoQueries Abstract Parent Class
 * This class is responsible for all posts and query to any table in the MongoDB
 * @author v0ncent
 * --------------------------------------------------------------------------
 */
package com.v0ncent.server.MongoServices;
import com.mongodb.lang.NonNull;
import com.v0ncent.server.C;
import com.v0ncent.server.POJOMODELS.Model;
import com.v0ncent.server.Repositories.GalleryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.Collection;
import java.util.Optional;
public abstract class MongoQueries <T extends Model>{
    @Autowired
    abstract MongoRepository<T,Long> getRepository();
    /**
     * Method for querying all documents in Object's table in DB.
     * @return returns all documents in the Object's table as a collection. If error returns null.
     * @see GalleryRepository
     * */
    public Collection<T> getAll() {
        try {
            return this.getRepository().findAll();
        } catch (Exception e){
            C.EXCEPTION_MANAGER.handle(e,this.getClass());
        }
        return null;
    }
    /**
     * Saves listing to Object's table in DB.
     * @param obj Object to be saved to specified object's table in database. {cannot be null!}
     * @return returns the saved gallery object from request body. If error returns null.
     * */
    public T createListing(@NonNull T obj) {
        try{
            this.getRepository().save(obj);
            return obj;
        }catch (Exception e){
            C.EXCEPTION_MANAGER.handle(e,this.getClass());
        }
        return null;
    }
    /**
     * Queries one document from Object's table in DB. {cannot be null!}
     * @param id id of document to query.
     * @return returns an optional of the Object if it is listed in Object's table in DB.
     * */
    public Optional<T> getOne(@NonNull long id) {
        try {
            return getRepository().findById(id);
        }catch (Exception e){
            C.EXCEPTION_MANAGER.handle(e,GalleryTool.class);
        }
        return Optional.empty();
    }
    /**
     * Updates one listing in Object's table in DB. {cannot be null!}
     * @param obj object to be updated within object's table in DB.
     * @return returns the updated Object. Returns null if error.
     * */
    public T updateOne(@NonNull T obj){
        try{
            getRepository().save(
                    obj
            );
            return obj;
        }catch (Exception e){
            C.EXCEPTION_MANAGER.handle(e,GalleryTool.class);
        }
        return null;
    }
    /**
     * Deletes one listing from object's table in  DB.
     * @param id id of document to be deleted from object's table in DB.
     * */
    public void deleteOne(@NonNull long id){
        getRepository().deleteById(id);
    }
}
