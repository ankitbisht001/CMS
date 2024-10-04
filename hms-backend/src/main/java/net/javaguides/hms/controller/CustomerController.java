package net.javaguides.hms.controller;

import lombok.AllArgsConstructor;
import net.javaguides.hms.dto.CustomerDto;
import net.javaguides.hms.service.CustomerService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@AllArgsConstructor
@RestController
@RequestMapping("/api/customers")
public class CustomerController {

    private CustomerService customerService;

    //build add employee rest api
    @PostMapping
    public ResponseEntity<CustomerDto> createCustomer(@RequestBody CustomerDto customerDto)
    {
    CustomerDto savedCustomer = customerService.createCustomer(customerDto);
    return new ResponseEntity<>(savedCustomer, HttpStatus.CREATED);
}
   //build get employee rest api
    @GetMapping("{id}")
    public ResponseEntity<CustomerDto> getCustomerById(@PathVariable("id") Long customerId)
    {
        CustomerDto customerDto= customerService.getCustomerById(customerId);
        return ResponseEntity.ok(customerDto);
    }

    //build get all Customers rest api
    @GetMapping
    public ResponseEntity<List<CustomerDto>> getAllCustomers(){
        List<CustomerDto> customers = customerService.getAllCustomers();
        return ResponseEntity.ok(customers);
    }

    //build update customer rest api
    @PutMapping("{id}")
    public ResponseEntity<CustomerDto> updateCustomer(@PathVariable("id") Long customerId,
                                                      @RequestBody CustomerDto updatedCustomer)
    { CustomerDto customerDto = customerService.updateCustomer(customerId, updatedCustomer);
        return ResponseEntity.ok(customerDto);
    }

    //build delete customer rest api
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteCustomer(@PathVariable("id") Long customerId)
    {
        customerService.deleteCustomer(customerId);
        return ResponseEntity.ok("customers deleted successfully");
    }
}
