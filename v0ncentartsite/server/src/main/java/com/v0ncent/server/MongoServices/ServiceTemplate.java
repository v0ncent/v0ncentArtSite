package com.v0ncent.server.MongoServices;
import com.mongodb.lang.NonNull;
import com.v0ncent.server.POJOMODELS.Model;
import java.util.Collection;
import java.util.Optional;
public interface ServiceTemplate <T extends Model>{
    Collection<T> getAll();
    T createListing(@NonNull T obj);
    Optional<T>  getOne(@NonNull long id);
    T updateOne(T obj);
    void deleteOne(@NonNull long id);
}
