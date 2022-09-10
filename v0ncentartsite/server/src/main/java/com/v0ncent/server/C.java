/*
 * --------------------------------------------------------------------------
 *                   Server Application Constants Class
 * This class contains all constants needed throughout application
 * @author v0ncent
 * --------------------------------------------------------------------------
 */
package com.v0ncent.server;
public final class C {
    /**instance of exception manager object.*/
    public static final ExceptionManager EXCEPTION_MANAGER = new ExceptionManager();
    //Sequences Enum + getSeq method
    public enum Sequences {
        GALLERY_SEQUENCE
    }
    /**
     * Gets the sequence name based on instance of sequence enum.
     * @param sequences Instance of Sequences enum to get sequence name of.
     * @return Returns name of sequence as string based upon enum instance. Returns null if not in enum.
     * */
    public static String getSeq(Sequences sequences){
        switch (sequences){
            case GALLERY_SEQUENCE: return "gallery_sequence";
        }
        return null;
    }
}
