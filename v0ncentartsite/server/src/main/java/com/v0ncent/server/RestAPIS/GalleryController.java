/*
 * --------------------------------------------------------------------------
 *                   Server Application GalleryController Class
 * This class is responsible for hosting all /api gallery routes for db manipulation
 * @author v0ncent
 * --------------------------------------------------------------------------
 */
package com.v0ncent.server.RestAPIS;
//
import com.mongodb.lang.NonNull;
import com.v0ncent.server.MongoServices.GalleryTool;
import com.v0ncent.server.MongoServices.SequenceGeneratorService;
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
    @Autowired
    private SequenceGeneratorService service; //<-- i wish I could remove this warning on autowired :(
    //
    @GetMapping("/getAllGallery")
    Collection<Gallery> getAllGallery(){
        LOGGER.info("Received Request to send all data.");
        return galleryTool.getAll();
    }
    //
    @GetMapping("/getOneGallery/{id}")
    ResponseEntity<?> getOneGallery(@NonNull @PathVariable Long id){
        Optional<Gallery> galleryOptional = galleryTool.getOne(id);
        if(galleryOptional.isPresent()){
            LOGGER.info(String.format(
                    "Received Request to get one Gallery listing, Sending:" + "\n - id= %s \n - title= %s \n - imageURL= %5.12s... \n - datePosted= %s \n - description= %s \n"
                    ,galleryOptional.get().getId(),galleryOptional.get().getTitle(),galleryOptional.get().getImageURL(),galleryOptional.get().getDatePosted()
                    ,galleryOptional.get().getDescription()));
        } else {
            LOGGER.info("Received Request to send one document: Document does not exist.");
        }
        return galleryOptional.map(response -> ResponseEntity.ok().body(response))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }
    //
    @PostMapping("/createListingGallery")
    ResponseEntity<Gallery> createListingGallery(@Valid @RequestBody Gallery gallery) throws URISyntaxException {
        gallery.setId(service.getSequence(Gallery.SEQUENCE_NAME)); //this is basically to auto increment with mongoDB kinda absurd over engineering.
        LOGGER.info(String.format(
                "Received Request to create Gallery Listing of:" + "\n - id= %s \n - title= %s \n - imageURL= %5.12s... \n - datePosted= %s \n - description= %s \n"
                ,gallery.getId(),gallery.getTitle(),gallery.getImageURL(),gallery.getDatePosted(),gallery.getDescription())); // log received object fields into console
        Gallery result = galleryTool.createListing(gallery);
        return ResponseEntity.created(new URI("/api/createListingGallery" + result.getId())).body(result);
    }
    @PutMapping("/updateOneGallery/{id}")
    ResponseEntity<Gallery> updateOneGallery(@Valid @RequestBody Gallery gallery){
        LOGGER.info(String.format(
                "Received Request to update Gallery Listing %s to:" + "\n - id= %s \n - title= %s \n - imageURL= %5.12s... \n - datePosted= %s \n - description= %s \n"
                ,gallery.getId(),gallery.getId(),gallery.getTitle(),gallery.getImageURL(),gallery.getDatePosted(),gallery.getDescription()));
        Gallery result = galleryTool.updateOne(gallery);
        return ResponseEntity.ok().body(result);
    }
    @DeleteMapping("/deleteOneGallery/{id}")
    ResponseEntity<?> deleteOneGallery(@PathVariable Long id){
        galleryTool.deleteOne(id);
        LOGGER.info("Deleted one document with ID {}",id);
        return ResponseEntity.ok().build();
    }
}
