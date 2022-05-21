package com.MO54.carPartsPicker.controller;

import com.MO54.carPartsPicker.model.CarPart;
import com.MO54.carPartsPicker.model.Category;
import com.MO54.carPartsPicker.services.CarPartService;
import com.MO54.carPartsPicker.services.CategoryServiceImplementation;
import com.MO54.carPartsPicker.services.MainCategoryServiceImplementation;
import com.MO54.carPartsPicker.services.SubCategoryServiceImplementation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

@Controller
@CrossOrigin
public class MainController {

    @Autowired
    private CarPartService carPartService;
    @Autowired
    private CategoryServiceImplementation categoryService;
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

    @RequestMapping(value = "/carPartsList", method = RequestMethod.GET)
    public ModelAndView listCarPartsByCategory(@RequestParam(required = true) Integer categoryId) {
        ModelAndView model = new ModelAndView("productsList");
        Category requestedCategory = categoryService.getCategoryById(categoryId);
        model.addObject("categoryName", requestedCategory.getName());
        model.addObject("carPartsList", requestedCategory.getCarParts());
        return model;
    }

    @RequestMapping(value = "/carPart", method = RequestMethod.GET)
    public ModelAndView displayCarPartById(@RequestParam(required = true) Integer carPartId) {
        ModelAndView model = new ModelAndView("carPart");
        CarPart requestedCarPart = carPartService.getCarPartById(carPartId);
        model.addObject("carPart", requestedCarPart);
        return model;
    }

}
