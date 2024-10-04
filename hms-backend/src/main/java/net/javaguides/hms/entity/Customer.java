package net.javaguides.hms.entity;
import java.time.LocalDate;
import java.time.LocalTime;
import jakarta.persistence.*;
import jakarta.persistence.Table;
import jakarta.persistence.criteria.CriteriaBuilder;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="customers")

public class Customer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="name", nullable=false)
    private String name;

    @Column(name="contactNo", nullable=false, unique = true)
    private String contact;

    @Column(name="email", unique=true)
    private String email;

    @Column(name ="occupants", nullable=false)
    private Integer occupants;

    @Column(name ="arrivalDate", nullable=false)
    private LocalDate arrivaldate;

    @Column(name="arrivalTime", nullable=false)
    private LocalTime arrivaltime;

    @Column(name ="departureDate", nullable=false)
    private LocalDate departuredate;

    @Column(name="departureTime", nullable=false)
    private LocalTime departuretime;

    @Column(name="breakfast")
    private Integer breakfast;

    @Column(name="lunch")
    private Integer lunch;

    @Column(name="dinner")
    private Integer dinner;

    @Column(name="total")
    private Integer total;
}