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

    // For localhost use:
    // public static final String PROXYURL = "proxy.utbm.fr";
    // public static final int PROXYPORT = 3128;
    // public static final String DownloadablesPath = "Downloadables/";

    public static void main(String[] args) {
        SpringApplication.run(CarPartsPickerApplication.class, args);
    }

}