import {EntityCrudRepository} from '../../lib/persistence';
import {Customer} from '../models/customer';

/**
 * Controller for Customer
 */
// @controller
export class CustomerController1 {
  // Use property dependency injection
  // @repository(Customer, 'mongodbDataSource')
  private repository: EntityCrudRepository<Customer, string>;
}