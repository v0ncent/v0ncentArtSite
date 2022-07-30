import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
/*
* */
public class Main{
    private static final Logger LOGGER = LoggerFactory.getLogger(Main.class);
    static void onReady(){
        LOGGER.info("Test!");
    }
    public static void main(String[] args){
        onReady();
        System.out.println("Hello Cunts!");
    }
}
