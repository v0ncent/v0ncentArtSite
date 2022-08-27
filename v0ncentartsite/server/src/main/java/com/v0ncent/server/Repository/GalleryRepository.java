/*
 * --------------------------------------------------------------------------
 *                   Server Application GalleryRepository Interface
 * This creates all methods to be interfaced for querying MONGODB
 * @author v0ncent
 * --------------------------------------------------------------------------
 */
package com.v0ncent.server.Repository;
import com.v0ncent.server.POJOMODELS.Gallery;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;
import java.util.List;
@Repository
public interface GalleryRepository extends MongoRepository<Gallery,Integer> {
    /**
     * Finds one document from gallery DB.
     * @param id id of document to be found in gallery DB.
     * */
    @Query("{_id:'?0'}")
    Gallery findOne(long id);
    //
    /**
     * finds all documents that contain value in field.
     * @param name name of field value to find all of.
     * */
    @Query(value="{name:'?0'}", fields = "{'id' : 1, 'title' : 1, 'imageURL' : 1, 'datePosted' : 1}")
    List<Gallery> findAll(String name);
    //
    long count();
}
