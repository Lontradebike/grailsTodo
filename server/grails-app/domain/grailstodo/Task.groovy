

package grailstodo
import grails.rest.Resource
@Resource(uri = '/Task')
class Task {
    String title
    boolean completed


    static constraints = {
    }
}
