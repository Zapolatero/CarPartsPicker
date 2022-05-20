package com.MO54.carPartsPicker.controller;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import com.MO54.carPartsPicker.model.CarPart;
import com.MO54.carPartsPicker.model.MainCategory;
import com.MO54.carPartsPicker.model.SubCategory;
import com.MO54.carPartsPicker.repository.SubCategoryRepository;
import com.MO54.carPartsPicker.services.CarPartService;
import com.MO54.carPartsPicker.services.MainCategoryServiceImplementation;
import com.MO54.carPartsPicker.services.MainCategoryService;
import com.MO54.carPartsPicker.services.SubCategoryServiceImplementation;
import com.MO54.carPartsPicker.services.SubCategoryService;

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
    private CarPartService carPartService;
    @Autowired
    private MainCategoryServiceImplementation mainCategoryService;
    @Autowired
    private SubCategoryServiceImplementation subCategoryService;

    @RequestMapping(value = "/index", method = RequestMethod.GET)
    public ModelAndView List() {
        ModelAndView model = new ModelAndView("index");
        model.addObject("mainCategoriesList", mainCategoryService.getAllMainCategories());
        return model;
    }

}
