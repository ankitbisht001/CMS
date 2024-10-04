package net.javaguides.hms.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;
import java.time.LocalTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class CustomerDto {
  private Long id;
  private String name;
  private String contact;
  private String email;
  private Integer occupants;
  private LocalDate arrivaldate;
  private LocalTime arrivaltime;
  private LocalDate departuredate;
  private LocalTime departuretime;
  private Integer breakfast;
  private Integer lunch;
  private Integer dinner;
  private Integer total;

}
