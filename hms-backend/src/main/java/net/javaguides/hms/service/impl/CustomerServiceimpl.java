package net.javaguides.hms.service.impl;

import lombok.AllArgsConstructor;
import net.javaguides.hms.dto.CustomerDto;
import net.javaguides.hms.entity.Customer;
import net.javaguides.hms.exception.ResourceNotFoundException;
import net.javaguides.hms.mapper.CustomerMapper;
import net.javaguides.hms.repository.CustomerRepository;
import net.javaguides.hms.service.CustomerService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class CustomerServiceimpl implements CustomerService {
    private CustomerRepository customerRepository;

    @Override
    public CustomerDto createCustomer(CustomerDto customerDto) {
        Customer customer= CustomerMapper.mapToCustomer(customerDto);
        Customer savedCustomer= customerRepository.save(customer);
        return CustomerMapper.mapToCustomerDto(savedCustomer);
    }

    @Override
    public CustomerDto getCustomerById(Long customerId) {
        Customer customer = customerRepository.findById(customerId)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Customer with the givern ID does not exist" + customerId));
        return CustomerMapper.mapToCustomerDto(customer);
    }

    @Override
    public List<CustomerDto> getAllCustomers() {
        List<Customer> customers= customerRepository.findAll();
        return customers.stream().map((customer) -> CustomerMapper.mapToCustomerDto(customer))
        .collect(Collectors.toList());
    }

    @Override
    public CustomerDto updateCustomer(Long customerId, CustomerDto updatedCustomer) {
       Customer customer = customerRepository.findById(customerId).orElseThrow(
                () -> new ResourceNotFoundException("Employee does not exist with given id:" + customerId)
        );
        customer.setName(updatedCustomer.getName());
        customer.setEmail(updatedCustomer.getEmail());
        customer.setArrivaldate(updatedCustomer.getArrivaldate());
        customer.setArrivaltime(updatedCustomer.getArrivaltime());
        customer.setDeparturedate(updatedCustomer.getDeparturedate());
        customer.setDeparturetime(updatedCustomer.getDeparturetime());
        customer.setBreakfast(updatedCustomer.getBreakfast());
        customer.setLunch(updatedCustomer.getLunch());
        customer.setDinner(updatedCustomer.getDinner());


        Customer updatedCustomerObj = customerRepository.save(customer);
        return CustomerMapper.mapToCustomerDto(updatedCustomerObj);
    }

    @Override
    public void deleteCustomer(Long customerId) {
        Customer customer = customerRepository.findById(customerId).orElseThrow(
                () -> new ResourceNotFoundException("Customer with the given ID does not exist" + customerId));

        customerRepository.deleteById(customerId);


    }

}
