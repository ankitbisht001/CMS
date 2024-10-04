package net.javaguides.hms.mapper;

import net.javaguides.hms.dto.CustomerDto;
import net.javaguides.hms.entity.Customer;

public class CustomerMapper {

    public static CustomerDto mapToCustomerDto(Customer customer)
    { return new CustomerDto(
            customer.getId(),
            customer.getName(),
            customer.getContact(),
            customer.getEmail(),
            customer.getOccupants(),
            customer.getArrivaldate(), customer.getArrivaltime(),
            customer.getDeparturedate(), customer.getDeparturetime(),
            customer.getBreakfast(), customer.getLunch(), customer.getDinner(),
            customer.getTotal()
           );

    }

    public static Customer mapToCustomer(CustomerDto customerDto)
    {  return new Customer(
            customerDto.getId(),
            customerDto.getName(),
            customerDto.getContact(),
            customerDto.getEmail(),
            customerDto.getOccupants(),
            customerDto.getArrivaldate(), customerDto.getArrivaltime(),
            customerDto.getDeparturedate(), customerDto.getDeparturetime(),
            customerDto.getBreakfast(), customerDto.getLunch(),customerDto.getDinner(),
            customerDto.getTotal()
           );

    }
}
