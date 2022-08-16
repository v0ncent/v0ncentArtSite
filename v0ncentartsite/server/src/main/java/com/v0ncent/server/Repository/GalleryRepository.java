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
public interface GalleryRepository extends MongoRepository<Gallery,String> {
    @Query("{_id:'?0'}")
    Gallery findOne(long id);
    //
    @Query(value="{id:'?0'}", fields = "{'name' : 1, 'title' : 1, 'imageURL' : 1, 'datePosted' : 1}")
    List<Gallery> findAll(long id);
    //
    long count();
}
