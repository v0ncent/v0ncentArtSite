/*
 * --------------------------------------------------------------------------
 *                   Server Application SequenceGeneratorService Class
 * Houses service for pulling from sequence table and +1ing the current
 * sequence number.
 * @Author v0ncent
 * --------------------------------------------------------------------------
 */
package com.v0ncent.server.Mongo;
import com.v0ncent.server.POJOMODELS.DBSequence;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;
import org.springframework.data.mongodb.core.query.Query;
import java.util.Objects;
import static org.springframework.data.mongodb.core.FindAndModifyOptions.options;
@Service
public class SequenceGeneratorService {
    private final MongoOperations mongoOperations; //<-- THIS IS THROWING AN ERROR BUT WORKS COMPLETELY FINE SO PLEASE IGNORE IT
    public SequenceGeneratorService(MongoOperations mongoOperations){
        this.mongoOperations = mongoOperations;
    }
    /**
     * Gets the current sequence number for given sequence name.
     * @param sequenceName name of table sequence to get sequence of (number of documents basically)
     * @return returns the sequence number increased by one for auto incrementing purposes
     * */
    public int getSequence(String sequenceName){
        //get sequence number
        Query query = new Query(Criteria.where("id").is(sequenceName));
        //update sequence number
        Update update = new Update().inc("seq",1);
        //modify in document
        DBSequence counter = mongoOperations
                .findAndModify(query, update,
                        options().returnNew(true).upsert(true),
                        DBSequence.class);
        // ! and ? is basically if then statement, if object isn't null increase counter by 1
        return !Objects.isNull(counter) ? counter.getSeq() : 1;
    }
}
