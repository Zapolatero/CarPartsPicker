package com.MO54.carPartsPicker.controller;

import java.util.List;

import com.MO54.carPartsPicker.model.CarPart;
import com.MO54.carPartsPicker.services.CarPartService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

@Controller
@CrossOrigin
public class MainController {

    @Autowired
    CarPartService carPartService;

    @RequestMapping(value = "/index", method = RequestMethod.GET)
    public ModelAndView List() {
        ModelAndView model = new ModelAndView("index");
        List<CarPart> cartPartsList = carPartService.getAllCarParts();
        model.addObject("carPartsLists", cartPartsList);

        return model;
    }

}
