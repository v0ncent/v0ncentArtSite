/*
 * --------------------------------------------------------------------------
 *                   Server Application GalleryTool Class
 * This class is responsible for all posts and query to the gallery table.
 * @author v0ncent
 * --------------------------------------------------------------------------
 */
package com.v0ncent.server.MongoServices;
import com.v0ncent.server.POJOMODELS.Gallery;
import com.v0ncent.server.Repositories.GalleryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Service;
@Service
public class GalleryTool extends MongoQueries<Gallery>{
    @Autowired
    GalleryRepository galleryRepository;
    @Override
    MongoRepository<Gallery, Long> getRepository() {
        return galleryRepository;
    }
}
