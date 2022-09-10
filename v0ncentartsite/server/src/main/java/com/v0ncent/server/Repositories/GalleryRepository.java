/*
 * --------------------------------------------------------------------------
 *                   Server Application GalleryRepository Interface
 * This creates all methods to be interfaced for querying MONGODB
 * @author v0ncent
 * --------------------------------------------------------------------------
 */
package com.v0ncent.server.Repositories;
import com.v0ncent.server.POJOMODELS.Gallery;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface GalleryRepository extends MongoRepository<Gallery,Long> {
    long count();
}
