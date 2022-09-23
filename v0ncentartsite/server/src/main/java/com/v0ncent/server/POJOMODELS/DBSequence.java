/*
 * --------------------------------------------------------------------------
 *                   Server Application DBSequence Class
 * Creates the table and document model of the DBSequence table which houses
 * the current ID number to set documents too.
 * (STUPIDLY OVERENGINEERED PROCESS BUT WILL TAKE IT OVER SQL ANY DAY)
 * @Author v0ncent
 * --------------------------------------------------------------------------
 */
package com.v0ncent.server.POJOMODELS;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
@Document("db_sequence")
@Data
@AllArgsConstructor
@NoArgsConstructor
public final class DBSequence {
    @Id
    private String id;
    private int seq; //sequence
    /**
     * getter for Sequence integer of object instance
     * @return returns the current sequence of object instance
     * */
    public int getSeq() {
        return seq;
    }
}