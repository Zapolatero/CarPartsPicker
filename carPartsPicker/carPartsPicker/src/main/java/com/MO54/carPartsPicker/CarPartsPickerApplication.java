package com.MO54.carPartsPicker;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.aspectj.EnableSpringConfigured;

@SpringBootApplication
@Configuration
@EnableSpringConfigured
public class CarPartsPickerApplication extends SpringBootServletInitializer {

    public static void main(String[] args) {
        SpringApplication.run(CarPartsPickerApplication.class, args);
    }

}