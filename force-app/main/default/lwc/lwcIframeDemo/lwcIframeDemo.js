import { LightningElement } from 'lwc';
/**
 * Use a custom label to enable a quick retrieval of the URL by name.c/external. If you wanted to store other data
 * (i.e. the dimensions of the iFrame, etc) then you could create a Custom Metadata Type and retrieve it using the 
 * wire service, but then you have to retrieve the MDT by Record Id, which will vary by environment. This could be
 * overcome by creating an Apex utility class to accept object, field, where-clause parameters and return JSON, or
 * you could get very hacky and put a JSON object in the Custom Label ;-)
 */ 
import lwcIframeURLLabel from '@salesforce/label/c.lwcIframeURL';
export default class LwcIframeDemo extends LightningElement {
    lwcIframeURL = lwcIframeURLLabel;
}