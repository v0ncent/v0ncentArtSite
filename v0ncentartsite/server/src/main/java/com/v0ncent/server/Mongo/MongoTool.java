/*
 * --------------------------------------------------------------------------
 *                   Server Application MongoTool Abstract Class
 * This class creates a model for essential methods that each class tool for each section of site will need
 * @author v0ncent
 * --------------------------------------------------------------------------
 */
package com.v0ncent.server.Mongo;
public abstract class MongoTool {
    public abstract void getAll();
    public abstract void createListing();
}
