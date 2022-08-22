/*
 * --------------------------------------------------------------------------
 *                   Server Application GalleryController Class
 * This class is responsible for hosting all /api gallery routes for db manipulation
 * @author v0ncent
 * --------------------------------------------------------------------------
 */
package com.v0ncent.server.Routes;
//
import com.mongodb.lang.NonNull;
import com.v0ncent.server.Mongo.GalleryTool;
import com.v0ncent.server.POJOMODELS.Gallery;
import jakarta.validation.Valid;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.Collection;
import java.util.Optional;
@RestController
@RequestMapping("/api")
public class GalleryController {
    private static final Logger LOGGER = LoggerFactory.getLogger(GalleryController.class);
    @Autowired //<--- field inject these nuts lmfao. No but for real I rly don't care for this warning, but it won't let me ignore it >:d
    private GalleryTool galleryTool;
    //
    @GetMapping("/getAllGallery")
    Collection<Gallery> getAllGallery(){
        return galleryTool.getAll();
    }
    //
    @GetMapping("/getOneGallery/{id}")
    ResponseEntity<?> getOneGallery(@NonNull @PathVariable Long id){
        Optional<Gallery> galleryOptional = galleryTool.getOne(id);
        return galleryOptional.map(response -> ResponseEntity.ok().body(response))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }
    //
    @PostMapping("/createListingGallery")
    ResponseEntity<Gallery> createListingGallery(@Valid @RequestBody Gallery gallery) throws URISyntaxException {
        LOGGER.info("Request to create new GALLERY Listing: {}",gallery);
        Gallery result = galleryTool.createListing(gallery);
        return ResponseEntity.created(new URI("/api/createListingGallery" + result.getId())).body(result);
    }
    @PutMapping("/updateOneGallery/{id}")
    ResponseEntity<Gallery> updateOneGallery(@Valid @RequestBody Gallery gallery){
        LOGGER.info("Request to update GALLERY Listing: {}",gallery);
        Gallery result = galleryTool.updateOne(gallery);
        return ResponseEntity.ok().body(result);
    }
    @DeleteMapping("/deleteOneGallery/{id}")
    ResponseEntity<?> deleteOneGallery(@PathVariable Long id){
        galleryTool.deleteOne(id);
        return ResponseEntity.ok().build();
    }
}
