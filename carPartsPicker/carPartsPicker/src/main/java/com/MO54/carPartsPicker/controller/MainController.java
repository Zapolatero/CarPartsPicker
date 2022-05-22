package com.MO54.carPartsPicker.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
import java.util.stream.Collectors;

import com.MO54.carPartsPicker.model.CarPart;
import com.MO54.carPartsPicker.model.Category;
import com.MO54.carPartsPicker.services.CarPartService;
import com.MO54.carPartsPicker.services.CarPartServiceImplementation;
import com.MO54.carPartsPicker.services.CategoryServiceImplementation;
import com.MO54.carPartsPicker.services.MainCategoryServiceImplementation;
import com.MO54.carPartsPicker.services.SubCategoryServiceImplementation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;
import java.util.List;

@Controller
@CrossOrigin
public class MainController {

    @Autowired
    private CarPartServiceImplementation carPartService;
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
        model.addObject("nonEmptyCategoriesList", categoryService.getAllCategories().stream()
                .filter(category -> category.getCarParts().size() > 0).collect(Collectors.toList()));
        return model;
    }

    @RequestMapping(value = "/carPartsList", method = RequestMethod.GET)
    public ModelAndView listCarPartsByCategory(@RequestParam(required = true) Integer categoryId,
            @RequestParam(required = false) String searchQuery) {

        ModelAndView model = new ModelAndView("productsList");
        Category requestedCategory = categoryService.getCategoryById(categoryId);

        model.addObject("categoryName", requestedCategory.getName());

        if (searchQuery == null) {
            model.addObject("carPartsList", requestedCategory.getCarParts());
        } else {
            model.addObject("carPartsList", requestedCategory.getCarParts().stream()
                    .filter(carPart -> carPart.getName().toLowerCase().contains(searchQuery.toLowerCase()))
                    .collect(Collectors.toList()));
            model.addObject("searchQuery", searchQuery);
        }

        model.addObject("mainCategoriesList", mainCategoryService.getAllMainCategories());

        return model;
    }

    @RequestMapping(value = "/carPart", method = RequestMethod.GET)
    public ModelAndView displayCarPartById(@RequestParam(required = true) Integer carPartId) {
        ModelAndView model = new ModelAndView("carPart");
        CarPart requestedCarPart = carPartService.getCarPartById(carPartId);
        model.addObject("carPart", requestedCarPart);
        return model;
    }

    // A Utiliser pour récupérer un tableau json contenant les pieces dans le
    // panier
    // pour l'utiliser : faire une req ajax get en passant l'argument
    // concatenatedIds qui contient les ids séparés par des ; Ex: 1;2;3;4
    @RequestMapping(value = "/getBasketItems", method = RequestMethod.GET)
    public @ResponseBody List<CarPart> getBasketItems(@RequestParam(required = true) String concatenatedIds) {
        List<CarPart> basketItems = new ArrayList<>();

        for (String id : concatenatedIds.split(";")) {
            basketItems.add(carPartService.getCarPartById(Integer.parseInt(id)));
        }

        return basketItems;
    }

}
