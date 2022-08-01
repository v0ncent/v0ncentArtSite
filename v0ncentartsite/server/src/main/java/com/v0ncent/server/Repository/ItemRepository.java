package com.v0ncent.server.Repository;

import com.v0ncent.server.POJO.Gallery;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;

public interface ItemRepository extends MongoRepository<Gallery,String> {
    @Query("{name:'?0'")
    Gallery findByNameAndTitle(String name, String title);

    @Query(value="{id:'?0'}", fields = "{'name' : 1, 'title' : 1, 'imageURL' : 1, 'datePosted' : 1}")
    List<Gallery> findAll(String id);

    public long count();

}
