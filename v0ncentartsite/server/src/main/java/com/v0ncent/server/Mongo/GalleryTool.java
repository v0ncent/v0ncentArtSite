package com.v0ncent.server.Mongo;
import com.v0ncent.server.C;
import com.v0ncent.server.POJO.Gallery;
import com.v0ncent.server.Repository.GalleryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
@Service
public class GalleryTool extends MongoTool{
    @Autowired
    private GalleryRepository galleryRepository;
    @Autowired
    @Override
    public void getAll() {
        try {
            System.out.println("Getting all....");
            galleryRepository.findAll()
                    .forEach(
                            GalleryTool::getGalleryDetails
                    );
        } catch (Exception e){
            C.EXCEPTION_MANAGER.handle(e,GalleryTool.class);
        }
    }
    @Autowired
    @Override
    public void createListing() {
        try{
            galleryRepository.save(
                    new Gallery(
                            "3",
                            "Test from tool class",
                            "im from a tool class!",
                            "penis.org",
                            "today"
                    )
            );
            galleryRepository.save(
                    new Gallery(
                            "4",
                            "Test from tool class DOS",
                            "im from a tool class! DOS",
                            "YEAAAAAAAAAAAAAAAAA",
                            "today"
                    )
            );
        }catch (Exception e){
            C.EXCEPTION_MANAGER.handle(e,GalleryTool.class);
        }
    }
    public void getOne(String name, String title) {
        System.out.println("Getting one.....");
        try {
            Gallery item = galleryRepository.findByNameAndTitle(name,title);
            getGalleryDetails(item);
        }catch (Exception e){
            C.EXCEPTION_MANAGER.handle(e,GalleryTool.class);
        }
    }
    public static void getGalleryDetails(Gallery item){
        System.out.printf(
                " Id: -%s-\n Name: -%s-\n Title: -%s-\n ImageURL: -%s-\n DatePosted: -%s-\n",
                item.getId(),item.getName(),item.getTitle(),item.getImageURL(),item.getDatePosted()
        );
    }
}
